<script>
	import { feedback } from '../store';

	export let index = 0;
	$: isSelected = $feedback.rating === index + 1;

	const handleClick = () => {
		feedback.update((store) => ({
			...store,
			rating: index + 1
		}));
	};
</script>

<button class:selected={isSelected} on:click={handleClick}>{index + 1}</button>

<style lang="scss">
	@use '../../styles/' as *;

	.selected {
		background: $mediumGray;
		color: $white;
	}

	button {
		@include flexRow;
		border: none;
		width: 1.25rem;
		height: 1.25rem;
		font-size: 1rem;
		padding: 1.5rem;
		border-radius: 50%;
		background-color: $lighterDarkBlue;
		color: $lightGray;
		cursor: pointer;
		transition: background-color 50ms, color 50ms;

		&:hover {
			background-color: $orange;
			color: $white;
		}
	}
</style>
