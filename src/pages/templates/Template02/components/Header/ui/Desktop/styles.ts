import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;

	/* background-color: aquamarine; */

	height: 80px;

	@media (max-width: 1450px) {
		background-color: azure;
		padding: 1rem 1.6rem 1rem 1rem;
	}
	@media (max-width: 768px) {
		display: none;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
	}

	.logo {
		width: 120px;
		/* background-color: aqua; */
		/* background-color: aqua; */

		img {
			width: 100%;
		}
	}

	.navigation {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		li > a {
			color: ${({ theme }) => theme.color_text};
			font-size: 18px;
			font-weight: 500;
		}
	}

	.container_account {
		display: flex;
		align-items: center;

		gap: 4rem;
	}

	.account_login {
		display: flex;
		align-items: center;
		gap: 8px;

		div {
			background-color: ${({ theme }) => `${theme.text_primary}`};
		}

		p {
			color: ${({ theme }) => theme.text_secondary};
			font-size: 1.06rem;
			a {
				color: ${({ theme }) => theme.text_primary};
			}
		}
	}

	.account {
		display: flex;
		align-items: center;

		gap: 6px;

		p {
			color: ${({ theme }) => theme.color_text};
			font-size: 18px;
			font-weight: 500;
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 2rem;

		svg {
			font-size: 1.4rem;
			color: ${({ theme }) => theme.text_primary};
		}
	}

	.cart,
	.heart {
		position: relative;

		span {
			width: 22px;
			height: 22px;
			border-radius: 50%;

			position: absolute;

			background-color: ${({ theme }) => theme.accent};

			display: flex;
			align-items: center;
			justify-content: center;

			font-size: 12px;
			top: -12px;
			right: -12px;
		}
	}
`;

export const NavigationUl = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	padding: 1rem 0;
	/* border-top: 1px solid ${({ theme }) => theme.primary}; */
	background-color: ${({ theme }) => theme.primary};

	@media (max-width: 768px) {
		display: none;
	}

	@media (max-width: 1450px) {
		padding: 1rem 1.5rem;
	}

	ul {
		/* max-width: 1440px; */
		gap: 1.4rem;

		width: 1440px;

		display: flex;
	}

	li > a {
		color: ${({ theme }) => theme.text_third};
		font-size: 20px;
		font-weight: 500;
	}
`;
