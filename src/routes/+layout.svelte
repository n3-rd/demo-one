<script lang="ts">
	import Noise from '$lib/components/Noise.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import { preloaderProgress } from '$lib/stores';
	import '../app.css';
	import Lenis from 'lenis';
	import { onDestroy, onMount } from 'svelte';

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

{#if $preloaderProgress != 100}
	<Preloader />
{:else}
	<slot></slot>
{/if}

<style></style>
