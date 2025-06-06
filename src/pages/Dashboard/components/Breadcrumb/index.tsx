import { Link } from "react-router-dom"
import { Container } from "./styles"
import { Button } from "@mui/material"

interface BreadcrumbProps {
    title?: string,
    button?: string,
    onclick?: () => void
}

export const Breadcrumb = ({title, button, onclick}: BreadcrumbProps) => {

    return (
        <>
            <Container>
                <div className="breadcrumb">
                    <h3>{title}</h3>
                </div>
                <div className="container_breadcrumb">
                    <Button variant="contained" onClick={onclick}>{button}</Button>
                </div>
            </Container>
        </>
    )
}