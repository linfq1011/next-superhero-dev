<template>
	<view class="page">
		
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item>
				<!-- 图片尺寸：750 * 440 -->
				<image src="../../static/image/carousel/fulian4.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/image/carousel/zhizhuxia.jpeg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/image/carousel/ironman.jpg" class="carousel"></image>
			</swiper-item>
		</swiper>
		
		<!-- 热门超英 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/image/icon/hot.png" class="hot-ico"></image>
				<view class="hot-title">热门超英</view>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="page-block hot">
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="7.2" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/image/poster/zzxyxyz.jpg" class="poster"></image>
					<view class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<trailerStars innerScore="9.1" showNum="1"></trailerStars>
				</view>
			</view>
		</scroll-view>
		
		<!-- 热门超英 end -->
	</view>
</template>

<script>
	// 导入自定义组件
	import trailerStars from "../../components/trailerStars.vue";
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			trailerStars
		}
	}
</script>

<style>
	@import url("index.css");
</style>
