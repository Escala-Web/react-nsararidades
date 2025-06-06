import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	height: 600px;
	width: 100%;

	padding: 1.4rem 0;

	background-color: #313131;

	@media (max-width: 1450px) {
		display: flex;
		flex-direction: column;
		height: auto;
		padding: 0;

		background-color: transparent;
	}

	.banner-swiper {
		width: 90%;
		margin: 0 auto;

		overflow: hidden;

		@media (max-width: 1450px) {
			width: 100%;
		}
	}

	.banner-swiper img {
		width: 100%;
		height: 600px;
		display: block;
		object-fit: cover;
	}

	.destaque {
		width: 50%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;

		gap: 0.4rem;

		@media (max-width: 1450px) {
			display: grid;
			width: 100%;
			padding: 1rem;
			grid-template-columns: 1fr 1fr 1fr 1fr; /* duas colunas de tamanho igual */
			grid-template-rows: auto; /* altura automática das linhas */
			gap: 1rem;
		}

    @media (max-width: 999px) {
      grid-template-columns: 1fr 1fr;
    }
	}

	.card {
		width: 49.2%;

		height: 250px;

		background-color: #fff;
		border-radius: 4px;

		padding: 1rem;

		background-image: url("https://http2.mlstatic.com/D_NQ_NP_845524-MLB80802582625_112024-O.webp");
		background-size: cover;

		@media (max-width: 1450px) {
			width: 100%;
      /* height: 250px; */
		}

    @media (max-width: 999px) {
      width: 100%;
      /* height: 200px; */
    }
	}
`;
