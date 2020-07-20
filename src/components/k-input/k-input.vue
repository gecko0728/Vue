<template>
	<div class="k-input">
		<input :type="type" :value="value" @input="$emit('input',$event.target.value)">
		<!-- <input :type="type" :value="value" @input="show($event)"> -->
		<span>{{label}}</span>
	</div>
</template>

<script>
	export default {
		name: 'k-input',
		props: {
			label: {
				type: String,
				default: '标题'
			},
			value: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'text'
			}
		},

		components: {},
		mounted() {

		},
		updated() {},
		methods: {
			show(e) {
			}
		}
	}
</script>

<style>
	.k-input {
		height: 0.95rem;
		position: relative;
		border-bottom: 1px solid #e5e7e8;
	}

	.k-input input {
		padding-left: 1.24rem;
		width: 4.54rem;
		height: 100%;
		font-size: 0.4rem;
	}

	.k-input span {
		width: 1.23rem;
		height: 0.49rem;
		position: absolute;
		top: 0.26rem;
		left: 0;
		border-right: 1px solid #676868;
		color: #676868;
		font-size: 0.25rem;
		line-height: 0.49rem;
		text-align: center;
	}
</style>
