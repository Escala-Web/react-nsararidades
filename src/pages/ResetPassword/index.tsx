import { FormEvent, useState } from "react";
import { Title } from "../templates/Template01/components/Title";
import { Formulario } from "../templates/Template01/styles/Formulario";
import { Container } from "./style";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useAdmin } from "../../hooks/admin/useAdmin";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");

  const { resetPassword } = useAdmin();

  const [search] = useSearchParams();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const token = String(search.get("token"));

    if (!password || !passwordC) {
      toast.error("Preencha ambos os campos de senha");
      return;
    }

    if (password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    if (password !== passwordC) {
      toast.error("As senhas devem ser iguais");
      return;
    }

    if (!token) {
      toast.error("Token de recuperação inválido ou ausente");
      return;
    }

    resetPassword.mutate({
      password,
      token,
    });
  };

  return (
    <>
      <Container>
        <div className="container">
          <Title title="Recuperar Senha" align="start" />
          <Formulario onSubmit={handleSubmit}>
            <div className="form_block">
              <label htmlFor="password">Senha</label>
              <input
                placeholder="Senha"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form_block mt">
              <label htmlFor="passwordC">Confirmar senha</label>
              <input
                placeholder="Confirmar senha"
                type="password"
                name="passwordC"
                id="passwordC"
                value={passwordC}
                onChange={(event) => setPasswordC(event.target.value)}
              />
            </div>
            <div className="form_flex mt">
              <button type="submit" className="button contain">
                Confirmar
              </button>
            </div>
          </Formulario>
        </div>
      </Container>
    </>
  );
};
