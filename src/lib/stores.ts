import { writable } from 'svelte/store';

export const preloader = writable(true);
export const backgroundColor = writable('#10100e');
export const customCursor = writable(false);
