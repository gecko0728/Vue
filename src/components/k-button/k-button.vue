<template>
	<div class="k-button">
		<button class="login-btn" :style="{background:bgColor}" @click="$emit('click')">{{ text }}</button>
	</div>
</template>

<script>
	export default {
		name: 'k-button',
		props: {
			text: {
				type: String,
				default: '按 钮'
			},
			bgColor: {
				type: String,
				default: '#4c4'
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	};
</script>

<style scoped>
	.k-button {}

	.login-btn {
		width: 4.65rem;
		height: 0.65rem;
		background: #4c4;
		color: #fff;
		text-align: center;
		line-height: 0.65rem;
		border-radius: 8px;
		display: block;
		margin-top: 0.62rem;
		font-size: 0.28rem;
		border: none;
		outline: none;
	}
</style>
