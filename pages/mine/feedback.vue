<template>
	<view class="container">
		<view class="opinion">
			<view class="content">
				<textarea value="" placeholder="请输入反馈内容, 我们会为您更好的服务" v-model="content"/>
			</view>
			<view class="word_total">
				<text></text>
			</view>
		</view>
		<view class="photo_container">
			<view class="photo" @click="upload()">
				<!-- <img :src="pic"   style="width: 150rpx;height: 150rpx;" mode="aspectFill" alt=""> -->
				<image :src="pic" style="width: 150rpx;height: 150rpx;" mode="aspectFill"></image>
				<text>照片</text>
			</view>
		</view>
		<view class="btn_container">
			<button type="default" @click="submit()">提交反馈</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'../../static/ucenter/photo.png',
				// pic:'http://sj.cleanwaterbj.com/uploads/feedback/20201104/90c44eb0964f6cb9b78716913cf634d2.jpg',
				content: ''
			};
		},
		onLoad:function(){
			const token = uni.getStorageSync('userinfo')
			if(!token){
				console.log("未登录");
				uni.redirectTo({
					url: "/pages/mine/login_reg/login"
				})
			}
			this.userInfo = uni.getStorageSync('userinfo')	
		},
		methods:{
			async submit(){
				const pic = this.pic;
				const content = this.content;
				const result = await this.$api.post("app/feedback", {pic, content});
			},
			upload(){
				const _this = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择L
					complete:function(chooseImageRes){
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths);
						// console.log(_this.$api.config.baseUrl+'app/upload')
						// return;
						const {token} = uni.getStorageSync('userinfo');
						uni.uploadFile({
							url:_this.$api.config.baseUrl+'app/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'img',
							header:{ token },
							formData: {},
							success: (uploadFileRes) => {
								// _this.pic = "http://img0.bdstatic.com/static/searchdetail/img/logo-2X_0c4ef02.png"
								_this.pic = uploadFileRes.data
								console.log(uploadFileRes.data);
							}
						});
					}
				})
			}
		},
		
	}
</script>

<style lang="stylus">
	.container{
		width 100%;
		height 100%;
		display flex;
		flex-direction column;
		justify-content center;
		align-items center;
		
		// background-color red;
		.opinion{
			width 100%;
			height 100%;
			margin-top 50rpx;
			// background-color #2C405A;
			.content{
				width 100%;
				height 100%;
				padding 0rpx 60rpx;
				box-sizing border-box;
				// background-color pink;
				textarea{
					width 100%;
				}
			}
			.word_total{
				// background-color yellow;
				text-align right;
				text{
					margin-right 52rpx;
					font-size: 24rpx;
					font-family: PingFangSC;
					font-weight: 400;
					color: #4C4C4C;
				}
			}
		}
		
		.photo_container{
			width 100%;
			height auto;
			
			margin-top 26rpx;
			padding-left:70rpx;
			padding-right 70rpx;
			box-sizing border-box;
			
			// background-color orange;
			
			.photo{
				width 190rpx;
				height 190rpx;
				background: #F2F2F2;
				
				display flex;
				flex-direction column;
				justify-content center;
				align-items center;
				
				image{
					width 72rpx;
					height 62rpx;
					
				}
				text{
					font-size 25rpx;
					color #999999;
					margin-top 20rpx;
				}
			}
		}
		
		.btn_container{
			display flex;
			flex-direction row;
			justify-content center;
			align-items center;
			margin-top 70rpx;

			button{
				width: 494rpx;
				height: 88rpx;
				background: #CCCCCC;
				border-radius: 44rpx;
			}
		}
	}
</style>
