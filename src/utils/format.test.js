import {
  isValidCardNumber,
  isValidExpirationDate,
  isValidCVV,
  isValidEmail,
} from './format';

describe('isValidCardNumber', () => {
  test('should has the length of 15', () => {
    expect(isValidCardNumber('1234 5678 9012 3456')).toBeTruthy();
    expect(isValidCardNumber('1234 5678 90123 4567')).toBeFalsy();
  });

  test('should contain only numbers separated by spaces', () => {
    expect(isValidCardNumber('0000 1111 2222 3333')).toBeTruthy();
    expect(isValidCardNumber('1234 aaaa 9012 3456')).toBeFalsy();
  });
});

describe('isValidExpirationDate', () => {
  test('should be four digits separated with a slash', () => {
    expect(isValidExpirationDate('01/01')).toBeTruthy();
    expect(isValidExpirationDate('1/01')).toBeFalsy();
    expect(isValidExpirationDate('1/1')).toBeFalsy();
    expect(isValidExpirationDate('12/2018')).toBeFalsy();
  });

  test('first two digits should represent a month', () => {
    expect(isValidExpirationDate('13/12')).toBeFalsy();
    expect(isValidExpirationDate('01/12')).toBeTruthy();
    expect(isValidExpirationDate('09/12')).toBeTruthy();
    expect(isValidExpirationDate('10/12')).toBeTruthy();
    expect(isValidExpirationDate('12/12')).toBeTruthy();
    expect(isValidExpirationDate('13/12')).toBeFalsy();
  });

  test('second two digits should represent a year', () => {
    expect(isValidExpirationDate('10/12')).toBeTruthy();
    expect(isValidExpirationDate('10/123')).toBeFalsy();
    expect(isValidExpirationDate('10/1999')).toBeFalsy();
  });
});

describe('isValidCVV', () => {
  test('should be three digits separated with a slash', () => {
    expect(isValidCVV('111')).toBeTruthy();
    expect(isValidCVV('11a')).toBeFalsy();
    expect(isValidCVV('1111')).toBeFalsy();
    expect(isValidCVV('11')).toBeFalsy();
    expect(isValidCVV('aaa')).toBeFalsy();
  });
});

describe('isValidEmail', () => {
  test('should be an email', () => {
    expect(isValidEmail('n@at.com')).toBeTruthy();
    expect(isValidEmail('nui@at.co')).toBeTruthy();
    expect(isValidEmail('nnnn@gmail.com')).toBeTruthy();
    expect(isValidEmail('nnnn@gmail')).toBeFalsy();
    expect(isValidEmail('nnnn@')).toBeFalsy();
    expect(isValidEmail('@gmail')).toBeFalsy();
  });
});
