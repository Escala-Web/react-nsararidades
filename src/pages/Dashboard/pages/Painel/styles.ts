import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    
    flex-direction: column;

    width: 100%;

    gap: 2rem;
    padding: 1rem 0;

    @media (max-width: 1440px) {
        /* background-color: red; */
    }

    .container_section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        align-items: center;
        justify-content: space-between;

    }


`;