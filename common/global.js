export default {
	baseUrl: "http://sj.cleanwaterbj.com/",
	toast: function(title, icon='none', duration=1500, func=null){
		if(typeof func == 'function'){
			uni.showToast({ title, icon, duration, success: func})
		}else{
			uni.showToast({ title, icon, duration})
		}
	}
}