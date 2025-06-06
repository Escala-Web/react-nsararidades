import { ReactNode } from "react";
import { Container } from "./styles";

interface TitleProps {
    title: string;
    icon: ReactNode;
}

export const Title = ({ title, icon }: TitleProps) => {
    return (
        <Container >
            {icon}
            <h2>{title}</h2>
        </Container>
    );
};
