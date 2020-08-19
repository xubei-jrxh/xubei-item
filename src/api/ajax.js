// 引入axios
import axios from 'axios'

// 配置axios的基础请求路径
const ajax = axios.create({
  baseURL: "http://api8.xubei.com",  // 通用的请求前缀
  timeout: 20000 //请求超时时间
})

// 设置请求拦截器
// ajax.interceptors.request.use()

// 设置响应拦截器
ajax.interceptors.response.use(response => {
  const result = response.data
  // console.log(result);
  return result
},
  error => {
    console.log("错误信息：" + error);
    return Promise.reject(error)
  }
)

export default ajax
