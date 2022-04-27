import axios from 'axios';

export const getStreamByUsername = (payload: String) => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}stream/${payload}`);
};

export const getStreamingKey = () => {
  const token = localStorage.getItem('access_token');
  return axios.get(`${import.meta.env.VITE_BASE_URL}stream/key`, {
    headers: {
      Authorization: 'Bearer ' + token || '',
    },
  });
};

export const refreshStreamingKey = () => {
  const token = localStorage.getItem('access_token');
  return axios.get(`${import.meta.env.VITE_BASE_URL}stream/key/restore`, {
    headers: {
      Authorization: 'Bearer ' + token || '',
    },
  });
};

export const updateProfileInfo = (payload: any) => {
  const token = localStorage.getItem('access_token');
  return axios.patch(`${import.meta.env.VITE_BASE_URL}user`, payload, {
    headers: {
      Authorization: 'Bearer ' + token || '',
    },
  });
};
