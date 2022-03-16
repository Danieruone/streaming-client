import { atom } from 'recoil';

export const profileState = atom({
  key: 'profileState',
  default: {
    name: 'DaruLive',
    streamDescription: 'Jugando aquí lolsito, entren para divertirse',
  },
});
