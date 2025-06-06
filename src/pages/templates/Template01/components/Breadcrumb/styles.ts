import styled from "styled-components";

export const Container = styled.div`
	padding: 1rem;


	box-shadow: 0 0 7px  ${({ theme }) => `${theme.secondary}20`};
	width: 100%;

	border-radius: 2px;

	h3 {
		color: ${({ theme }) => theme.text_primary};
		/* opacity: 0.9; */
		font-size: 1.2rem;
		font-weight: 600;
	}

	.container_breadcrumb {
		display: flex;
		align-items: center;

		justify-content: space-between;

		p {
			color: ${({ theme }) => theme.text_secondary};
			font-weight: 400;
		}
		@media (max-width: 425px) {
			display: flex;
			flex-direction: column;

			gap: 1rem;
		}
	}

	.container {
		display: flex;
		align-items: center;
		font-size: 14px;

		padding-top: 0.4rem;

		svg {
			color: ${({ theme }) => theme.text_secondary};
			/* opacity: 0.9; */
		}

		a {
			color: ${({ theme }) => theme.text_secondary};
			font-weight: 400;
		}

		p {
			color: ${({ theme }) => theme.text_secondary};
			font-weight: 600;
		}

		
	}
`;
