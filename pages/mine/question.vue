<template>
	<view class="container">
		<view class="list">
			<view class="item" v-for="(item, index) in list" :key="index+1" @click="activity(item.id)">
				<view class="question">
					<view class="left_icon">
						<view class="icon">
							<image src="../../static/ucenter/question/msg_icon@2x.png" mode="scaleToFill"></image>
							<text>Q{{index+1}}</text>
						</view>
						<view class="title">
							<text>什么是供水?</text>
						</view>
					</view>
					
					<view class="right_icon">
						<image v-if="active==item.id" class="arrow_top" src="../../static/ucenter/question/arrow_top@2x.png" mode="scaleToFill"></image>
						<image v-else class="arrow_right" src="../../static/ucenter/question/arrow_right@2x.png" mode="scaleToFill"></image>
					</view>
				</view>
				<view class="answer" v-show="active == item.id">
					二次供水设备主要为补偿市政供水管线压力缺乏，包管寓居、
					生计在高层人群用水而建立的。比较原水供水，二次供水的
					水质更易被污染，二次供水的安全性和可靠性一向都受到市
					民的广泛重视。二次供水设备主要为补偿市政供水管线压力
					缺乏，包管寓居、生计在高层人群用水而建立的。                          
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				list: [
					{
						id: 1
					},
					{
						id: 2
					},
					{
						id: 3
					},
				]
			};
		},
		methods:{
			activity(id){
				if(this.active != id){
					this.active = id
				}else{
					this.active = 0;
				}
			}
		}
	}
</script>

<style lang="stylus">
	.container{
		.list{
			width 100%;
			height 100%;
			// background-color red;
			display flex;
			flex-direction column;
			justify-content center;
			align-items center;
			margin-top 64rpx;
			
			.item{
				width 100%;
				height auto;
				padding 0rpx 27rpx;
				box-sizing border-box;
				&:nth-child(n+2){
					margin-top 30rpx;
				}
				
				.question{
					width 100%;
					height 100%;
					display flex;
					flex-direction row;
					justify-content space-between;
					align-items center;
					
					.left_icon{
						display flex;
						flex-direction row;
						justify-content flex-start;
						align-items center;
						.icon{
							width 35rpx;
							height 35rpx;
							// background-color orange;
							position relative;
							
							image{
								width 35rpx;
								height 35rpx;
							}

							text{
								position absolute;
								top 0;
								left 0;
								bottom 10rpx;
								
								width 27rpx;
								height 18rpx;
								font-size: 25rpx;
								font-family: Microsoft YaHei;
								// font-weight: 400;
								color: #FFFFFF;
								margin-top -5rpx;
							}
						}
						.title{
							margin-left 20rpx;
						}
					}
					
					.right_icon{
						.arrow_right{
							width 10rpx;
							height 21rpx;
						}
						.arrow_top{
							width 23rpx;
							height 11rpx;
						}
					}
				}
				
				.answer{
					margin-top 27rpx;
					font-size: 24rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #999999;
				}
			}
		}
	}
</style>
