import styled from "styled-components";

export const Container = styled.div`

    width: 500px;
    display: flex;
    gap: 2px;

    span {
        width: 40px;
        height: 40px;
        background-color: ${({ theme }) => `${theme.primary}10`};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;

        cursor: pointer;
    }

    input {
        outline: 0;
        border: 0;
        background-color: ${({ theme }) => `${theme.primary}10`};
        text-align: center;

        width: 75px;

        border-radius: 6px;
    }

`;