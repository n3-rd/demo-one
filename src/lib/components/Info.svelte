<script lang="ts">
	import { animate, scroll } from 'motion';
	import { onMount } from 'svelte';
	let star;

	onMount(() => {
		scroll(
			animate('.star', {
				rotate: [0, 360],
				scale: [1, 1.5],
				duration: 1000,
				loop: true,
				ease: 'linear'
			})
		);
	});
</script>

<div
	class="info min-w-screen fixed inset-0 z-0 flex flex-col items-center justify-center gap-4 text-xl uppercase"
>
	<div class="flex w-72 flex-col gap-2">
		<span class="flex justify-between">
			<div class="name">Godwin Jemegah</div>
			<div class="star text-6xl font-bold" bind:this={star}>*</div>
		</span>
		<span>Frontend Developer</span>
		<span class="flex justify-between">
			<div class="name">Projects</div>
			<div class="name">-</div>
			<div class="name">Demo</div>
		</span>
	</div>
	<div class="contact flex w-72 justify-between">
		<a href="/">info</a>
		<a href="/">Contact</a>
	</div>
</div>
