import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	left: 0;

	background-color: ${({ theme }) => theme.background};
	
	.loading {
		color: ${({ theme }) => theme.accent};

		text-align: center;
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

    .load {
        display: flex;
        gap: 4px;
    }

    .name {
        display: inline-flex;
        animation: float .6s ease-in-out infinite alternate;

        text-transform: uppercase;
        font-size: 1.8rem;
    }

	@keyframes float {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-10px);
		}
	}
`;
