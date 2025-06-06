import { FormEvent, useState } from "react";
import { IRegisterUser } from "../../../../../types/IUsers";
import { Formulario } from "../../components/Formulario";
import { ContainerGlobal } from "../../styles/styles";
import { Container } from "../Home/styles";
import registerImage from '../../assets/cadastro.png';
import loginImage from '../../assets/login.png';
import { useUser } from "../../../../../hooks/users/useUser";

export const Register = () => {
	const [formData, setFormData] = useState<IRegisterUser>({
		username: "",
		email: "",
		password: "",
		type: "NATURAL",
		person: {
			cpf: "",
			dt_birth: "",
			gender: "H",
		},
		address: {
			public_area: "",
			number: "",
			district: "",
			city: "",
			state: "",
			zip_code: "",
		},
		phone: {
			type: "WHATSAPP",
			number: "",
		},
	});

    const { createUser } = useUser();

    const handleRegister = (event: FormEvent) => {
        event.preventDefault();

        createUser.mutate(formData);
    } 

	return (
		<>
			<Container>
				<ContainerGlobal>
					<Formulario
                        onSubmit={handleRegister}
                        image={registerImage}
						title="Vamos criar sua conta"
						subTitle="Preencha suas informações para começar a aproveitar todos os recursos da nossa plataforma."
					>
						<label htmlFor="username">Nome de usuário</label>
						<input
							id="username"
							type="text"
							value={formData.username}
							onChange={(e) =>
								setFormData({ ...formData, username: e.target.value })
							}
						/>
						<div className="mt"></div>

						<label htmlFor="phone_number">Telefone (WhatsApp)</label>
						<input
							id="phone_number"
							type="text"
							value={formData.phone.number}
							onChange={(e) =>
								setFormData({
									...formData,
									phone: { ...formData.phone, number: e.target.value },
								})
							}
						/>

						<div className="mt"></div>
						<label htmlFor="email">E-mail</label>
						<input
							id="email"
							type="email"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
						/>
						<div className="mt"></div>

						<label htmlFor="password">Senha</label>
						<input
							id="password"
							type="password"
							value={formData.password}
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
						/>
						<div className="mt"></div>

						<label htmlFor="cpf">CPF</label>
						<input
							id="cpf"
							type="text"
							value={formData.person.cpf}
							onChange={(e) =>
								setFormData({
									...formData,
									person: { ...formData.person, cpf: e.target.value },
								})
							}
						/>
						<div className="mt"></div>

						<label htmlFor="dt_birth">Data de Nascimento</label>
						<input
							id="dt_birth"
							type="date"
							value={formData.person.dt_birth}
							onChange={(e) =>
								setFormData({
									...formData,
									person: { ...formData.person, dt_birth: e.target.value },
								})
							}
						/>
						<div className="mt"></div>

						<label htmlFor="gender">Gênero</label>
						<select
							id="gender"
							value={formData.person.gender}
							onChange={(e) =>
								setFormData({
									...formData,
									person: { ...formData.person, gender: e.target.value },
								})
							}
						>
							<option value="H">Homem</option>
							<option value="M">Mulher</option>
							<option value="O">Outro</option>
						</select>
						<div className="mt"></div>

						<label htmlFor="public_area">Rua</label>
						<input
							id="public_area"
							type="text"
							value={formData.address.public_area}
							onChange={(e) =>
								setFormData({
									...formData,
									address: { ...formData.address, public_area: e.target.value },
								})
							}
						/>
						<div className="mt"></div>

						<label htmlFor="number">Número</label>
						<input
							id="number"
							type="text"
							value={formData.address.number}
							onChange={(e) =>
								setFormData({
									...formData,
									address: { ...formData.address, number: e.target.value },
								})
							}
						/>
						<div className="mt"></div>

						<label htmlFor="district">Bairro</label>
						<input
							id="district"
							type="text"
							value={formData.address.district}
							onChange={(e) =>
								setFormData({
									...formData,
									address: { ...formData.address, district: e.target.value },
								})
							}
						/>
						<div className="mt"></div>

						<label htmlFor="city">Cidade</label>
						<input
							id="city"
							type="text"
							value={formData.address.city}
							onChange={(e) =>
								setFormData({
									...formData,
									address: { ...formData.address, city: e.target.value },
								})
							}
						/>
						<div className="mt"></div>

						<label htmlFor="state">Estado</label>
						<input
							id="state"
							type="text"
							value={formData.address.state}
							onChange={(e) =>
								setFormData({
									...formData,
									address: { ...formData.address, state: e.target.value },
								})
							}
						/>
						<div className="mt"></div>

						<label htmlFor="zip_code">CEP</label>
						<input
							id="zip_code"
							type="text"
							value={formData.address.zip_code}
							onChange={(e) =>
								setFormData({
									...formData,
									address: { ...formData.address, zip_code: e.target.value },
								})
							}
						/>

						<div className="mt"></div>
                        <button>Cadastrar</button>
					</Formulario>
				</ContainerGlobal>
			</Container>
		</>
	);
};
