'use strict';

const Generator = require('yeoman-generator');
const fs = require('fs');

const cfg = {
  generatorsPath: 'generators',
  componentsPath: 'src/components',
};

const validateComponentPath = val =>
  /^([A-Z][^/]*(\/|$))+$/.test(val)
    ? true
    : 'Component name or path should be in camel case (ex. SomeComponent or Table/Cell).';

const validateGeneratorName = val => {
  const isValid = /^([A-Za-z\-\d])+$/.test(val);

  const isExist = cfg.availableGenerators.includes(val);

  if (!isValid) {
    return 'Generator name may only include letters, numbers and "-".';
  } else if (!isExist) {
    return 'Generator is not exist.';
  }

  return true;
};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('generatorNameArg', { type: String, required: false });
    this.argument('componentPathArg', { type: String, required: false });
    this.argument('data', { type: Object, required: false });

    const generatorsAbsPath = `${process.cwd()}/${cfg.generatorsPath}`;

    cfg.availableGenerators = fs
      .readdirSync(generatorsAbsPath)
      .filter(name => !name.includes('.'));
  }

  validateArgs() {
    const { generatorNameArg, componentPathArg } = this.options;

    const isValidGeneratorName = this._runValidator(
      validateGeneratorName,
      generatorNameArg,
    );

    const isValidComponentPath = this._runValidator(
      validateComponentPath,
      componentPathArg,
    );

    if (isValidGeneratorName && isValidComponentPath) {
      this._prompting();
    }
  }

  _runValidator(validator, value) {
    const validatorResult = validator(value);

    if (value && typeof validatorResult === 'string') {
      this.log(validatorResult);

      return false;
    }

    return true;
  }

  _prompting() {
    const { generatorNameArg, componentPathArg } = this.options;
    const prompts = [];

    if (!generatorNameArg) {
      prompts.push({
        type: 'list',
        name: 'generatorName',
        message: 'Select generator:',
        choices: cfg.availableGenerators,
        validate(input) {
          return /^([A-Za-z\-\d])+$/.test(input)
            ? true
            : 'Generator name may only include letters, numbers and "-".';
        },
      });
    }

    if (!componentPathArg) {
      prompts.push({
        type: 'input',
        name: 'componentPath',
        message: 'Input component name (ex. SomeComponent or Table/Cell):',
        validate: validateComponentPath,
      });
    }

    return this.prompt(prompts).then(this._copyFiles.bind(this));
  }

  _copyFiles(answers) {
    const { generatorsPath, componentsPath } = cfg;
    const { generatorNameArg, componentPathArg, data } = this.options;
    const generatorName = generatorNameArg || answers.generatorName;
    const componentPath = componentPathArg || answers.componentPath;

    const generatorPath = `${generatorsPath}/${generatorName}`;
    const generatorAbsPath = `${process.cwd()}/${generatorPath}`;

    this.sourceRoot(generatorPath);

    const filesList = fs
      .readdirSync(generatorAbsPath)
      .filter(name => name.includes('.'));

    filesList.forEach(fileName => {
      const resultFileName = fileName.replace('.ejs', '');

      this.fs.copyTpl(
        this.templatePath(fileName),
        this.destinationPath(
          `${componentsPath}/${componentPath}/${resultFileName}`,
        ),
        {
          componentName: componentPath.split('/').pop(),
          ...JSON.parse(data),
        },
      );
    });
  }
};
