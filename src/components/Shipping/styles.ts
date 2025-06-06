import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    

    width: 60%;
    height: 110vh;

    padding-top: 4rem;

    .register{
        padding-top: 1rem;

        p {
            font-size: 1.1rem;
            color: ${({ theme }) => theme.page_construct_background};

            a {
                color: ${({ theme }) => theme.page_construct_accent};
                text-decoration: underline;
            }
        }
    }

`;