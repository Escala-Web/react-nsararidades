import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.background};

    width: 100%;


    
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        border-bottom: 1px solid ${({ theme }) => `${theme.primary}30`};
        color: ${({ theme }) => theme.primary};
        padding: 1rem 0;
        opacity: .9;

        width: 100%;

        @media (max-width: 1450px) {
            padding:  1rem;
        }

        @media (max-width: 620px) {
            display: none
        }
    }

    .container_icons {
        display: flex;
        align-items: center;

        gap: 6px;

        p {
            font-size: 14px;

            font-weight: 500;
        }
    }

`;