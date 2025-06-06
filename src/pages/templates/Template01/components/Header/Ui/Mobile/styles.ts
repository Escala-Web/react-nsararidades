import styled from "styled-components";

export const ContainerAvatarUser = styled.div`

    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;

    div {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_third};
    }

    p {
        font-size: 18px;
        color: ${({ theme }) => theme.text_secondary};
    }

`;

export const ContainerOpts = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    /* background-color: aqua; */
    gap: .4rem;

    width: 250px;

    a {
        width: 90%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding-bottom: 10px; */

        font-size: 18px;

        border-radius: 40px;
    }

    button {
        width: 90%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding-bottom: 10px; */

        font-size: 18px;

        border-radius: 40px;
    }

    .logout {
        background-color: ${({ theme }) => theme.page_construct_accent};
        color: ${({ theme }) => theme.text_third};
    }

    .login {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_third};
    }

    .register {
        background-color: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.text_secondary};
    }

`;

export const ContainerMain = styled.div`

    height: 76vh;
    overflow-y: scroll;

`;