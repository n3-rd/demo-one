<script lang="ts">
	import Noise from '$lib/components/Noise.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import { preloader } from '$lib/stores';
	import '../app.css';
	import Lenis from 'lenis';
	import { onDestroy, onMount } from 'svelte';
	let progress = 0;

	onMount(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<Noise />

<Preloader />
<div class="main">
	<slot></slot>
</div>

<style></style>
