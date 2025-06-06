import styled from "styled-components";

export const HeaderContainer = styled.header`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.primary};

    .container {
        min-width: 1440px;

        padding: 1rem 0;

        display: flex;
        flex-direction: column;

        gap: 1.1rem;
    }

    .header_actions {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 4rem;
    }

    .navigation {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

`;