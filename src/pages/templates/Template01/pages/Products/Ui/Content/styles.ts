import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;

	.container_card {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.1rem;
		width: 100%;
	}

	.pagination {
		margin-top: 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
`;

export const Load = styled.div`
	height: 70vh;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
