import styled from "styled-components";

export const Container = styled.div`
	.container {
		margin-top: 1rem;

		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		gap: 1rem;

		/* height: 440px; */

		width: 100%;

		@media (max-width: 1450px) {
			/* padding: 0 1rem; */

			flex-direction: column;
		}
	}

	.banner_category {
		min-width: 562px;
		height: 440px;

		background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9sduzk7eiuqcPO_rVvN1JsxdJYY-Uzu1Eg&s");
		background-size: cover;

		border-radius: 12px;

		@media (max-width: 1450px) {
			min-width: 100%;
		}

		@media (max-width: 800px) {
			min-width: 100%;
			height: 200px;
		}

		@media (max-width: 650px) {
			min-width: 100%;
			height: 200px;
		}
	}

	.cards {
		margin-top: 1rem;
		display: grid;
		gap: 1rem;

		/* Começa com 5 colunas em telas grandes */
		grid-template-columns: repeat(5, 1fr);

		@media (max-width: 1400px) {
			grid-template-columns: repeat(4, 1fr);
		}

		@media (max-width: 1100px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 480px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;
