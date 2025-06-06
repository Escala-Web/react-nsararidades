import * as React from "react";
import {
	Box,
	Drawer,
	AppBar,
	CssBaseline,
	Toolbar,
	List,
	Typography,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	Button,
} from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from '../../assets/Logo/logo.png';

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PaletteIcon from "@mui/icons-material/Palette";
import { useThemeContext } from "../../context/ThemeContext";
import { colorPalettes } from "../../styles/theme";
import { useStore } from "../../hooks/Store/useStore";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const drawerWidth = 240;

export const HeaderEdit = ({ children }: { children: React.ReactNode }) => {
	const [openPalette, setOpenPalette] = React.useState(false);

	const handlePaletteClick = () => {
		setOpenPalette(!openPalette);
	};

	const { changeTheme } = useThemeContext();
	const [themeIndex, setThemeIndex] = React.useState(0);

	const { storeLayout } = useStore();

	const handleChangeTheme = (event: React.SyntheticEvent, newValue: number) => {
		setThemeIndex(newValue);
		changeTheme(colorPalettes[newValue].name); // Muda o tema usando contexto
	};

	const [search] = useSearchParams();

	const toggleSubmit = () => {
		storeLayout.mutate({
			layout: search.get("layout"),
			theme: `${colorPalettes[themeIndex].name}-${themeIndex}`,
		});
	};

	const navigate = useNavigate();

	return (
		<Box>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,background:'#fff', display: 'flex' }}
			>
				
				<Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Button onClick={() => navigate('/administrativo')} variant="contained" sx={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
						<img src='https://escalaweb.com.br/images/common/logo-escala-web-footer.png'/>
					</Button>
					<Button onClick={toggleSubmit} variant="contained" color="success">
						Salvar
					</Button>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List>
						<ListItem disablePadding>
							<ListItemButton component={Link} to={"/administrativo/templates"}>
								<ListItemIcon>
									<ArrowBackIosNewIcon />
								</ListItemIcon>
								<ListItemText primary="Voltar" />
							</ListItemButton>
						</ListItem>
						<Divider />
						{/* Menu Paletas de Cores com submenu */}
						<ListItemButton onClick={handlePaletteClick}>
							<ListItemIcon>
								<ColorLensIcon />
							</ListItemIcon>
							<ListItemText primary="Paletas de Cores" />
							{openPalette ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse in={openPalette} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{colorPalettes?.map((item, index) => (
									<ListItemButton
										key={item.name}
										onClick={(e) => handleChangeTheme(e, index)}
										sx={{ pl: 4 }}
									>
										<ListItemIcon>
											<PaletteIcon />
										</ListItemIcon>
										<ListItemText primary={item.name} />
									</ListItemButton>
								))}
							</List>
						</Collapse>
					</List>
					{/* <List>
						{["All mail", "Trash", "Spam"].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List> */}
				</Box>
			</Drawer>

			{children}
		</Box>
	);
};
