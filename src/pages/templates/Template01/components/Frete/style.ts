import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	gap: 0.6rem;

	.container {
		display: flex;
		align-items: center;
		gap: 0.6rem;

		input {
			width: 36%;
			font-size: 17px;
			padding: 0.6rem 1rem;
			border-radius: 6px;
			outline: 0;

			background-color: ${({ theme }) => `${theme.primary}20`};
			border-radius: 6px;
			border: none;
		}

		button {
			font-size: 17px;
			padding: 0.6rem 1rem;
			border-radius: 6px;
			transition: 0.1s;
			border: none;

			border-radius: 6px;
			background-color: ${({ theme }) => theme.primary};
			color: ${({ theme }) => theme.text_third};
		}
	}
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1rem;

	h2 {
		color: ${({ theme }) => theme.text_secondary};
	}

	.card_container {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		min-width: 600px;
	}

	.card {
		border: 1px solid ${({ theme }) => `${theme.primary}20`};
		width: 100%;

		padding: 0.4rem 0.6rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card_flex {
		display: flex;
		align-items: center;

		justify-content: space-between;

		p {
			font-size: 18px;
			color: ${({ theme }) => theme.text_secondary};
		}

		img {
			background-color: transparent;
			width: 80px;
		}

		strong {
			font-size: 18px;
			color: ${({ theme }) => theme.text_secondary};
		}
	}
`;
