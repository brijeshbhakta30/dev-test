import storage from '../../../helper/storage';
const APP_USERS = 'APP_USERS';

export const loginUser = ({ email, password }) => new Promise((resolve, reject) => {
  storage.get(APP_USERS).then(users => {
    users = users || [];
    const found = users.find(u => u.email === email);
    if (found && found.password === password) {
      return resolve(found);
    }
    return reject(new Error('invalid credentials'));
  })
});

export const registerUser = (user) => new Promise((resolve, reject) => {
  storage.get(APP_USERS).then(users => {
    users = users || [];
    const alreadyRegistered = users.find(u => u.email === user.email);
    if (alreadyRegistered) {
      return reject(new Error('Email is already registered'));
    }
    users.push(user);
    storage.set(APP_USERS, users);
    return resolve(user);
  })
});


export default { loginUser, registerUser, APP_USERS };
