<script>
	import RatingButton from './components/RatingButton.svelte';
	import SubmitButton from './components/SubmitButton.svelte';
	import { feedback } from './store';
</script>

<main class="feedback">
	<img class="feedback__logo" src="/icon-star.svg" alt="star icon" />
	<h1 class="feedback__heading">How did we do?</h1>
	<p class="feedback__details">
		Please let us know how we did with your support request. All feedback is appreciated to help us
		improve our offering!
	</p>
	<form action="" class="feedback__form">
		<div class="feedback__form__btn-container">
			{#each Array($feedback.maxRating) as _, index}
				<RatingButton {index} />
			{/each}
		</div>
		<a href="/thank-you">
			<SubmitButton />
		</a>
	</form>
</main>

<style lang="scss">
	@use '../styles' as *;

	.feedback {
		max-width: 21.4rem;

		&__logo {
			padding: 14px;
			border-radius: 50%;
			background-color: $lighterDarkBlue;
		}

		&__heading {
			color: $white;
			padding-top: 1rem;
			padding-bottom: 0.5rem;
		}

		&__details {
			color: $lightGray;
			line-height: 1.3rem;
		}

		&__form {
			&__btn-container {
				@include flexRow;
				justify-content: space-between;
				padding-top: 1.5rem;
				padding-bottom: 1.75rem;
			}
		}
	}
</style>
