import styled from "styled-components";

export const Container = styled.div`
	min-height: 86vh;

	overflow: hidden;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	margin-top: 1rem;

	padding-bottom: 4rem;

	.container {
		display: flex;
		align-items: start;
		gap: 1rem;

		@media (max-width: 1100px) {
			display: flex;
			flex-direction: column;
		}
	}

	.container_qtd {
		display: flex;
		flex-direction: column;
		gap: 10px;

		p {
			color: ${({ theme }) => theme.text_secondary};
		}
	}

	.container_content {
		/* height: 70vh; */
		width: 100%;

		padding: 1rem 2rem;

		box-sizing: border-box;
		display: flex;

		gap: 2rem;

		flex-direction: column;
		justify-content: center;

		border-radius: 6px;

		/* box-shadow: 0 0 7px ${({ theme }) => `${theme.secondary}50`}; */

		h4 {
			font-size: 2rem;
			color: ${({ theme }) => theme.text_secondary};
		}

		span {
			font-size: 14px;
			color: ${({ theme }) => theme.text_secondary};
		}
	}

	.infos_aside {
		color: ${({ theme }) => theme.text_secondary};

		p > strong {
			opacity: .9
		}
	}

	.container_variations {
		/* background-color: aquamarine; */

		p {
			font-size: 14px;
			color: ${({ theme }) => theme.text_secondary};

			font-weight: bold;
		}
	}

	.variation {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		div {
			margin-top: 8px;

			padding: 0.4rem 0.8rem;
			height: 30px;
			background-color: ${({ theme }) => theme.secondary};

			display: flex;
			align-items: center;
			justify-content: center;

			cursor: pointer;

			border-radius: 4px;

			transition: 0.2s;

			&:hover {
				transform: scale(1.08);
			}
		}
	}

	.container_price {
		display: flex;
		flex-direction: column;

		gap: 0.5rem;

		color: ${({ theme }) => theme.text_secondary};
		opacity: 0.9;

		h5 {
			font-size: 1.4rem;
			/* text-decoration: line-through; */
		}

		h3 {
			font-size: 1.8rem;
		}
	}

	.container_buy {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		width: 100%;

		button {
			/* background-color: transparent; */
			font-size: 17px;
			padding: 0.6rem 1rem;
			border-radius: 6px;

			transition: 0.1s;

			&:hover {
				transform: scale(1.02);
			}
		}
	}

	.buy {
		background-color: ${({ theme }) => theme.accent};
		color: ${({ theme }) => theme.text_third};
	}

	.add_cart {
		background-color: ${({ theme }) => theme.text_secondary};
		color: ${({ theme }) => theme.text_third};
	}

	.title {
		color: ${({ theme }) => theme.text_primary};
	}

	.container_description {
		p {
			color: ${({ theme }) => theme.text_secondary};
		}
	}

	.descricao-produto {
		font-size: 16px;
		line-height: 1.6;
		color: ${({ theme }) => theme.text_primary};
		padding: 1rem;
	}

	.descricao-produto h1,
	.descricao-produto h2,
	.descricao-produto h3 {
		color: ${({ theme }) => theme.text_primary};
		margin-bottom: 0.5rem;
	}

	.descricao-produto ol,
	.descricao-produto ul {
		padding-left: 1.5rem;
		margin: 1rem 0;
	}

	.descricao-produto li {
		margin-bottom: 0.5rem;
	}

	.descricao-produto a {
		color: #007bff;
		text-decoration: underline;
	}

	.frete_qtd {
		display: flex;
		flex-direction: column;

		gap: .8rem
	}
`;
