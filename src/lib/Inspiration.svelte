<script lang="ts">
	import { onMount } from "svelte";
	import { observeElement, hackingAnimation } from "./animateOnScroll";
	import Shard from "./Shard.svelte";
	import CoolProjectLink from "./CoolProjectLink.svelte";

	let titleElement: HTMLDivElement;

	onMount(() => {
		observeElement(titleElement, () => {
			hackingAnimation(titleElement);
		});
	});
</script>

<div class="inspiration">
	<div class="title" bind:this={titleElement}>Other cool projects</div>
	<Shard />
	<div class="subtitle">
		// interesting projects and great YouTubers to always learn and discover new
		things
	</div>
	<div class="list">
		<CoolProjectLink
			name="Fireship"
			imagePath="fireship logo.png"
			link="https://www.youtube.com/@Fireship"
		/>
		<CoolProjectLink
			name="Hyperplexed"
			imagePath="hyperplexed logo.png"
			link="https://www.youtube.com/@Hyperplexed"
		/>
		<CoolProjectLink
			name="Jonas tyroller"
			imagePath="jonas tyroller logo.png"
			link="https://www.youtube.com/@JonasTyroller"
		/>
		<CoolProjectLink
			name="Pontypants"
			imagePath="pontypants logo.png"
			link="https://www.youtube.com/@Pontypants"
		/>
		<CoolProjectLink
			name="Gum"
			imagePath="gum logo.png"
			link="https://github.com/charmbracelet/gum"
		/>
		<CoolProjectLink
			name="Devdocs"
			imagePath="devdocs logo.png"
			link="https://github.com/freeCodeCamp/devdocs"
		/>
	</div>
</div>

<style>
	.inspiration {
		/* width: 100%; */
		min-height: calc(100vh - 133px * 2);
		/* background: #131313;
		color: #ffffff; */
		position: relative;
		overflow: hidden;
		padding: 133px 92px;
	}

	.title {
		/* position: absolute;
		top: 133px;
		left: 92px;
		right: 92px; */
		/* bottom: 492px; */
		font-size: 96px;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -2.88px;
		text-transform: uppercase;
	}

	.subtitle {
		/* position: absolute;
		top: 256px;
		left: 92px;
		right: 92px; */
		/* bottom: 397px; */
		margin-top: 22px;
		color: #a7a7a7;
		font-size: 32px;
		font-style: italic;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -1.92px;
	}

	.list {
		/* position: absolute;
		top: 403px;
		left: 92px;
		right: 92px; */
		/* bottom: 107px; */
		margin-top: 74px;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}

	@media (max-width: 820px) {
		.inspiration {
			padding: 133px 48px;
		}

		.title {
			font-size: 72px;
			line-height: 74px;
		}

		.subtitle {
			font-size: 24px;
		}
	}
</style>
