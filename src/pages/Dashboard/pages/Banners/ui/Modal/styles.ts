import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    gap: 1rem;

    color: ${({ theme }) => theme.color_text};

`;