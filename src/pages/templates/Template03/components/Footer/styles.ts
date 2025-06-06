import styled from "styled-components";

export const ContainerFooter = styled.footer`
	background-color: ${({ theme }) => theme.text_secondary};
	color: ${({ theme }) => theme.text_third};
	padding: 60px 20px 30px;

	.footer-wrapper {
		max-width: 1440px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 40px;
		padding-bottom: 2rem;
		border-bottom: 1px solid ${({ theme }) => theme.text_third};
	}

	.footer-section {
		h4 {
			font-size: 1.1rem;
			margin-bottom: 1rem;
			color: #ffffff;
		}
		p {
			font-size: 0.9rem;
			margin: 0.5rem 0;
			line-height: 1.6;
		}
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
			li {
				margin-bottom: 0.5rem;
				a {
					color: ${({ theme }) => theme.text_third};
					text-decoration: none;
					font-size: 0.9rem;
					transition: color 0.2s ease-in-out;

					&:hover {
						color: #ffffff;
					}
				}
			}
		}
	}

	.logo img {
		width: 160px;
		margin-bottom: 1rem;
	}

	.social {
		display: flex;
		gap: 12px;
		margin-top: 1rem;

		a {
			display: inline-block;
			width: 28px;
			height: 28px;

			svg {
				font-size: 1.6rem;
                color: ${({ theme }) => theme.text_third};
			}
		}
	}

	.footer-bottom {
		text-align: center;
		margin-top: 30px;
		font-size: 0.85rem;
		color: ${({ theme }) => theme.text_third};
	}
`;
