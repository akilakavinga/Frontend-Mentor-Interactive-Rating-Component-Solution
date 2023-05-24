<button type="submit">submit</button>

<style lang="scss">
	@use '../../styles/' as *;

	button {
		text-transform: uppercase;
		background-color: $orange;
		color: $white;
		font-weight: 500;
		font-size: 0.9rem;
		letter-spacing: 0.15rem;
		width: 100%;
		border-radius: 1.5rem;
		padding: 10px 0;
		cursor: pointer;
		transition: background-color 75ms, color 75ms;

		&:hover {
			background-color: $white;
			color: $orange;
		}
	}
</style>
