import axiosClient from './axiosClient';

const authAPI = {
  register(data) {
    const url = '/auth/signup';
    return axiosClient.post(url, data);
  },
};
export default authAPI;
