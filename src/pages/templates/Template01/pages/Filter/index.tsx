import { useState } from "react"
import { useProduct } from "../../../../../hooks/products/useProduct"
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal"
import { Container } from "./styles"
import { ProductAside } from "./Ui/Aside"
import { ProductContent } from "./Ui/Content"
import { useCategory } from "../../../../../hooks/Category/useCategory"
import { useBread } from "../../../../../hooks/Bread/useBread"
import { Breadcrumb } from "../../components/Breadcrumb"
import { useParams } from "react-router-dom"
import { decryptRoute } from "../../../../../utils/cryptoRoutes"
import { useProductFilter } from "../../../../../hooks/products/useProductFilter"
import { Loading } from "../../components/Loading"


export const Filter = () => {

    const { findCategory } = useCategory();
    const { findAll: breads } = useBread();


    // return
    if(breads.isLoading || findCategory.isLoading) {
        return <Loading />
    }


    return (
        <>
            <ContainerTemplate>
                <Breadcrumb title="Produtos" number={4}/>
                <Container>
                    <div className="container">
                        <ProductAside categories={findCategory.data?.content} breads={breads.data?.content}/>
                        <ProductContent />
                    </div>
                </Container>
            </ContainerTemplate>
        </>
    )
}