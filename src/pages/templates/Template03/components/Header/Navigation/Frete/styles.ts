import styled from "styled-components";

export const Container = styled.div`

    .frete_container {
        width: 200px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: .4rem;

        /* background-color: aqua; */

        border-radius: 6px;

        border: 1px solid ${({ theme }) => `${theme.background}50`};

        p {
            color: ${({ theme }) => theme.text_third};
        }
    }

    .icon {

        color: ${({ theme }) => theme.text_third};

        svg {
            font-size: 1.4rem;
        }
    }

`;