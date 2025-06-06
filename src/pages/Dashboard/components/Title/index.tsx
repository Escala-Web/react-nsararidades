import { Container } from "./styles";

interface TitleProps {
    title: string
}

export const Title = ({title}: TitleProps) => {

    return (
        <>
            <Container>
                <p>{title}</p>
            </Container>
        </>
    );

}