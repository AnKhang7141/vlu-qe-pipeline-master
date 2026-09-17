const LOCKED_USERNAMES = new Set(['locked', 'locked-user', 'blocked']);

/**
 * Authenticates a user using the demo credentials.
 *
 * @param {string} username
 * @param {string} password
 * @returns {boolean} true when the credentials are valid
 * @throws {Error} when the input is invalid or the account cannot log in
 */
function login(username, password) {
  if (typeof username !== 'string' || username.trim() === '') {
    throw new Error('Username is required');
  }

  if (typeof password !== 'string' || password.length === 0) {
    throw new Error('Password is required');
  }

  // Check locked accounts before validating credentials to fail fast.
  if (LOCKED_USERNAMES.has(username.trim().toLowerCase())) {
    throw new Error('Account is locked');
  }

  if (/[^\w]/.test(password)) {
    throw new Error('Password contains invalid special characters');
  }

  if (username !== 'admin' || password !== '123') {
    throw new Error('Invalid username or password');
  }

  return true;
}

module.exports = { login };
