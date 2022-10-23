import axios from 'axios';
import axiosClient from './axiosClient';

const jobListAPI = {
  getJobGenres() {
    const url = `/cong-viec/lay-menu-loai-cong-viec`;
    return axiosClient.get(url);
  },
  getJobs() {
    const url = `/cong-viec`;
    return axiosClient.get(url);
  },
  getJobsByName(jobName) {
    const url = `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${jobName}`;
    return axiosClient.get(url);
  },
};

export default jobListAPI;
