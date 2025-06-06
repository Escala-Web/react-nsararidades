import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { colorPalettes } from "../../../../styles/theme";
import { Home } from "../../../templates/Template01/pages/Home";
import { Header } from "../../../templates/Template01/components/Header";
import { Footer } from "../../../templates/Template01/components/Footer";
import { useThemeContext } from "../../../../context/ThemeContext";
import { Typography } from "@mui/material";
import { Container } from "../Layouts/styles";


export const Paletas = () => {
	const { changeTheme } = useThemeContext();
	const [themeIndex, setThemeIndex] = React.useState(0);

	const handleChangeTheme = (event: React.SyntheticEvent, newValue: number) => {
		setThemeIndex(newValue);
		changeTheme(colorPalettes[newValue].name); // <- Aqui usamos o contexto
	};

	const template = 1;

	return (
		<>
			<Container>
			<div className="breadcrumbs"></div>
			<Box sx={{ bgcolor: "background.paper" }}>
				<h5 className="title">Escolha uma paleta que mais combina com você</h5>
				<Tabs
					value={themeIndex}
					onChange={handleChangeTheme}
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
					aria-label="scrollable force tabs example"
				>
					{colorPalettes.map((theme, index) => (
						<Tab key={theme.name} label={theme.name} />
					))}
				</Tabs>
			</Box>

			<br /><br />

			
			</Container>
		</>
	);
};



const templa = (template: number) => {

	switch (template) {
		case 1:
			return (
				<>
					<Header />
					<Home />
					<Footer />
				</>
			)
		default:
			break;
	}

}