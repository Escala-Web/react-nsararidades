import styled from "styled-components";

export const Container = styled.div`

     .content_card {
        display: grid;
        grid-template-columns: repeat(5, 1fr); /* 5 colunas fixas */
        gap: 1rem; /* espaçamento entre os cards */
        padding: 1rem;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    }

`;