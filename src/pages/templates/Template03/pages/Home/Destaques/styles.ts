import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    gap: 1rem;
    padding: 2rem;

    .item {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        cursor: pointer;
        grid-row: span 2;
        grid-column: span 2;

        &:hover {
            transform: scale(1.03);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            background-color: ${({ theme }) => `${theme.accent}20`};
        }

        span {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: ${({ theme }) => theme.secondary};
            color: #fff;
            padding: 0.8rem 0.5rem;
            font-size: 14px;
            text-align: center;
        }
    }

    .item-2 {
        grid-row: span 2;
        grid-column: span 4;
    }

    .item-4 {
        grid-column: span 2;
    }

    .item-5 {
        grid-row: span 2;
        grid-column: span 2;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        .item {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
        }
    }
`;
