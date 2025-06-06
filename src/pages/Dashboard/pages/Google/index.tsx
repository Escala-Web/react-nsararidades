import { useForm } from "react-hook-form"
import { Formulario } from "../Products/create/styles"
import { Container } from "./styles"
import { Button } from "@mui/material";
import { useStore } from "../../../../hooks/Store/useStore";
import { useEffect } from "react";

type GoogleFormData = {
	google_analytics: string;
	tag_manager: string;
	search_console: string;
};

export const Google = () => {
	const { register, handleSubmit, reset } = useForm<GoogleFormData>();
	const { googleStore, findOneStore } = useStore();

	// Dados da loja retornados da API
	const google = findOneStore.data?.content;

	// Atualiza o formulário com os dados recebidos da API
	useEffect(() => {
		if (google) {
			reset({
				google_analytics: google.ID_ANALITYCS || "",
				tag_manager: google.ID_TAG_MANAGER || "",
				search_console: google.ID_SEARCH_CONSOLE || "",
			});
		}
	}, [google, reset]);

	// Função chamada ao enviar o formulário
	const handleFormSubmit = (data: GoogleFormData) => {
		googleStore.mutate({
			id_analitycs: data.google_analytics,
			id_search_console: data.search_console,
			id_tag_manager: data.tag_manager,
		});
	};

	return (
		<Container>
			<div className="container">
				<h2>Integre seu E-commerce com as tecnologias do Google</h2>

				<Formulario onSubmit={handleSubmit(handleFormSubmit)}>
					<div className="form_block">
						<label>Google Analytics</label>
						<input type="text" {...register("google_analytics")} />
					</div>
					<div className="form_block mt">
						<label>Tag Manager</label>
						<input type="text" {...register("tag_manager")} />
					</div>
					<div className="form_block mt">
						<label>Search Console</label>
						<input type="text" {...register("search_console")} />
					</div>

					<div className="form_block mt">
						<Button
							variant="contained"
							type="submit"
							disabled={googleStore.isLoading}
						>
							{googleStore.isLoading ? "Carregando..." : "Integrar ao meu E-commerce"}
						</Button>
					</div>
				</Formulario>
			</div>
		</Container>
	);
};
