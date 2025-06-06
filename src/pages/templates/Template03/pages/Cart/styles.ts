import styled from "styled-components";

export const ContainerCart = styled.div`

    display: flex;
    align-items: start;

    gap: 1rem;

    padding-top: 1rem;

    .container_content {
        width: 70%;

        display: flex;
        flex-direction: column;

        gap: .4rem;

        box-shadow: 0 0 10px ${({ theme }) => `${theme.secondary}30`};
        padding: 1rem;

        border-radius: 6px;

        h2 {
            font-size: 1.4rem;
            font-weight: bold;
            color: ${({ theme }) => theme.text_secondary}
        }

    }

    .content_cart {
        width: 100%;

        padding: 0.85rem 1rem;
        height: 90px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        border-bottom: 1px solid ${({ theme }) => `${theme.text_secondary}20`}

    }

    .cart_image {
        background-color: transparent;
        width: 80px;
        height: 80px;

        img {

            background-color: ${({ theme }) => `${theme.accent}26`};
            height: 100%;
            width: 100%;

            object-fit: cover;

            border-radius: 6px;

            padding: 6px;
        }

    }

    

    .cart_description {
        color: ${({ theme }) => theme.text_secondary};
        width: 40%;

        p {
            font-size: 16px;
            font-weight: 600
        }

        strong {
            font-size: 14px;
        }
    }

    .cart_qtd {
        color: ${({ theme }) => theme.text_secondary};
        width: 16%;

        p {
            font-size: 16px;
            font-weight: 600
        }

        strong {
            font-size: 14px;
        }
    }

    .cart_price {
        color: ${({ theme }) => theme.text_secondary};
        width: 16%;

        p {
            font-size: 16px;
            font-weight: 600
        }

        strong {
            font-size: 14px;
        }
    }

    .container_aside {
        width: 30%;
        /* background-color: blue; */

        padding: 1rem;

        border-radius: 6px;
        box-shadow: 0 0 10px ${({ theme }) => `${theme.secondary}30`};

        h2 {
            font-size: 1.4rem;
            font-weight: bold;
            color: ${({ theme }) => theme.text_secondary}
        }
    }

    .aside_cart {
        display: flex;
        flex-direction: column;
        gap: 2rem
    }

    .resumo_amount {

        ul {
            display: flex;
            flex-direction: column;
            gap: .6rem;

            color: ${({ theme }) => theme.text_secondary};

            li {
                display: flex;
                align-items: center;

                strong {
                    width: 24%
                }
            }
        }

    }

    .form {

        margin-top: 1rem;

        label {
			font-size: 1rem;
			font-weight: 600;
			color: ${({ theme }) => theme.secondary};

            padding-bottom: 6px;
		}

		select {
			width: 100%;
			height: 40px;
			box-sizing: border-box;

			display: flex;
			align-items: center;

			padding: .4rem 1rem;

			border: 1px solid ${({ theme }) => theme.secondary};
			background-color: ${({ theme }) => theme.color_adm};
			border-radius: 6px;

			outline: 0;
		}

    }

    .buy {
        width: 100%;
        height: 46px;

        background-color: ${({ theme }) => theme.primary};
        font-size: 1.1rem;

        color: ${({ theme }) => theme.text_third};
        border-radius: 6px
    }

    .fretes_results {
        color: ${({ theme }) => theme.text_secondary};
    }

    .container_frete {
        /* background-color: #000; */
        padding: .8rem 0;
        display: flex;
        flex-direction: column;

        gap: 6px;
    }

    .frete_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .frete {
        display: flex;
        align-items: start;
        gap: 6px;
    }

    .entrega {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%
    }

`;