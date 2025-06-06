import { FaMinus, FaPlus } from "react-icons/fa"
import { Container } from "./styles"
import { useCart } from "../../../../../context/Cart"

export const Quantidade = ({ data }) => {

    const { qtd, setQtd } = useCart();


    const nextQtd = () => {

        if(qtd === data.variations[0].qtd_stock) {
            return;
        }

        setQtd((prev) => prev +1)
    }

    const prevQtd = () => {
        if(qtd === 1) return
        setQtd((prev) => prev -1)
    }


    return (
        <>
            <Container>
                <span onClick={prevQtd}>
                    <FaMinus />
                </span>
                <input type="text" value={qtd} />
                <span onClick={nextQtd} >
                    <FaPlus />
                </span>
            </Container>
        </>
    )
}