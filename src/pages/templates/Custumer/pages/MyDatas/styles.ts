import styled from "styled-components";

export const Container = styled.div`

    min-height: 60vh;

    margin: 1rem 0;

    .container {
        display: flex;
        align-items: start;
        justify-content: space-between;

        @media (max-width: 1450px) {
            padding: 0 1rem;
        }

        @media (max-width: 1200px) {
            flex-direction: column;
            gap: 1rem;
        }
    }

    .formulario {
        background-color: ${({ theme }) => theme.color_adm};
        padding: 1rem 2rem;

        width: 48%;
        height: 100%;

        border-radius: 8px;

        @media (max-width: 1200px) {
            width: 100%;
        }

        label {
            font-size: 14px;
            color: ${({ theme }) => theme.text_primary};
            opacity: .9;
            background-color: transparent;
            width: 100%;

            font-weight: bold;

            margin-bottom: .6rem;
        }

        input, select {
            margin-top: .2rem;
            width: 100%;
            padding: .8rem 1rem;
            outline: 0;
            border: none;

        }

    }

    .container_options {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .save {
        background-color: ${({ theme }) => theme.accent};
        padding: .8rem 2rem;

        margin-top: .8rem;
        font-weight: bold;
        color: ${({ theme }) => theme.text_primary};
    }

    .mt {
        margin-top: 1rem;
    }


    .container_address {
        background-color: ${({ theme }) => theme.color_adm};
        padding: 1rem 2rem;

        border-radius: 6px;

        width: 48%;
        height: 100%;

        @media (max-width: 1200px) {
            width: 100%;
        }

        

    }

`;