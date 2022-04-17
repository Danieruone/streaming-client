import { atom } from 'recoil';

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const data = localStorage.getItem('user_data');
const profile = data ? JSON.parse(data) : {};

export const profileState = atom({
  key: 'profileState',
  default: {
    ...profile,
    chatStreamColor: `#${randomColor}`,
  },
});
