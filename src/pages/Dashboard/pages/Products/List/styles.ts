import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    gap: 1rem;

    width: 100%;

    border-radius: 8px;

`;

export const Aside = styled.aside`
    background-color: #fff;
    width: 100%;
    padding: .6rem 1rem ;
    border: 1px solid #ccc;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .container {
        position: relative;
        display: flex;
        align-items: center;
        gap: 6px;
        width: 30%;
    }

    .input {
        border-radius: 4px;
        padding: .5rem 1rem;

        border: 1px solid #ccc;

        outline: 0;
        width: 100%;

        color: #333;
    }
`;

export const ContainerTable = styled.div`
    background-color: #fff;
    width: 100%;
    padding: .6rem 1rem ;
    border: 1px solid #ccc;
    border-radius: 8px;
`;