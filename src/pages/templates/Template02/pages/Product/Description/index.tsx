import { Container } from "./styles"

export const Description = ({ description }: { description: string }) => {
	return (
		<>
            <Container>

			<h3 className="title">Descrição:</h3>
				<div
					className="descricao-produto"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			<br />
            </Container>

		</>
	);
};
