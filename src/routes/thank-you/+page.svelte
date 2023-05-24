<script>
	import { feedback } from '../store';

	let rateMsg = '';

	if ($feedback.rating) {
		rateMsg = `You selected ${$feedback.rating} out of ${$feedback.maxRating}`;
	} else {
		rateMsg = "You've chosen not to rate";
	}
</script>

<section>
	<a href="/">
		<img src="illustration-thank-you.svg" alt="thank you icon" />
	</a>

	<h3 class="rating">{rateMsg}</h3>
	<h1>Thank you!</h1>
	<p>
		We appreciate you taking the time to give a rating. if you ever need more support, don't
		hesitate to get in touch!
	</p>
</section>

<style lang="scss">
	@use '../../styles' as *;

	section {
		@include flexCol;
		max-width: 21.4rem;
		text-align: center;
		padding: 0.7rem 0;

		h3 {
			color: $orange;
			font-weight: 400;
			font-size: 0.9rem;
			background-color: $lighterDarkBlue;
			padding: 0.3rem 1rem;
			border-radius: 1rem;
			margin: 1.75rem;
		}

		h1 {
			color: $white;
		}

		p {
			color: $lightGray;
			margin-top: 0.5rem;
		}
	}
</style>
