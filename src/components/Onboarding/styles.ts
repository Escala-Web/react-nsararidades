import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	min-height: 100vh;

	padding: 2rem;

	background-color: ${({ theme }) => theme.page_construct_color};

	.form {
		width: 50%;
		height: 100%;
		background-color: ${({ theme }) => `${theme.page_construct_background}1`};

		padding: 2rem 3rem;

        

		border-radius: 12px;

        /* overflow-y: scroll; */

        /* background-color: red; */
	}

	.text_color {
		color: ${({ theme }) => theme.page_construct_color};
	}

	.image {
		width: 50%;
		/* background-color: beige; */
        height: 100vh;

        position: fixed;

        right: 0;
        top: 0;

        background-size: cover;

        padding: 2rem;

        img {
            width: 100%;
        }
	}

    .title {
        color: ${({ theme }) => theme.text_secondary};
        opacity: .8;
        font-size: 1.2rem;
    }
`;

export const ContainerPrimary = styled.div`
	display: flex;
	align-items: center;
    justify-content: center;
	gap: 1rem;

	height: 100vh;
    width: 100%;

	padding: 2rem;

	background-color: ${({ theme }) => theme.page_construct_background};

    .container {
        color: ${({ theme }) => theme.text_third};

        width: 1440px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        height: 100%;
    }

    .title {

        line-height: 6rem;

        h2 {
            font-size: 5rem;
        }

        h4 {
            font-size: 3rem;
        }
    }

    .description {
        p {
            font-size: 1.4rem;
            width: 60%;
            opacity: .8;
        }
    }

    button {
        width: 40%;
        height: 50px;

        font-size: 1.4rem;
        border-radius: 12px;

        transition: .2s;

        &:hover {
            transform: scale(1.02);
        }
    }
`;
