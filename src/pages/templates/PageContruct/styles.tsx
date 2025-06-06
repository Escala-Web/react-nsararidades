import styled from "styled-components";

export const Container = styled.div`

    

	background-color: ${({ theme }) => theme.page_construct_background};
	height: 100vh;
	color: ${({ theme }) => theme.page_construct_color};

	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	.container {
		max-width: 1440px;

		height: 80%;

		display: flex;
		align-items: center;
	}

	.container_content {
		display: flex;
		flex-direction: column;

		width: 80%;

		gap: 4rem;

		h4 {
			font-size: 2rem;
			text-transform: uppercase;
		}

		h2 {
			font-size: 5rem;

			line-height: 5.4rem;
		}

		p {
			font-size: 1.3rem;
			line-height: 1.8rem;
            opacity: .8;
		}

		a {
			padding: 1rem 4rem;
			background: ${({ theme }) => `${theme.page_construct_color}1`};

			text-align: center;
			font-size: 1.2rem;
			font-weight: bold;

			border: 1px double ${({ theme }) => theme.page_construct_accent};
			color: ${({ theme }) => theme.page_construct_color};

			width: 30%;
			border-radius: 0 22px;

			position: relative;
			overflow: hidden;
			display: inline-block;
			text-decoration: none;
			z-index: 1;

            &:hover {
                color: black;
                z-index: 9999999;
                border: 1px double ${({ theme }) => theme.page_construct_color};
            }

			&::before {
				content: "";
				position: absolute;
                background-color: ${({ theme }) => `${theme.page_construct_accent}`};
				left: 0;
				top: 0;
				width: 0%;
				height: 100%;
				z-index: 0;
				transition: width 0.3s ease;
            ;
			}
            
			&:hover::before {
                content: 'Fale Conosco';

                height: 100%;
				width: 100%;

                display: flex;
                align-items: center;
                justify-content: center;

                color: ${({ theme }) => theme.page_construct_color};
                
			}

		}
	}

    .container_redes_sociais {
        display: flex;
        align-items: center;

        gap: 1rem;

        p {
            font-size: 1.2rem;
            font-weight: 600;
            opacity: 1;
        }
    }

    .redes_sociais {
        display: flex;
        align-items: center;
        gap: .6rem;

        span {
            width: 40px;
            height: 40px;
            background: ${({ theme }) => `${theme.page_construct_color}1`};

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 20%;

            svg {
                font-size: 1.2rem
            }
        }
    }

    .bar {
        width: 200px;
        height: 2px;
        background-color: ${({ theme }) => theme.page_construct_color};
        border-radius: 4px;
    }

    .image {
        background-color: transparent;
    }
`;
