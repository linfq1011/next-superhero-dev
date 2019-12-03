<template name="trailerStars">
	<view class="movie-score-wapper">
		<!-- 
		<image src="../../static/image/icon/star-yellow.png" class="star-ico"></image>
		<image src="../../static/image/icon/star-yellow.png" class="star-ico"></image>
		<image src="../../static/image/icon/star-yellow.png" class="star-ico"></image>
		<image src="../../static/image/icon/star-yellow.png" class="star-ico"></image>
		<image src="../../static/image/icon/star-gray.png" class="star-ico"></image>
		<view class="movie-score">
			9.1
		</view>
		 -->
		<image v-for="yellow in yellowScore"
		 src="../../static/image/icon/star-yellow.png" class="star-ico"></image>
		<image v-for="gray in grayScore"
		 src="../../static/image/icon/star-gray.png" class="star-ico"></image>
		 <view class="movie-score" v-if="showNum == 1">
		 	{{innerScore}}
		 </view>
	</view>
</template>

<script>
	export default {
		name: "trailerStars",
		data() {
			return {
				yellowScore: 0,
				grayScore: 5
			};
		},
		props: {
			// 定义外部传入的分数
			innerScore: 0,
			// 是否显示具体的分数 1：显示，0：不显示
			showNum: 0
		},
		// 生命周期，组件创建完成后调用
		created() {
			var tempscore = 0;
			if (this.innerScore != null && this.innerScore != undefined && this.innerScore != '') {
				tempscore = this.innerScore;
			}
			
			var yellowScore = parseInt(tempscore / 2);
			var grayScore = 5 - yellowScore;
			
			this.yellowScore = yellowScore;
			this.grayScore = grayScore;
		}
	}
</script>

<style>
.movie-score-wapper {
	display: flex;
	flex-direction: row;
	margin-top: 6upx;
}

.star-ico {
	width: 20upx;
	height: 20upx;
}

.movie-score {
	font-size: 12px;
	color: gray;
	margin-left: 8upx;
}
</style>
