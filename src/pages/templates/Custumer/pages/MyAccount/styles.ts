import styled from "styled-components";

export const Container = styled.div`

    min-height: 70vh;
    padding: 0 1rem 6rem;

    .container_shortcut {
        display: flex;
        align-items: center;

        gap: 1rem;

        justify-content: space-between;

        width: 100%;

        padding-top: 1.4rem;

        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
        }

    }

    .skeleton {
        /* background-color: aqua; */

        display: flex;
        align-items: center;

        flex-direction: column;
        margin-top: -40px;
    }

`;