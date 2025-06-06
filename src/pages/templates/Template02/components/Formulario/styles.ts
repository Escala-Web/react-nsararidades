import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: start;

	justify-content: ${({ image }) => (image ? " space-between" : "center")};

	padding-top: 1rem;

	width: 1440px;

	min-height: 80vh;
	gap: 0.4rem;

	.image {
		width: 40%;
		height: 70vh;
		/* background-color: ${({ theme }) => theme.accent}; */
		/* background-image: url('https://cdn-icons-png.freepik.com/512/3157/3157914.png'); */
		background-size: cover;

		border-radius: 60px 0 60px 0;

		overflow: hidden;
		border: 1px solid ${({ theme }) => `${theme.accent}20`};

		@media (max-width: 1450px) {
			display: none;
		}

		img {
			background-color: ${({ theme }) => theme.text_third};

			width: 100%;
			height: 70vh;
			object-fit: cover;
		}
	}

	.form {
		background-color: ${({ theme }) => `${theme.text_third}`};
		width: 60%;
		min-height: 80vh;

		padding: 2rem 1rem;
		border-radius: 60px 0 60px 0;

		display: flex;
		align-items: start;
		flex-direction: column;
		justify-content: center;

		gap: 4rem;

		@media (max-width: 1450px) {
			width: 90%;
		}
	}

	.header_form {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h2 {
			font-size: 2rem;
			color: ${({ theme }) => theme.text_primary};
		}

		p {
			font-weight: 400;
			font-size: 1.2rem;
			color: ${({ theme }) => theme.text_secondary};
		}
	}

	.container_form {
		width: 100%;
		display: flex;
		flex-direction: column;

		label {
			color: ${({ theme }) => theme.text_secondary};
			width: 100%;
			margin-left: 6px;
			margin-bottom: 0.4rem;
		}

		input {
			height: 35px;
			width: 100%;
			background-color: #fff;
			border-radius: 10px;
			border: 1px solid #00499230;
			padding: 0 2rem;
			font-size: 17px;
			color: #004992;
			outline: 0;
		}

		button {
			height: 35px;
			width: 100%;
			background-color: ${({ theme }) => theme.accent};
			border-radius: 10px;
			border: 1px solid ${({ theme }) => theme.accent};
			padding: 0 2rem;
			font-size: 17px;
			color: ${({ theme }) => theme.text_third};
			outline: 0;

			margin-top: 1rem;
		}
	}

	.mt {
		margin-top: 1rem;
	}
`;
