import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    gap: 1rem;

    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
    }

`;