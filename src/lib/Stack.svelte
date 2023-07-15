<script lang="ts">
	import { onMount } from "svelte";
	import { observeElement, hackingAnimation } from "./animateOnScroll";
	import Shard from "./Shard.svelte";

	let titleElement: HTMLDivElement;

	onMount(() => {
		observeElement(titleElement, () => {
			hackingAnimation(titleElement);
		});
	});
</script>

<div class="stack">
	<div class="title" bind:this={titleElement}>My stack</div>
	<Shard />
	<div class="list">
		<img src="javascript logo.png" alt="JavaScript logo" />
		<img src="svelte logo.png" alt="Svelte logo" />
		<img src="astro logo.png" alt="Astro logo" />
		<img src="typescript logo.png" alt="Typescript logo" />
		<img src="deno logo.png" alt="Deno logo" />
		<img src="godot logo.png" alt="Godot logo" />
		<img src="vscode logo.png" alt="Visual Studio Code logo" />

		<!-- Add again the first logos to repeat the animation -->
		<img src="javascript logo.png" alt="JavaScript logo" />
		<img src="svelte logo.png" alt="Svelte logo" />
		<img src="astro logo.png" alt="Astro logo" />
		<img src="typescript logo.png" alt="Typescript logo" />
		<img src="deno logo.png" alt="Deno logo" />
	</div>
</div>

<style>
	.stack {
		min-height: calc(100vh - 133px * 2);
		position: relative;
		overflow: hidden;
		padding: 133px 0;
	}

	.title {
		margin: 0 92px;
		font-size: 96px;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -2.88px;
		text-transform: uppercase;
	}

	@keyframes tools-list-anim {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(calc((256px + ((100vw - 256px * 5) / 5)) * -7));
		}
	}

	.list {
		margin-top: 128px;
		height: 256px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: calc((100vw - 256px * 5) / 5);

		animation: tools-list-anim 32s linear 0s infinite;
	}

	@media (max-width: 820px) {
		.stack {
			min-height: calc(100vh - 164px * 2);
			margin: 164px 0;
		}

		.title {
			margin: 0 48px;
			font-size: 56px;
			line-height: 58px;
		}

		.list {
			margin-top: 256px;
		}

		.list img {
			transform: scale(0.8);
		}
	}
</style>
