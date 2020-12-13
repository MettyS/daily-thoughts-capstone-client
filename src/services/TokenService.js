import config from '../config'

const TokenService = {
  makeAuthToken(nickname, pass) {
    return window.btoa(`${nickname}:${pass}`);
  },
  saveAuthToken(t) {
    return window.sessionStorage.setItem(config.TOKEN_KEY, t);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
    sessionStorage.clear();
  },
  /*saveUserId(user_id) {
    return window.sessionStorage.setItem('user_id', user_id);
  },
  getUserId(user_id) {
    return window.sessionStorage.getItem('user_id', user_id);
  }*/
}


export default TokenService;