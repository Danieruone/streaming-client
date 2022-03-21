import axios from 'axios';

// types
import { LoginData } from 'interfaces/Auth';

export const logIn = (payload: LoginData) => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}auth/login`, payload);
};
