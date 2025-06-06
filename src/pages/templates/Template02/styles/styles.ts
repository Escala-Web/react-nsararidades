import styled from "styled-components";

export const ContainerGlobal = styled.div`
	max-width: 1440px;
	/* height: 700px; */
	margin: 0 auto;
	background-color: ${({ theme }) => theme.background};
`;

export const Container = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: start;
	flex-direction: column;

	min-height: 90vh;
`;
