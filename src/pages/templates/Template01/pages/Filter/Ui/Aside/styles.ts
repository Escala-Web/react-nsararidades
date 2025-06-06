import styled from "styled-components";

export const Container = styled.aside`
	width: 490px;

	display: flex;
	flex-direction: column;

	gap: 1rem;

	@media (max-width: 1104px) {

		/* background-color: aqua; */
		display: none;
	}

	.container {
		display: flex;
		flex-direction: column;

		box-shadow: 0 0 7px  ${({ theme }) => `${theme.secondary}50`};
		border-radius: 6px;

		padding: 1rem;
		height: 100%;
	}

	.title {
		color: ${({ theme }) => theme.text_primary};
		opacity: .9;
		font-size: 18px;
	}
`;
