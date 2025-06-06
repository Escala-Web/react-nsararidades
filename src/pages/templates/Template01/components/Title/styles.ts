import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    height: 50px;

    display: flex;
    align-items: center;

    justify-content: space-between;
    
    border-radius: 10px;
    
    h3 {
        width: 100%;
        color: ${({ theme }) => theme.text_primary};
        font-size: 2rem;
        font-weight: 600;
        text-align: ${({ align }) => align || 'center'};
        @media (max-width: 768px) {
            font-size: 1.6rem;
            text-align: start;
            padding: 0 1rem;
    }

    }

    a {
        color: ${({ theme }) => theme.text_secondary};
        font-size: 16px;
        font-weight: 600;
        /* width: 100px; */
        text-align: end;

        @media (max-width: 768px) {
            font-size: 14px;
    }
    }

    @media (max-width: 768px) {
        width: 90%; 
    }
`;
