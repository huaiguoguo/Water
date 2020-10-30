import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

//设置baseUrl
http.config.baseUrl = "http://t.int.rigoiot.com:11056/"
//设置请求前拦截器
http.interceptor.request = (config) => {
	//添加通用参数
	const token = uni.getStorageSync("token")
	const header = {}
	if (token && url.search("account/graphql") == -1) {
		header['Authorization'] = token
	}
	header['Content-Type'] = "application/json"
	config.header = header
}

//设置请求结束后拦截器
http.interceptor.response = (response) => {
	//判断返回状态 执行相应操作
	return response;
}


// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	http.config.baseUrl = "http://t.int.rigoiot.com:11056"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"": "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
	return http.request({
		baseUrl: 'http://t.int.rigoiot.com:11056/',
		url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
		data,
	})
}

// 轮播图
export const banner = (data) => {
	return http.request({
		url: '/banner/36kr',
		method: 'GET',
		data,
		// handle:true
	})
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default http
