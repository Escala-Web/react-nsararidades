import { Aside, Container, ContainerTable } from "./styles";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { TableProductsData } from "../../../data/tableProducts";
// import { TableProductsData } from "../../../data/Admin/TableProducts";

export const Products = () => {
  const navigate = useNavigate();

  return <TableProductsData />;
};
