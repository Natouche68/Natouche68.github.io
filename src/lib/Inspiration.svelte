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
		width: 100%;
		height: 100vh;
		background: #131313;
		color: #ffffff;
		position: relative;
		overflow: hidden;
	}

	.title {
		position: absolute;
		top: 133px;
		left: 92px;
		right: 92px;
		/* bottom: 492px; */
		font-size: 96px;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -2.88px;
		text-transform: uppercase;
	}

	.subtitle {
		position: absolute;
		top: 256px;
		left: 92px;
		right: 92px;
		/* bottom: 397px; */
		color: #a7a7a7;
		font-size: 32px;
		font-style: italic;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -1.92px;
	}

	.list {
		position: absolute;
		top: 403px;
		left: 92px;
		right: 92px;
		/* bottom: 107px; */
		height: 216px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
