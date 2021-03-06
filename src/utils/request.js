import axios from "axios"

// 第一步，创建实例
const service = axios.create({
    baseURL: 'devApi',
    timeout: 5000
})

// 第二部， 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })

// 第三步，添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做些什么
    return response;
  }, function (error) {
    // 对响应错误做些什么
    return Promise.reject(error);
  })

export default service