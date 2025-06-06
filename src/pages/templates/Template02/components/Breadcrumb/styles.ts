import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

    padding: 1rem 0;

	h4 {
		font-weight: 600;
        opacity: 0.9;
		color: ${({ theme }) => theme.text_secondary};
	}

	.container_link {
		display: flex;
		align-items: center;
		gap: 10px;

		a {
			color: ${({ theme }) => theme.text_primary};

			&:hover {
				text-decoration: underline;
			}
		}

		p {
			font-weight: 600;
			color: ${({ theme }) => theme.text_secondary};
			opacity: 0.9;
		}
	}
`;
