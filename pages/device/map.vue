<template>
	<view class="container">
		<view class="top">
			<input type="text" placeholder="请输入鱼塘地址" :value="searchKey" @input="search" />
			<scroll-view scroll-y="true" class="option" v-show="IsOption">
				<view class='column_item' v-for='(item,index) in data' :key='index' @click="tapOption(item)">{{item.title}}</view>
			</scroll-view>
		</view>
		<view class="page-section page-section-gap">
			<map style="width: 100%; height: 250rpx;" :latitude="latitude" :longitude="longitude" :markers="markers" @markertap="markertap"
			 @callouttap="callouttap">
			</map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 1, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 34.78479699542889,
				longitude: 113.6921348548889,
				scale: 5,
				markers: [{
						id: 1,
						latitude: 34.78579699542889,
						longitude: 113.6922348548889,
						iconPath: '../../static/app_plus/location@3x.png',
						title: '你好',
						// width: 15,
						// height: 16,
						callout: {
							content: '这是内容',
							color: 'red',
							fontSize: 28,
							borderRadius: 15,
							bgColor: 'orange',
							padding: 15,
							display: 'BYCLICK', //ALWAYS
							textAlign: 'left'
						},
						// label: {
						// 	// content: 'marker1',
						// 	color: '#ccc',
						// 	fontSize: 39,
						// 	x: 105,
						// 	y: 250,
						// 	borderWidth: 2,
						// 	borderColor: '#ccc',
						// 	borderRadius: 16,
						// }
					},
					{
						id: 2,
						latitude: 34.78479699542889,
						longitude: 113.6921348548889,
						iconPath: '../../static/app_plus/location@3x.png',
						title: '这是第二个',
						callout: {
							content: '这是内容',
							color: 'red',
							fontSize: 28,
							borderRadius: 15,
							bgColor: 'orange',
							padding: 15,
							display: 'BYCLICK', //ALWAYS
							textAlign: 'left'
						},
						// label: {
						// 	content: '测试2',
						// 	color: '#ccc',
						// 	fontSize: 38,
						// 	x: 105,
						// 	y: 250,
						// 	borderWidth: 2,
						// 	borderColor: '#ccc',
						// 	borderRadius: 16,
						// }
					}
				]
			};
		},
		methods: {
			markertap(e) {
				console.log(e.detail)
			},
			callouttap(e) {
				console.log(e.detail)
			},
			bindChange: function(e) {
				console.log(e)
			},
			// 搜索框
			search: function(e) {
				console.log(e)
				self.searchKey = e.detail.value
				var location = self.latitude + "," + self.longitude
				self.mapSearch(self.searchKey, location).then(res => {
					self.data = res.data
					if (self.searchKey && self.data.length) {
						self.IsOption = true
					} else {
						self.IsOption = false
					}

				}, error => {
					// self.$api.msg('请求失败')
					// console.log(error,"aaaaaaaaaaa");
				})

			},
			tapOption: function(item) {
				self.searchKey = item.title
				self.IsOption = false
				self.data = []
				var obj = {}
				obj.latitude = item.location.lat;
				obj.longitude = item.location.lng;
				// console.log(item,"danji",obj)
				self.toLocation(obj)
			},
			toLocation: function(obj) {
				self.mapCtx.moveToLocation(obj)
				self.mapCtx.translateMarker({
					markerId: 1,
					autoRotate: true,
					duration: 100,
					destination: {
						latitude: obj.latitude,
						longitude: obj.longitude,
					},
					animationEnd() {
						console.log('animation end')
					}
				})
			},
			// 
			mapSearch: function(keyword, location) {
				console.log(keyword, location, "keyword,location")
				let promise = new Promise(function(resolve, reject) {
					// 调用接口
					qqmapsdk.search({
						keyword: keyword, //搜索关键词
						location: location, //设置周边搜索中心点
						success: function(res) {
							resolve(res)
						},
						fail: function(res) {
							reject(res)
						}
					});
				})
				return promise

			},
		}
	}
</script>

<style lang="stylus">
	.container {
		width 100%;
		height 100%;
	}

	.top>input {
		height: 88rpx;
		width: 524rpx;
		margin: 40rpx auto 0;
		padding: 0 40rpx;
		border: solid 2rpx #BEBEBE;
	}

	.option {
		max-height: 300rpx;
		width: 100%;

		line-height: 60rpx;
		position: fixed;
		top: 128rpx;
		z-index: 99999;
	}

	.column_item {
		padding: 0 40rpx;
		height: 60rpx;
		width: 524rpx;
		overflow: hidden;
		margin: 0rpx auto;
		background-color: #fff;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.column_item:active {
		background-color: #8F8F94;
	}

	.page-section-gap {
		box-sizing: border-box;
		/* padding: 0 30rpx; */
		margin: 30rpx auto;
		width: 700rpx;
	}
</style>
