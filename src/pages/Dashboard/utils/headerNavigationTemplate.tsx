import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import PaletteIcon from '@mui/icons-material/Palette';


export const headerNavigationTemplate = [
	{
		kind: "header",
		title: "Meu Template",
	},
    {
		segment: "administrativo",
		title: "Voltar",
		icon: <ArrowCircleLeftIcon />,
	},
    {
        kind: "divider",
    },
	{
		segment: "administrativo/templates",
		title: "Templates Disponives",
		icon: <DashboardIcon />,
	},
	{
		segment: "administrativo/templates/logo",
		title: "Logos do Site",
		icon: <WebStoriesIcon />,
	},
    {
		segment: "administrativo/templates/banner",
		title: "Banners",
		icon: <ViewCarouselIcon />,
	},
	
];