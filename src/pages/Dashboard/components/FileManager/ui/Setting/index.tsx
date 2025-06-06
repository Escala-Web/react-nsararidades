import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { Rename } from "../Rename";
import { Trash } from "../Trash";
import { useFolder } from "../../../../../../hooks/FileManger/useFolder";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: "rgb(55, 65, 81)",
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
		...theme.applyStyles("dark", {
			color: theme.palette.grey[300],
		}),
	},
}));

interface SettingProps {
	idFolder: number;
	isPageFile: boolean;
}
export const Setting: React.FC<SettingProps> = ({ idFolder, isPageFile }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const { restoreFolder, deleteFolder }: any = useFolder();

	const handleFolder = () => {
		restoreFolder.mutate({
			id_folder: idFolder,
		});
		handleClose();
	};

	const handleDeleteFolder = () => {
		deleteFolder.mutate(
			{ id_folder: idFolder },
			{
				onSuccess: () => handleClose(),
			}
		);
	};

	return (
		<div className="container_settings">
			<button
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				className="btn_setting"
			>
				...
			</button>
			<StyledMenu
				key={1}
				id="demo-customized-menu"
				MenuListProps={{
					"aria-labelledby": "demo-customized-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem disableRipple>
					<Rename idFolder={idFolder} />
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<FileCopyIcon />
					Mover para...
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />

				{isPageFile ? (
					<>
						<MenuItem onClick={handleFolder} disableRipple>
							<DeleteIcon />
							Restaurar
						</MenuItem>
						<MenuItem onClick={handleDeleteFolder} disableRipple>
							<DeleteIcon />
							Apagar
						</MenuItem>
					</>
				) : (
					<>
						<MenuItem disableRipple>
							<DeleteIcon />
							<Trash idFolder={idFolder} />
						</MenuItem>
					</>
				)}
			</StyledMenu>
		</div>
	);
};
