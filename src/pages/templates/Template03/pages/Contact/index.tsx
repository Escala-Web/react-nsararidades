import { useForm } from "react-hook-form";
import { useEmail } from "../../../../../hooks/Email/useEmail";
import { Formulario } from "../../components/Formulario";
import { Container } from "../../styles/Container";
import { Infos } from "./Infos";
import { Breadcrumb } from "../../components/Breadcrumb";


export const Contact = () => {

    const { sendEmailContact } = useEmail();
    const { register, handleSubmit, reset } = useForm();

    const handleSubmitEmail = ({ name, email, phone, message }) => {
        sendEmailContact.mutate({
            email,
            message,
            name,
            phone
        },
        {
            onSuccess: () => {
                reset()
            }
        }
    )
    }

	return (
		<>
            <Breadcrumb page="Contato"/>
			<Container>
				<section className="container">
					<Formulario
                        component={<Infos />}
						title="Entre em contato"
						subTitle="Fale com a gente"
						description="Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Nossa equipe está pronta para te atender. Preencha o formulário ou entre em contato pelos nossos canais oficiais."
					>
						<form onSubmit={handleSubmit(handleSubmitEmail)}>
							<div>
								<label htmlFor="">Nome</label>
								<input type="text" placeholder="Digite seu nome" {...register('name')}/>
							</div>
							<div className="mt">
								<label htmlFor="">Telefone</label>
								<input type="text" placeholder="Ex: (11) 99999-9999" {...register('phone')}/>
							</div>
							<div className="mt">
								<label htmlFor="">Email</label>
								<input type="text" placeholder="Ex: @seuemail.com" {...register('email')}/>
							</div>
							<div className="mt">
								<label htmlFor="">Mensagem</label>
								<textarea placeholder="Sua mensagem" rows={10} {...register('message')}></textarea>
							</div>
							<div className="mt">
								<button type="submit">Enviar</button>
							</div>
						</form>
					</Formulario>
				</section>
			</Container>
		</>
	);
};
