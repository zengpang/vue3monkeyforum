import axios from "axios";
//qs是一个流行的查询参数序列化和解析库
import qs from "qs";
const testBaseUrl = "";
const baseUrl = "https://3yya.com/u/9f20f268d34a6521/bbs/app";
class Http {
    //axios初始化
    constructor(baseUrl) {
        //设置基础链接
        axios.defaults.baseURL=baseUrl;
        //post请求头
        axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
        //允许跨域携带cookie信息
        //axios.defaults.withCredentials = true;
        //设置超时
        axios.defaults.timeout = 15000;
        axios.interceptors.request.use(
            config => {
                const token=localStorage.getItem('jwt');
                if(token)
                {
                    config.headers.Authorization=`Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        )
    };
    post(url,data){
        return new Promise((resolve,reject)=>{
            axios({
                method:'post',
                url,
                data:qs.stringify(data)
            })
            .then(res=>{
                resolve(res.data);
            })
            .catch(err=>{
                reject(err);
            });
        })
    };
    get(url,data){
        return new Promise((resolve,reject)=>{
            axios({
                method:'get',
                url,
                params:data
            })
            .then(res=>{
                resolve(res.data);
            })
            .catch(err=>{
                reject(err);
            });
        })
    };
}
export const http=new Http(baseUrl);

