import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-height: 100vh;

	.form {
		width: 50%;
		height: 100vh;
		padding: 2rem 4rem;

		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 4rem;

		h2 {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.text_secondary};
			position: relative;
			padding-left: 14px;

			&::before {
				content: "";
				width: 10px;
				height: 40px;
				background-color: ${({ theme }) => theme.secondary};
				position: absolute;
				left: 0;
				top: 0;
				border-radius: 20px;
			}
		}
	}

	form {
		background-color: transparent;
		box-sizing: border-box;

		label {
			font-size: 1rem;
			font-weight: 600;
			color: ${({ theme }) => theme.text_secondary};
		}

		input,
		select,
		textarea {
			position: relative;
			width: 100%;
			height: 40px;
			padding: 0.4rem 1rem;
			border: 1px solid ${({ theme }) => theme.secondary};
			background-color: ${({ theme }) => theme.color_adm};
			border-radius: 6px;
			outline: 0;
		}

		textarea {
			height: 100px;
		}

		button {
			width: 100%;
			height: 40px;
			padding: 0 1rem;
			background-color: ${({ theme }) => theme.secondary};
			color: ${({ theme }) => theme.text_third};
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.1rem;
			font-weight: 600;
			border: 1px solid ${({ theme }) => theme.secondary};
			border-radius: 6px;
		}

		h4 {
			font-size: 1.2rem;
			font-weight: bold;
			color: ${({ theme }) => theme.text_secondary};
		}
	}

	.flex {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.back {
		background-color: ${({ theme }) => `${theme.secondary}40`};
		color: ${({ theme }) => `${theme.secondary}90`}
	}

	.container_password {
		width: 100%;
		position: relative;
		border-radius: 6px;

		overflow: hidden;
		
	}

	.btn_password {

		position: absolute;

		top: 0;
		right: 0;

		width: 10%;
		height: 100%;
		background-color: ${({ theme }) => theme.secondary};

		display: flex;
		justify-content: center;
		align-items: center;

		color: ${({ theme }) => theme.text_third};

		cursor: pointer;
	}

	.register {
		width: 100%;
		height: 40px;
		padding: 0 1rem;
		background-color: ${({ theme }) => theme.secondary};
		color: ${({ theme }) => theme.text_third};
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1rem;
		font-weight: 600;
		border: 1px solid ${({ theme }) => theme.secondary};
		border-radius: 6px;
	}

	.mt {
		margin-top: 2rem;
	}

	.mt-1 {
		margin-top: 1rem;
	}

	.image {
		padding: 0 4rem;
		color: ${({ theme }) => theme.text_third};
		position: relative;
		width: 50%;
		height: 90vh;
		border-radius: 60px;
		overflow: hidden;

		display: flex;
		align-items: center;
		justify-content: center;

		background: ${({ theme }) =>
			`linear-gradient(135deg, ${theme.text_primary}, ${theme.secondary})`};
		background-size: 200% 200%;
		animation: gradientShift 6s ease infinite;
	}

	.image::before,
	.image::after {
		content: "";
		position: absolute;
		border-radius: 50%;
		opacity: 0.2;
		z-index: 0;
		mix-blend-mode: screen;
		animation: float 8s ease-in-out infinite alternate;
	}

	.image::before {
		width: 200px;
		height: 200px;
		background: #ffffff;
		top: -40px;
		left: -40px;
	}

	.image::after {
		width: 300px;
		height: 300px;
		background: ${({ theme }) => theme.accent};
		bottom: -60px;
		right: -60px;
	}

	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes float {
		0% {
			transform: translateY(0px) translateX(0px);
		}
		100% {
			transform: translateY(20px) translateX(20px);
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		p {
			opacity: 0.9;
			font-size: 1.1rem;
		}

		h3 {
			font-size: 2rem;
		}
	}

	.link {
		font-size: 1.2rem;
		margin-top: 1rem;
		color: ${({ theme }) => theme.background};
		font-weight: 600;
		text-decoration: underline;
		opacity: 0.9;
	}

	/* Responsividade */
	@media (max-width: 1024px) {
		.form {
			padding: 2rem;
			gap: 2rem;
			width: 100%;
		}

		.image {
			padding: 2rem;
			display: none;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;

		.form,
		.image {
			width: 100%;
			/* background-color: antiquewhite; */
			border-radius: 0;
		}

		.form {
			padding: 2rem;
			gap: 2rem;
		}

		.image {
			padding: 2rem;
			height: 300px;
		}
	}

	@media (max-width: 480px) {
		.form h2 {
			font-size: 1.8rem;
		}

		.content h3 {
			font-size: 1.5rem;
		}

		.content p {
			font-size: 1rem;
		}

		.link {
			font-size: 1rem;
		}
	}
`;
