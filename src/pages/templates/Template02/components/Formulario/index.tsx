import { ReactNode } from "react";
import { Container } from "./styles";

interface FormularioProps {
	children: ReactNode;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	title?: string;
	subTitle?: string;
	image?: string;
}
export const Formulario = ({
	children,
	onSubmit,
	title,
	subTitle,
	image,
}: FormularioProps) => {


	return (
		<>
			<Container>
				{image && (
					<div
						className="image"
						
					>
						<img src={image} alt="" />
					</div>
				
				)}
				<form onSubmit={onSubmit} className="form">
					<div className="header_form">
						<h2>{title}</h2>
						<p>{subTitle}</p>
					</div>
					<div className="container_form">{children}</div>
				</form>
			</Container>
		</>
	);
};
