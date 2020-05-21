<template>
	<div class="sidebar" :class="{ 'sidebar--fixed': isFixed }">
		<div v-if="sidebar" class="sidebar__inner">
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
					scrollPosition: 0
				};
		},
		methods: {
			updateScroll() {
				this.scrollPosition = window.scrollY;
				if (this.scrollPosition > 101) {
					this.isFixed = true;
				} else {
					this.isFixed = false;	
				}
				console.log(this.scrollPosition);
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

	.sidebar--fixed {
		position: fixed;
		right: 0;
	}

	.sidebar__inner {
		padding: 20px 15px;
		background-color: #ebebeb;
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
</style>