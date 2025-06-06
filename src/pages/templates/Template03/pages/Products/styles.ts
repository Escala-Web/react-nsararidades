import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;

    .asides {
        width: 500px;
        background-color: #f5f5f5;
        border-radius: 8px;

        border: 1px solid ${({ theme }) => `${theme.secondary}20`};

        border-radius: 6px;
        overflow: hidden;

        display: flex;
        flex-direction: column;

        
    }

    .header {
        background-color: ${({ theme }) => `${theme.secondary}`};
        padding: 1rem;

        color: ${({ theme }) => theme.text_third};
        font-size: 1.2rem
    }

    .aside_content {
        padding: .6rem 1rem;
    }

    .form {
        display: flex;
        align-items: center;
        gap: .4rem;

        padding-bottom: 5px;

        p {
            font-size: 15px
        }
    }

    .content_card {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }
`;
