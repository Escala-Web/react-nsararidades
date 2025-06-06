import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: start;

    justify-content: center;
    /* position: relative; */
    width: 100%;
    min-height: 76vh;

    gap: 1rem;

    margin: 1rem;

    .loadingg {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color:rgba(0, 0, 0, 0.17);

        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    

    @media(max-width: 800px) {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 1rem;
    }


    .cart_empty {
        box-shadow: 0 0 7px  ${({ theme }) => `${theme.secondary}30`};

        padding: 1rem;
        width: 100%;

        display: flex;
        align-items: start;
        justify-content: center;

        flex-direction: column;

        a {
            background-color: ${({ theme }) => theme.primary};
            padding: .6rem 1.4rem;
            border-radius: 6px;
            color: ${({ theme }) => theme.text_third};
            margin-top: 10px;
        }
    }
`;