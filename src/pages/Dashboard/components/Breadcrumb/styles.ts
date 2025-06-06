import styled from "styled-components";

export const Container = styled.div`

    width: 99%;
    height: 250px;

    background-image: linear-gradient(to bottom right, #1976d2, rgb(178, 178, 178));



    border-radius: 8px;

    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
    width: 100%;

    .breadcrumb {
        color: #fff;
        font-size: 2rem;
        h3 {
            font-weight: bold;
        }
    }

    .container_breadcrumb {
        display: flex;
        align-items: center;
        gap: .6rem;

        a {
            color: #333;
            font-weight: 600;
        }

        p {
            color: #333;
            font-weight: 600;
            opacity: .7;
        }
    }

`;