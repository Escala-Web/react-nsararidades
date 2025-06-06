import { Card, CardActionArea, Typography } from "@mui/material";
import { Container } from "../Layouts/styles";
import { FileManager } from "../../components/FileManager";
import { useLogo } from "../../../../hooks/Logo/useLogo";
import { useContext, useEffect, useState } from "react";
import { PicturesContext } from "../../../../context/FileManager";
import { URL_HOST } from "../../../../config/configUrl";

export const Logo = () => {

	const [logoSelect, setLogoSelect] = useState<string>('LOGO');

	const { createLogo, findAllLogo } = useLogo();

	const { images, setImages } = useContext(PicturesContext);

	useEffect(() => {
		if (images.length > 0) {
		  const filteredImages = images.filter(
			(img) => img.id_variation === 'FAVICON' || img.id_variation === 'LOGO' || img.id_variation === 'LOGO_FOOTER'
		  );

		  filteredImages.forEach((img) => {
			createLogo.mutate({
			  id_media: Number(img.picture.id),
			  type: String(img.id_variation)
			});
		  });
		}
	  }, [images]);

	  console.log(findAllLogo.data)


	return (
		<>
			<Container>
				<div className="breadcrumbs"></div>
				<div className="container_cards">
					<Card>
						<Typography
							component="div"
							variant="body2"
							sx={{ marginBottom: "10px", textAlign: "center", width: "100%" }}
						>
							Favincon
						</Typography>
						<CardActionArea sx={{ width: "400px", height: "300px", display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
							<img className="logo" style={{ objectFit: 'cover' }} src={`${URL_HOST}${findAllLogo.data?.content?.FAVICON?.path}`} alt="Logo Header" />
							<FileManager title="" id={'FAVICON'} />
						</CardActionArea>
					</Card>

                    <Card>
						<Typography
							component="div"
							variant="body2"
							sx={{ marginBottom: "10px", textAlign: "center", width: "100%" }}
						>
							Logo cabeçario
						</Typography>
						<CardActionArea sx={{ width: "400px", height: "300px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<img className="logo" style={{ objectFit: 'cover' }} src={`${URL_HOST}${findAllLogo?.data?.content?.LOGO?.path}`} alt="Logo Header" />
							<FileManager title="" id={'LOGO'}/>
						</CardActionArea>
					</Card>

                    <Card>
						<Typography
							component="div"
							variant="body2"
							sx={{ marginBottom: "10px", textAlign: "center", width: "100%" }}
						>
							Logo Rodapé
						</Typography>
						<CardActionArea sx={{ width: "400px", height: "300px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<img className="logo_f" style={{ objectFit: 'cover' }} src={`${URL_HOST}${findAllLogo?.data?.content?.LOGO_FOOTER?.path}`} alt="Logo Header" />
							<FileManager title="" id={'LOGO_FOOTER'}/>
						</CardActionArea>
					</Card>
					
				</div>
			</Container>
		</>
	);
};
