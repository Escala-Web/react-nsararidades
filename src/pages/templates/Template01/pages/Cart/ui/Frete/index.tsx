import { useState } from "react";
import { IFreteData } from "../../../../../../../types/IFrete";
import { formatPrice } from "../../../../../../../utils/formatPrice";
import { Container } from "./styles";
import { useCart } from "../../../../../../../context/Cart";

export const Frete = ({ data }) => {

	const [freteSelecionado, setFreteSelecionado] = useState<IFreteData | null>(
		null
	);
	const { setFrete } = useCart();

	const calcularDataEntrega = (dias: number) => {
		const data = new Date();
		data.setDate(data.getDate() + dias);

		const dia = String(data.getDate()).padStart(2, "0");
		const mes = String(data.getMonth() + 1).padStart(2, "0");
		const ano = data.getFullYear();

		return `${dia}/${mes}/${ano}`;
	};

	const handleSelectFrete = (item: IFreteData) => {
		setFreteSelecionado(item);
		setFrete(item);
	};


	return (
		<Container>
			<div className="containerr">
				{data?.content
					?.filter(
						(i) => i.error !== "Serviço econômico indisponível para o trecho."
					)
					?.map((item: IFreteData, index: number) => {
						const inputId = `frete-${index}`;

						return (
							<div key={index} className="card">
								<div className="frete_container">
									<h4>Entregue por {item.company.name}</h4>
									<img src={item.company.picture} alt={item.company.name} />
								</div>
								<label htmlFor={inputId} className="frete">
									<input
										type="radio"
										id={inputId}
										name="frete"
										value={item.name} // valor visível, mas não usado no controle
										checked={freteSelecionado?.name === item.name}
										onChange={() => handleSelectFrete(item)}
									/>
									<div className="entrega">
										<p>
											Chegará até{" "}
											{calcularDataEntrega(item.custom_delivery_time)}
										</p>
										<p>
											<strong>{formatPrice(item.price)}</strong>
										</p>
									</div>
								</label>
							</div>
						);
					})}
			</div>
		</Container>
	);
};
