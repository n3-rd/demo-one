<script>
	import Noise from '$lib/components/Noise.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import { preloaderProgress } from '$lib/stores';
	import '../app.css';
</script>

<Noise />

{#if $preloaderProgress != 100}
	<Preloader />
{:else}
	<slot></slot>
{/if}

<style></style>
