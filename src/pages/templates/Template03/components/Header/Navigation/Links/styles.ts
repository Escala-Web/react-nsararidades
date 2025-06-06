import styled from "styled-components";

export const Container = styled.div`

    ul {
        display: flex;
        align-items: center;

        gap: 1.7rem;

        li > a {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.text_third};
        }
    }

`;