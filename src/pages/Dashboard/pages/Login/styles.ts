import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background-color: ${({ theme }) => theme.background};

	display: flex;
	align-items: center;
	justify-content: center;

	.container {
		border-radius: 12px;
		border: 1px solid #fff;

		border: 1px solid rgba(255, 255, 255, 0.3);
		background: rgba(255, 255, 255, 0.1); 
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px); 
		padding: 2rem;
		color: white;

        height: 600px;
        width: 700px;

        display: flex;
        align-items: center;
        flex-direction: column;

        justify-content: center;
	}

    .container_header {
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        h2 {
            color: ${({ theme }) => theme.page_construct_background};
            font-size: 2rem;
        }
    }
`;


export const Formulario = styled.div`

    /* background-color: aqua; */
    margin-top: 4rem;
    width: 100%;

    background-color: transparent;

    .form_block {
        width: 100%;
        display: flex;
        flex-direction: column;


        background-color: transparent;

        margin-bottom: 1rem;
    }

    .form_buttons {
        width: 100%;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;

        gap: 1rem;

        background-color: transparent;

        margin-top: 3rem;
    }

    label {
        color: #fff;
        font-size: 18px;
        font-weight: 600;

        background-color: transparent;
    }

    input {
        border: none;
        padding: 1rem;
        width: 100%;
        border-radius: 6px;
        outline: 0;
        /* padding-top: 6px; */

        background-color: ${({ theme }) => `${theme.page_construct_background}1`};
    }

    button {
        padding: .9rem 2rem;
        border-radius: 6px;
        width: 100%;
        font-size: 18px;
        /* margin: 1rem 0 1rem; */
    }

    .contain {
        background-color:rgb(32, 128, 229);
        color: #fff;
    }

    .no_contain {
        background-color: transparent;
        color: rgb(32, 128, 229);
        border: 1px solid rgb(32, 128, 229);;
    }

`; 