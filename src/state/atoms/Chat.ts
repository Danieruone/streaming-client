import { atom } from 'recoil';
import { Message } from 'interfaces/Message';

const defaultMessages: Message[] = [];

export const chatRoomMessages = atom({
  key: 'chatRoomMessages',
  default: defaultMessages,
});
