import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

    background-color: ${({ theme }) => theme.color_adm};
    height: 150px;
    width: 100%;

    padding: 1rem;

    border-radius: 6px;
    transition: .3s;

    &:hover {
        transform: scale(1.04);
    }

    .card {
        display: flex;
        align-items: center;
        gap: 1rem;

        height: 100%;

        padding: 0 2rem;

        svg {
            font-size: 40px;
            color: ${({ theme }) => theme.primary};
        }
    }

    main {
        background-color: transparent;

        p {
            font-size: 18px;
            font-weight: 600;
            opacity: .9;

            color: ${({ theme }) => theme.color_text};

            margin-bottom: 6px;
        }

        span {
            font-size: 14px;
            font-weight: 400;

            color: ${({ theme }) => theme.color_text};
        }
    }
    

`;