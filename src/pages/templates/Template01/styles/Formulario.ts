import styled from "styled-components";

export const Formulario = styled.form`
	margin: 0rem 0;
	background-color: transparent;

	.form_block {
		display: flex;
		flex-direction: column;

		width: 100%;

		position: relative;
	}

	.mt {
		margin-top: 2rem;
		@media (max-width: 840px) {
			margin: 0;
		}
	}

	.mt-1 {
		margin-top: 1rem;
		@media (max-width: 840px) {
			margin: 0;
		}
	}

	@media (max-width: 1440px) {
		width: 100%;
		padding: 1rem 0rem;
	}

	label {
		font-size: 14px;
		width: 100%;
		font-weight: 400;

		color: ${({ theme }) => theme.text_secondary};

		padding-bottom: 6px;

		@media (max-width: 840px) {
			margin-top: 1rem;
		}
	}


	input,
	textarea,
	select {
		width: 100%;
		background-color: ${({ theme }) => theme.secondary};

		background-color: ${({ theme }) => theme.text_third};

		border: 1px solid ${({ theme }) => `${theme.text_primary}50`};
		padding: 0.8rem 1rem;

		border-radius: 8px;

		outline: 0;

		position: relative;

		&:focus {
			border: 1px solid ${({ theme }) => theme.accent};
			opacity: 0.7;
		}

		@media (max-width: 1440px) {
			width: 100%;
			padding: 0.8rem 1rem;
		}
	}

	/* select {
		width: 100%;
		background-color: ${({ theme }) => theme.background};

		border: 1px solid ${({ theme }) => `${theme.text_primary}20`};
		padding: 0.8rem 1rem;

		border-radius: 8px;

		outline: 0;

		cursor: pointer;

		&:focus {
			border: 1px solid ${({ theme }) => theme.accent};
			opacity: 0.7;
		}
	} */

	.form_flex {
		display: flex;
		align-items: center;
		gap: 1rem;

		@media (max-width: 841px) {
			display: block;

			
		}
	}

	.button {
		/* background-color: aqua; */
		padding: 0.8rem 1rem;
		font-size: 16px;
		font-weight: 600;
	}

	.contain {
		background-color: ${({ theme }) => theme.text_primary};
		color: ${({ theme }) => theme.text_third};
		padding: 0.8rem 2rem;

		border-radius: 6px;
	}

	.no_contain {
		background-color: transparent;
		color: ${({ theme }) => theme.text_primary};

		border: 1px solid ${({ theme }) => theme.text_primary};

		padding: 0.8rem 2rem;
		border-radius: 6px;
	}

	.container_stepps {
		/* background-color: aqua; */

		margin-top: 1rem;

		display: flex;
		flex-direction: row-reverse;
		gap: 1rem;

		justify-content: start;
	}

	.save {
		background-color: ${({ theme }) => theme.accent};
		width: 200px;
		height: 40px;
		border-radius: 6px;

		display: flex;
		align-items: center;
		justify-content: center
	}

	.cancel {
		background-color: ${({ theme }) => `${theme.accent}50`};
		width: 150px;
		height: 40px;
		border-radius: 6px;

		display: flex;
		align-items: center;
		justify-content: center
	}

	.password {
		position: absolute;
		right: 10px;
		top: 25px;
		/* background-color: ${({ theme }) => theme.text_primary}; */
		width: 44px;
		height: 36px;

		svg {
			font-size: 22px;
			color: ${({ theme }) => theme.text_primary};
		}
	}
`;
