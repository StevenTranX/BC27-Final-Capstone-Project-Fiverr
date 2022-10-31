import axios from 'axios';
const axiosClient = axios.create({
  baseURL: 'https://fiverrnew.cybersoft.edu.vn/api',
  headers: {
    tokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMiIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTUxNjgwMDAwMCIsIm5iZiI6MTY1MzkzMDAwMCwiZXhwIjoxNjgxNjY0NDAwfQ.oR9K8iSTqbo-t0Q_a-WFnKePPaMAr7sdlgR5xKAtQWA',
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem('access_token'));
    console.log(token);
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);
export default axiosClient;
