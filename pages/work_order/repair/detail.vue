<template>
	<view class="container">
		
		<view class="detail_list">
			<view class="item" v-for="(item, index) in detail">
				<view class="item-label">
					{{item.label}}:
				</view>
				<view class="item-content" v-if="item.type == 1">
					{{item.content}}
				</view>
				<view class="item-content" v-if="item.type == 2">
					<image :src="img_itme" v-for="(img_itme, img_index) in item.content" mode="scaleToFill" ></image>
				</view>
			</view>
			<view class="record">
				<view class="btn">
					<image src="../../../static/player@2x.png" mode="scaleToFill"></image>
					<text>播放录音</text>
				</view>
			</view>
		</view>
		
		<view class="sign">
			<image src="../../../static/sign@3x.png" mode="scaleToFill"></image>
			<text>未巡检</text>
		</view>
		
		<view class="confirm">
			<button type="primary">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: [{
						label: '设备编号',
						content: '11878393928',
						type: 1
					},
					{
						label: '设备型号',
						content: 'lj-r4567423',
						type: 1
					},
					{
						label: '提交人员',
						content: '胡天',
						type: 1
					},
					{
						label: '联系方式',
						content: '16616090266',
						type: 1
					},
					{
						label: '设备间地址',
						content: '三大厂',
						type: 1
					},
					{
						label: '位置信息',
						content: '压力底限; 持续80s',
						type: 1
					},
					{
						label: '故障描述',
						content: '请填写处理过程, 请填写处理过程',
						type: 1
					},
					{
						label: '现场图片',
						content: [ '../../../static/timg.jpg', '../../../static/timg.jpg', '../../../static/timg.jpg' ],
						type: 2
					}
				]
			};
		},
		methods: {
			submit() {

			}
		}
	}
</script>

<style lang="stylus">
	
	.container {
		
		width 100%;
		height 100%;
		// background-color red;
		
		display flex;
		flex-direction column;
		
		position relative;
		top 0rpx;
		bottom 0rpx;
		left 0rpx;
		right 0rpx;

		.detail_list {
			display flex;
			flex-direction column;
			justify-content center;
			padding-left 10rpx;
			padding-top 50rpx;
			.item{
				&:nth-child(n+2){
					margin-top 10rpx;
				}
				display flex;
				flex-direction row;
				// background-color orange;
				.item-label{
					width 200rpx;
					// background-color red;
				}
				.item-content{
					image{
						width 93.5rpx;
						height 79rpx;
						&:nth-child(n+2){
							margin-left 15rpx;
						}
					}
				}
			}
			
			.record{
				width 100%;
				height auto;
				// background-color red;
				
				display flex;
				flex-direction row;
				justify-content flex-start;
				align-items flex-end;
				margin-top 50rpx;
				padding-left 0rpx;
				
				image{
					width 25rpx;
					height 25rpx;
				}
				.btn{
					width: 225rpx;
					height: 63rpx;
					background: #287AFF;
					border-radius: 10px;
					color #FFFFFF;
					text-align center;
					
					display flex;
					flex-direction row;
					justify-content center;
					align-items center;
					
					text{
						margin-left 15rpx;
					}
				}
			}
		}

		.sign {
			
			display flex;
			flex-direction column;
			justify-content center;
			color #FFFFFF;
			
			position absolute;
			top 20rpx;
			right 0rpx;

			image {
				width 100rpx;
				height 100rpx;
			}
			
			text{
				font-size 15rpx;
				position absolute;
				top 15rpx;
				right 0rpx;
				transform rotate(45deg);
			}
		}
		
		.confirm{
			
			width 100%;
			height 88rpx;
			
			display flex;
			flex-direction row;
			justify-content center;
			align-items center;
			
			// background-color #666666;
			
			margin-top 400rpx;

			button{
				width: 494rpx;
				height: 88rpx;
				background: #287AFF;
				border-radius: 44px;
			}
		}
	}
</style>
