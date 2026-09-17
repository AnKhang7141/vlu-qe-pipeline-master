const { login } = require('./auth');

test('logs in successfully with the admin credentials', () => {
  expect(login('admin', '123')).toBe(true);
});
