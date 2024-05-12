<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { preloaderProgress, startPreloader, stopPreloader } from '../stores';

	let progress = 0;
	preloaderProgress.subscribe((value) => {
		progress = value;
	});

	onMount(() => {
		startPreloader();
		// Simulate page load completion after 5 seconds
		setTimeout(() => {
			stopPreloader();
		}, 5000);
	});
</script>

{#if progress < 100}
	<div
		class="absolute z-[999] h-screen min-w-full"
		transition:fade={{ delay: 500, duration: 1000 }}
	>
		<div class="serif absolute bottom-4 text-[24vw]">
			<span>{progress}%</span>
		</div>
	</div>
{:else}
	<div class="absolute z-[999] h-screen min-w-full transition-all duration-200 ease-in-out">
		<div class="serif absolute bottom-4 text-[24vw]">
			<span>100%</span>
		</div>
	</div>
{/if}
