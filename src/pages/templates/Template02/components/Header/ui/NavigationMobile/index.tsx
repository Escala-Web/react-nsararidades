import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ContainerAvatarUser, ContainerOpts } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import CategoryIcon from "@mui/icons-material/Category";
import NewLabelIcon from "@mui/icons-material/NewLabel";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


type Anchor = "top" | "left" | "bottom" | "right";

export const NavigationMobile = () => {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
				position: "relative",
				height: "100vh",
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<ContainerAvatarUser>
				<Avatar>g</Avatar>
				<p>Olá, Guilherme</p>
			</ContainerAvatarUser>
			<Divider />
			<List>
				<ListItem key={"Pagina inicial"} disablePadding>
					<ListItemButton component={Link} to={"/"}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={"Pagina Inicial"} />
					</ListItemButton>
				</ListItem>

				<ListItem key={"Marcas"} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<BakeryDiningIcon />
						</ListItemIcon>
						<ListItemText primary={"Marcas"} />
					</ListItemButton>
				</ListItem>

				<ListItem key={"Categorias"} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<CategoryIcon />
						</ListItemIcon>
						<ListItemText primary={"Categorias"} />
					</ListItemButton>
				</ListItem>

				<ListItem key={"Lançamentos"} disablePadding>
					<ListItemButton component={Link} to={"/produtos"}>
						<ListItemIcon>
							<NewLabelIcon />
						</ListItemIcon>
						<ListItemText primary={"Lançamentos"} />
					</ListItemButton>
				</ListItem>

				<ListItem key={"Contato"} disablePadding>
					<ListItemButton component={Link} to={"/contato"}>
						<ListItemIcon>
							<ContactsIcon />
						</ListItemIcon>
						<ListItemText primary={"Contato"} />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			<List>
				<Typography sx={{ padding: "0 1rem" }} variant="body2">
					Meu Painel
				</Typography>

				<ListItem key={"Meus Dados"} disablePadding>
					<ListItemButton component={Link} to={"/custumer/meus-dados"}>
						<ListItemIcon>
							<AccountCircleIcon />
						</ListItemIcon>
						<ListItemText primary="Minha Conta" />
					</ListItemButton>
				</ListItem>

				<ListItem key={"Pedidos"} disablePadding>
					<ListItemButton component={Link} to={"/custumer/pedidos"}>
						<ListItemIcon>
							<InventoryIcon />
						</ListItemIcon>
						<ListItemText primary="Meus Pedidos" />
					</ListItemButton>
				</ListItem>

				<ListItem key={"Meus Dados"} disablePadding>
					<ListItemButton component={Link} to={"/custumer/pedidos"}>
          <ListItemIcon>
							<ContactPhoneIcon />
						</ListItemIcon>
						<ListItemText primary="Meus Dados" />
					</ListItemButton>
				</ListItem>
			</List>
			<List sx={{ position: "absolute", bottom: "0" }}>
				<ContainerOpts>
					<Link to={"/login"} className="login">
						Entrar
					</Link>
					<Link to={"/register"} className="register">
						Cadastra-se
					</Link>
				</ContainerOpts>
			</List>
		</Box>
	);

	return (
		<div>
			{(["right"] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>
						<MenuIcon sx={{ fontSize: "40px" }} />
					</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};
