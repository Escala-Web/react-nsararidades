import { ReactNode } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

interface FormularioProps {
	children: ReactNode;
    title: string;
    subTitle?: string;
    description?: string;
    link?: string;
    linkName?: string;
	component?: string
}

export const Formulario = ({ children, title, subTitle, description, linkName, link, component }: FormularioProps) => {
	return (
		<>
			<Container>
				<div className="form">
					<h2>{title}</h2>
					{children}
				</div>
                <div className="image">
                    <div className="content">
						<h3>{subTitle}</h3>
						<p>{description}</p>

						<Link className="link" to={link}>{linkName}</Link>
						{component}
					</div>
                </div>
			</Container>
		</>
	);
};
