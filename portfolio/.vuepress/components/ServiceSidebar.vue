<template>
	<div class="sidebar" ref="sidebar">
		<div 
			v-if="sidebar" 
			class="sidebar__inner" 
			:class="{ 'sidebar--fixed': isFixed }" 
			v-bind:style="sidebarStyles">

			<h2 class="sidebar__title" v-if="sidebar.title">
				{{ sidebar.title }}
			</h2>
			<div class="sidebar__text" 
				v-if="sidebar.text" 
				v-html="sidebar.text">
			</div>
			<a class="btn sidebar__btn" href="/#contacto">
				{{ sidebar.btn_text }}
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			sidebar: {
				type: Object,
				required: true
			}
		},
		data: function () {
        return { 
					isFixed: false,
					scrollPosition: 0,
					sidebarStyles: {}
				};
		},
		methods: {
			updateScroll() {
				this.scrollPosition = window.scrollY;
				const headerHeight = document.getElementById('header').clientHeight;
				if (this.scrollPosition > headerHeight) {
					const sidebarTop = this.$refs.sidebar.offsetTop - headerHeight - 2;
					this.sidebarStyles.top = sidebarTop + 'px';
					this.isFixed = true;
				} else {
					this.isFixed = false;	
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', this.updateScroll);
		}
	}
</script>

<style scoped>

	.sidebar {
		width: 230px;
		min-width: 230px;
		margin-top: 50px;
	}

	.sidebar__inner {
		padding: 20px 15px;
		background-color: #ebebeb;
		width: 230px;
	}

	.sidebar__title {
		margin-bottom: 10px;
	}

	.sidebar__text {
		margin-bottom: 20px;	
	}

	.sidebar__btn {
		width: 100%;
	}

	@media screen and (min-width: 768px) {
		.sidebar--fixed {
			position: fixed;
			right: 42px;
		}	
	}

	@media screen and (min-width: 1366px) {
		.sidebar--fixed {
			position: fixed;
			right: calc((100vw - 1282px) / 2);	
		}	
	}
</style>