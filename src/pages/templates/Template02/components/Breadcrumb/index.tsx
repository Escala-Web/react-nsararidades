import { Link } from "react-router-dom";
import { Container } from "./styles";

interface BreadcrumbProps {
	name: string;
	qtd?: string | number;
}
export const Breadcrumb = ({ name, qtd }: BreadcrumbProps) => {
	return (
		<>
			<Container>
				<div className="container_link">
					<Link to="/">Página Inicial</Link>
					<span>{"/"}</span>
					<p>{name}</p>
				</div>
				{qtd == "" && <h4>Produtos encontrados ({qtd})</h4>}
			</Container>
		</>
	);
};
