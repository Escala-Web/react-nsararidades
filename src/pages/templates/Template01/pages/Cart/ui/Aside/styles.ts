import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
    gap: 1rem;
	position: relative;


	box-shadow: 0 0 7px  ${({ theme }) => `${theme.secondary}30`};

	.container {

		padding: 1rem;

		min-width: 390px;

		border-radius: '6px';
		background-color: ${({ theme }) => theme.background};

		
	}

	.header {
		height: 40px;
		display: flex;
		align-items: center;

		border-bottom: 1px solid ${({ theme }) => theme.text_third};

		h3 {
			color: ${({ theme }) => theme.color_text};
			font-family: ${({ theme }) => theme.font_secondary};
		}
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0.4rem 0;

		p {
			color: ${({ theme }) => theme.color_text};
			font-weight: 400;
			font-size: 14px;
		}

		span {
			font-weight: 600;
			font-weight: 600;
			font-size: 14px;

			color: ${({ theme }) => theme.color_text};
		}
	}

	.container_btn {
        /* background-color: aqua; */
        margin-top: -1rem;

		button {
			color: ${({ theme }) => theme.text_primary};
		}
    }

	.add_address {
		background-color: ${({ theme }) => theme.primary};
		padding: 0.8rem 1rem;
		border-radius: 6px;

		svg {
			color: ${({ theme }) => theme.text_third};
		}
	}
`;


