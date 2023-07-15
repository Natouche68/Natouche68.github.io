<script lang="ts">
	import { onMount } from "svelte";
	import { observeElement, hackingAnimation } from "./animateOnScroll";
	import Shard from "./Shard.svelte";

	let titleElement: HTMLDivElement;
	let subtitleElement: HTMLDivElement;
	let continueElement: HTMLDivElement;

	onMount(() => {
		observeElement(titleElement, () => {
			hackingAnimation(titleElement);
		});
		observeElement(subtitleElement, () => {
			subtitleElement.animate(
				[
					{
						transform: "translateX(-25%)",
						opacity: "0",
						filter: "blur(4px)",
					},
					{
						transform: "translateX(0)",
						opacity: "1",
						filter: "blur(0)",
					},
				],
				{
					delay: 1100,
					duration: 600,
					easing: "cubic-bezier(0.5, 0, 0.5, 1)",
					fill: "both",
				}
			);
		});
		observeElement(continueElement, () => {
			continueElement.animate(
				[
					{
						transform: "translateY(100%)",
						opacity: "0",
					},
					{
						transform: "translateY(0)",
						opacity: "1",
					},
				],
				{
					delay: 1900,
					duration: 400,
					easing: "cubic-bezier(0.75, 0, 0.25, 1)",
					fill: "both",
				}
			);
		});
	});
</script>

<div class="hero">
	<div class="title" bind:this={titleElement}>
		Hi,<br />
		I'm Natouche68
	</div>
	<Shard height={334} />
	<div class="subtitle" bind:this={subtitleElement}>
		Self-taught web developer
	</div>
	<div class="continue" bind:this={continueElement}>// scroll to contiune</div>
</div>

<style>
	.hero {
		/* width: 100%; */
		min-height: calc(100vh - 148px * 2);
		/* background: #131313;
		color: #ffffff; */
		position: relative;
		overflow: hidden;
		padding: 148px 92px;
	}

	.title {
		/* position: absolute;
		top: 148px;
		left: 92px;
		right: 92px; */
		/* bottom: 331px; */
		font-size: 112px;
		font-weight: 700;
		line-height: 115px;
		letter-spacing: -3.36px;
		text-transform: uppercase;
	}

	.subtitle {
		/* position: absolute;
		top: 395px;
		left: 92px;
		right: 92px; */
		/* bottom: 289px; */
		text-align: right;
		font-size: 32px;
		font-weight: 700;
		line-height: 100%;
		text-transform: capitalize;
	}

	.continue {
		position: absolute;
		/* top: 657px; */
		left: 0;
		right: 0;
		bottom: 29px;
		text-align: center;
		font-size: 32px;
		font-style: italic;
		font-weight: 400;
		line-height: 100%;
		letter-spacing: -1.92px;
		color: #a7a7a7;
	}

	@media (max-width: 820px) {
		.hero {
			min-height: calc(100vh - 196px * 2);
			padding: 196px 48px;
		}

		.title {
			font-size: 56px;
			line-height: 58px;
		}

		.subtitle {
			font-size: 16px;
			margin-top: 8px;
		}

		.continue {
			font-size: 16px;
		}
	}
</style>
