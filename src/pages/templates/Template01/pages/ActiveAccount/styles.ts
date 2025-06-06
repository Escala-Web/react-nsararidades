import styled from "styled-components";

export const Container = styled.div`

    min-height: 74vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        min-width: 978px;
        box-shadow: 0 0 8px ${({ theme }) => theme.text_third};
        border-radius: 8px;
        /* height: 600px; */

        padding: 2rem;

    }

    .content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;

        h3 {
            width: 100%;
            text-align: end;
        }

        p {
            text-align: center;
            width: 60%;
        }
    }

`;