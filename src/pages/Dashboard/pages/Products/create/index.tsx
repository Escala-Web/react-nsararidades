import { FormEvent, useContext, useState } from "react";
import { Title } from "../../../components/Title";
import { Container, ContentAside, ContentMain, Formulario } from "./styles";
import { Button, FormGroup, Typography } from "@mui/material";
import { FileManager } from "../../../components/FileManager";
import { PicturesContext } from "../../../../../context/FileManager";
import { useVariation } from "../../../../../hooks/Variation/useVariation";
import { ModalVariation } from "./Ui/Modal/Variation";
import { useBread } from "../../../../../hooks/Bread/useBread";
import { useCategory } from "../../../../../hooks/Category/useCategory";
import { useProduct } from "../../../../../hooks/products/useProduct";
import { ModalBreads } from "./Ui/Modal/Breads";
import { ModalCategory } from "./Ui/Modal/Category";

import { Editor } from "primereact/editor";
import { useStore } from "../../../../../hooks/Store/useStore";
import { useNavigate } from "react-router-dom";

interface Picture {
  id_media: number;
  position: number;
  is_main: boolean;
}

interface Variation {
  id_variant_attribute: number;
  sku: string;
  price: string;
  stock: number;
  is_default: boolean;
  discount: string;
  value_variant: any | null;
  pictures: Picture[];
}

interface Product {
  name: string;
  description: string;
  id_brand: number;
  weight: number; // <-- Adicionado
  length: number; // <-- Adicionado
  height: number; // <-- Adicionado
  width: number; // <-- Adicionado
  variations: Variation[];
}

const generateVariationId = () => Date.now();

export const ProductsCreate = () => {
  const [idBread, setIdBread] = useState({});
  const [idCategory, setIdCategory] = useState({});

  const { findOneStore } = useStore();

  const [productData, setProductData] = useState<Product>({
    name: "",
    description: "",
    id_brand: 0,
    weight: 0,
    length: 0,
    height: 0,
    width: 0,
    variations: [
      {
        id_variant_attribute: generateVariationId(),
        sku: "",
        price: "",
        stock: 0,
        is_default: true,
        discount: "",
        value_variant: null,
        pictures: [],
      },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVariationChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setProductData((prevData) => {
      const updatedVariations = prevData.variations.map((variation) =>
        variation.id_variant_attribute === id
          ? { ...variation, [name]: value }
          : variation
      );

      return {
        ...prevData,
        variations: updatedVariations,
      };
    });
  };

  const handleAddVariation = () => {
    setProductData((prev) => ({
      ...prev,
      variations: [
        ...prev.variations,
        {
          id_variant_attribute: generateVariationId(),
          sku: "",
          price: "",
          stock: 0,
          is_default: false,
          discount: "",
          value_variant: null,
          pictures: [],
        },
      ],
    }));
  };

  const handleRemoveVariation = (id: number) => {
    if (id === productData.variations[0].id_variant_attribute) return;
    setProductData((prev) => ({
      ...prev,
      variations: prev.variations.filter(
        (variation) => variation.id_variant_attribute !== id
      ),
    }));
  };

  const { images, mainImages } = useContext(PicturesContext)!;
  const [optionsValoriation, setOptionsValoriation] = useState<string>("");

  const [text, setText] = useState("");

  const isMain = Object.values(mainImages)[0];

  const { findAllVariation, createValueVariation } = useVariation();

  const { createProduct } = useProduct();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const idvalueVariant = formData.get("value_variant");

    const onlyValues = Object.values(optionsValoriation).filter(Boolean);

    const promises = onlyValues
      .map((value) => value.trim())
      .filter((value) => value)
      .map((value) =>
        createValueVariation.mutateAsync({
          id_variant_attribute: Number(idvalueVariant),
          value,
          viewer: "LIST",
        })
      );

    await Promise.all(promises);

    // Atualiza as variações com imagens associadas
    const updatedVariations = productData.variations.map((variation) => {
      const variationImages = images.filter(
        (img) => img.id_variation === variation.id_variant_attribute
      );

      return {
        sku: variation.sku,
        price: variation.price.replace(",", "."), // Substitui vírgula por ponto se necessário
        stock: variation.stock,
        is_default: variation.is_default,
        discount: variation.discount.replace(",", "."), // Substitui vírgula por ponto se necessário
        value_variant: null,
        pictures: variationImages.map((img, index) => ({
          id_media: img.picture.id,
          position: index + 1, // Define a posição das imagens
          is_main: isMain === img.picture.id, // Define se é a principal
        })),
      };
    });

    // Estrutura final do JSON
    const payload = {
      id_category: idCategory.id_category, // ID da categoria selecionada
      products: {
        name: productData.name,
        description: text,
        id_brand: idBread.id_brand,
        weight: parseFloat(productData.weight / 1000).toFixed(3),
        length: productData.length,
        height: productData.height,
        width: productData.width,
        variations: updatedVariations,
      },
    };

    createProduct.mutate(payload, {
      onSuccess: () => {
        navigate("/administrativo/produtos"); // ✅ Limpa todos os campos do formulário
      },
    });
  };

  const { findAll } = useBread();
  const { findCategory } = useCategory();

  const formatKg = (grams: number) => {
    const kg = (grams / 1000).toFixed(3);
    return kg.replace(".", ",");
  };

  return (
    <Container>
      {/* <Breadcrumb title="Criar Produto" /> */}
      <Formulario onSubmit={handleSubmit}>
        <div className="container">
          <div className="container_main">
            <ContentMain>
              <Title title="Informações do Produto" />
              <div className="form_block mt-2">
                <label htmlFor="name">Nome do Produto</label>
                <input
                  type="text"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form_block mt-1">
                <label htmlFor="description">Descrição do Produto</label>
              </div>
              <Editor
                value={text}
                onTextChange={(e) => setText(e.htmlValue)}
                style={{ height: "320px" }}
              />
            </ContentMain>

            {/* <ContentMain>
							<Title title="Opções de produto" />
							<div className="form_block mt-2">
								<Typography variant="body2">
									Seu produto tem diferentes opções como tamanho, cor ou
									material? <br /> Adicione-as aqui.
								</Typography>
								<ModalVariation />
							</div>
						</ContentMain> */}

            <ContentMain>
              {productData.variations.map((variation, index) => (
                <div
                  key={variation.id_variant_attribute}
                  className="form_group mb-2"
                  style={{
                    padding: "1rem",
                    borderRadius: "8px",
                    position: "relative",
                  }}
                >
                  <Title title={`Produto`} /> <br />
                  {variation.id_variant_attribute !==
                    productData.variations[0].id_variant_attribute && (
                    <button
                      type="button"
                      onClick={() =>
                        handleRemoveVariation(variation.id_variant_attribute)
                      }
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        background: "red",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      ✖
                    </button>
                  )}
                  <div className="form_flex">
                    <div className="form_block">
                      <label>SKU</label>
                      <input
                        type="text"
                        name="sku"
                        value={variation.sku || ""}
                        onChange={(e) =>
                          handleVariationChange(
                            variation.id_variant_attribute,
                            e
                          )
                        }
                      />
                    </div>
                    <div className="form_block">
                      <label>Preço</label>
                      <input
                        type="text"
                        name="price"
                        value={variation.price || ""}
                        onChange={(e) =>
                          handleVariationChange(
                            variation.id_variant_attribute,
                            e
                          )
                        }
                      />
                    </div>
                    <div className="form_block">
                      <label>Estoque</label>
                      <input
                        type="number"
                        name="stock"
                        value={variation.stock || 0}
                        onChange={(e) =>
                          handleVariationChange(
                            variation.id_variant_attribute,
                            e
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="form_flex mt-1">
                    <div className="form_block">
                      <label>Desconto</label>
                      <input
                        type="text"
                        name="discount"
                        value={variation.discount || ""}
                        onChange={(e) =>
                          handleVariationChange(
                            variation.id_variant_attribute,
                            e
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="form_block mt">
                    <label>Adicionar imagem</label>
                    <FileManager
                      title="Adicionar imagem"
                      id={variation.id_variant_attribute}
                    />
                  </div>
                </div>
              ))}
              {/* <Button
								variant="outlined"
								onClick={handleAddVariation}
								className="mt-1"
							>
								+ Adicionar Variação
							</Button> */}
            </ContentMain>

            <ContentMain>
              <Title title={`Pacote`} /> <br />
              <div className="form_flex">
                <div className="form_block">
                  <label htmlFor="">Peso (G)</label>
                  <input
                    type="text"
                    name="weight"
                    onChange={(e) => {
                      const raw = e.target.value.replace(/\D/g, "");
                      const grams = parseInt(raw || "0", 10);
                      setProductData((prev) => ({
                        ...prev,
                        weight: grams,
                      }));
                    }}
                    value={formatKg(productData.weight)}
                  />
                </div>
                <div className="form_block">
                  <label htmlFor="">Comprimento (cm)</label>
                  <input
                    type="text"
                    name="length"
                    onChange={handleChange}
                    value={productData.length}
                  />
                </div>
              </div>
              <div className="form_flex">
                <div className="form_block">
                  <label htmlFor="">Altura (cm)</label>
                  <input
                    type="text"
                    name="height"
                    onChange={handleChange}
                    value={productData.height}
                  />
                </div>
                <div className="form_block">
                  <label htmlFor="">Largura (cm)</label>
                  <input
                    type="text"
                    name="width"
                    onChange={handleChange}
                    value={productData.width}
                  />
                </div>
              </div>
            </ContentMain>
          </div>
          <ContentAside>
            <div className="container">
              <Title title="Categoria" />
              <FormGroup className="mt-1">
                {findCategory?.data?.content
                  ?.filter((fil) => fil.parent_category == null)
                  ?.map((item) => {
                    return (
                      <label
                        key={item.id_bread}
                        style={{ display: "block", marginBottom: "8px" }}
                      >
                        <input
                          type="radio"
                          name="id_category"
                          // value={item.id_bread}
                          onChange={() => setIdCategory(item)}
                          style={{ marginRight: "8px", width: "20px" }}
                        />
                        {item.name}
                      </label>
                    );
                  })}

                <ModalCategory />
              </FormGroup>
            </div>

            <div className="container mt-1">
              <Title
                title={
                  findOneStore?.data?.content?.NAME_STORE.toLowerCase().startsWith(
                    "nsa"
                  )
                    ? "Ano"
                    : "Marca"
                }
              />
              <FormGroup className="mt-1">
                {findAll?.data?.content?.map((item) => {
                  return (
                    <label key={item.id_bread}>
                      <input
                        type="radio"
                        name="id_brand"
                        onChange={() => setIdBread(item)}
                        style={{ marginRight: "8px", width: "20px" }}
                      />
                      {item.name}
                    </label>
                  );
                })}

                <ModalBreads />
              </FormGroup>
            </div>
          </ContentAside>
        </div>
        <Button type="submit" variant="contained" className="mt-1">
          Cadastrar
        </Button>
      </Formulario>
    </Container>
  );
};
