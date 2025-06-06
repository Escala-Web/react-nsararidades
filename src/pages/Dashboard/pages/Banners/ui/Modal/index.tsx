import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FaCamera } from "react-icons/fa";
import { Container } from "./styles";
import { Formulario } from "../../../Products/create/styles";
import { FileManager } from "../../../../components/FileManager";
import { PicturesContext } from "../../../../../../context/FileManager";
import { useBanner } from "../../../../../../hooks/Banner/useBanner";
import { IBanner } from "../../../../../../types/IBanner";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 700,
	bgcolor: "background.paper",
	border: "2px solid #d3d3d3",
	boxShadow: 24,
	p: 4,
};

interface ModalBannerProps {
	title: string;
	edit?: string;
	id?: string;
}

interface FormBanner {
	nome: string;
	id_media: number;
	isDesktop: boolean;
	is_default: boolean;
}

export const ModalBanner = ({ title, id, edit = false }: ModalBannerProps) => {
	const [open, setOpen] = React.useState(false);
	const [banner, setBanner] = React.useState([]);
	const [idBanner, setIdBanner] = React.useState(null);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { images } = React.useContext(PicturesContext);

	const [formBanner, setFormBanner] = React.useState<FormBanner>({
		nome: "",
		id_media: 1,
		isDesktop: title !== "Desktop" ? true : false,
		is_default: false,
	});

	console.log(images)
	// setImages([])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormBanner((prev) => ({
			...prev,
			[name]: value,
			id_media: images[0]?.picture.id,
		}));
	};

	const { createBanner, findAllBanner, updateBanner } = useBanner();
	 

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		createBanner.mutate({
			id_media: images[1]?.picture.id,
			is_default: formBanner.is_default,
			is_mobile: formBanner.isDesktop,
			name: formBanner.nome,
		});
	};

	React.useEffect(() => {
		if (edit && id && findAllBanner?.data?.content) {
			const bannerNew = findAllBanner?.data?.content.filter(
				(item) => item.id_banner === Number(id)
			);


			if (banner) {
				setIdBanner(bannerNew[0]?.id_banner);
				setFormBanner({
					nome: bannerNew[0]?.name,
					id_media: images[1]?.picture?.id,
					isDesktop: "Desktop",
					is_default: bannerNew[0]?.is_default,
				});
			}

			setBanner(bannerNew)
		}
	}, [id, edit]);

	const handleUpdate = (event: React.FormEvent) => {
		event.preventDefault();
		
		const data: IBanner = {
			id_media: Number(images[0]?.picture.id),
			is_default: formBanner.is_default,
			is_mobile: formBanner.isDesktop,
			name: formBanner.nome,
		};


		updateBanner.mutate({ id: idBanner, data });
		handleClose()
	};

	// console.log(banner)

	return (
		<div>
			<Button
				onClick={handleOpen}
				sx={{ display: "flex", alignItems: "center", gap: "10px" }}
				variant="contained"
			>
				<FaCamera />
				<p>{title}</p>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Container>
						<h2>
							{!edit ? "Cadastre-se" : "Editar"} o banner {title}
						</h2>
						<Formulario onSubmit={edit ? handleUpdate : handleSubmit}>
							<div className="flex-block">
								<label style={{ color: "#333" }} htmlFor="nome">
									Nome
								</label>
								<input
									type="text"
									name="nome"
									placeholder="Nome do banner"
									value={formBanner.nome}
									onChange={handleChange}
								/>
							</div>
							<div className="flex-block mt">
								<label style={{ color: "#333" }} htmlFor="imagem">
									Imagem
								</label>
								<FileManager
									dataEdit={banner}
									isEdit={edit}
									id={title === "Desktop" ? "Desktop" : "Mobile"}
									title="Imagem"
									// onSelect={(filePath) =>
									// 	setFormBanner((prev) => ({ ...prev, imagem: filePath }))
									// }
								/>
							</div>
							<div className="flex-form">
								<input
									type="hidden"
									name="isDesktop"
									value={String()}
								/>
							</div>
							<div className="flex-block mt">
								<label htmlFor="">Menu principal</label>
								<input
									type="checkbox"
									name="is_default"
									checked={formBanner.is_default}
									onChange={(e) =>
										setFormBanner((prev) => ({
											...prev,
											is_default: e.target.checked,
										}))
									}
								/>
							</div>

							<input
								type="hidden"
								value={edit && banner[0]?.id_banner}
								onChange={(event) => setIdBanner(event.target.value)}
							/>

							<button className="contain" style={{ color: "#333" }}>
								Cadastrar
							</button>
						</Formulario>
					</Container>
				</Box>
			</Modal>
		</div>
	);
};
