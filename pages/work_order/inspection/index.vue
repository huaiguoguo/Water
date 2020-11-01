<template>
	<view class="container">
		<view class="tab">
			<view :class="tab==1?'tab-item active':'tab-item'" @click="active(1)">
				巡检工单
			</view>
			<view :class="tab==2?'tab-item active':'tab-item'" @click="active(2)">
				维修工单
			</view>
		</view>
         <view class="list">
			<view class="inspection" v-show="tab == 1">
				<view class="list-item" v-for="(list_item, list_index) in list" :key="list_index" @click="navigation(1, list_item.id)">
					<view class="sign">
						<image src="../../../static/sign@3x.png" mode="scaleToFill"></image>
						<text>已完成</text>
					 </view>				 
					<view class="item" v-for="(item, index) in list_item.list">
						<view class="item-label">
							 {{item.label}}:
						</view>
						<view class="item-content">
							{{item.content}}
						</view>
					</view>
				</view>
			</view>
			<view class="repair" v-show="tab == 2">
				<view class="list-item" v-for="(list_item, list_index) in list" :key="list_index" @click="navigation(2, list_item.id)">
					<view class="sign">
						<image src="../../../static/sign@3x.png" mode="scaleToFill"></image>
						<text>已完成</text>
					 </view>				 
					<view class="item" v-for="(item, index) in list_item.list">
						<view class="item-label">
							 {{item.label}}:
						</view>
						<view class="item-content">
							{{item.content}}
						</view>
					</view>
				</view>
			</view>
         </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab: 1,
				list: [
					{
						id: 1,
						list: [
							{
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
							}
						]
					}
				]
			};
		},
		methods:{
			active(tab){
				if(tab != this.tab){
					this.tab = tab
				}
			},
			navigation(type, id){
				if(type == 1){
					uni.navigateTo({
						url: '/pages/work_order/inspection/detail'
					})
				}else if(type == 2){
					uni.navigateTo({
						url: '/pages/work_order/repair/detail'
					})
				}
			}
		}
	}
</script>

<style lang="stylus">
	.container{
		
		.tab{
			width 100%
			height 75rpx
			margin-top 30rpx
			// background-color orange
			display flex
			flex-direction row
			justify-content center
			.tab-item{
				height 100%
				line-height 75rpx
				background-color #D7D7D7
				color #6E6E6E
				width 347rpx
				text-align center

				font-size: 30rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;

				&:first-child{
					border-radius: 10px 0px 0px 10px;
				}
				&:last-child{
					border-radius: 0px 10px 10px 0px;
				}
				&.active{
					background-color #007AFF
					color #FFFFFF
					font-family: Microsoft YaHei;
				}
			}
		}
		
		.list{
			background-color #D7D7D7;
			display flex;
			flex-direction column;
			// margin-top 15rpx;
			.list-item{
				&:nth-child(n+2){
					margin-top 8rpx
				}
				padding-top 40rpx
				padding-bottom 40rpx
				
				padding-left 27rpx
				background-color #FFFFFF
				display flex
				flex-direction column
				
				position relative
				
				.item{
					display flex
					flex-direction row

					&:nth-child(n+3){
						margin-top 35rpx
						// background-color orange
					}
					.item-label{
						width 156rpx
						color #000000
						font-size 28rpx
					}
					.item-content{
						margin-left 2rpx
						color #000000
						font-size 28rpx
					}
				}
				.sign{
					width 120rpx
					height 120rpx
					// background-color pink
					position absolute
					top 40rpx
					right 0rpx
					float right
					image{
						width 120rpx
						height 120rpx
					}
					text{
						display block
						width: 100%;
						height: 54rpx;
						font-size: 15rpx;
						color white
						text-align center
						// background-color orange
						transform rotate(45deg)
						position absolute
						top 20rpx
						right -15rpx
					}
				}
			}
		}
	}
</style>
