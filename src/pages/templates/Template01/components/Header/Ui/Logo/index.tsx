import styled from "styled-components";

const ContainerLogo = styled.div`



max-width: 180px;

img {
    width: 100%;
    padding: 1.4rem;	
}


`;

export const Logo = ({ image }) => {
	return (
		<ContainerLogo className="container_header_logo">
			<img src={image} alt="Logo do site" />
		</ContainerLogo>
	);
};