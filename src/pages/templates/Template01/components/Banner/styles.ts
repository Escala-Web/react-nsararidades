import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: start;
	gap: 1rem;
	width: 100%;

	@media (max-width: 768px) {
		/* display: none; */
	}

	/* Estilização das setas do Swiper */
	.swiper-button-next,
	.swiper-button-prev {
		background-color: rgba(243, 243, 243, 0.37);
		width: 50px;
		height: 50px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s;

		&:hover {
			transform: scale(1.06);
		}
	}

	/* Ajuste no tamanho e cor das setas */
	.swiper-button-next::after,
	.swiper-button-prev::after {
		font-size: 30px;
		color: ${({ theme }) => theme.text_primary || "#000"};
	}


`;

// Tipagem das props do Styled Components
interface SectionProps {
    w?: string;
    p?: string;
}

export const Section = styled.div<SectionProps>`
	width: ${({ w }) => w || "100%"};
	padding: ${({ p }) => p || "0"};

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ContainerMobile = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;
