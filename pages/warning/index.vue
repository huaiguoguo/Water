<template>
	<view class="container">
		<view class="list" v-for="(items, index) in list">
			<view class="item" v-for="(item_item, item_index) in items">
				<view class="item-label">
					<text>{{item_item.label}}</text>
				</view>
				<view class="item-content">
					<text>{{item_item.content}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					[{
							label: '设备间',
							content: '西山大力水厂1号罐'
						},
						{
							label: '报警类型',
							content: '普通'
						},
						{
							label: '报警内容',
							content: '1号罐压力表压力增高60s'
						},
						{
							label: '报警时间',
							content: '2020-09-11 15:48'
						},
					],
					[{
							label: '设备间',
							content: '西山大力水厂1号罐'
						},
						{
							label: '报警类型',
							content: '普通'
						},
						{
							label: '报警内容',
							content: '1号罐压力表压力增高60s'
						},
						{
							label: '报警时间',
							content: '2020-09-11 15:48'
						},
					]
				]
			};
		},
		onLoad() {
			this.getList();
		},
		methods: {
			getList() {
				console.log('uni.request start ===================');
				uni.request({
					url: "http://console.rigo.io/graphql",
					method: "POST",
					data: {
						"query": "query ($pageInfo: PageInfo, $filter: String) {deviceEvents: getAllDeviceEvents(filter: $filter, pageInfo: $pageInfo) {count,nodes {id,eventName,identifier,property {attrId,attrName,value,dataType {id,value,name},dataSpecsList {name,value}},status,description,createdAt,updatedAt}}}",
						"variables": {
							"pageInfo": {
								"offset": 0,
								"limit": 100,
								"orderBy": [
									["createdAt", "desc"]
								]
							},
							filter: "{\"device\":\"5c3952183e85fd002b257a79\"}"
						}
					},
					complete: function() {

					},
					success: function(res) {
						console.log(res);
					},
					fail: function(err) {
						console.log("error===============start")
						console.log(err)
						console.log("error===============end")
					}
				})
				console.log('uni.request end ===================');
			}
		}
	}
</script>

<style lang="stylus">
	.container {
		.list {
			padding 40rpx 27rpx;
			// background-color orange;
			border-bottom 8rpx solid #D8D8D8;


			.item {
				width 100%;
				height 100%;
				// background-color red;
				display flex;
				flex-direction row;
				justify-content flex-start;
				align-items center;

				&:nth-child(n+2) {
					margin-top 30rpx;
				}

				.item-label {
					text {
						font-size: 28rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #000000;
					}
				}

				.item-content {
					margin-left 77rpx;

					text {
						font-size: 28rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #000000;
					}
				}
			}
		}
	}
</style>
