<script lang="ts">
	import Project from "./Project.svelte";
</script>

<div class="projects">
	<div class="title">
		Selected projects

		<div class="shard" />
	</div>
	<div class="list">
		<Project
			name="Archery Scorer"
			nameCoords={{ x: 140, y: 250 }}
			images={[
				{
					path: "projects screenshots/archery scorer.png",
					x: 0,
					y: 0,
					scale: 0.75,
				},
			]}
		/>
		<Project
			name="Archery Watch"
			nameCoords={{ x: -300, y: -200 }}
			images={[
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
		/>
	</div>
</div>

<style>
	.projects {
		width: 100%;
		height: calc(100vh + 367px);
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
		/* bottom: 859px; */
		font-size: 96px;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -2.88px;
		text-transform: uppercase;
	}

	.shard {
		position: absolute;
		top: -30px;
		left: -36px;
		height: 156px;
		width: 3px;
		background: linear-gradient(#00a3ff00 0%, #00a3ff 50%, #00a3ff00 100%);
	}

	.list {
		position: absolute;
		bottom: 0;
		height: 100vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		transform: translateX(-100vw);
	}
</style>
