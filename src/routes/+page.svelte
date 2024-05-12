<script>
	import Info from '$lib/components/Info.svelte';
	import Project from '$lib/components/Project.svelte';
	import { backgroundColor } from '$lib/stores';
	import { onMount } from 'svelte';
	import Ukiyo from 'ukiyojs';
	import { classList, style } from 'svelte-body';
	import { animate, scroll } from 'motion';
	const projects = [
		{
			title: 'Givenchy',
			image: '/img/img-1.jpg',
			index: 0,
			color: '#10100e'
		},
		{
			title: 'Prada',
			image: '/img/img-2.jpg',
			index: 1,
			color: '#eb894f'
		},
		{
			title: 'Dior',
			image: '/img/img-3.jpg',
			index: 2,
			color: '#29231a'
		},
		{
			title: 'Louis Vuitton',
			image: '/img/img-4.jpg',
			index: 3,
			color: '#b8b8b8'
		}
	];
	onMount(() => {
		const instance = new Ukiyo('.ukiyo', {
			speed: 4.5,
			willChange: true
		});

		scroll(
			animate('.info', {
				scale: [1.3, 0.8]
			})
		);

		// instance.destroy();
	});
</script>

<!-- <div class="display flex min-w-full flex-col gap-4">
	<div class="main-text text-[20vw] font-bold">N3RD.</div>
	<div class="pic h-[64rem] min-w-full rounded-t-3xl">
		<img
			src="/img/projects.gif"
			class="h-full w-full rounded-t-3xl object-cover object-center"
			alt="projects"
		/>
	</div>
</div> -->
<svelte:body
	use:style={`background-color: ${$backgroundColor};`}
	use:classList={`transition-colors duration-300 ease-in-out will-change-auto`}
/>
<!-- <svelte:body  /> -->

<div class="min-w-screen page relative flex items-center justify-center">
	<Info />

	<div class="filler z-20 mt-[100vh] h-[333vh]">
		<section class="flex min-w-full flex-col items-center justify-center gap-6">
			{#each projects as project}
				<Project
					title={project.title}
					image={project.image}
					index={project.index}
					color={project.color}
				/>
			{/each}
		</section>
	</div>
</div>
