import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
	width: 270px;

	/* background-color: aqua; */

	box-shadow: 0 0 10px ${({ theme }) => `${theme.text_secondary}60`};

	padding: 1rem 0.6rem;
	border-radius: 6px;

	@media (max-width: 480px) {
		width: 100%
	}

	.image {
		/* width: 200px; */

		img {
			width: 100%;
			background-color: ${({ theme }) => `${theme.accent}20`};
			border-radius: 6px;
		}
	}

	.content {
		height: 140px;

		display: flex;
		flex-direction: column;

		justify-content: space-between;
	}

	.description {
		height: 110px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;

		color: ${({ theme }) => theme.text_secondary};

		p {
			font-size: 15px;
			display: -webkit-box;
			-webkit-line-clamp: 2; /* Limita a 2 linhas */
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}

        h5 {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.text_primary}
        }
	}

    .button {
        width: 100%;

        height: 40px;
        background-color: ${({ theme }) => theme.secondary};
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 6px;

        a {
            width: 100%;
            text-align: center;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.1rem;
            color: ${({ theme }) => theme.text_third}
        }
}
`;
