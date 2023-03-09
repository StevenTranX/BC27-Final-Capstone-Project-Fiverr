import axiosClient from "./axiosClient";

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
  getJobById(jobId) {
    const url = `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${jobId}`;
    return axiosClient.get(url);
  },
  getJobDetailById(jobId) {
    const url = `/cong-viec/lay-cong-viec-chi-tiet/${jobId}`;
    return axiosClient.get(url);
  },
  getJobCommentById(jobId) {
    const url = `/binh-luan/lay-binh-luan-theo-cong-viec/${jobId}`;
    return axiosClient.get(url);
  },
};

export default jobListAPI;
