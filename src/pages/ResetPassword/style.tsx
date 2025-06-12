import styled from "styled-components";

export const Container = styled.div`

    min-height: 86vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        min-width: 1440px;
        box-shadow: 0 0 8px ${({ theme }) => theme.text_third};
        border-radius: 8px;
        /* height: 600px; */

        padding: 2rem;

    }

`;