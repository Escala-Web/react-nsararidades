import { useState } from "react";
import { useStore } from "../../../../hooks/Store/useStore";
import { Breadcrumb } from "../../components/Breadcrumb";
import { FormLoja } from "../../components/FormLoja";
import { useForm } from "react-hook-form";
import { Formulario } from "../Products/create/styles";
import { Button } from "@mui/material";
import { useSocialAdmin } from "../../../../hooks/Store/useSocialAdmin";
import { TableSociais } from "./ui/Table";

export const Sociais = () => {
    const { findOneStore } = useStore();

    const { register, handleSubmit, reset } = useForm();
    const { createdSocial } = useSocialAdmin();

    const [statusPhone, setStatusPhone] = useState<boolean>(false);

    const handleSubmitPhone = (data) => {
        createdSocial.mutate(data, {
            onSuccess: () => {
                reset(); // Limpa os campos do formulário após sucesso
                setStatusPhone(false); // Opcional: volta para a lista após cadastro
            }
        });
    };

    return (
        <>
            <Breadcrumb
                title="Minhas Redes Sociais"
                button={statusPhone ? "Voltar" : "Cadastrar"}
                onclick={() => setStatusPhone(!statusPhone)}
            />

            {statusPhone ? (
                <FormLoja title="Cadastrar nova rede social">
                    <Formulario onSubmit={handleSubmit(handleSubmitPhone)}>
                        <div className="form_block">
                            <label>Rede social</label>
                            <select {...register("type")}>
                                <option value="INSTAGRAM">Instagram</option>
                                <option value="FACEBOOK">Facebook</option>
                                <option value="YOUTUBE">Youtube</option>
                                <option value="LINKEDIN">Linkedin</option>
                            </select>
                        </div>
                        <div className="form_block mt">
                            <label>Link</label>
                            <input type="text" {...register("link")} />
                        </div>
                    
                        <div className="form_block mt">
                            <Button variant="contained" type="submit">
                                Cadastrar
                            </Button>
                        </div>
                    </Formulario>
                </FormLoja>
            ) : (
                <>
                    {findOneStore.data?.content?.SOCIAIS.length > 0 ? (
                        <TableSociais data={findOneStore.data?.content?.SOCIAIS} />

                    ) : (
                        <h2>Nenhuma Rede social cadastrada</h2>
                    )}
                
                </>
            )}
        </>
    );
};
