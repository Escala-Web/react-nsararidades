import styled from "styled-components";

export const Container = styled.div`

    /* background-color: antiquewhite; */

    display: flex;
    flex-direction: column;

    gap: 1rem;

    .containerr {
        display: flex;

        flex-direction: column;

        gap: .2rem;

    }

    .frete_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .6rem;

        img {
            width: 70px;
        }
    }
    
    .card {
        /* background-color: aqua; */
        display: flex;
        flex-direction: column;
        padding: .8rem;

        border-radius: 6px;

        gap: 4px;

        color: ${({ theme }) => theme.color_text};

        background-color: ${({ theme }) => `${theme.secondary}06`};
    }

    .frete {
        display: flex;
        align-items: center;

        gap: 12px;

        cursor: pointer;

        margin-top: 6px;
    }

    .entrega {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
    }

    

`;