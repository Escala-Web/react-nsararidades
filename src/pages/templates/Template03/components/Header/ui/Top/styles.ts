import styled from "styled-components";

export const Container = styled.header`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        max-width: 1440px;
        width: 100%;

        padding: .6rem 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .phone {
        display: flex;
        align-items: center;
        gap: 1rem;

        font-size: 14PX;

        span > svg {
            color: ${({ theme }) => theme.text_secondary};
        }

        a {
            color: ${({ theme }) => theme.text_secondary};
        }
    }

    .infos {
        display: flex;

        gap: .4rem;
    }

`;