import styled from "styled-components";

export const Container = styled.aside`
	width: 490px;

	display: flex;
	flex-direction: column;

	gap: .6rem;

	@media (max-width: 1090px) {

		/* background-color: aqua; */
		display: flex;
		width: 100%;
	}

	.filter_mobile {
		@media (min-width: 1090px) {

		/* background-color: aqua; */
		display: none;
	}

		background-color: aquamarine;
		width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;

		gap: 6px;

		border-radius: 12px;

		color: ${({ theme }) => theme.text_primary};
		background-color: ${({ theme }) => `${theme.text_third}`};

		box-shadow: 0 0 10px ${({ theme }) => `${theme.primary}40`};

		p {
			font-size: 18px;
		}

		svg {
			font-size: 22px;
		}
	}

	.container {
		display: flex;
		flex-direction: column;

		box-shadow: 0 0 7px  ${({ theme }) => `${theme.secondary}20`};
		border-radius: 2px;

		padding: 1rem;
		height: 100%;
	}

	.title {
		color: ${({ theme }) => theme.text_primary};
		opacity: .9;
		font-size: 18px;
	}
`;
