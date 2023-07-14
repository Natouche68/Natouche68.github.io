<script lang="ts">
	import { onMount } from "svelte";
	import { observeElement } from "./animateOnScroll";

	export let x: number = 56;
	export let y: number = 103;
	export let height: number = 156;

	let shardElement: HTMLDivElement;

	onMount(() => {
		observeElement(shardElement, () => {
			shardElement.animate(
				[
					{
						opacity: "0",
						transform: `translateX(${x / 2}px)`,
					},
					{
						opacity: "1",
						transform: "translateX(0)",
					},
				],
				{
					delay: 800,
					duration: 1200,
					easing: "ease",
					fill: "both",
				}
			);
		});
	});
</script>

<div
	class="shard"
	style:top={`${y}px`}
	style:left={`${x}px`}
	style:height={`${height}px`}
	bind:this={shardElement}
/>

<style>
	.shard {
		position: absolute;
		width: 3px;
		background: linear-gradient(transparent 0%, #00a3ff 50%, transparent 100%);
	}
</style>
