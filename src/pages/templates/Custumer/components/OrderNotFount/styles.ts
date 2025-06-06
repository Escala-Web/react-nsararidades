import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 400px;

	

	padding: 4rem;

	display: flex;
	justify-content: center;
	flex-direction: column;

	margin-top: 2rem;

	border-radius: 6px;

    box-shadow: 0 0 6px ${({ theme }) => `${theme.primary}20`};

	.container {
		display: flex;
		gap: 2rem;

        align-items: center;
	}

    .icone {
        svg {
            font-size: 3rem;
            color: ${({ theme }) => theme.accent}
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
            color: ${({ theme }) => theme.text_primary};
        }
        p {
            color: ${({ theme }) => theme.color_text};
            font-weight: 500;
            font-size: 1.1rem
        }
    }

    .link {
        margin-top: 20px;

        width: 36%;
        background-color: ${({ theme }) => theme.primary};
        height: 46px;

        font-size: 1.1rem;

        display: flex;
        align-items: center;
        justify-items: center;

        a {
            width: 100%;
            text-align: center;
            color: ${({ theme }) => theme.text_third};
            opacity: .9;
        }
    }

`;
