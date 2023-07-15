<div class="footer">
	<div class="author">// made with ❤ by Natouche68</div>
	<div class="social">
		<a href="https://github.com/Natouche68">
			<img src="github logo.png" alt="GitHub" />
		</a>
		<a href="https://natouche68.itch.io/">
			<img src="itch logo.png" alt="Itch.io" />
		</a>
		<a href="https://codepen.io/Natouche68">
			<img src="codepen logo.png" alt="Codepen" />
		</a>
		<a href="https://www.youtube.com/@natouche68">
			<img src="youtube logo.png" alt="YouTube" />
		</a>
	</div>
	<div class="copyright">©2023 Natouche68</div>
</div>

<style>
	.footer {
		min-height: 380px;
		/* width: 100%; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 55px 0;
		/* background: #131313; */
		color: #a7a7a7;
	}

	.author {
		font-size: 32px;
		font-style: italic;
		font-weight: 700;
		line-height: 100%;
		letter-spacing: -1.92px;
		text-align: center;
		padding: 0 48px;
	}

	.social {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 64px;
	}

	.social img {
		height: 64px;
		width: 64px;
		transition: all 0.3s cubic-bezier(0.75, 0, 0.25, 1.5);
	}

	.social img:hover {
		transform: scale(1.2);
	}

	.copyright {
		font-size: 32px;
		font-weight: 400;
		line-height: 100%;
		letter-spacing: -2.56px;
	}

	@media (max-width: 820px) {
		.author {
			font-size: 24px;
		}

		.social {
			margin: 64px 0;
			flex-direction: column;
		}

		.social img {
			transform: scale(0.8);
		}

		.social img:hover {
			transform: scale(1);
		}

		.copyright {
			font-size: 24px;
		}
	}
</style>
