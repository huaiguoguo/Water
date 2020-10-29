<template>
	<view class="container">
		<view class="content">
			<view class="item">
				<view class="form-label">
					<text>安装地点:</text>
				</view>
				<view class="form-input">
					<input type="text" value="" placeholder="安装地点" placeholder-class="holder"/>
				</view>
			</view>
			<view class="item">
				<view class="form-label">
					<text>工单编号:</text>
				</view>
				<view class="form-input">
					<input type="text" value="" placeholder="工单编号" placeholder-class="holder"/>
				</view>
			</view>
			
			<view class="item">
				<view class="form-label">
					<text>故障原因:</text>
				</view>
				<view class="form-input">
					<textarea value="" placeholder="故障原因" placeholder-class="holder"/>
					<!-- <input type="text" value="" placeholder="故障原因"/> -->
				</view>
			</view>

			<view class="item">
				<view class="form-label">
					<text>故障描述:</text>
				</view>
				<view class="form-input">
					<!-- <input type="text" value="" placeholder="故障描述"/> -->
					<textarea value="" placeholder="故障描述" placeholder-class="holder" />
				</view>
			</view>
			<view class="item">
				<view class="form-label">
					<text>处理过程:</text>
				</view>
				<view class="form-input">
					<!-- <input type="text" value="" placeholder="处理过程"/> -->
					<textarea value="" placeholder="处理过程" placeholder-class="holder"/>
				</view>
			</view>
			<view class="item">
				<view class="form-label">
					<text>维修结果:</text>
				</view>
				<view class="form-input">
					<input type="text" value="" placeholder="维修结果" placeholder-class="holder"/>
				</view>
			</view>
			<view class="item">
				<view class="form-label">
					<text>当前位置:</text>
				</view>
				<view class="form-input">
					<text>107省道与商鼎路交叉口</text>
				</view>
			</view>
			<view class="item pic">
				<view class="form-label">
					<text>上传图片:</text>
				</view>
				<view class="form-input">
					<image src="../../../static/plus@2x.png" mode="scaleToFill"></image>
					<image src="../../../static/plus@2x.png" mode="scaleToFill"></image>
					<image src="../../../static/plus@2x.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="add_cancel">
				<view class="add">
					<image src="../../../static/plus_small@2x.png" mode="scaleToFill"></image>
					<text>添加录音</text>
				</view>
				<view class="cancel">
					<image src="../../../static/plus_small@2x.png" mode="scaleToFill"></image>
					<text>删除录音</text>
				</view>
			</view>
			
			<view class="btn_container">
				<button type="primary">确定</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus">
	.container{
		width 100%;
		height 100%;
		.content{
			width 100%;
			height 100%;
			.item{
				width 100%;
				height auto;
				// background-color red;
				display flex;
				flex-direction row;
				

				// border-top 1rpx solid rgba(125, 125, 125, 0.2);
				border-bottom 1rpx solid rgba(125, 125, 125, 0.2);
				
				&:nth-child(n+2){
					margin-top 10rpx;
				}
				
				.form-label{
					width 150rpx;
					margin-left 15rpx;
					// background-color orange;
					font-size: 28rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #000000;
				}

				.form-input{
					margin-left 10rpx;
					// background-color #007AFF;
					font-size: 28rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #000000;

					textarea{
						width 500rpx;
						height 150rpx;
						// background-color #007AFF;
					}
					.holder{
						// color pink;
						padding-top 5rpx;
						font-size 28rpx;
					}
					image{
						width 186rpx;
						height 158rpx;
						&:nth-child(n+2){
							margin-left 50rpx;
						}
					}
				}
				

			}
			.pic{
				display flex;
				flex-direction column;
				justify-content center;
				align-items flex-start;
				border-bottom 0rpx;
				.form-input{
					// height 220rpx;
					margin-top 10rpx;
				}
			}
			
			.add_cancel{
				width 100%;
				height auto;
				display flex;
				flex-direction row;
				justify-content space-around;
				align-items center;
				// background-color red;
				
				margin-top 104rpx;
				
				.add, .cancel{
					width: 225rpx;
					height: 63rpx;
					background: #287AFF;
					border-radius: 10px;
					display flex;
					flex-direction row;
					justify-content center;
					align-items center;
					image{
						width 12.5rpx;
						height 12.5rpx;
					}
					text{
						font-size: 28rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #FFFFFF;
						margin-left 14rpx;
					}
				}
			}
			
			.btn_container{
				width 100%;
				height auto;
				margin-top 220rpx;
				
				button{
					width: 494rpx;
					height: 88rpx;
					background: #287AFF;
					border-radius: 44rpx;
				}
				
			}
		}
	}
</style>
