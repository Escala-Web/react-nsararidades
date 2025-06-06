import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 1rem;

    gap: 1rem;

    .container {
        padding: 1rem;

        background-color: ${({ theme }) => theme.color_adm};
        border-radius: 6px;
    }

    .image {
        width: 100px;
        height: 100px;

        padding: .6rem;

        img {
            width: 100%;
            object-fit: cover;
            background-color: transparent;
        }
    }

    .header_container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-bottom: .6rem;
    }

    .header_order {
        display: flex;
        align-items: center;

        gap: 6px;

        p {
            font-size: 16px;
            color: ${({ theme }) => theme.color_text};
        }
    }

    .status {
        p {
            font-size: 16px;
            color: ${({ theme }) => theme.color_text};
        }
    }

    .icon {
        color: ${({ theme }) => theme.text_primary};
        font-weight: bold;
    } 

    .container_main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem 0;

        color: ${({ theme }) => theme.color_text};
    }

    .container_product {
        width: 50%;
        display: flex;
        align-items: center;

        gap: 10px;
    }

    .resumo {
        display: flex;
        align-items: end;
        justify-content: end;

        position: relative;

        flex-direction: column;

        border-top: 1px solid ${({ theme }) => `${theme.color_text}1`};
    }

    .btn_payment {
        position: absolute;
        left: 0;

        background-color: ${({ theme }) => theme.accent};
        width: 18%;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        a {
            font-size: 1.02rem;
            font-weight: bold;
            color: ${({ theme }) => theme.color_adm};

            opacity: .9;
        }
    }

    .card {
        /* width: 150px; */
        height: 60px;

        padding: .4rem;

        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: center;

        line-height: 18px;

        opacity: .9;

        h5 {
            font-size: 14px;
            color: ${({ theme }) => theme.color_text};
            font-weight: 400;
        }

        p {
            color: ${({ theme }) => theme.color_text};
            /* font-weight: bold; */
        }
    }

    .price_total{
        font-weight: bold;
    }
`;