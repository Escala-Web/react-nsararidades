import { Link } from "react-router-dom"
import { Container } from "./styles"
import { useCategory } from "../../../../../hooks/Category/useCategory"

interface TitleProps {
    title: string,
    nameLink?: string,
    link?: string,
    isLink?: boolean,
    data?: object[]
}

export const Title = ( data: TitleProps ) => {

    return (
        <>
            <Container>
                <h3>{data.title}</h3>
                {data.isLink ? (
                    <Link to={data.link}>{data.nameLink}</Link>
                ): (
                <ul className="container_ul">
                    {data?.data?.map((item) => (
                        <li>{item.name}</li>
                    ))}
                </ul>

                )}
            </Container>
        </>
    )
}