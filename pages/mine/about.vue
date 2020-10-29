<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/ucenter/logo@2x.png" mode="scaleToFill"></image>
		</view>
		<view class="content">
			至2016年4月，学校拥有国家水泵及系统工程技术
			研究中心、混合动力车辆国家地方联合工程中心、
			国家级新农村发展研究院等3个国家级科技创新平台；
			建有国家知识产权培训（江苏）基地。学校牵头成立
			的现代农业装备与技术协同创新中心被认定为江苏省
			首批高校协同创新中心。    
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
	.container{
		.logo{
			width 100%;
			height auto;
			display flex;
			flex-direction row;
			justify-content center;
			align-items center;
			
			image{
				width 168rpx;
				height 171rpx;
				margin-top 66rpx;
			}
		}
		
		.content{
			margin-top 68rpx;
			
			font-size: 28rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #000000;
			line-height: 48rpx;
			
			padding-left 46rpx;
			padding-right 30rpx;
		}
	}
</style>
