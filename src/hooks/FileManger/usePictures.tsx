import { useState } from "react";

interface IPicturesProps {
    file_path: string;
    file_type: string;
    id: number;
    name: string;
    type: string;
}

interface IVariationPicture {
    picture: IPicturesProps;
    id_variation: number;
    index: number;
}

export const usePictures = () => {
    // Armazenar imagens por ID de variação
    const [images, setImages] = useState<Map<number, IVariationPicture[]>>(new Map());

    const handleAddPictures = (picture: IPicturesProps, idVariation: number, indexV: number) => {
        // Verifica se a imagem já foi adicionada para a mesma variação
        setImages((prevImages) => {
            const variationImages = prevImages.get(idVariation) || [];
            const isValid = variationImages.some(
                (item) => item.picture.id === picture.id && item.id_variation === idVariation
            );

            if (isValid) return prevImages;

            const updatedImages = [...variationImages, { picture, id_variation: idVariation, index: indexV }];
            return new Map(prevImages).set(idVariation, updatedImages); // Atualiza as imagens específicas da variação
        });
    };

    const handleRemovePicture = (id: number, idVariation: number) => {
        setImages((prevImages) => {
            const variationImages = prevImages.get(idVariation) || [];
            const updatedImages = variationImages.filter((item) => item.picture.id !== id);
            return new Map(prevImages).set(idVariation, updatedImages); // Atualiza as imagens específicas da variação
        });
    };

    return { handleAddPictures, handleRemovePicture, images };
};
