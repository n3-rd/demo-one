<script lang="ts">
	import { backgroundColor, customCursor } from '$lib/stores';
	export let title: string;
	export let image: string;
	export let index: number;
	export let color: string;
	import { animate, scroll, inView } from 'motion';
	import { onDestroy, onMount } from 'svelte';

	let defaultColor = '#ffffff'; // Set a default background color
	let stopInView; // Variable to store the stop function

	onMount(async () => {
		await scroll(animate(`.pic-${index}`, { scale: [1, 1.3] }));
		stopInView = inView(`.pic-${index}`, async (info) => {
			console.log(`in view of ${index}`, color);
			await backgroundColor.set(color);

			// Return a function to handle the "out view" event
			return async () => {
				console.log(`out view of ${index}`);
				await backgroundColor.set(defaultColor);
			};
		});
	});

	// Clean up the IntersectionObserver when the component is unmounted
	onDestroy(() => {
		if (stopInView) stopInView();
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="title serif flex h-screen items-center justify-center text-[9vw] font-bold uppercase">
	<h1>{title}</h1>
</div>
<div class={`image h-[75vh] w-auto pic-${index}`}>
	<img
		src={image}
		alt={image}
		class="ukiyo pic-${index} h-full w-full object-cover object-center"
		on:mouseenter={() => customCursor.set(true)}
		on:mouseleave={() => customCursor.set(false)}
	/>
</div>
