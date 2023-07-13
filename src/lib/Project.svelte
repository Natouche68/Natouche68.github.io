<script lang="ts">
	type Image = {
		path: string;
		x: number;
		y: number;
		scale: number;
	};

	export let name: string;
	export let initialNameCoords: { x: number; y: number };
	export let initialImages: Image[];
	export let yOffset: number;

	let nameCoords = structuredClone(initialNameCoords);
	let images = structuredClone(initialImages);

	let windowWidth: number;
	let projectElement: HTMLDivElement;

	function animateParallax() {
		const projectXPosition = projectElement.getBoundingClientRect().left;

		nameCoords.x = projectXPosition / 2 + initialNameCoords.x;

		images.forEach((image, index) => {
			if (index !== 0) {
				image.x = projectXPosition / 4 + initialImages[index].x;
			}
		});

		images = images;
	}
</script>

<svelte:window bind:innerWidth={windowWidth} on:scroll={animateParallax} />

<div class="project" style:top={`${yOffset}px`} bind:this={projectElement}>
	<div
		class="name"
		style:top={`calc(50% + ${nameCoords.y}px)`}
		style:left={`calc(50% + ${nameCoords.x}px)`}
	>
		{name}
	</div>
	{#each images as image}
		<img
			src={image.path}
			alt={"A screenshot of " + name}
			style:top={`calc(50% + ${image.y}px)`}
			style:left={`calc(50% + ${image.x}px)`}
			style:transform={`translate(-50%, -50%) scale(${image.scale})`}
		/>
	{/each}
</div>

<style>
	.project {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.name {
		position: absolute;
		padding: 24px;
		width: min-content;
		background: #ffffff;
		color: #131313;
		font-size: 42px;
		font-weight: 700;
		line-height: 100%;
		text-transform: uppercase;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	img {
		position: absolute;
	}
</style>
