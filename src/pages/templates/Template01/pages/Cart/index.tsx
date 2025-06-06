import { Link } from "react-router-dom";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";
import { Container } from "./styles";
import { Content } from "./ui/Content";
import { CircularProgress } from "@mui/material";
import { useFrete } from "../../../../../hooks/Frete/useFrete";
import { Aside } from "./ui/Aside";

export const Cart = () => {
	const { calcularFrete } = useFrete();

	return (
		<>
			<ContainerTemplate>
				<Container>
					<>
						<Content />
					</>

					{calcularFrete.isPending && (
						<div className="loadingg">
							<CircularProgress style={{ zIndex: "9999" }} />
						</div>
					)}
				</Container>
			</ContainerTemplate>
		</>
	);
};
