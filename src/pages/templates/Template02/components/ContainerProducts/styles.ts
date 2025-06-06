import styled from "styled-components";

export const Container = styled.div`
  .container {
    margin-top: 1rem;
    display: grid;
    gap: 1rem;
    
    /* Começa com 5 colunas em telas grandes */
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);

    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);

    }

    @media (max-width: 420px) {
      grid-template-columns: repeat(2, 1fr);  
    }

    @media (max-width: 390px) {
      grid-template-columns: repeat(1, 1fr);

    }
  }
`;
