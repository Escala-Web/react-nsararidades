import { IoSearch } from "react-icons/io5"
import { Container } from "./styles"

export const Search = () => {
    return (
        <>
            <Container>
                <input type="text" placeholder="O que você procura?"/>
                <button>
                    <IoSearch />
                </button>
            </Container>
        </>
    )
}