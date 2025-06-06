import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

interface TitleProps {
    title: string,
    align?: string,
    link?: string,
    to?: string,
}

export const Title = React.memo(({ title, align, link, to }: TitleProps) => {

    return (
        <Container align={align}>
            <h3>{title}</h3>
            {/* <Link to={to}>{link}</Link> */}
        </Container>
    )
})