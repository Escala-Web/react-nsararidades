import styled from "styled-components";

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 2rem;

	.container_content {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.container_banner {
		flex: 1 1 55%;
		min-width: 300px;
	}

	.banner {
		background-color: ${({ theme }) => `${theme.accent}10`};
		height: 600px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
			max-height: 100%;
			object-fit: cover;
			border-radius: 12px;
			background-color: transparent;
		}
	}

	.prev_images {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;

		img {
			width: 70px;
			height: 70px;
			object-fit: cover;
			border: 2px solid transparent;
			border-radius: 8px;
			cursor: pointer;
			transition: border-color 0.3s ease;
			background-color: ${({ theme }) => `${theme.accent}20`};
		}

		img.active {
			border-color: ${({ theme }) => theme.primary};
		}
	}

	.aside {
		flex: 1 1 40%;
		min-width: 280px;
		/* height: auto; */
		height: 76vh;
		padding: 2rem;
		background-color: ${({ theme }) => theme.background};
		border-radius: 12px;
		box-shadow: 0 0 10px ${({ theme }) => `${theme.text_secondary}20`};
	}

	.content_container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		gap: 4rem;

		h3, h4 {
			font-size: 2rem;
			color: ${({ theme }) => theme.text_secondary};
		}
	}

	.infos {
		color: ${({ theme }) => theme.text_secondary};
		font-size: 15px;
	}

	.container_btns {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		.btn {
			padding: 0.85rem 2rem;
			border-radius: 6px;
			font-size: 1.1rem;
			cursor: pointer;
		}

		.conten {
			background-color: ${({ theme }) => theme.secondary};
			color: ${({ theme }) => theme.text_third};
		}

		.no_conten {
			color: ${({ theme }) => theme.secondary};
			border: 1px solid ${({ theme }) => theme.secondary};
		}
	}

	.description_content {
		margin-top: 4rem;
	}

	.card_relations {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 16px;
		padding: 16px;
	}

	.description {
		padding: 0 1rem
	}

	/* Responsividade */
	@media (max-width: 1200px) {

		.banner {
			height: 400px
		}

		.card_relations {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 900px) {
		.card_relations {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 600px) {
		.card_relations {
			grid-template-columns: repeat(2, 1fr);
		}

		.container_content {
			flex-direction: column;
		}

		.aside, .container_banner {
			width: 100%;
			flex: 1 1 100%;
			padding: 1rem;
		}
	}

	@media (max-width: 400px) {
		.card_relations {
			grid-template-columns: 1fr;
		}
	}
`;
