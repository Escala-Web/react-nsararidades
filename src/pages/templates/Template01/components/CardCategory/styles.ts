import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	gap: 0.6rem;

	padding-top: 2rem;

	.container_card {
		display: flex;
		align-items: center;
		justify-content: center;

		flex-wrap: wrap;

        /* width: 100%; */

		gap: 0.4rem;

        @media (max-width: 768px) {
            display: flex;
            /* flex-wrap: nowrap; */
            justify-content: start;
            padding: 0 1rem;

    
        }
	}

	.load {
		height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card {
		background-color: ${({ theme }) => theme.accent};
		padding: 0.8rem 1rem;
		border-radius: 4px;
		position: relative;
		cursor: pointer;
		transition: 0.2s;
		z-index: 1;
		overflow: hidden; /* Garante que o efeito do ::before fique dentro do card */

		&::before {
			content: "";
			background-color: ${({ theme }) => theme.text_primary};
			width: 0;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 4px;
			transition: width 0.3s ease-in-out; /* Adicionando transição suave */
			z-index: 1;
		}

		&:hover::before {
			width: 100%;
		}

		p {
			font-size: 16px;
			font-weight: 400; /* Corrigido */
			color: ${({ theme }) => theme.text_third};
			position: relative; /* Mantém sobre o efeito do ::before */
			z-index: 2; /* Garante que o texto fique visível */
		}

		@media (max-width: 768px) {
			padding: 0.6rem 1rem;
            /* width: 100%; */
		}
	}

	.content {
		padding-top: 1rem;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		flex-wrap: wrap;

		text-align: start;
		@media (max-width: 469px) {
			padding: 0 1rem;
            /* width: 100%; */
		}

	}
`;
