import { atom } from 'recoil';

// types
import { StreamObject } from 'interfaces/StreeamObject';

const defaultStreamsArray: StreamObject[] = [];

export const streamsState = atom({
  key: 'streamsState',
  default: defaultStreamsArray,
});

export const isFetchingStreams = atom({
  key: 'isFetchingStreams',
  default: false,
});
