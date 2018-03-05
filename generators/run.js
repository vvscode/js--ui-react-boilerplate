'use strict';

const Generator = require('yeoman-generator');

const cfg = {
  generatorsPath: 'generators',
  componentsPath: 'src/components',
  availableGenerators: ['component-functional', 'component-class'],
};

const getComponentName = path => {
  const names = path.split('/');

  return names.length > 1 ? names.pop() : path;
};

const validateComponentPath = val =>
  /^([A-Za-z/\d])+$/.test(val)
    ? true
    : 'Component name or path with name may only include letters, numbers and "/".';

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
  }
  validateArgs() {
    const { generatorNameArg, componentPathArg } = this.options;

    const isValidGeneratorName = generatorNameArg
      ? this._runValidator(validateGeneratorName, generatorNameArg)
      : true;

    const isValidComponentPath = componentPathArg
      ? this._runValidator(validateComponentPath, componentPathArg)
      : true;

    if (isValidGeneratorName && isValidComponentPath) {
      this._prompting();
    }
  }
  _runValidator(validator, value) {
    const validatorResult = validator(value);

    if (typeof validator(value) === 'string') {
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
    const { generatorNameArg, componentPathArg } = this.options;
    const generatorName = generatorNameArg || answers.generatorName;
    const componentPath = componentPathArg || answers.componentPath;

    this.sourceRoot(`${generatorsPath}/${generatorName}`);

    this.fs.copyTpl(
      this.templatePath('index.ejs'),
      this.destinationPath(`${componentsPath}/${componentPath}/index.js`),
      { componentName: getComponentName(componentPath) },
    );
  }
};
