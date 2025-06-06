import { useProductsRecents } from "../../../../../hooks/products/useProductRecents";
import { useProductsPopular } from "../../../../../hooks/products/useProductsPopular";
import { Seo } from "../../../../../seo";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";
import { Banner } from "../../components/Banner";
import { CardCategory } from "../../components/CardCategory";
import { Destaques } from "../../components/Destaques";
import { ProductPopular } from "../../components/ProductPopular";
import { Loading } from "../Loading";

export const Home = () => {

  const { data: recents } = useProductsRecents();
  const { data: popular } = useProductsPopular();

  if (recents?.isLoading || popular?.isLoading) {
    return <Loading />; 
  }

  const productsLancamentos = popular?.content?.slice(0, 3);
  const productsProcurados = recents?.content?.slice(7, 10);
  const productsDestaques = recents?.content?.slice(4, 7);

  const imageProcurados = 'https://raw.githubusercontent.com/Escala-Web/assetsProjetcs/refs/heads/main/lancamentos.jpg'
  const imageLancamentos = "https://raw.githubusercontent.com/Escala-Web/assetsProjetcs/refs/heads/main/popular.jpg";

  return (
    <>
      <Seo title="Página Inicial" />

      <Banner />

    
      <ContainerTemplate>
        <CardCategory />
        <ProductPopular data={productsLancamentos} image={imageLancamentos} name="Lançamentos" />
        <Destaques data={productsDestaques}/>
        <ProductPopular data={productsProcurados} image={imageProcurados} name="Populares" />
      </ContainerTemplate>
    </>
  );
};
