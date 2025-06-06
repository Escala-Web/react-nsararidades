import styled from "styled-components";

export const Container = styled.div`

    min-height: 80vh;

    margin-top: 1rem;

    .container {
        display: flex;
        align-items: start;
        gap: 1rem;

        @media (max-width: 1104px) {
            /* background-color: aqua; */

            padding: 0 1rem;

            display: flex;
            flex-direction: column;
        }
    }

`;
