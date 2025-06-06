import { FileManager } from "../../components/FileManager";
import { Container, ContainerBanner } from "./styles";
import imageBanner from "../../assets/banner.png";
import { Button, Divider } from "@mui/material";
import { FaCamera } from "react-icons/fa";
import { ModalBanner } from "./ui/Modal";
import { useBanner } from "../../../../hooks/Banner/useBanner";
import { IBanner } from "../../../../types/IBanner";
import { URL_HOST } from "../../../../config/configUrl";
import { CardBanner } from "./ui/CardBanner";

export const Banners = () => {
	const { findAllBanner } = useBanner();

	console.log(findAllBanner.data)
	return (
		<>
			<Container
				style={{
					backgroundImage: `url(${imageBanner})`,
					backgroundSize: "cover", // A imagem ocupa todo o espaço
					backgroundPosition: "center", // Centraliza a imagem
					width: "100%",
				}}
			>
				<div className="container">
					<div className="description">
						<h3>Crie um Banner Personalizado</h3>
						<p>
							Adicione um banner atraente à sua home page e destaque suas
							promoções, lançamentos ou ofertas especiais. Escolha imagens e
							crie um design que capture a atenção dos seus clientes. Garanta
							que seu banner seja visualmente impactante e reflita a identidade
							da sua marca!
						</p>
					</div>
					<div className="container_button">
						<ModalBanner title="Desktop" />
						<ModalBanner title="Mobile" />
						{/* <FileManager title="Desktop" />
						<FileManager title="Mobile" /> */}
					</div>
				</div>
			</Container>
			<Divider />
			<ContainerBanner className="container_banners">
				<div className="title">
					<h2>Meus Banners</h2>
				</div>
				<div className="container_banne">
					<p>Desktop</p>
					{findAllBanner?.data?.content?.map((item: IBanner) => {
						return <CardBanner key={item.id_banner} data={item} />;
					})}
				</div>
			</ContainerBanner>
		</>
	);
};
