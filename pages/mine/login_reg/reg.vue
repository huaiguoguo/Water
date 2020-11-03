<template>
	<view class="container">
		<view class="head">
			<image src="../../../static/login_reg/head_bg@2x.png" mode="scaleToFill"></image>
		</view>
		<view class="tab">
			<view class="login" @click="active = 1">
				<text>登录</text>
			</view>
			<view class="reg" @click="active = 2">
				<text>注册</text>
			</view>
		</view>
		<view class="content">
			<view class="form-item">
				<view class="item-label">
					<image src="../../../static/login_reg/mobile@2x.png" mode="scaleToFill"></image>
				</view>

				<view class="item-input">
					<input type="text" value="" placeholder="请输入手机号码"/>
				</view>

				<view class="item-right">
					<image src="../../../static/login_reg/clean@2x.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="form-item">
				<view class="item-label">
					<image src="../../../static/login_reg/lock@2x.png" mode="scaleToFill"></image>
				</view>
			
				<view class="item-input">
					<input type="text" value="" placeholder="请输入密码"/>
				</view>
			
				<view class="item-right">
					<image src="../../../static/login_reg/clean@2x.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="form-item" v-show="active == 2">
				<view class="item-label">
					<image src="../../../static/login_reg/lock@2x.png" mode="scaleToFill"></image>
				</view>
			
				<view class="item-input">
					<input type="text" value="" placeholder="请再次确认您的密码"/>
				</view>
			
				<view class="item-right">
					<image src="../../../static/login_reg/clean@2x.png" mode="scaleToFill"></image>
				</view>
			</view>
			
<!-- 			<view class="form-item forget_password">
				<text>忘记密码</text>
			</view> -->
			
			
		</view>
		<view class="button">
			<button type="primary">登录</button>
		</view>
		
		<view class="copyright">
			<text>© 2016-2020 Copyright 水净科技</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 1
			};
		},
		methods:{
		}
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
		.head{
			width 100%;
			height 396rpx;
			image{
				width 100%;
				height 396rpx;
			}
		}
		
		
		.tab{
			width 100%;
			height 100%;
			display flex;
			flex-direction row;
			justify-content flex-start;
			align-items baseline;
			// background-color red;
			margin-top 63rpx;
			padding-left 60rpx;
			box-sizing border-box;
			
			.login{
				font-size: 42rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #333333;
				// line-height: 36px;
			}
			
			.reg{
				margin-left 32rpx;
				font-size: 42rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #333333;
				// line-height: 36px;
			}
		}
		
		.content{
			width 100%;
			height auto;
			margin-top 100rpx;
			
			padding: 0rpx 60rpx;
			box-sizing border-box;
			
			.form-item{
				width 100%;
				height auto;
				display flex;
				flex-direction row;
				justify-content space-between;
				align-items center;
				
				&:nth-child(n+2){
					margin-top 44rpx;
				}
				
				// background-color orange;
				
				border-bottom 1px solid #D9E2E9;
				
				padding 25rpx 10rpx;
				box-sizing border-box;
				
				.item-label{
					width 30rpx;
					height 100%;
					// background-color red;
					display flex;
					flex-direction row;
					justify-content center;
					align-items center;
					
					image{
						width 30rpx;
						height 42rpx;
					}
				}
				
				.item-input{
					width 100%;
					padding 0rpx 32rpx;
					box-sizing border-box;
					// background-color pink;
					
					input{
						font-size: 30rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #333333;
					}
				}
				
				.item-right{
					display flex;
					flex-direction row;
					justify-content center;
					align-items center;
					
					image{
						width 28rpx;
						height 28rpx;
					}
				}
			}
			
			
			.forget_password{
				border 0rpx;
				margin-top 10rpx !important;
				font-size: 24rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #646464;
			}
		}
		
		.button{
			width 100%;
			height 100%;
			margin-top 116rpx;
			
			button{
				width: 589rpx;
				height: 90rpx;
				background: #2879FF;
				border-radius: 45rpx;
			}
		}
		
		.copyright{
			position absolute;
			bottom 0;
			font-size: 22rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #DDE3E7;
		}
	}
</style>
