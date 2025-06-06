import styled from "styled-components";

export const Container = styled.div`


    display: flex;
    flex-direction: column;

    gap: 2rem;

    .info {
        display: flex;
        align-items: start;

        gap: 1rem;
    }

    .icon {
        width: 60px;
        height: 60px;

        background-color: ${({ theme }) => theme.secondary};

        border-radius: 10%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 2rem;
        }
    }

    .content_text {
        p {
            font-size: 1.2rem;
            line-height: 1.6rem;
        }
    }
    

`;