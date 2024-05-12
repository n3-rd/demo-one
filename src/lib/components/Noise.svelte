<script lang="ts">
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;

	const noise = () => {
		let ctx: CanvasRenderingContext2D | null;

		let wWidth: number, wHeight: number;

		let noiseData: any[] = [];
		let frame = { value: 0 };

		let loopTimeout: number | undefined;

		// Create Noise
		const createNoise = () => {
			const idata = ctx!.createImageData(wWidth, wHeight);
			const buffer32 = new Uint32Array(idata.data.buffer);
			const len = buffer32.length;

			for (let i = 0; i < len; i++) {
				if (Math.random() < 0.5) {
					buffer32[i] = 0xff000000;
				}
			}

			noiseData.push(idata);
		};

		// Play Noise
		const paintNoise = (frame: { value: number }) => {
			if (frame.value === 9) {
				frame.value = 0;
			} else {
				frame.value++;
			}

			ctx!.putImageData(noiseData[frame.value], 0, 0);
		};

		// Loop
		const loop = () => {
			paintNoise(frame);

			loopTimeout = window.setTimeout(() => {
				window.requestAnimationFrame(loop);
			}, 1000 / 25);
		};

		// Setup
		const setup = () => {
			wWidth = window.innerWidth;
			wHeight = window.innerHeight;

			canvas!.width = wWidth;
			canvas!.height = wHeight;

			for (let i = 0; i < 10; i++) {
				createNoise();
			}

			loop();
		};

		// Init
		const init = (() => {
			ctx = canvas.getContext('2d');

			setup();
		})();
	};
	onMount(() => {
		noise();
	});
</script>

<canvas
	id="noise"
	class="noise min-w-screen pointer-events-none fixed z-30 h-screen opacity-10"
	bind:this={canvas}
></canvas>
