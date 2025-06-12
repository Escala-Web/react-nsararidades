import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	width: 100%;

	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.6rem;
		width: 100%;

		input {
			/* flex: 1 1 200px; */
			min-width: 0;
			font-size: 17px;
			padding: 0.6rem 1rem;
			border-radius: 6px;
			outline: 0;
			background-color: ${({ theme }) => `${theme.primary}20`};
			border: none;
		}

		button {
			font-size: 17px;
			padding: 0.6rem 1rem;
			border-radius: 6px;
			transition: 0.1s;
			border: none;
			background-color: ${({ theme }) => theme.primary};
			color: ${({ theme }) => theme.text_third};
			white-space: nowrap;
		}
	}
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h2 {
		color: ${({ theme }) => theme.text_secondary};
		font-size: 1.25rem;
	}

	.card_container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;
	}

	.card {
		border: 1px solid ${({ theme }) => `${theme.primary}20`};
		width: 100%;
		padding: 0.8rem;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		box-sizing: border-box;
	}

	.card_flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;

		p, strong {
			font-size: 16px;
			color: ${({ theme }) => theme.text_secondary};
		}

		img {
			width: 60px;
			height: auto;
			object-fit: contain;
		}
	}

	@media (max-width: 600px) {
		.card_flex {
			flex-direction: column;
			align-items: flex-start;
		}
	}
`;
