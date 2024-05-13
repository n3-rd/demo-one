<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { preloader } from '../stores';
	import imagesLoaded from 'imagesloaded';
	let progress = 0;
	onMount(() => {
		// Get all img elements
		const images = document.querySelectorAll('img');

		images.forEach((img) => {
			console.log(img);
		});

		let imgload = imagesLoaded(images, (instance) => {
			console.log('all images are loaded');
		});

		imgload.on('progress', (instance, image) => {
			progress = (instance.progressedCount / instance.images.length) * 100;
			console.log(progress);
			if (progress === 100) {
				preloader.set(false);
			}
		});
	});

	// Reactive statement
	$: {
		if (progress < 100) {
			setTimeout(() => {
				progress++;
			}, 1800);
		}
	}
</script>

{#if $preloader == true}
	<div
		class="absolute z-[999] h-screen min-w-full bg-[#10100e]"
		transition:fade={{ delay: 500, duration: 1000 }}
	>
		<div class="serif absolute bottom-4 text-[24vw]">
			<span>{progress}%</span>
		</div>
	</div>
{/if}
