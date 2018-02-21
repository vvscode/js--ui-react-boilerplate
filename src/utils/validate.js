export const createValidator = definitions => {
  const keys = Object.keys(definitions);

  return values =>
    keys.reduce((hash, key) => {
      hash[key] = definitions[key](values[key]);

      return hash;
    }, {});
};
