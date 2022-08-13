import conifg from "../conifg";
import axios from "axios";
import { ElMessage } from "element-plus";
import router from '../routers'
import storage from './storage'
const service = axios.create({
    baseURL: conifg.baseURL,
    timeout: 8000
});
// 请求拦截
service.interceptors.request.use((req) => {
    const headers = req.headers;
    const token = storage.getItem('token');
 
    if (!headers.Authorization) headers.Authorization = token 
    return req;
});
// 响应拦截
service.interceptors.response.use((res) => {
    const { data, code, mes } = res.data;
    if (code == 200) {
        return res.data;
    }
    else if (code === 50001) {
        // token失效 跳转到登陆页面
        ElMessage.error(mes);
        setTimeout(() => {
            router.push('/login');
        }, 1500);
        return Promise.reject(mes); // 此错误会返回到浏览器控制台
    } 
    else {
        // 常规报错
        ElMessage.error(mes || "网络错误");
        return res.data; // 此错误会返回到浏览器控制台
    }
});
// 封装请求函数 
const request = (options) => {
    options.method = options.method || 'get';
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    if(typeof options.mock != 'undefined'){
        conifg.mock = options.mock;
    }
    if (conifg.env === 'prod') {
        service.defaults.baseURL = conifg.baseApi;
    } else {
        service.defaults.baseURL = conifg.mock ? conifg.mockApi : conifg.baseApi;
    }
    return service(options);
}
export default request;

