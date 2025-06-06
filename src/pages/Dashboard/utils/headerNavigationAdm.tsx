import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SellIcon from "@mui/icons-material/Sell";
import PersonIcon from "@mui/icons-material/Person";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import SettingsIcon from "@mui/icons-material/Settings";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GoogleIcon from '@mui/icons-material/Google';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DevicesIcon from '@mui/icons-material/Devices';

export const headerNavigationAdm = [
	{
		kind: "header",
		title: "Dashboard",
	},
	{
		segment: "administrativo",
		title: "Dashboard",
		icon: <DashboardIcon />,
	},
	{
		segment: "administrativo/pagamentos",
		title: "Pagamentos",
		icon: <PriceChangeIcon />,
	},

	{
		segment: "administrativo",
		title: "Produtos",
		icon: <SellIcon />,
		children: [
			{
				segment: "produtos",
				title: "Meus Produtos",
				icon: <LabelImportantIcon />,
			},
			{
				segment: "produtos/create",
				title: "Registrar Produto",
				icon: <LabelImportantIcon />,
			},
		],
	},
	{
		segment: "administrativo/pedidos",
		title: "Pedidos",
		icon: <ShoppingCartIcon />,
	},
	{
		segment: "administrativo/clientes",
		title: "Clientes",
		icon: <PersonIcon />,
	},
	{
		kind: "divider",
	},
	{
		kind: "header",
		title: "Minha Loja",
	},
	{
		segment: "administrativo",
		title: "Loja Virtual",
		icon: <StoreIcon />,
		children: [
            {
				segment: "templates",
				title: "Personalização",
				icon: <ViewQuiltIcon />,
			},
			
		],
	},
	{
		kind: "divider",
	},
	{
		kind: "header",
		title: "Configurações",
	},
	{
		segment: "administrativo",
		title: "Configurações",
		icon: <SettingsIcon />,
		children: [
			{
				segment: "endereco",
				title: "Endereço",
				icon: <PinDropIcon />,
			},
			{
				segment: "telefone",
				title: "Telefone",
				icon: <LocalPhoneIcon />,
			},
			{
				segment: "email",
				title: "Email",
				icon: <EmailIcon />,
			},
			{
				segment: "redes-sociais",
				title: "Redes Sociais",
				icon: <DevicesIcon />,
			},
			// {
			// 	segment: "google",
			// 	title: "Integração com Google",
			// 	icon: <GoogleIcon />,
			// },
		],
	},
];