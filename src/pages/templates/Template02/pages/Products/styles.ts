import styled from "styled-components";

export const MainStyles = styled.div`
	display: flex;
	align-items: start;
	gap: 1rem;

	width: 1440px;

	@media (max-width: 1450px) {
		flex-direction: column;
		padding: 0 1rem;
	}

	.container_filter {
		width: 400px;
		height: 60vh;

		background-color: ${({ theme }) => `${theme.primary}10`};

		border-radius: 6px;
		padding: 0.6rem;
	}

	.filter_content {
		margin-top: 0.4rem;
	}

	.title_filter {
		color: ${({ theme }) => theme.color_text};
		font-size: 1.6rem;
		font-weight: 500;
		margin-top: 10px;
	}

	.form_filter {
		display: flex;
		align-items: center;

		gap: 6px;

		input,
		p {
			margin-top: 6px;
		}

		p {
			font-size: 14px;
			color: ${({ theme }) => theme.color_text};
		}
	}

	.container_product {
		width: 100%;
		display: grid;
		/* margin: 0 auto; */
		gap: 1rem;
		grid-template-columns: repeat(4, 1fr); /* Mobile por padrão */

		@media (max-width: 1450px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 1100px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 480px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;
