<script lang="ts">
	import { onMount } from "svelte";
	import { observeElement, hackingAnimation } from "./animateOnScroll";
	import Shard from "./Shard.svelte";

	let titleElement: HTMLDivElement;
	let textElement: HTMLDivElement;

	onMount(() => {
		observeElement(titleElement, () => {
			hackingAnimation(titleElement);
		});
		observeElement(textElement, () => {
			textElement.animate(
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
					delay: 800,
					duration: 600,
					easing: "cubic-bezier(0.5, 0, 0.5, 1)",
					fill: "both",
				}
			);
		});
	});
</script>

<div class="about">
	<div class="title" bind:this={titleElement}>About Natouche68</div>
	<Shard />
	<div class="text" bind:this={textElement}>
		<p>
			I design and develop web apps and simple games in my free time, just for
			fun. I like to create small experiments and discover new tools and
			designs.
		</p>
		<p>I learned web and game development by watching tutorials on YouTube.</p>
		<p>I also love rabbits, they are so cute !</p>
	</div>
</div>

<style>
	.about {
		min-height: calc(100vh - 133px * 2);
		position: relative;
		overflow: hidden;
		padding: 133px 92px;
	}

	.title {
		font-size: 96px;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -2.88px;
		text-transform: uppercase;
	}

	.text {
		margin-top: 92px;
		font-family: "Inter", Arial, Helvetica, sans-serif;
		font-size: 42px;
		font-weight: 400;
		line-height: 100%;
	}

	.text p {
		margin: 16px 0;
		padding: 0;
	}

	@media (max-width: 820px) {
		.about {
			padding: 133px 48px;
		}

		.title {
			font-size: 56px;
			line-height: 58px;
		}

		.text {
			font-size: 24px;
			line-height: 130%;
		}
	}
</style>
