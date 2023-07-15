<script lang="ts">
	import { onMount } from "svelte";
	import { observeElement, hackingAnimation } from "./animateOnScroll";
	import Shard from "./Shard.svelte";
	import Project from "./Project.svelte";

	let titleElement: HTMLDivElement;
	let scroll: number;
	let projectList: HTMLDivElement;
	let projectListXOffset: number;
	let windowHeight: number;
	let windowWidth: number;
	let projectsYOffset: number;

	function animateParallax() {
		const projectListYPosition = projectList.getBoundingClientRect().top;

		if (windowWidth < 820) {
			projectListXOffset = (projectListYPosition / windowHeight) * 150;
		} else {
			projectListXOffset = (projectListYPosition / windowHeight) * 100;
		}

		if (
			projectListYPosition <= 0 &&
			projectListYPosition >= -windowHeight * 6
		) {
			projectsYOffset = -projectListYPosition;
		}
	}

	onMount(() => {
		observeElement(titleElement, () => {
			hackingAnimation(titleElement);
		});
	});
</script>

<svelte:window
	bind:innerHeight={windowHeight}
	bind:innerWidth={windowWidth}
	bind:scrollY={scroll}
	on:scroll={animateParallax}
/>

<div class="projects">
	<div class="title" bind:this={titleElement}>Selected projects</div>
	<Shard />
	<div
		class="list"
		bind:this={projectList}
		style:transform={`translateX(${projectListXOffset}vw)`}
	>
		<Project
			name="Archery Scorer"
			initialNameCoords={{ x: 140, y: 250 }}
			initialImages={[
				{
					path: "projects screenshots/archery scorer.png",
					x: 0,
					y: 0,
					scale: 0.75,
				},
			]}
			bind:yOffset={projectsYOffset}
			link="https://archery-scorer.vercel.app/"
		/>
		<Project
			name="Archery Watch"
			initialNameCoords={{ x: -300, y: -200 }}
			initialImages={[
				{
					path: "projects screenshots/archery watch 1.png",
					x: -60,
					y: 0,
					scale: 0.5,
				},
				{
					path: "projects screenshots/archery watch 2.png",
					x: 400,
					y: 120,
					scale: 0.7,
				},
			]}
			bind:yOffset={projectsYOffset}
			link="https://archery-watch.vercel.app/"
		/>
		<Project
			name="Tic Tac Toe AI"
			initialNameCoords={{ x: 180, y: 100 }}
			initialImages={[
				{
					path: "projects screenshots/tic tac toe ai.png",
					x: 0,
					y: 0,
					scale: 0.5,
				},
			]}
			bind:yOffset={projectsYOffset}
			link="https://github.com/Natouche68/tic-tac-toe-ai"
		/>
		<Project
			name="Arcade Express"
			initialNameCoords={{ x: 360, y: -200 }}
			initialImages={[
				{
					path: "projects screenshots/arcade express.png",
					x: 0,
					y: 0,
					scale: 0.4,
				},
			]}
			bind:yOffset={projectsYOffset}
			link="https://arcade-express.vercel.app/"
		/>
		<Project
			name="Whimsy Sky"
			initialNameCoords={{ x: -320, y: -100 }}
			initialImages={[
				{
					path: "projects screenshots/whimsy sky 1.png",
					x: -50,
					y: 0,
					scale: 0.8,
				},
				{
					path: "projects screenshots/whimsy sky 2.png",
					x: 200,
					y: 100,
					scale: 0.6,
				},
			]}
			bind:yOffset={projectsYOffset}
			link="https://whimsy-sky.vercel.app/"
		/>
		<Project
			name="Theme Generator"
			initialNameCoords={{ x: -140, y: 250 }}
			initialImages={[
				{
					path: "projects screenshots/theme generator.png",
					x: 0,
					y: 0,
					scale: 0.5,
				},
			]}
			bind:yOffset={projectsYOffset}
			link="https://theme-generator.onrender.com/"
		/>
		<Project
			name="Some Games"
			initialNameCoords={{ x: 0, y: 0 }}
			initialImages={[
				{
					path: "projects screenshots/blur balls.png",
					x: 250,
					y: -130,
					scale: 0.2,
				},
				{
					path: "projects screenshots/isle invaders.png",
					x: 320,
					y: 120,
					scale: 0.3,
				},
				{
					path: "projects screenshots/cake clash.png",
					x: -380,
					y: -60,
					scale: 0.4,
				},
			]}
			bind:yOffset={projectsYOffset}
			link="https://natouche68.itch.io/"
		/>
	</div>
</div>

<style>
	.projects {
		height: calc(700vh + 367px);
		position: relative;
		overflow: hidden;
	}

	.title {
		margin: 133px 92px;
		font-size: 96px;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -2.88px;
		text-transform: uppercase;
	}

	.list {
		position: relative;
		height: 700vh;
		width: 700vw;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
	}

	@media (max-width: 820px) {
		.title {
			font-size: 56px;
			line-height: 58px;
			margin: 133px 48px;
		}

		.list {
			width: 1050vw;
		}
	}
</style>
