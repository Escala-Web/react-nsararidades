import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column; /* Este flex-direction pode ser removido ou ajustado */
  position: relative;

  .container_search {
    display: flex;
    align-items: center;
    display: inline-flex
;

    /* Os inputs e botões ficam lado a lado por padrão */
    @media (max-width: 842px) {
      width: 100%; /* Ajuste o tamanho no mobile */
    }

    input {
      padding: 12px 16px;
      outline: 0;
      border: 1px solid #ccc;
      border-radius: 22px;
      min-width: 450px;

      overflow: hidden;

      font-size: 14px;

      position: relative;

      @media (max-width: 1190px) {
        min-width: 300px;
      }

      @media (max-width: 842px) {
        width: 100%;
        padding: 6px 12px;
      }

      @media (max-width: 782px) {
        width: 100%;
        padding: 12px 12px;
      }
    }

    button {
      width: 14%;
      height: 100%;
      outline: 0;

      border-radius: 0px 22px 22px 0;
      cursor: pointer;

      position: absolute;
      right: 0px;

      background-color: transparent;
  
      font-weight: 400;

      font-weight: 400px;

      font-size: 14px;

      color: ${({ theme }) => theme.text_third};

      /* background-color: ${({ theme }) => theme.primary}; */

      svg {
        color: ${({ theme }) => theme.text_secondary};
        font-size: 20px;
        opacity: .8;
      }

      @media (max-width: 842px) {
 
        padding: 6px 12px;
      }

        @media (max-width: 426px) {
 
        display: none;
      }
    }
  }

  .container_search_results {
    position: absolute;
    width: 100%;
    top: 43px;
    left: 0;
    max-height: 500px;
    z-index: 9999;
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;

    background-color: ${({ theme }) => theme.background};

    overflow-y: scroll;
    padding: .0rem 1rem ;

    display: flex;
    flex-direction: column;


  }

  .results {
    padding: .3rem .4rem;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => `${theme.primary}12`};
    }

    a {
      width: 100px;
      color: ${({ theme }) => theme.text_secondary};

      padding: .4rem 0;
    }


  }
`;
