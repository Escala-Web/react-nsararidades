import styled from "styled-components";

export const Container = styled.div`
	margin-top: 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 1450px) {
		padding: 0 1rem;
	}

	@media (max-width: 1099px) {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	color: ${({ theme }) => theme.text_primary};

	h3 {
		font-size: 1.8rem;
	}

	a {
		font-size: 1.1rem;
		color: ${({ theme }) => theme.text_primary};
		text-decoration: none;
		font-weight: 600;
	}

	.container_ul {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		li {
			background-color: ${({ theme }) => theme.accent};
			padding: 0.5rem 1rem;

			border-radius: 6px;

			cursor: pointer;
		}
	}
`;
