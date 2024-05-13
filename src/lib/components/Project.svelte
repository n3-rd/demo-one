<script lang="ts">
	import { backgroundColor, customCursor, preloader } from '$lib/stores';
	export let title: string;
	export let image: string;
	export let index: number;
	export let color: string;
	import { animate, scroll, inView, timeline } from 'motion';
	import { onDestroy, onMount } from 'svelte';
	import { imachi } from '../../imachi';
	import { goto } from '$app/navigation';

	let defaultColor = '#ffffff'; // Set a default background color
	let stopInView; // Variable to store the stop function

	onMount(async () => {
		await scroll(animate(`.pic-${index}`, { scale: [1, 1.3] }));
		inView(`.pic-${index}`, async (info) => {
			console.log(`in view of ${index}`, color);
			await backgroundColor.set(color);
		});
	});

	const navTO = () => {
		const sequence = [
			[
				`.title-${index}`,
				{
					transform: ['translateY(384px) skewY(15deg)', 'translateY(0px) skewX(0deg)']
				},
				{
					duration: 1,
					easing: 'ease-in-out'
				}
			],
			[
				`.title-${index}`,
				{
					transform: ['translateY(-384px) skewY(15deg)']
				},
				{
					duration: 5,
					easing: 'ease-in-out',
					offset: [0, 0.2, 1],
					delay: 1
				}
			]
		];

		timeline([
			[
				`.title-${index}`,
				{
					transform: ['translateY(420px) skewY(15deg)', 'translateY(0px) skewX(0deg)']
				},
				{
					duration: 1,
					easing: 'ease-in-out'
				}
			],
			[
				`.title-${index}`,
				{
					transform: ['translateY(-384px) skewY(15deg)']
				},
				{
					duration: 5,
					easing: 'ease-in-out',
					offset: [0, 0.2, 1],
					delay: 1
				}
			]
		]).finished.then(() => {
			goto(`/project`);
		});
	};
</script>

<div
	class="title serif flex h-screen items-center justify-center text-6xl font-bold uppercase md:text-8xl lg:text-[9vw]"
>
	<h1>{title}</h1>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={`image h-[75vh] w-auto pic-${index}`} on:click={() => navTO()}>
	<img
		src={image}
		alt={image}
		class="ukiyo pic-${index} h-full w-full cursor-pointer object-cover object-top lg:object-center"
		on:mouseenter={() => customCursor.set(true)}
		on:mouseleave={() => customCursor.set(false)}
		data-js-image-load
	/>

	<div
		class="aflex pointer-events-none absolute left-1/2 top-1/2 z-[999] h-fit -translate-x-1/2 -translate-y-1/2 transform overflow-hidden"
	>
		<p
			class={`serif title-${index} translate-y-96 text-4xl font-bold uppercase text-white md:text-6xl lg:text-[12vw]`}
		>
			{title}
		</p>
	</div>
</div>
