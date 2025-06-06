import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Container } from "./styles";

import template01 from "../../../../assets/templates/template01.jpg";
import { Link } from "react-router-dom";
import { formatUrl } from "../../../../utils/formatUrl";

const layouts = [
	{
		name: "Shopster",
		image: template01,
	},
	// {
	// 	name: "FlashTrend",
	// 	image: template01,
	// },
];

export const Layouts = () => {
	return (
		<Container>
			<div className="breadcrumbs"></div>

			<div className="container_cards">
				{layouts.map((item) => {

					const layout = formatUrl(item.name)

					return (
						<Link to={`/?layout=${layout}&editor=1`}>
						<Card sx={{ maxWidth: 505 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								image={item.image}
								alt="green iguana"
							/>
						</CardActionArea>
						<CardContent
							sx={{
								background: "linear-gradient(135deg, #6e8efb, #77a9e3)",
								color: "#fff", // pra garantir que o texto fique visível
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
							}}
						>
							<Typography sx={{ textAlign: "center" }} variant="body2">
								{item.name}
							</Typography>
						</CardContent>
					</Card>
					</Link>
					)
				})}
			</div>
		</Container>
	);
};
