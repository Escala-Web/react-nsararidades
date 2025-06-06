import { Link } from "react-router-dom";
import { Container } from "./styles";
import { IoMdArrowDropright } from "react-icons/io";

interface BreadcrumbProps {
	title: string;
	number?: string
}

export const Breadcrumb = ({ title, number }: BreadcrumbProps) => {
	return (
		<>
			<Container>
				<div className="container_breadcrumb">
					<div className="container">
						<Link to="/">Página Inicial</Link>
						<IoMdArrowDropright />

						<p>{title}</p>
					</div>
					{number && (

					<p>Produtos encontrados ({number})</p>
					)}
				</div>
			</Container>
		</>
	);
};
