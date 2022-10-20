import axiosClient from './axiosClient';

const jobListAPI = {
  getJobGenres() {
    const url = `/cong-viec/lay-menu-loai-cong-viec`;
    return axiosClient.get(url);
  },
};

export default jobListAPI;
