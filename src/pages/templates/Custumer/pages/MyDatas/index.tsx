import { FaUserAlt } from "react-icons/fa";
import { ContainerTemplate } from "../../../../../styles/ContainerGlobal";
import { Title } from "../../components/Title";
import { Container } from "./styles";
import { FaLocationDot } from "react-icons/fa6";
import { useAddress } from "../../../../../hooks/Address/useAddress";
import { useForm } from "react-hook-form";
import { useUser } from "../../../../../hooks/users/useUser";
import { useEffect } from "react";
import { IAddressContent } from "../../../../../types/IAddress";

interface MyDatasProps {
	name: string;
	email: string;
	cpf: string;
	phone: string;
	data_nasc: string;
	gender: string;
}

export const MyDatas = () => {
	const { findAllAddress, updateAddress } = useAddress();
	const { findAllUser, updateUserData } = useUser();

	const {
		register,
		handleSubmit,
		reset
	} = useForm<MyDatasProps>();

	const addressForm = useForm<IAddressContent>();

	// 1. Atualiza dados pessoais
	const handleSubmitUser = (data: MyDatasProps) => {
		const user = findAllUser?.data?.content;
		updateUserData.mutate({
			username: data.name,
			type: "NATURAL",
			person: {
				cpf: data.cpf,
				dt_birth: data.data_nasc,
				gender: data.gender,
			},
			contact: {
				id_phone: user?.contact[0]?.id_phone,
				number: data.phone,
				type: user?.contact[0]?.type,
			},
		});
	};

	// 2. Atualiza endereço individual
	const handleSubmitAddress = (data: IAddressContent) => {
		updateAddress.mutate({
			id_address: data.id_address,
			public_area: data.public_area,
			number: data.number,
			city: data.city,
			state: data.state,
			district: data.district,
			zip_code: data.zip_code,
			complement: data.complement,
		});
	};

	useEffect(() => {
		const user = findAllUser?.data?.content;
		if (user) {
			reset({
				name: user?.username,
				email: user?.email,
				cpf: user?.cpf,
				phone: user?.contact[0]?.number,
				data_nasc: user?.dt_birth,
				gender: user?.gender,
			});
		}
	}, [findAllUser?.data?.content, reset]);

	return (
		<ContainerTemplate>
			<Container>
				<div className="container">
					<form className="formulario" onSubmit={handleSubmit(handleSubmitUser)}>
						<Title title="Meus Dados" icon={<FaUserAlt />} />
						{/* <div className="container_options">
							<button type="button" className="save">Alterar Senha</button>
						</div> */}
						<div className="mt">
							<label htmlFor="name">Nome</label>
							<input id="name" {...register("name")} />
						</div>
						<div className="mt">
							<label htmlFor="email">E-mail</label>
							<input id="email" disabled {...register("email")} />
						</div>
						<div className="mt">
							<label htmlFor="phone">Telefone</label>
							<input id="phone" {...register("phone")} />
						</div>
						<div className="mt">
							<label htmlFor="cpf">CPF</label>
							<input id="cpf" {...register("cpf")} />
						</div>
						<div className="mt">
							<label htmlFor="gender">Gênero</label>
							<select {...register("gender")}>
								<option value="F">Feminino</option>
								<option value="M">Masculino</option>
								<option value="N/E">Outro</option>
							</select>
						</div>
						<div className="mt">
							<label htmlFor="data">Data de Nascimento</label>
							<input type="date" id="data" {...register("data_nasc")} />
						</div>
						<button type="submit" className="save">Salvar</button>
					</form>

					<div className="container_address">
						<Title icon={<FaLocationDot />} title="Meu Endereço" />
						<div className="address">
							{findAllAddress?.data?.content?.map((item) => (
								<form
									key={item.id_address}
									className="formulario"
									onSubmit={addressForm.handleSubmit(handleSubmitAddress)}
								>
									<input type="hidden" value={item.id_address} {...addressForm.register("id_address")} />
									<div className="mt">
										<label>Endereço</label>
										<input defaultValue={item.public_area} {...addressForm.register("public_area")} />
									</div>
									<div className="mt">
										<label>Cidade</label>
										<input defaultValue={item.city} {...addressForm.register("city")} />
									</div>
									<div className="mt">
										<label>Bairro</label>
										<input defaultValue={item.district} {...addressForm.register("district")} />
									</div>
									<div className="mt">
										<label>Cep</label>
										<input defaultValue={item.zip_code} {...addressForm.register("zip_code")} />
									</div>
									<div className="mt">
										<label>Estado</label>
										<input defaultValue={item.state} {...addressForm.register("state")} />
									</div>
									<div className="mt">
										<label>Número</label>
										<input defaultValue={item.number} {...addressForm.register("number")} />
									</div>
									<div className="mt">
										<label>Complemento</label>
										<input defaultValue={item.complement} {...addressForm.register("complement")} />
									</div>
									<button type="submit" className="save">Salvar Endereço</button>
								</form>
							))}
						</div>
					</div>
				</div>
			</Container>
		</ContainerTemplate>
	);
};
