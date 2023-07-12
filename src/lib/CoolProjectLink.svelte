<script lang="ts">
	export let name: string;
	export let imagePath: string;
	export let link: string;
</script>

<a class="cool-project-link" href={link}>
	<div class="name">
		{name}
	</div>
	<img src={imagePath} alt={name + ' logo'} class="image" />
</a>

<style>
	.cool-project-link {
		display: block;
		height: 216px;
		width: 216px;
		position: relative;
		border-radius: 50%;
	}

	.name {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: 32px;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -1.92px;
		text-transform: uppercase;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		transition: all 0.4s cubic-bezier(0.75, 0, 0.25, 1.5);
	}

	.cool-project-link:hover .name {
		transform: scale(0);
	}

	.image {
		position: absolute;
		top: 4px;
		left: 4px;
		right: 4px;
		bottom: 4px;
		height: 216px;
		width: 216px;
		border-radius: 50%;
		border: 8px solid #fff;
		transform: scale(0);
		transition: all 0.4s cubic-bezier(0.75, 0, 0.25, 1.5);
	}

	.cool-project-link:hover .image {
		transform: scale(1);
	}
</style>
