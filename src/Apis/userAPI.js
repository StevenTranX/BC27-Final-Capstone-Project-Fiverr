import { useMeridiemMode } from '@mui/x-date-pickers/internals/hooks/date-helpers-hooks';
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
};
export default userAPI;
