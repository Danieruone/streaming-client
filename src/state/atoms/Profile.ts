import { atom } from 'recoil';

var randomColor = Math.floor(Math.random() * 16777215).toString(16);

export const profileState = atom({
  key: 'profileState',
  default: {
    name: 'DaruLive',
    streamDescription: 'Jugando aquí lolsito, entren para divertirse',
    chatStreamColor: `#${randomColor}`,
  },
});
