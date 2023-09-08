import axios from 'axios';
interface requestType {
  data?: any;
  method?: string;
}

interface responseType {
  data?: any;
  message?: string;
  state?: number;
}

const server = axios.create({
  baseURL:'',
  timeout: 20000,
});

server.interceptors.request.use(
  (config) => {
    config.headers['token'] = JSON.parse(localStorage.getItem('user') || '')?.token;
    return config;
  },
  (err) => {
    console.log(err); // for debug
    return Promise.reject(err);
  },
);

server.interceptors.response.use(
  (response) => {
    const res: responseType = response.data;
    if (res.state !== 200) {
      console.log('接口信息报错', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res.data;
  },
  (err) => {
    console.log('err', err);
  },
);

export default server;
