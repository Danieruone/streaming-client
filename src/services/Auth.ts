import axios from 'axios';
import { LoginData } from 'interfaces/Auth';

export const logIn = (payload: LoginData) => {
  return axios.post('url', payload);
};
