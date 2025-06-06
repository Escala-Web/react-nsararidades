import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    flex-direction: column;
    justify-content: center;

    

    width: 100%;

    .container_home {
        display: flex;
        flex-direction: column;

        max-width: 1440px;

        gap: 4rem;

        margin-top: 2rem;
    }

    .reset_password {
        width: 100%;
        text-align: center;

        margin-top: 1rem;

        p {
            color: ${({ theme }) => theme.text_secondary};
            font-weight: 500;
            font-size: 1.05rem;

            a {
                color: ${({ theme }) => theme.primary};
                text-decoration: underline;
            }

            span {
                color: ${({ theme }) => theme.primary};
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;