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
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ContainerAvatarUser, ContainerMain, ContainerOpts } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import CategoryIcon from "@mui/icons-material/Category";
import NewLabelIcon from "@mui/icons-material/NewLabel";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FaBarsStaggered } from "react-icons/fa6";
import styled from "styled-components";
import { useBread } from "../../../../../../../hooks/Bread/useBread";
import { useStore } from "../../../../../../../hooks/Store/useStore";
import { useCategory } from "../../../../../../../hooks/Category/useCategory";
import { formatUrl } from "../../../../../../../utils/formatUrl";
import { AuthContext } from "../../../../../../../context/Auth";
import { useUser } from "../../../../../../../hooks/users/useUser";

const HeaderStyle = styled.div`
	svg {
		color: ${({ theme }) => theme.text_secondary};
	}
`;

type Anchor = "top" | "left" | "bottom" | "right";

export const NavigationMobile = () => {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const { findAll } = useBread();
	const { findCategory } = useCategory();
	const { findOneStore } = useStore();

	const breandOrYear =
		findOneStore?.data?.content?.NAME_STORE?.toLocaleLowerCase()?.startsWith(
			"nsa"
		)
			? "Anos"
			: "Marcas";

	const [openBrands, setOpenBrands] = React.useState(false);
	const [openCategories, setOpenCategories] = React.useState(false);

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

	const handleToggleBrands = () => setOpenBrands(!openBrands);
	const handleToggleCategories = () => setOpenCategories(!openCategories);

	const { login, logout } = React.useContext(AuthContext);
	const { findAllUser } = useUser();


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
			{!login || login.rule == "admin" ? (
				<ContainerAvatarUser>
					<Avatar>B</Avatar>
					<p>Olá, Bem vindo</p>
				</ContainerAvatarUser>
			) : (
				<ContainerAvatarUser>
					<Avatar>{findAllUser?.data?.content?.username[0]}</Avatar>
					<p>Olá, {findAllUser?.data?.content?.username}</p>
				</ContainerAvatarUser>
			)}
			<Divider />
			<ContainerMain>
				<List>
					<ListItem disablePadding>
						<ListItemButton component={Link} to={"/"}>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary={"Pagina Inicial"} />
						</ListItemButton>
					</ListItem>

					{/* MARCAS */}
					{/* MARCAS */}
					<ListItem disablePadding>
						<ListItemButton
							onClick={(e) => {
								e.stopPropagation();
								handleToggleBrands();
							}}
						>
							<ListItemIcon>
								<BakeryDiningIcon />
							</ListItemIcon>
							<ListItemText primary={breandOrYear} />
							{openBrands ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
					</ListItem>

					<Collapse in={openBrands} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{findAll?.data?.content?.map((item) => (
								<ListItemButton
									onClose={toggleDrawer(anchor, false)}
									component={Link}
									to={`/produtos?${breandOrYear.toLocaleLowerCase()}=${formatUrl(item?.name)}&id=${item?.id_category}`}
									sx={{ pl: 4 }}
									onClick={(e) => e.stopPropagation()}
								>
									<ListItemText primary={item?.name} />
								</ListItemButton>
							))}
						</List>
					</Collapse>

					<ListItem disablePadding>
						<ListItemButton
							onClick={(e) => {
								e.stopPropagation();
								handleToggleCategories();
							}}
						>
							<ListItemIcon>
								<CategoryIcon />
							</ListItemIcon>
							<ListItemText primary="Categorias" />
							{openCategories ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
					</ListItem>

					<Collapse in={openCategories} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{findCategory?.data?.content?.map((item) => (
								<ListItemButton
									onClose={toggleDrawer(anchor, false)}
									component={Link}
									to={`/produtos?categoria=${formatUrl(item?.name)}&id=${item?.id_category}`}
									sx={{ pl: 4 }}
									onClick={(e) => e.stopPropagation()}
								>
									<ListItemText primary={item?.name} />
								</ListItemButton>
							))}
						</List>
					</Collapse>

					<ListItem disablePadding>
						<ListItemButton component={Link} to={"/produtos"}>
							<ListItemIcon>
								<NewLabelIcon />
							</ListItemIcon>
							<ListItemText primary={"Lançamentos"} />
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton component={Link} to={"/contato"}>
							<ListItemIcon>
								<ContactsIcon />
							</ListItemIcon>
							<ListItemText primary={"Contato"} />
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				{!login ||
					(login.rule !== "admin" && (
						<>
							<List>
								<Typography sx={{ padding: "0 1rem" }} variant="body2">
									Meu Painel
								</Typography>

								<ListItem disablePadding>
									<ListItemButton component={Link} to={"/custumer"}>
										<ListItemIcon>
											<AccountCircleIcon />
										</ListItemIcon>
										<ListItemText primary="Minha Conta" />
									</ListItemButton>
								</ListItem>

								<ListItem disablePadding>
									<ListItemButton component={Link} to={"/custumer/pedidos"}>
										<ListItemIcon>
											<InventoryIcon />
										</ListItemIcon>
										<ListItemText primary="Meus Pedidos" />
									</ListItemButton>
								</ListItem>

								<ListItem disablePadding>
									<ListItemButton component={Link} to={"/custumer/meus-dados"}>
										<ListItemIcon>
											<ContactPhoneIcon />
										</ListItemIcon>
										<ListItemText primary="Meus Dados" />
									</ListItemButton>
								</ListItem>
							</List>
						</>
					))}
			</ContainerMain>

			<Box
				sx={{
					width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
					display: "flex",
					flexDirection: "column",
				}}
				role="presentation"
			>
				<List sx={{ padding: "1rem 0", position: "absolute", bottom: "0" }}>
					<ContainerOpts>
						{!login || login.rule === "admin" ? (
							<>
								<Link to={"/login"} className="login">
									Entrar
								</Link>
								<Link to={"/register"} className="register">
									Cadastra-se
								</Link>
							</>
						) : (
							<button onClick={logout} className="logout">Sair</button>
						)}
					</ContainerOpts>
				</List>
			</Box>
		</Box>
	);

	return (
		<div>
			{(["left"] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>
						<HeaderStyle>
							<FaBarsStaggered />
						</HeaderStyle>
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
