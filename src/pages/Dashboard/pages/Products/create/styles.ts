import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: start;

	flex-direction: column;

	gap: 0.5rem;
	padding: 0 0rem;

	width: 100%;

	min-height: 100vh;

	z-index: 9699999;

	.mt-2 {
		margin-top: 2rem;
	}

	.mt-1 {
		margin-top: 1rem;
	}

	.container {
		display: flex;
		/* align-items: center; */
		justify-content: space-between;

		gap: 1rem;

		width: 100%;

		@media (max-width: 1359px) {
			display: flex;
			flex-direction: column;
		}
	}

	.container_main {
		width: 70%;
		@media (max-width: 1359px) {
			width: 100%;
		}
	}
`;

export const ContentMain = styled.div`
	width: 100%;

	background-color: #fff;
	padding: 1rem;

	border-radius: 8px;
	border: 1px solid 1px;

	box-shadow: 0 0 6px #3333333b;

	overflow: hidden;
	margin-bottom: 1rem;
`;

export const ContentAside = styled.aside`
	width: 30%;
	background-color: transparent;
	border: 1px solid 1px;

	@media (max-width: 1359px) {
		width: 100%;
	}

	.container {
		background-color: #fff;
		display: flex;
		border-radius: 8px;

		flex-direction: column;
		padding: 1rem;

		border: 1px solid 1px;

		box-shadow: 0 0 6px #3333333b;
	}
`;

export const Formulario = styled.form`
	width: 100%;

	background-color: transparent;

	.form_flex {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		width: 100%;

		@media (max-width: 550px) {
			flex-direction: column;
		}
	}

	.form_block {
		display: flex;
		flex-direction: column;
		width: 100%;

		span {
			/* background-color: ${({ theme }) => theme.page_construct_accent}; */
			border-radius: 6px;
			height: 40px;
			width: 40px;
			cursor: pointer;
			
			display: flex;
			align-items: center;
			justify-content: center;

			svg {
				color: ${({ theme }) => theme.page_construct_accent};
			}
		}
	}

	.add {
		background-color: ${({ theme }) => theme.page_construct_accent};
		color: ${({ theme }) => theme.page_construct_color};

		margin-top: 10px;

		width: 100%;
		height: 36px;
		border-radius: 6px;
		opacity: .7;
	}

	.mt-4 {
		margin-top: 4rem;
	}

	.contain {
		margin-top: 1rem;

		padding: 0.8rem 1rem;
		border-radius: 8px;
		border: 1px solid #ccc;

		background-color: ${({ theme }) => theme.accent};

		color: ${({ theme }) => theme.text_primary};

		font-weight: 600;
	}

	.mt {
		margin-top: 1rem;
	}

	label {
		font-size: 14px;
		font-weight: 400;

		color: #333;
	}

	input {
		padding: 0.8rem 1rem;
		border: 1px solid #ccc;

		outline: none;

		border-radius: 8px;

		width: 100%;
		margin-top: 6px;

		&:focus {
			border: 1px solid blue;
		}
	}

	input[type="checkbox"] {
		appearance: none;
		-webkit-appearance: none;
		padding: .6rem .6rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		cursor: pointer;
		position: relative;

		width: 10px;
	}

	input[type="checkbox"]:checked {
		background-color: #007bff;
		border-color: #007bff;
	}

	select {
		padding: 0.8rem 1rem;
		border: 1px solid #ccc;

		outline: none;

		border-radius: 8px;

		width: 100%;
		margin-top: 6px;

		&:focus {
			border: 1px solid blue;
		}
	}

	button {
		width: 100%;
	}


`;
