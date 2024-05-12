import { writable } from 'svelte/store';

export const preloaderProgress = writable(0);

let intervalId: number | null | undefined = null;

export function startPreloader() {
	let progress = 0;
	preloaderProgress.set(progress);

	intervalId = setInterval(() => {
		progress += 1;
		preloaderProgress.set(progress);

		if (progress >= 100) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}, 50); // Adjust this value to control the speed of the preloader
}

export function stopPreloader() {
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	}
	preloaderProgress.set(100);
}
