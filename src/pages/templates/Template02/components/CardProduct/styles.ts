import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
	box-shadow: 0 0 10px ${({ theme }) => `${theme.primary}30`};
	border-radius: 6px;

	overflow: hidden;

	width: 276px;
	height: 440px;

	@media (max-width: 487px) {
		width: 200px;
		height: 370px;
	}

	@media (max-width: 390px) {
		display: flex;
		width: 300px;
	}



	.card {
		height: 100%;
	}

	.media {
		height: 240px;

		@media (max-width: 487px) {
			height: 190px;
		}

		@media (max-width: 390px) {
			width: 300px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;

			background-color: ${({ theme }) => `${theme.accent}10`};
		}
	}

	.content {
		/* background-color: bisque; */
		height: 50%;

		display: flex;
		flex-direction: column;

		gap: 1rem;

		justify-content: space-evenly;

		padding: 1rem 0.4rem;

		color: ${({ theme }) => theme.text_primary};

		p {
			font-size: 16px;
			font-weight: 600;

			text-align: center;
			

			display: -webkit-box;
			-webkit-line-clamp: 3; /* Limita a duas linhas */
			-webkit-box-orient: vertical;
			overflow: hidden; /* Oculta o conteúdo que ultrapassar o limite */
			text-overflow: ellipsis; /* Adiciona os três pontinhos no final */
		}
	}

	.container {
		display: flex;
		flex-direction: column;

		align-items: start;

		/* padding: 0 1rem 1rem 1rem; */
		margin-top: 0px;

		gap: 0.4rem;

		span {
			font-size: 1rem;
			text-decoration: line-through;
			opacity: 0.7;
			width: 100%;
			text-align: center;
		}
		p {
			font-size: 1.6rem;
			font-weight: 500;

			width: 100%;
			text-align: center;
		}
	}
`;
