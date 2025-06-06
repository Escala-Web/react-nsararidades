import styled from "styled-components";

export const ContainerProduct = styled.div`

    display: flex;
    align-items: center;

    gap: 1rem;

    max-width: 1440px;

    @media (max-width: 1440px) {
        /* flex-direction: column; */
        padding: 0 1rem;
    }

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;

    }

    

    .banner {
        /* width: 60%;
        height: 80vh;

        display: flex;
        align-items: center;
        justify-content: center; */

        @media (max-width: 1440px) {
        /* flex-direction: column; */
        width: 50%;
    }

    }

    .container_infos {
        width: 50%;
        height: 80vh;

        display: flex;
        align-items: start;
        justify-content: space-evenly;

        flex-direction: column;

        padding: 0 2rem;

        h2 {
            font-size: 40px;
            color: ${({ theme }) => theme.text_secondary};
        }

        h1 {
            font-size: 30px;
            color: ${({ theme }) => theme.text_secondary};
        }
    }

    .info_bread {
        display: flex;
        flex-direction: column;
        gap: 4px;

        width: 40%;

        li {
            display: flex;
            align-items: center;
            /* justify-content: space-between; */

            font-size: 14px;
            color: ${({ theme }) => theme.text_secondary};

            p {
                text-align: start;
                width: 70%;
            }

            span {
                text-align: start;
                width: 60%;

                font-weight: 600;
            }
        }
    }

    .count_container {
        display: flex;
        align-items: center;

        margin-bottom: 20px;
        
        span {
            width: 10%;
            height: 38px;
            background-color: ${({ theme }) => `${theme.primary}20`};
            text-align: center;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
        }

        input {
            width: 16%;
            height: 38px;

            text-align: center;
            font-size: 16px;

            border: 1px solid ${({ theme }) => `${theme.text_primary}20`};

            outline: 0;
        }
    }

    .actions {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: .6rem;

        width: 100%;

        button {
            height: 40px;
            background-color: ${({ theme }) => theme.primary};
            font-size: 1.2rem;
            color: ${({ theme }) => theme.text_third};

            border-radius: 8px;
            width: 100%;
        }
    }
`;