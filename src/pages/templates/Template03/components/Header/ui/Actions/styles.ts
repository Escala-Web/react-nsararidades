import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: end;

    width: 40%;


    gap: 2rem;

    .action {
        display: flex;
        align-items: center;
        gap: .6rem;

        span {
            background-color: ${({ theme }) => theme.accent};

            height: 40px;
            width: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 6px;

            svg {
                color: ${({ theme }) => theme.background};
                font-size: 1.4rem;
            }

            p {
                color: ${({ theme }) => theme.background};
                font-size: 1.4rem;
            }
        }
    }

    .on {
        cursor: pointer;
    }

    .text {
        display: flex;
        flex-direction: column;

        color: ${({ theme }) => theme.text_third};

        a {
            color: ${({ theme }) => `${theme.text_third}`};
            opacity: .9;

            font-weight: 600;
            
        }
    }

`;