<template>
	<view class="container">

		<view class="form-item">
			<view class="form-label">
				<text>旧密码</text>
			</view>
			<view class="form-input">
				<input type="text" value="" placeholder="旧密码" />
			</view>
		</view>

		<view class="form-item">
			<view class="form-label">
				<text>新密码</text>
			</view>
			<view class="form-input">
				<input type="text" value="" placeholder="新密码" />
			</view>
		</view>

		<view class="form-item">
			<view class="form-label">
				<text>确认新密码</text>
			</view>
			<view class="form-input">
				<input type="text" value="" placeholder="确认新密码" />
			</view>
		</view>

		<view class="btn">
			<button type="primary" class="button">确认</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="stylus">
	.container {
		width 100%;
		height 100%;
		// background-color red;

		.form-item {
			width 100%;
			height auto;
			padding 10rpx 20rpx;
			// background-color pink;
			&:first-child{
				margin-top 24rpx;
			}
			
			&:nth-child(n+2){
				margin-top 34rpx;
			}

			display flex;
			flex-direction row;
			justify-content flex-start;
			align-items center;

			.form-label {
				width 200rpx;
				text-align left;

				text {
					// background-color #007AFF;
				}
			}
		}

		.btn {
			margin-top 437rpx;

			.button {
				width: 494rpx;
				height: 88rpx;
				background: #2879FF;
				border-radius: 44rpx;
			}
		}
	}
</style>
