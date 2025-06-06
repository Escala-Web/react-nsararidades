import styled from "styled-components";

export const Container = styled.div`

    position: relative;

    @media (max-width: 425px) {
            display: none
        } 

    input {
        height: 45px;
        width: 577.66px;

        background-color: ${({ theme }) => theme.text_third};

        border-radius: 50px;
        border: 1px solid ${({ theme }) => `${theme.primary}30`};

        padding: 0 2rem;

        font-size: 17px;
        color: ${({ theme }) => theme.text_primary};

        outline: 0;

        @media (max-width: 1450px) {
            width: 377.66px;
        } 

        @media (max-width: 768px) {
            width: 277.66px;
        } 

        
    }

    button {
        background-color: ${({ theme }) => theme.primary};
        width: 35px;
        height: 35px;

        color: ${({ theme }) => theme.text_third};

        border-radius: 50%;

        position: absolute;

        right: 8px;
        top: 5px;

        svg {
            font-size: 1.1rem;
        }

    }

`;