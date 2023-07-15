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
	export let link: string;

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
	<a
		class="name"
		style:top={`calc(50% + ${nameCoords.y}px)`}
		style:left={`calc(50% + ${nameCoords.x}px)`}
		href={link}
	>
		{name}
	</a>
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
		display: block;
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
		text-decoration: none;
		transition: background 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
	}

	.name:hover {
		background: #131313;
		color: #fff;
		box-shadow: 0px 0px 16px 4px #00a3ff;
	}

	img {
		position: absolute;
	}

	@media (max-width: 820px) {
		.project {
			transform: scale(0.7);
			width: 150vw;
		}
	}
</style>
