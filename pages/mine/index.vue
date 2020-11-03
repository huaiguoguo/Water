<template>
	<view class="container">
		<view class="user_head">
			<view class="title">
				<text>个人中心</text>
			</view>
			<view class="user_info">
				<view class="avatar">
					<image src="../../static/ucenter/avator@2x.png" mode="scaleToFill"></image>
				</view>
				<view class="info">
					<text>{{userInfo.username}}</text>
					<text>{{userInfo.nickname}}</text>
				</view>
			</view>
		</view>
		<view class="menu_list">
			<view class="item" v-for="(item, index) in menu_list" @click="redirect(index+1)">
				<view class="icon">
					<image :src="item.icon" mode="scaleToFill"></image>
				</view>
				<view class="title">
					<text>{{item.title}}</text>
					<text class="sub_title">{{item.sub_title}}</text>
				</view>
				<view class="arrow">
					<image src="../../static/ucenter/arrow_right@2x.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: null,
				menu_list: [{
						title: '修改密码',
						icon: '../../static/ucenter/change_pwd@2x.png',
						sub_title: '',
					},
					{
						title: '关于我们',
						icon: '../../static/ucenter/about@2x.png',
						sub_title: '',
					},
					{
						title: '使用手册',
						icon: '../../static/ucenter/manual@2x.png',
						sub_title: '',
					},
					{
						title: '版本更新',
						icon: '../../static/ucenter/version@2x.png',
						sub_title: '有新版本待更新',
					},
					{
						title: '常见问题',
						icon: '../../static/ucenter/question@2x.png',
						sub_title: '',
					},
					{
						title: '意见反馈',
						icon: '../../static/ucenter/feedback@2x.png',
						sub_title: '',
					},
				]
			};
		},
		onReady() {
			const token = uni.getStorageSync('token')
			if (!token) {
				uni.redirectTo({
					url: "/pages/mine/login_reg/login"
				})
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userinfo')
		},
		methods: {
			redirect(index) {
				let url = '';
				if (index == 1) {
					url = 'change_pwd';
				} else if (index == 2) {
					url = 'about';
				} else if (index == 3) {
					url = 'manual';
				} else if (index == 4) {
					alert('版本更新');
					return false;
				} else if (index == 5) {
					url = 'question';
				} else if (index == 6) {
					url = 'feedback';
				} else {
					alert('错误!');
					return false;
				}

				uni.navigateTo({
					url
				})

			}
		}
	}
</script>

<style lang="stylus">
	.container {
		width 100%;
		height 100%;

		display flex;
		flex-direction column;
		justify-content center;
		align-items center;

		.user_head {
			width 100%;
			height 306rpx;
			background-image: url(../../static/ucenter/head_bg@2x.png);
			background-repeat no-repeat;
			background-size 100% 100%;

			padding-top 66rpx;

			display flex;
			flex-direction column;
			justify-content center;
			align-items center;

			.title {
				font-size: 36rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #FFFFFF;
			}

			.user_info {
				width 100%;
				height 100%;
				// background-color red;

				display flex;
				flex-direction row;
				justify-content flex-start;
				align-items center;
				padding-left 30rpx;

				.avatar {
					width 132rpx;
					height 132rpx;

					image {
						width 132rpx;
						height 132rpx;
					}
				}

				.info {
					display flex;
					flex-direction column;
					justify-content center;
					align-items center;

					margin-left 30rpx;

					text {
						font-size: 30rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #FFFFFF;
						letter-spacing 3rpx;
					}
				}
			}
		}

		.menu_list {
			width 92%;
			// padding 0rpx 20rpx;
			// background-color red;
			display flex;
			flex-direction column;
			justify-content center;
			align-items center;

			.item {
				width 100%;
				height 45rpx;
				margin-top 62rpx;

				// background-color orange;
				display flex;
				flex-direction row;
				justify-content space-around;
				align-items center;

				.icon {
					width 40rpx;
					height 40rpx;
					display flex;
					flex-direction row;
					justify-content center;
					align-items center;

					image {
						width 100%;
						height 100%;
					}
				}

				.title {
					flex 1;
					display flex;
					flex-direction row;
					justify-content space-between;
					align-items center;
					text-align left;
					// background-color #007AFF;
					padding-left 25rpx;

					text {
						font-size: 28rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #000000;
					}

					.sub_title {
						// color red;
						// background-color pink;
						// align-self flex-end;
						margin-right 15rpx;
					}
				}

				.arrow {
					width 12rpx;
					height 21rpx;
					// background-color red;
					display flex;
					flex-direction row;
					justify-content center;
					align-items center;

					image {
						width 12rpx;
						height 21rpx;
						// background-color #09BB07;
					}
				}
			}
		}

	}
</style>
