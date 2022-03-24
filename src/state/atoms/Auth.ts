import { atom } from 'recoil';

const token = localStorage.getItem('acces_token');

export const isLoggedIn = atom({
  key: 'isLoggedIn',
  default: token ? true : false,
});
