import { createContext, useContext, useState, ReactNode } from "react";

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

interface PicturesContextType {
	images: IVariationPicture[];
	mainImages: { [id_variation: number]: number }; // imagem principal por variação
	handleAddPictures: (picture: IPicturesProps, idVariation: number) => void;
	handleRemovePicture: (id: number, idVariation: number) => void;
	setMainImage: (idVariation: number, pictureId: number) => void;
}

export const PicturesContext = createContext<PicturesContextType | undefined>(undefined);

export const PicturesProvider = ({ children }: { children: ReactNode }) => {
	const [images, setImages] = useState<IVariationPicture[]>([]);
	const [mainImages, setMainImages] = useState<{ [id_variation: number]: number }>({});

	const handleAddPictures = (picture: IPicturesProps, idVariation: number) => {
		const newPicture: IVariationPicture = {
			picture,
			id_variation: idVariation,
			index: images.length,
		};

		setImages((prevImages) => [...prevImages, newPicture]);
	};

	const handleRemovePicture = (id: number, idVariation: number | boolean) => {
	

				
		setImages((prevImages) =>
			prevImages.filter((item) => item.picture.id !== id)
		);

		setMainImages((prev) => {
			const newMain = { ...prev };
			if (newMain[idVariation] === id) {
				delete newMain[idVariation]; 
			}
			return newMain;
		});
	};

	const setMainImage = (idVariation: number, pictureId: number) => {
		setMainImages((prev) => ({
			...prev,
			[idVariation]: pictureId,
		}));
	};

	return (
		<PicturesContext.Provider
			value={{ images, handleAddPictures, handleRemovePicture, mainImages, setMainImage, setImages }}
		>
			{children}
		</PicturesContext.Provider>
	);
};
