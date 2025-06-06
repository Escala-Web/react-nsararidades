import { URL_HOST } from "../../../../../../config/configUrl";
import { useProduct } from "../../../../../../hooks/products/useProduct";
import { Title } from "../../../components/Title";
import { GridContainer } from "./styles";


const produtos = [
    { id: 1, nome: "Produto 1", imagem: "https://via.placeholder.com/400x300" },
    { id: 2, nome: "Produto 2", imagem: "https://via.placeholder.com/400x500" },
    { id: 3, nome: "Produto 3", imagem: "https://via.placeholder.com/400x250" },
    { id: 4, nome: "Produto 4", imagem: "https://via.placeholder.com/400x600" },
    { id: 5, nome: "Produto 5", imagem: "https://via.placeholder.com/400x400" },
    // { id: 6, nome: "Produto 6", imagem: "https://via.placeholder.com/400x350" },
];

export const Destaques = () => {

    const { findAllProduct } = useProduct();

    

    return (
        <div>
            <Title title="Destaques"/>
            <GridContainer>
            {findAllProduct?.data?.content?.slice(4, 9)?.map((item, index) => (
                <div className={`item item-${index + 1}`} key={item.id_product}>
                    <img src={`${URL_HOST}${item.variations[0].image_path}`} alt={item.name} />
                    <span>{item.name}</span>
                </div>
            ))}
        </GridContainer>
        </div>
    );
};
