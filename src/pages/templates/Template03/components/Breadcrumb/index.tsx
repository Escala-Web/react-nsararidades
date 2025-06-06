import { Link } from "react-router-dom"
import { Container } from "./styles"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

interface BreadcrumbProps {
    page: string
}
export const Breadcrumb = ({ page }: BreadcrumbProps) => {
    return (
        <>
            <Container>
                <div className="container">
                    <div className="links">
                        <Link to={'/'}>Pagina Inicial</Link>
                        <MdKeyboardDoubleArrowRight />
                        <p>{page}</p>
                    </div>
                </div>
            </Container>
        </>
    )
}