<template>
	<view class="container">
		<view class="detail_list">
			<view class="item" v-for="(item, index) in detail">
				<view class="item-label">
					{{item.label}}:
				</view>
				<view class="item-content">
					{{item.content}}
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
						label: '工单编号',
						content: '11878393928'
					},
					{
						label: '巡检人员',
						content: '胡天'
					},
					{
						label: '设备间名称',
						content: '西山大力水厂1号罐'
					},
					{
						label: '设备间地址',
						content: '107省道与商鼎路交叉口'
					},
					{
						label: '设备类型',
						content: '饮用水设备'
					},
					{
						label: '巡间时间',
						content: '2020-09-10 18:33'
					},
					{
						label: '巡检内容',
						content: '检查水压，设备是否漏水'
					},
					{
						label: '需要巡间时间',
						content: '2020-09-10 18:33'
					},
					{
						label: '当前位置',
						content: '107省道与商鼎路交叉口'
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
			
			margin-top 454rpx;
			
			button{
				width: 494rpx;
				height: 88rpx;
				background: #287AFF;
				border-radius: 44px;
			}
		}
	}
</style>
