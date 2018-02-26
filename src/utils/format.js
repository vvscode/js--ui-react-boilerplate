export const isValidCardNumber = value =>
  /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(value);

export const isValidExpirationDate = value =>
  /^((0[1-9])|(1[0-2]))\/(\d{2})$/.test(value);

export const isValidCVV = value => /^\d{3}$/.test(value);

export const isValidUsername = value => /^\d{3}$/.test(value);

export const isValidEmail = value => /(.+)@(.+){2,}\.(.+){2,}/.test(value);
