import axiosClient from './axiosClient';

const jobDetailAPI = {
  getJobGenres() {
    const url = `/cong-viec/lay-menu-loai-cong-viec`;
    axiosClient.get(url);
  },
};

export default jobDetailAPI;
