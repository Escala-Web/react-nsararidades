import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    

    height: 100vh;

    .container {
        width: 100%;
        background-color: ${({ theme }) => theme.page_construct_color};

        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        width: 1440px;
        height: 50%;

        display: flex;

        justify-content: space-evenly;
        flex-direction: column;

        button {
            width: 20%;
            height: 60px;
            
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: .6rem;

            background-color: ${({ theme }) => theme.page_construct_accent};
            color: ${({ theme }) => theme.page_construct_color};
            
            font-size: 1.2rem;


        }
    }

    .title {
        width: 60%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        color: ${({ theme }) => theme.page_construct_background};

        p {
            font-size: 1.2rem;
            opacity: .8;

            width: 80%;
        }

        h1 {
            font-size: 3.2rem;
            opacity: .9;
        }

        h3 {
            font-size: 1.2rem;
            opacity: .8;
        }
    }

    .sidebar {
        position: absolute;
        right: 0;
        width: 40%;
        top: 0;
        height: 100%;

        padding: 2rem 4rem;

        background-color: ${({ theme }) => theme.page_construct_accent};

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 6px;

        img {
            border-radius: 50%;
        }

        h4 {
            font-size: 2rem;
            color: ${({ theme }) => theme.page_construct_color};
        }
    }

    .content_sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        height: 40%;

        p {
            font-size: 2.2rem;
            color: ${({ theme }) => `${theme.page_construct_color}`};
        }

        a {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: ${({ theme }) => `${theme.page_construct_color}`};

            text-decoration: underline;

            svg {
                color: ${({ theme }) => `${theme.page_construct_color}`};
            }

            p {
                color: ${({ theme }) => `${theme.page_construct_color}`};
                font-size: 1.1rem;
                text-transform: uppercase;
            }
        }
    }

    .footer {
        display: flex;
        flex-direction: column;

        gap: 0.4rem;

        font-size: 1.2rem;

        p {
            color: ${({ theme }) => theme.page_construct_color};
        }

        a {
            color: ${({ theme }) => theme.page_construct_color};

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
