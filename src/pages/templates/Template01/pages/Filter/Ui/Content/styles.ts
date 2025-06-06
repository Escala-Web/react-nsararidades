import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1rem;

	width: 100%;

	.container_card {
		display: flex;
		align-items: center;
		width: 100%;

		gap: 1.1rem;
		flex-wrap: wrap;
        
		@media (max-width: 1104px) {
            /* background-color: aqua; */
			display: flex;
			align-items: center;
            justify-content: center;
			/* justify-content: space-between; */
		}

        /* @media (max-width: 508px) {
			background-color: aqua;
			display: flex;
			align-items: center;
			justify-content: center;
		} */
	}

	.pagination {
		margin-top: 1rem;

		width: 100%;

		display: flex;
		align-items: center;
		justify-content: end;
	}
`;
