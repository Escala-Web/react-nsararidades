import React, { useEffect, useState } from "react";
import { Container, Layout, CartList, CartItemStyled } from "./styles";
import { formatPrice } from "../../../../../../../utils/formatPrice";
import { FaTrash } from "react-icons/fa";

import { Aside } from "../Aside";
import { useCart } from "../../../../../../../context/Cart";
import { IProductResponse } from "../../../../../../../types/IProducts";
import { productFindOneApi } from "../../../../../../../services/products";
import { URL_HOST } from "../../../../../../../config/configUrl";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Content = () => {
  const [cart, setCart] = useState([]);
  const { cart: cartFromContext, qtd, removeFromCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      if (!cartFromContext || cartFromContext.length === 0) {
        setCart([]); // limpa visualmente
        return;
      }

      try {
        const responses = await Promise.all(
          cartFromContext.map((item: { id: number }) =>
            productFindOneApi(item.id)
          )
        );

        const cartData = responses.map((product) => {
          const productId = product?.content?.id_product;
          const cartItem = cartFromContext.find(
            (item) => item.id === productId
          );

          return {
            id: cartItem?.id, // se não encontrar, vai ser undefined
            name: product?.content?.name,
            price: product?.content?.variations[0]?.price,
            quantity: cartItem?.quantity || 1,
            image:
              product?.content?.variations[0]?.pictures[0]?.image_path ||
              "https://via.placeholder.com/80",
          };
        });

        // 🔥 Filtra só os válidos
        const validCartData = cartData.filter((item) => item.id !== undefined);

        setCart(validCartData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        toast.error("Erro ao buscar os produtos do carrinho.");
      }
    };

    fetchProducts();
  }, [cartFromContext]);

  return (
    <Container>
      <h2>🛒 Seu Carrinho</h2>
      <Layout>
        <CartList>
          {cartFromContext.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cart
              ?.filter((item) => item.id !== undefined)
              ?.map((item) => (
                <CartItemStyled key={item.id}>
                  <img
                    style={{ width: "100px", background: "transparent" }}
                    src={`${URL_HOST}${item.image}`}
                    alt={item.name}
                  />
                  <div className="info">
                    <strong>{item.name}</strong>
                    <span>Quantidade: {item.quantity}</span>
                  </div>

                  <div className="actions">
                    <span className="price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button onClick={() => removeFromCart(item.id)}>
                      <FaTrash />
                    </button>
                  </div>
                </CartItemStyled>
              ))
          )}
        </CartList>

        { cartFromContext.length > 0 ?
			<Aside cart={cart} /> :
			<Link to={"/produtos"} style={{textDecoration: "underline"}}>Conheça nossos lançamentos</Link>
		}
      </Layout>
    </Container>
  );
};
