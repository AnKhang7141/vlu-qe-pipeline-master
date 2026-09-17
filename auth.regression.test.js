const { login } = require('./auth');

describe('login regression tests', () => {
  test('throws when the password is incorrect', () => {
    expect(() => login('admin', 'wrongpassword')).toThrow(
      'Invalid username or password',
    );
  });

  test('throws when the username is empty', () => {
    expect(() => login('', '123')).toThrow('Username is required');
  });

  test('throws when the username contains only whitespace', () => {
    expect(() => login('   ', '123')).toThrow('Username is required');
  });

  test('throws when the password is empty', () => {
    expect(() => login('admin', '')).toThrow('Password is required');
  });

  test('throws when the password contains special characters', () => {
    expect(() => login('admin', '12@3')).toThrow(
      'Password contains invalid special characters',
    );
  });

  test('throws when the account is locked', () => {
    expect(() => login('locked', '123')).toThrow('Account is locked');
  });

  test('throws when username or password is not a string', () => {
    expect(() => login(null, '123')).toThrow('Username is required');
    expect(() => login('admin', null)).toThrow('Password is required');
  });
});
