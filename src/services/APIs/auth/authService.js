import axios from '../../axios';

class AuthService {
  async signUp(body) {
    const response = await axios.post('/register', body);
    return response;
  }

  async logIn(body) {
    const response = await axios.post('/login', body);
    return response;
  }

  async forgotPassword(body) {
    const response = await axios.post('/forgot-password', body);
    return response;
  }

  async resetPassword(token, body) {
    const response = await axios.post(`/reset-password/${token}`, body);
    return response;
  }
}

export const authService = new AuthService();
