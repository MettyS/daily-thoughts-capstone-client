import config from '../config';

const AuthService = {
  postLogin(creds) {

    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(creds)
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e => Promise.reject(e));
      }
      return res.json();
    })
    .catch(err => {
      console.log('error: ', err)
      return err
    })
  },

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e => Promise.reject(e));
      }
      return res.json();
    })
    .catch(err => {
      console.log('error: ', err);
      return err;
    })
  }
}

export default AuthService;