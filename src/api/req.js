import axios from 'axios'
import qs from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:8090'

// 请求拦截器
axios.interceptors.request.use(
    
);
// 响应拦截器
axios.interceptors.response.use((response) => {
    return response;
});


const req = {

    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params }).then(res=>
                resolve(res)  
            ).catch(err=>
                reject(err)
            )
        })
    },

    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params)).then(res=>
                resolve(res)
            ).catch(err=>
                reject(err)
            )
        })
    }

}

export default req
