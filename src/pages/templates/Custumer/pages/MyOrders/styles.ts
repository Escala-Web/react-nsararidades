import styled from "styled-components";

export const Container = styled.div`

    margin-bottom: 4rem;

    .filter {
        display: flex;
        justify-content: space-between;
        align-items: center;

        select {
            margin-top: 10px;
            padding: .4rem .8rem;

            border-radius: 4px;
            width: 12rem;

            border: 1px solid ${({ theme }) => theme.color_adm};
            color: ${({ theme }) => theme.color_text};

            outline: 0;
        }
    }

`;