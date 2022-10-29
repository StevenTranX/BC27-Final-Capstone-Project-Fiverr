import axiosClient from './axiosClient';
const userAPI = {
  updateUser(data) {
    const { id } = data;
    console.log(data);
    const url = `/users/${id}`;
    return axiosClient.put(url, data);
  },
  getUser(userId) {
    const url = `/users/${userId}`;
    return axiosClient.get(url);
  },
  getBookingJobs() {
    const url = `/thue-cong-viec/lay-danh-sach-da-thue`;
    return axiosClient.get(url);
  },
  bookJob(info) {
    const url = `/thue-cong-viec`;
    return axiosClient.post(url, info);
  },
};
export default userAPI;
