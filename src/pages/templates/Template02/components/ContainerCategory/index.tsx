import { useProduct } from "../../../../../hooks/products/useProduct";
import { CardProducts } from "../CardProduct";
import { Title } from "../Title";
import { Container } from "./styles";
import { CardDetaque } from "./ui";

interface ContainerCategoryProps {
	title: string,
	link?: string,
	data?: []
}
export const ContainerCategory = ({ title, link, data }: ContainerCategoryProps) => {

	

	return (
		<>
			<Container>
				<Title title={title} isLink={true} link={link} nameLink="Ver mais"/>
				<div className="container">
					<div className="banner_category">
						
					</div>
					<div className="cards">
						{data?.map((item) => (
							<CardProducts key={item?.id_product} data={item}/>
						))}
					</div>
				</div>
			</Container>
		</>
	);
};
