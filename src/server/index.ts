import axios from "axios";
import {API} from "../config"
// 超时时间是5秒
axios.defaults.timeout = 5000;
// 允许跨域
axios.defaults.withCredentials = true;
// Content-Type 响应头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// axios.defaults.baseURL = API

export function serverGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function serverPost(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}