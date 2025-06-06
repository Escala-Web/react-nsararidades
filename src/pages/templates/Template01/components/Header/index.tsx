import React, { useContext, useState } from "react";
import { ContainerHeader, ContainerNavibar } from "./styles";
import { Search } from "./Ui/Search";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiLogOut } from "react-icons/fi";
import { MdKeyboardArrowDown, MdOutlineShoppingCart } from "react-icons/md";
import HomeIcon from "@mui/icons-material/Home";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
	Avatar,
	Collapse,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from "@mui/material";
import { Logo } from "./Ui/Logo";
import { AuthContext } from "../../../../../context/Auth";
import { NavigateActive } from "./Ui/NavigateAcitve";
import { useCategory } from "../../../../../hooks/Category/useCategory";
import { useBread } from "../../../../../hooks/Bread/useBread";
import logo from "../../../../../assets/Logo/logo.png";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { useLogo } from "../../../../../hooks/Logo/useLogo";
import { URL_HOST } from "../../../../../config/configUrl";
import { useCart } from "../../../../../context/Cart";
import { useStore } from "../../../../../hooks/Store/useStore";
import { useUser } from "../../../../../hooks/users/useUser";
import { NavigationMobile } from "./Ui/Mobile";

export const Header = React.memo(() => {
	const { login, logout } = useContext(AuthContext);

	const [openMenu, setOpenMenu] = useState(false);
	const navigate = useNavigate();

	const [openCategory, setCategory] = useState<boolean>(false);

	const toggleDrawer = (newOpen) => () => {
		setOpenMenu(newOpen);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function handleLogout() {
		logout();
		handleClose();
	}

	function handleNavigateMyAccount() {
		navigate("/custumer");
		handleClose();
	}

	function handleNavigateMyDatas() {
		navigate("/custumer/meus-dados");
		handleClose();
	}

	function handleNavigateMyOrder() {
		navigate("/custumer/pedidos");
		handleClose();
	}

	const [activeCategories, setActiveCategories] = useState<boolean>(false);
	const [activeBread, setActiveBread] = useState<boolean>(false);

	const { findCategory } = useCategory();
	const { findAll } = useBread();
	const { findAllLogo } = useLogo();

	const { cart } = useCart();

	const { findOneStore } = useStore();

	const { findAllUser } = useUser();

	const user = findAllUser?.data?.content;

	return (
		<>
			<ContainerHeader>
				<div className="container_header_main">
					<Link to={'/'}>
					<Logo
						image={
							findAllLogo.data?.content?.LOGO?.path
								? `${URL_HOST}${findAllLogo?.data?.content?.LOGO?.path}`
								: "/default-logo.png"
						}
					/>
					</Link>
					<Search />
					<div className="container_header_actions">
						<div className="container_header_login">
							{login === null || login?.rule === "admin" ? (
								<>
									<div className="header_login_icon">
										<FaUserAlt />
									</div>
									<p>
										<Link to="/login">Entre</Link> ou <br />
										<Link to="/register">Cadastre-se</Link>
									</p>
								</>
							) : (
								<>
									<Tooltip title="Account settings">
										<IconButton
											onClick={handleClick}
											size="small"
											sx={{ ml: 2 }}
											aria-controls={open ? "account-menu" : undefined}
											aria-haspopup="true"
											aria-expanded={open ? "true" : undefined}
										>
											<Avatar sx={{ width: 32, height: 32 }}>
												{user?.username[0]}
											</Avatar>
											<p className="username_action">
												{user?.username?.split(" ")[0]}
											</p>
										</IconButton>
									</Tooltip>
									<Menu
										anchorEl={anchorEl}
										id="account-menu"
										open={open}
										onClose={handleClose}
										onClick={handleClose}
										slotProps={{
											paper: {
												elevation: 0,
												sx: {
													overflow: "visible",
													filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
													mt: 1.5,
													"& .MuiAvatar-root": {
														width: 32,
														height: 32,
														ml: -0.5,
														mr: 1,
													},
													"&::before": {
														content: '""',
														display: "block",
														position: "absolute",
														top: 0,
														right: 14,
														width: 10,
														height: 10,
														bgcolor: "background.paper",
														transform: "translateY(-50%) rotate(45deg)",
														zIndex: 0,
													},
												},
											},
										}}
										transformOrigin={{ horizontal: "right", vertical: "top" }}
										anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
									>
										<MenuItem onClick={handleNavigateMyAccount}>
											<Avatar /> Minha conta
										</MenuItem>
										<Divider />
										<MenuItem onClick={handleNavigateMyDatas}>
											<ListItemIcon>
												<FaUser fontSize="small" />
											</ListItemIcon>
											Meus Dados
										</MenuItem>
										<MenuItem onClick={handleNavigateMyOrder}>
											<ListItemIcon>
												<ShoppingCartIcon fontSize="small" />
											</ListItemIcon>
											Pedidos
										</MenuItem>
										<MenuItem onClick={handleLogout}>
											<ListItemIcon>
												<FiLogOut fontSize="small" />
											</ListItemIcon>
											Sair
										</MenuItem>
									</Menu>
								</>
							)}
						</div>
						<div className="container_favorid_and_cart">
							{/* <div className="favorit">
								<FiHeart className="icons" />
							</div> */}
							<Link to={"/carrinho"} className="cart">
								<MdOutlineShoppingCart className="icons" />
								{cart.length > 0 && (
									<span className="count_cart">{cart?.length}</span>
								)}
							</Link>
						</div>
					</div>
				</div>

				<div className="container_header_main_mobile">
					<div className="header_mobile_top">
						<NavigationMobile />
						<Link to={'/'}>
						<Logo
							image={
								findAllLogo.data?.content?.LOGO?.path
									? `${URL_HOST}${findAllLogo.data.content.LOGO.path}`
									: "/default-logo.png"
							}
						/>
						</Link>
						<div className="container_favorid_and_cart">
							
							<Link to={'/carrinho'} className="cart">
								<MdOutlineShoppingCart className="icons" />
							</Link>
						</div>
					</div>
					<div className="search_mobile">
						<Search />
					</div>
				</div>

				<div className="container_header_navigation">
					<nav className="container_navigation">
						<ul>
							<li>
								<Link to="/">Página Inicial</Link>
							</li>

							<div
								className="nav_dropdown_wrapper"
								onMouseEnter={() => setActiveCategories(true)}
								onMouseLeave={() => setActiveCategories(false)}
							>
								<li className="nav_active">
									<Link to="/produtos">Categorias</Link>
									<span>
										<MdKeyboardArrowDown />
									</span>
								</li>
								{activeCategories && (
									<div className="active_menu" onClick={() => setActiveBread(false)}>
										<NavigateActive
											data={findCategory.data?.content}
											name={"categoria"}
										/>
									</div>
								)}
							</div>

							{/* MARCAS */}
							<div
								className="nav_dropdown_wrapper"
								onMouseEnter={() => setActiveBread(true)}
								onMouseLeave={() => setActiveBread(false)}
							>
								<li className="nav_active">
									<Link to="/produtos">
										{findOneStore?.data?.content?.NAME_STORE.toLowerCase().startsWith(
											"nsa"
										)
											? "Ano"
											: "Marca"}
									</Link>
									<span>
										<MdKeyboardArrowDown />
									</span>
								</li>
								{activeBread && (
									<div className="active_menu">
										<NavigateActive
											data={findAll.data?.content}
											name={"marca"}
										/>
									</div>
								)}
							</div>
							<li>
								<Link to="/produtos">Lançamentos</Link>
							</li>
							<li>
								<Link to={"/contato"}>Contato</Link>
							</li>
						</ul>
					</nav>
				</div>
			</ContainerHeader>

			{/* <Drawer open={openMenu} onClose={toggleDrawer(false)}> */}
				
			{/* </Drawer> */}
		</>
	);
});
