import { useForm } from "react-hook-form";
import { Formulario } from "../../pages/Dashboard/pages/Products/create/styles";
import { Container } from "./styles";
import { useStore } from "../../hooks/Store/useStore";
import { DashboardTemplate } from "../DashboardTemplate";
import { useNavigate } from "react-router-dom";

export const Shipping = () => {

    const { register, handleSubmit } = useForm();
    const { updateStore } = useStore();

	const navigate = useNavigate();

    const handleSubmitToken = (data) => {
        updateStore.mutate({
            token_shipping: data.token
        })

		navigate('/administrativo/templates')

    }   

	return (
		<>
			<DashboardTemplate 
				description="Escala Web é parceira do Melhor Envio para entregas seguras."
			>
				<div className="title">
					<h1>Conecte Sua Conta ao Melhor Envio.</h1>
					<h3>
						Para começar a receber cotações e enviar suas encomendas, insira seu token do Melhor Envio.
					</h3>
				</div>
				<Container>
					<Formulario onSubmit={handleSubmit(handleSubmitToken)}>
						<div className="form_block">
							<label htmlFor="">Token</label>
							<textarea {...register('token')} rows={12}></textarea>
						</div>
						<div className="register">
							<p>Não tem conta na melhor envio?  <a target="_blank" href="https://melhorenvio.com.br/cadastre-se">Clique aqui</a></p>
						</div>
                        <div className="form_block">
							<button className="contain">Validar token</button>
						</div>
					</Formulario>
				</Container>
			</DashboardTemplate>
		</>
	);
};
