import { Container } from "./styles"

interface TitleProps {
    title: string
}
export const Title = ({ title }: TitleProps) => {

    return (
        <>
            <Container>
                <h3>{title}</h3>
                <div className="container">
                    <span className="primary"></span>
                </div>
            </Container>
        </>
    )

}