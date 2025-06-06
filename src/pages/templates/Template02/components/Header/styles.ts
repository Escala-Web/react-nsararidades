import styled from "styled-components";

export const ContainerHeader = styled.div`
	.desktop {
		@media (max-width: 768px) {
			display: none;
		}
	}

    .mobile {
        @media (min-width: 768px) {
			display: none;
		}
    }
`;
