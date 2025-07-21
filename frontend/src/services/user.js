// services/user.js

export async function registerUser(firstName, lastName, email, password, phone) {
  // Simulate a successful registration after a short delay
  return new Promise((resolve) =>
    setTimeout(() => resolve({ status: 'success', data: { firstName, lastName, email } }), 700)
  );
}

export async function loginUser(email, password) {
  // Simulate a successful login after a short delay
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          status: 'success',
          data: { token: 'fake-token', firstName: 'Demo', lastName: 'User', email }
        }),
      700
    )
  );
}
