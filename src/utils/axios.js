import axios from "axios";
import config from "../config";
import qs from "qs";

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  // 设置请求配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      transformRequest: [
        function(data, config) {
          // 对 data 进行任意转换处理
          if (
            config["Content-Type"] &&
            config["Content-Type"].indexOf("multipart/form-data") > -1
          ) {
            return data;
          } else if (
            config["Content-Type"] &&
            config["Content-Type"].indexOf("application/json") > -1
          ) {
            return JSON.stringify(data);
          } else {
            return qs.stringify(data, config);
          }
        }
      ]
    };

    return config;
  }

  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => config,
      error => Promise.reject(error)
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => Promise.resolve(res),
      error => Promise.reject(error)
    );
  }

  request(options) {
    const instance = axios.create();

    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
}
const request = new HttpRequest(config.baseUrl);

export default request;
