import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    gap: .4rem;

    padding-top: 1rem;


    svg {
        color: ${({ theme }) => theme.primary};
        font-size: 1.4rem;
    }

    h2 {
        color: ${({ theme }) => theme.text_primary};

        opacity: .9;
    }
`;