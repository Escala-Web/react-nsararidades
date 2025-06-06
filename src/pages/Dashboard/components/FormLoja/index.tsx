import { ReactNode } from "react";
import { Container } from "./styles";

interface FormLojaProps {
    children: ReactNode,
    title: string
}
export const FormLoja = ({ title, children }: FormLojaProps) => {
	return (
		<>
			<Container>
				<div className="container">
					<h2>{title}</h2>
                {children}
				</div>
			</Container>
		</>
	);
};
