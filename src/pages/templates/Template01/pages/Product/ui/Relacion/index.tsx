import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardProduct } from "../../../../components/CardProduct";
import { useProductFilter } from "../../../../../../../hooks/products/useProductFilter";
import { Loading } from "../../../../components/Loading";
import { SwiperContainer } from "./styles";

interface RelacionProps {
  id: number;
  id_product: number | string
}

export const Relacion = ({ id, id_product }: RelacionProps) => {
  const { data, isLoading } = useProductFilter("category", String(id), "1");

  const [products, setProducts] = useState();

  useEffect(() => {
  const newProducts = data?.content?.filter(
    (item) => String(item.id_product) !== String(id_product)
  );
  setProducts(newProducts || []);
}, [data, id_product]);


  const produtosRelacionados = data?.content?.filter(
    (item) => String(item.id_product) !== String(id_product)
  );


  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      {isLoading ? (
        <Loading />
      ) : produtosRelacionados?.length ? (
        <SwiperContainer>
			<Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {products?.flatMap((product) =>
            product?.variations?.map((variation, index) => (
              <SwiperSlide
                key={`${product.id_product}-${variation.id}-${index}`}
              >
                <CardProduct product={product} variations={variation} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
		</SwiperContainer>
      ) : (
        <p>Nenhum produto relacionado encontrado.</p>
      )}
    </div>
  );
};
