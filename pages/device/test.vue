<template>
	<view class="container">
		<!-- <web-view src="http://localhost:3000"></web-view> -->
		<view id="mapContainer" style="width: 100%; height: 300px;"></view>
	</view>
</template>

<script>
	import AMapLoader from '@amap/amap-jsapi-loader';
	export default {
		data() {
			return {
				markers: [],
				poisdatas: [],
				title: 'map',
				map: null,
				enableZoom: true,
				latitude: 34.789689,
				longitude: 113.698686,
				SRC: '111111111111',
				polyline: [{
					points: [{
							latitude: 34.789689,
							longitude: 113.698686,
						},
						{
							latitude: 34.789689,
							longitude: 113.698686,
						},
					],
					color: "#00ff22",
					width: 200,
					dottedLine: true,
					arrowLine: true,
				}],
			}
		},
		onReady(options) {
			console.log('-===============START');
			// var nmap = uni.createMapContext("navmap",this);
			// console.log(nmap);
			console.log('-===============END');
		},
		onLoad() {
			this.getAMap();
		},
		methods: {
			getAMap: function() {
				AMapLoader.load({
					key: "04af9fa6750c53530d457852d67b4656",
					version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
					plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
					AMapUI: { // 是否加载 AMapUI，缺省不加载
						version: '1.1', // AMapUI 缺省 1.1
						plugins: [], // 需要加载的 AMapUI ui插件
					},
					// Loca: { // 是否加载 Loca， 缺省不加载
					// 	version: '1.3.2' // Loca 版本，缺省 1.3.2
					// },
				}).then((AMap) => {
					this.map = new AMap.Map('mapContainer', {
						resizeEnable: true,
						center: [116.481181, 39.989792],
						zoom: 16,
						enableZoom: true
					});
					this.addMarker();
					console.log('==========map start');
					console.log(this.map);
					console.log('==========map end');
				}).catch(e => {
					console.log(e);
				})
			},
			addMarker: function() {
				var map = this.map;
				map.clearMap();
				var marker = new AMap.Marker({
					map: map,
					position: [116.481181, 39.989792]
				});

				var that = this;
				//实例化信息窗体
				var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
					content = [];
				content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
				content.push("电话：010-64733333");
				content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
				var infoWindow = new AMap.InfoWindow({
					isCustom: true, //使用自定义窗体
					content: that.createInfoWindow(title, content.join("<br/>")),
					offset: new AMap.Pixel(16, -45)
				});


				//鼠标点击marker弹出自定义的信息窗体
				map.event.addListener(marker, 'click', function() {
					infoWindow.open(map, marker.getPosition());
				});
			},
			createInfoWindow: function(title, content) {
				var info = document.createElement("div");
				info.className = "custom-info input-card content-window-card";

				//可以通过下面的方式修改自定义窗体的宽高
				//info.style.width = "400px";
				// 定义顶部标题
				var top = document.createElement("div");
				var titleD = document.createElement("div");
				var closeX = document.createElement("img");
				top.className = "info-top";
				titleD.innerHTML = title;
				closeX.src = "https://webapi.amap.com/images/close2.gif";
				top.onclick = this.closeInfoWindow;

				top.appendChild(titleD);
				top.appendChild(closeX);
				info.appendChild(top);

				// 定义中部内容
				var middle = document.createElement("div");
				middle.className = "info-middle";
				middle.style.backgroundColor = 'white';
				middle.innerHTML = content;
				info.appendChild(middle);

				// 定义底部内容
				var bottom = document.createElement("div");
				bottom.className = "info-bottom";
				bottom.style.position = 'relative';
				bottom.style.top = '0px';
				bottom.style.margin = '0 auto';
				var sharp = document.createElement("img");
				sharp.src = "https://webapi.amap.com/images/sharp.png";
				bottom.appendChild(sharp);
				info.appendChild(bottom);
				return info;
			},
			closeInfoWindow: function() {
				console.log(this.map)
				this.map.clearInfoWindow();
			}
		}
	}
</script>

<style>
	html,
	body,
	.container {
		height: 100%;
		width: 100%;
	}
	
	
	#mapContainer{
		height: 100%;
		width: 100%;
	}

	.content-window-card {
		position: relative;
		box-shadow: none;
		bottom: 0;
		left: 0;
		width: auto;
		padding: 0;
	}

	.content-window-card p {
		height: 2rem;
	}

	.custom-info {
		border: solid 1px silver;
	}

	div.info-top {
		position: relative;
		background: none repeat scroll 0 0 #F9F9F9;
		border-bottom: 1px solid #CCC;
		border-radius: 5px 5px 0 0;
	}

	div.info-top div {
		display: inline-block;
		color: #333333;
		font-size: 14px;
		font-weight: bold;
		line-height: 31px;
		padding: 0 10px;
	}

	div.info-top img {
		position: absolute;
		top: 10px;
		right: 10px;
		transition-duration: 0.25s;
	}

	div.info-top img:hover {
		box-shadow: 0px 0px 5px #000;
	}

	div.info-middle {
		font-size: 12px;
		padding: 10px 6px;
		line-height: 20px;
	}

	div.info-bottom {
		height: 0px;
		width: 100%;
		clear: both;
		text-align: center;
	}

	div.info-bottom img {
		position: relative;
		z-index: 104;
	}

	span {
		margin-left: 5px;
		font-size: 11px;
	}

	.info-middle img {
		float: left;
		margin-right: 6px;
	}
</style>
