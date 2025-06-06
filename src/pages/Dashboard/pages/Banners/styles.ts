import styled from "styled-components";

export const Container = styled.div`


    padding: 1rem 2rem;

    margin-bottom: 1rem;

    border-radius: 1rem;
    width: 100%;

    .container {
        display: flex;
        align-items: center;
    }

    .description {
        display: flex;
        flex-direction: column;

        gap: .6rem;
        width: 70%;

        color: #f3f3f3;

        h3 {
            font-size: 2.2rem;
            opacity: .9;
        }

        p {
            font-size: 14px;
            opacity: .9;
        }
    }

    .container_button {
        display: flex;
        justify-content: end;

        gap: .6rem;
        width: 30%;

    }


`;

export const ContainerBanner = styled.div`

    .container_banners {
        display: flex;
        flex-direction: column;
    }

    .title {

        margin-top: 1rem;

        h2 {
            font-size: 1.4rem;
            font-weight: 600;
            opacity: .9;
        }
    }

    .container_banner {
        background-color: aqua;

        height: 280px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    

`;