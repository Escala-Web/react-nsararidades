import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
	display: flex;
	flex-direction: column;

	/* gap: .8rem; */
	/* padding: 0.6rem; */
	/* border: 1px solid ${({ theme }) => theme.secondary}; */

	box-shadow: 0 0 7px ${({ theme }) => `${theme.secondary}30`};

	height: 500px;
	width: 339px;

	border-radius: 4px;

	overflow: hidden;

	@media (max-width: 508px) {
		height: 330px;
		width: 230px;
	}

	@media (max-width: 468px) {
		width: 100%;
		height: 200px;
		display: flex;
		flex-direction: row;
		gap: 1rem;

		gap: 1rem;
	}

	.media {
		width: 100%;
		height: 260px;

		position: relative;

		@media (max-width: 468px) {
			width: 250px;
		}

		img {
			background-color: ${({ theme }) => `${theme.accent}10`};
			width: 100%;
			height: 100%;
			object-fit: cover;

			@media (max-width: 468px) {
				width: 200px;
				height: 200px;
				object-fit: cover;
			}
		}

		@media (max-width: 468px) {
			width: 100%;
		}
	}

	.cart {
		position: absolute;
		right: 10px;
		top: 10px;
		width: 25px;
		height: 25px;
		border-radius: 10%;

		background-color: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text_primary};

		transition: 0.1s;
		&:hover {
			transform: scale(1.1);
		}

		svg {
			font-size: 1rem;
		}
	}

	.content {
		/* background-color: aqua; */

		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;

		justify-content: space-evenly;

		text-align: center;

		padding: 0 0.4rem;

		span {
			color: ${({ theme }) => theme.accent};
			font-size: 16px;
			font-weight: bold;
			width: 100%;

			padding-top: 10px;
		}

		p {
			color: ${({ theme }) => theme.text_secondary};
			font-size: 18px;
			font-weight: 600;
			text-align: center;

			width: 100%;

			display: -webkit-box;
			-webkit-line-clamp: 2; /* Limita a duas linhas */
			-webkit-box-orient: vertical;
			overflow: hidden; /* Oculta o conteúdo que ultrapassar o limite */
			text-overflow: ellipsis; /* Adiciona os três pontinhos no final */

			@media (max-width: 468px) {
				font-size: 14px;
			}
		}
	}

	.price {
		line-height: 30px;

		h4 {
			color: ${({ theme }) => theme.accent};
			font-size: 28px;
			font-weight: bold;
			width: 100%;
			@media (max-width: 468px) {
				font-size: 22px;
			}
		}

		p {
			font-size: 15px;
			opacity: 0.9;

			@media (max-width: 468px) {
				display: none;
			}
		}
	}

	.link_mobile {
		@media (min-width: 469px) {
			padding: 0.8rem 2rem;
			border-radius: 14px;
		}

		background-color: ${({ theme }) => theme.accent};
		width: 100%;
		text-align: center;
		padding: 0.4rem 0.6rem;
		border-radius: 6px;
		color: ${({ theme }) => theme.text_third};
		font-weight: bold;
	}

	.link_contact {
		@media (min-width: 469px) {
			padding: 0.8rem 2rem;
			border-radius: 14px;
		}

		background-color: ${({ theme }) => `${theme.text_secondary}50`};
		width: 100%;
		text-align: center;
		padding: 0.4rem 0.6rem;
		border-radius: 6px;
		color: ${({ theme }) => theme.text_third};
		font-weight: bold;
	}
`;
