import styled from "styled-components";

export const Container = styled.div`

    /* background-color: aqua; */
    width: 100%;

    height: 60px;

    display: flex;
    align-items: center;

    gap: 1rem;

    padding: 0 1rem;
    @media (max-width: 480px) {

        
    }

    h3 {
        color: ${({ theme }) => theme.text_primary};
        font-size: 2rem;
        text-transform: uppercase;

        @media (max-width: 480px) {
        
            font-size: 1.6rem;
        
        }
    }

    .container {
        background-color: ${({ theme }) => `${theme.secondary}20`};
        
        width: 100%;
        height: 5px;

        position: relative;

        border-radius: 20px;

        @media (max-width: 480px) {
        
            height: 3px;
        
        }

        /* overflow: hidden; */
    }

    .primary {
        position: absolute;
        

        width: 80px;
        height: 8px;
        top: -1px;

        border-radius: 20px;

        opacity: 1;

        background-color: ${({ theme }) => theme.secondary};

        @media (max-width: 480px) {
        
            height: 4px;
        
        }
    }

`;