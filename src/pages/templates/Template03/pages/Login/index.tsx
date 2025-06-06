import { useForm } from "react-hook-form";
import { Formulario } from "../../components/Formulario";
import { Container } from "./styles";
import { useUser } from "../../../../../hooks/users/useUser";
import { Link } from "react-router-dom";

export const Login = () => {

    const { register, handleSubmit } = useForm();
    const { loginUser } = useUser();

    const handleSubmitLogin = ({email, password}) => {
        loginUser.mutate({
            login: email,
            password
        })
    }

	return (
		<>
			<Container>
				<div className="container">
					<Formulario
						title="Login"
						subTitle="Crie sua conta e aproveite todas as vantagens!"
						description="Cadastre-se gratuitamente e tenha acesso a ofertas exclusivas, acompanhamento de pedidos, lista de desejos e muito mais. Tudo em um só lugar."
                        link="/register"
                        linkName="Criar minha conta"
                    >
						<form onSubmit={handleSubmit(handleSubmitLogin)}>
							<div>
								<label htmlFor="">E-mail</label>
								<input type="text" placeholder="Ex: @seuemail.com" {...register('email')}/>
							</div>
							<div className="mt">
								<label htmlFor="">Senha</label>
								<input type="password" placeholder="********" {...register('password')}/>
							</div>
							<div className="reset_password">
								<p>Esqueci minha senha</p>
							</div>
							<div className="mt">
								<button type="submit">Entrar</button>
								<Link to={'/register'} className="register" style={{ marginTop: '8px' }} type="">Cadastrar</Link>
							</div>
						</form>
					</Formulario>
				</div>
			</Container>
		</>
	);
};
