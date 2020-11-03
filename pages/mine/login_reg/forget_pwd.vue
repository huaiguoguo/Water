<template>
	<view class="container">

		<view class="form">
			<view class="form-item">
				<view class="form-input">
					<input type="text" value="" placeholder="请输入手机号" v-model="mobile"/>
				</view>
				<view class="form-right"></view>
			</view>
			<view class="form-item">
				<view class="form-input">
					<input type="text" value="" placeholder="请输入验证码" v-model="code"/>
				</view>
				<view class="send form-right">
					发送验证码
				</view>
			</view>

			<view class="form-item">
				<view class="form-input">
					<input type="text" value="" placeholder="设置新密码" v-model="password"/>
				</view>
				<view class="form-right">
					
				</view>
			</view>
			
		</view>
		<view class="notice">
			<text>密码有6-20数字、字母或符号组成</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: '',
				password: ''
			};
		},
		methods:{
			submit(){},
			checkForm(){}
		}
	}
</script>

<style lang="stylus">
	.container{
		width 100%;
		height 100%
		display flex;
		flex-direction column;
		justify-content center;
		align-items center;
	}
	
	.form{
		width 95%;
		height 100%;
		// background-color red;
		display flex;
		flex-direction column;
		justify-content center;
		align-items center;
		.form-item{
			width 100%;
			height 100%;
			// background-color orange;
			margin-top 30rpx;
			
			display flex;
			flex-direction row;
			justify-content center;
			align-items center;
			
			.form-input{
				// background-color #007AFF;
				width 90%;
				height 100%;
			}

			.form-right{
				width 10%;
				height 100%;
				// background-color #0A98D5;
			}

			.send{
				width 200rpx;
				height 50rpx;
				text-align center;
				color #FFFFFF;
				border 0rpx;
				background-color orange;
				border-radius 10rpx;
			}

		}
	}
</style>
