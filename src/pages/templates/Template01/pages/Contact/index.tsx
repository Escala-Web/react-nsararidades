import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";
import { Formulario } from "../../styles/Formulario";
import { Container } from "./styles";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useForm } from "react-hook-form";
import { useEmail } from "../../../../../hooks/Email/useEmail";
import { LoadingReg } from "../../components/Loading/LoadingReg";
import { useStore } from "../../../../../hooks/Store/useStore";
import { formatNumberPhone } from "../../../../../utils/formatNumberPhone";

export const Contact = () => {
	const { register, handleSubmit, reset } = useForm();
	const { sendEmailContact } = useEmail();
	const { findOneStore } = useStore();

	console.log(findOneStore.data)

	const handleFormSubmit = ({ name, email, phone, message }) => {
		sendEmailContact.mutate(
			{
				email,
				message,
				name,
				phone,
			},
			{
				onSuccess: () => {
					reset(); // ✅ reseta o formulário APÓS envio bem-sucedido
				},
			}
		);
	};

	return (
		<>
			<ContainerTemplate>
				<Breadcrumb title="Contato" />
				<Container>
					<div className="container">
						<div className="container_form">
							<h2>
								Entre em <span>Contato</span>
							</h2>

							<Formulario onSubmit={handleSubmit(handleFormSubmit)}>
								<div className="form_block">
									<label htmlFor="">Nome</label>
									<input
										type="text"
										placeholder="Digite seu nome"
										{...register("name")}
									/>
								</div>

								<div className="form_block mt-1">
									<label htmlFor="">E-mail</label>
									<input
										type="text"
										placeholder="Digite seu email"
										{...register("email")}
									/>
								</div>

								<div className="form_block mt-1">
									<label htmlFor="">Telefone</label>
									<input
										type="text"
										placeholder="Digite seu telefone"
										{...register("phone")}
									/>
								</div>

								<div className="form_block mt-1">
									<label htmlFor="">Descrição</label>
									<textarea
										placeholder="Descrição"
										rows={10}
										{...register("message")}
									></textarea>
								</div>

								<div className="mt-1">
									<button disabled={sendEmailContact.isPending} className="button contain">{sendEmailContact.isPending ? <LoadingReg title="Enviando"/>: 'Enviar'}</button>
								</div>
							</Formulario>
						</div>
						<div className="container_maps">
							<div className="cards">
								<div className="card">
									<FaPhoneAlt />
									{findOneStore?.data?.content?.PHONES?.filter((fil) => fil.is_show === 1)
										?.map((item) => (
											<p>{formatNumberPhone(item.number)}</p>
										))
									}
								</div>
								<div className="active card">
									<MdEmail />
									{findOneStore?.data?.content?.EMAILS
									?.filter((fil) => fil.is_show === 1)
									?.map((item) => (
										<p>{item.email}</p>

									))}
								</div>
								<div className="card">
									<FaLocationDot />
									<p>{findOneStore?.data?.content?.ADDRESSES[0].public_area} - {findOneStore?.data?.content?.ADDRESSES[0].city}
										- {findOneStore?.data?.content?.ADDRESSES[0].state} - CEP: {findOneStore?.data?.content?.ADDRESSES[0].zip_code}

									</p>
								</div>
							</div>
							
						</div>
					</div>
				</Container>
			</ContainerTemplate>
		</>
	);
};
