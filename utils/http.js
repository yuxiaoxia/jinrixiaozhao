import axios from 'axios'
import { Toast } from 'mint-ui';
let options = {}
let apiURL = 'http://47.107.129.230:5000/'

// 需要全路径才能工作
if (process.server) {
	// options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}
options.time = 1000
options.headers = {}

// axios默认配置
axios.defaults.timeout = 10000   // 超时时间
axios.defaults.baseURL = apiURL;  // 默认地址

//整理数据
axios.defaults.transformRequest = function (data) {
	data = JSON.stringify(data);
	return data
}

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
	config => {
		config.headers['Content-Type'] = 'application/json;charset=UTF-8';
		return config
	},
	error => {
		return Promise.reject(error.response)
	});

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
	response => {
		if (response.data.resultCode == "404") {
			console.log("response.data.resultCode是404")
			return
		} else {
			return response
		}
	},
	error => {
		console.log(error)
		return Promise.reject(error.response)   // 返回接口返回的错误信息
	}
)
export default async (options = { method: 'GET' }) => {
	const res = await axios({
		method: options.method,
		url: options.url,
		data: options.data || null,
		params: options.data || null,
	});
	if (res.status >= 200 && res.status < 300) {
		// 浏览器环境弹出报错信息
		if (typeof window !== "undefined" && res.data.code !== 0) {
		}
		return res.data;
	} else {
		Toast('请求失败');
	}

};
