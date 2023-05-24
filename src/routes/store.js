import { writable } from "svelte/store";

export const feedback = writable({
    maxRating: 5,
    rating: 0,
});