<template>
	<div class="app-container">
		
		<!-- header start -->
		<mt-header fixed title="阿里云创新中心·Vue项目"></mt-header>
		<!-- header end -->
		<!-- router-view start -->
		<transition>
			<router-view></router-view>
		</transition>	
		<!-- router-view end -->
		<!-- footer start -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		<!-- footer end -->
	</div>
	
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.app-container {
		padding-top:40px;
		overflow-x:hidden;//处理动画导航出现滚动 其实是出现滚动条的原因
	}
	.v-enter {
		opacity:0;
		transform:translateX(100%);
	}
	//v-enter 与 v-leave-to 得分开因为要左边进入 右边出去
	.v-leave-to {
		opacity:0;
		transform:translateX(-100%);
		position:absolute;//处理进入后跳动问题 把出去的脱离文档流
	}
	.v-enter-active,
	.v-leave-active {
		transition:all .5s ease;
	}
</style>
