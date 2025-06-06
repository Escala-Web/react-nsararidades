import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

    .container {
        max-width: 1440px;
        width: 100%;

        
    }

	.reset_password {
		width: 100%;

		display: flex;
		justify-content: end;
		align-items: center;

		margin-top: 1rem;

		p {
			color: ${({ theme }) => theme.secondary};
			font-size: 1rem;
			font-weight: 600;

			cursor: pointer;
			text-decoration: underline;
		}
	}
`;
