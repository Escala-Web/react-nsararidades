import styled from "styled-components";

export const ContainerAccount = styled.div`
	/* background-color: aqua; */
	width: 100%;
	height: 76vh;

	display: flex;
	align-items: center;
	justify-content: center;

	.container {
		background-color: ${({ theme }) => theme.text_third};

        border-radius: 4rem 0 4rem 0;

		box-shadow: 0 0 10px ${({ theme }) => `${theme.text_secondary}20`};

		width: 100%;
		height: 60%;

		padding: 2rem;

		display: flex;
		align-items: center;
		justify-content: center;

        flex-direction: column;

        gap: 2rem;
	}

	.header_title {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		text-align: center;

		h4 {
			font-size: 2rem;
			color: ${({ theme }) => theme.text_primary};
		}

		p {
			font-size: 1.1rem;
			color: ${({ theme }) => theme.text_secondary};
		}
	}

	.active {
		display: flex;
		align-items: center;
		justify-content: center;

		/* height: 100%; */

		button {
			background-color: ${({ theme }) => theme.accent};
			color: ${({ theme }) => theme.text_third};
			width: 300px;
			height: 40px;

            font-size: 1.1rem;

            border-radius: 10px 0 10px 0;
		}
	}
`;
