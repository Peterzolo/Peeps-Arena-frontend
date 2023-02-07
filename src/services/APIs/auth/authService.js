import axios from '../../axios';

class AuthService {
  async signUp(body) {
    const response = await axios.post('/register', body);
    return response;
  }

  async signIn(body) {
    const response = await axios.post('/login', body);
    return response;
  }

  async forgotPassword(email) {
    const response = await axios.post('/forgot-password', { email });
    return response;
  }
}

export const authService = new AuthService();
