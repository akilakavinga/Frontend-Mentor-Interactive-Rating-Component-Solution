<svelte:head>
	<title>Frontend Mentor | Interactive Rating Component</title>
</svelte:head>

<div class="container">
	<slot />
</div>
<div class="attribution">
	<span
		>Challenge by <a href="https://www.frontendmentor.io/?ref=challenge">Frontend Mentor</a></span
	>
	<span>Coded by <a href="https://github.com/akilakavinga">Akila Kavinga</a></span>
</div>

<style lang="scss">
	@use '../styles/' as *;

	:global(*, *::after, *::before) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: $overpass;
	}

	:global(body) {
		@include flexCol;
		height: 100vh;
		font-size: $bodyFz;
		background-color: $veryDarkBlue;
	}

	.container {
		background-color: $darkBlue;
		width: fit-content;
		padding: 2rem;
		border-radius: 1.75rem;
	}

	.attribution {
		background: $darkBlue;
		width: fit-content;
		margin-top: 20px;
		color: $lightGray;
		padding: 0.5rem 1.5rem;
		font-size: 0.8rem;
		border-radius: 1rem;

		a {
			color: $orange;
			transition: color 100ms;

			&:hover {
				color: $white;
			}
		}
	}
</style>
