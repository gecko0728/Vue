<template>
	<div class="k-cell">
		<div @click="toDetail">
			<h2><span v-show="index !=null">{{index +1}}.</span>{{data.title}}</h2>
			<p>{{data.des}}</p>
		</div>
		<a v-if="isAdd" href="javascript:;" @click="$emit('add-item')">+</a>
	</div>
</template>

<script>
	export default {
		name: 'k-cell',
		props: {
			data: {
				type: Object,
				required: ture
			},
			index: {
				type: Number,
				default: null
			},
			collectionName: {
				type: String,
				default: null
			},
			isAdd: {
				type: Boilean,
				default: false
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			toDetail() {
				if (this.collectionName) {
					this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
				}
			}
		}
	}
</script>

<style scoped>
	.k-cell {
		position: relative;
		color: #494d4d;
		width: 6.4rem;
		margin: 0 auto;
		clear: both;
		padding: 0.2rem 0.4rem;
		border-bottom: 1px dashed #ccc;
	}

	.k-cell:active {
		background: #ccc;
	}

	.k-cell h2 {
		max-height: 0.9rem;
		font-size: 0.33rem;
		overflow: hidden;
	}

	.k-cell p {
		max-height: 1.8rem;
		margin-top: 0.05rem;
		overflow: hidden;
	}

	.k-cell>a {
		position: absolute;
		right: 1rem;
		top: 50%;
		width: 20px;
		height: 20px;
		color: #fff;
		font-weight: bold;
		margin-top: -5px;
		border-radius: 50%;
		background-color: #494D4D;
		text-align: center;
	}
</style>
