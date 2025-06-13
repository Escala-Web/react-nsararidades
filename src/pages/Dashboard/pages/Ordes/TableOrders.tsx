import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { formatPrice } from "../../../../utils/formatPrice";
import {
  arrayOfOrders,
  formatPortugues,
} from "../../../../utils/formatPortugues";
import { Formulario } from "../Products/create/styles";
import { AttOrder } from "./ui/AttOrder";
import { ListOrders } from "./ui/ListOrder";
import "./styles.css";

interface Order {
  id_order: number;
  order_created_at: string;
  status: string;
  status_created_at: string;
  address_shipped: {
    public_area: string;
    number: string;
    complement: string | null;
    district: string;
    city: string;
    state: string;
    zip_code: string;
  };
  products: Product[];
  user: {
    id_user: number;
    username: string;
    email: string;
    person_type: string;
    cpf?: string;
    cnpj?: string;
  };
  shipping?: {
    shipping_cost: string;
  };
  total_price: string;
}

interface Product {
  id_product: number;
  name: string;
  quantity: number;
  price: number;
  sku?: string;
}

interface TableOrdersProps{
	data: Order[];
	paginationModel: {page: number; pageSize: number};
	setPaginationModel: React.Dispatch<React.SetStateAction<{page: number; pageSize: number}>>;
	totalCount: number;
}

const paginationModel = { page: 0, pageSize: 5 };

export const TableOrders = ({ data, paginationModel, setPaginationModel, totalCount }: TableOrdersProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const handleClickDetails = (row: any) => {
    setSelectedOrder(row);
    setOpenDetails(true);
  };

  const handleClickEdit = (row: any) => {
    setSelectedOrder(row);
    setOpenEdit(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
    setSelectedOrder(null);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedOrder(null);
  };

  const columns = [
    { field: "id", headerName: "Id", width: 60 },
    { field: "nome_usuario", headerName: "Cliente", width: 180 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "endereco", headerName: "Endereço", width: 250 },

    {
      field: "status",
      headerName: "Status",
      width: 180,
      renderCell: (params: any) => {
        const status = params.value.toLowerCase();
        let color = "inherit";

        if (status.includes("pendente"))
          color = "#FFA500"; // laranja
        else if (status.includes("processando"))
          color = "#007bff"; // azul
        else if (status.includes("em transporte"))
          color = "#17a2b8"; // roxo
        else if (status.includes("cancelado"))
          color = "#dc3545"; // vermelho
        else if (status.includes("concluido")) color = "#28a745"; // verde

        return (
          <Typography fontWeight="bold" color={color}>
            {params.value}
          </Typography>
        );
      },
    },
    { field: "data", headerName: "Última atualização", width: 180 },
    {
      field: "acoes",
      headerName: "Ações",
      width: 120,
      sortable: false,
      renderCell: (params: any) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Tooltip title="Ver detalhes">
            <IconButton
              color="primary"
              onClick={() => handleClickDetails(params.row)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Editar pedido">
            <IconButton
              color="secondary"
              onClick={() => handleClickEdit(params.row)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows = data?.map((pedido) => {
    const status = formatPortugues(pedido.status);

    return {
      id: pedido.id_order,
      nome_usuario: pedido.user.username,
      email: pedido.user.email,
      endereco: `${pedido.address_shipped.public_area}, ${pedido.address_shipped.number} - ${pedido.address_shipped.district} - ${pedido.address_shipped.zip_code}`,
      status: status.value,
      data: pedido.order_created_at,
      frete: formatPrice(pedido.shipping?.shipping_cost || "0"),
      original: pedido, // Para enviar os dados completos no edit
    };
  });

  return (
    <Box
      sx={{
        padding: "1rem 1rem 2rem",
        background: "#fff",
        gap: "1rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "8px",
      }}
    >
      <Paper id="pdf-usersFindAll" sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel = {paginationModel}
		  onPaginationModelChange={setPaginationModel}
		  paginationMode="server"
		  rowCount={totalCount}
          sx={{ border: 0 }}
        />
      </Paper>

      {/* Detalhes do pedido */}
      <Dialog
        open={openDetails}
        onClose={handleCloseDetails}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Detalhes do Pedido</DialogTitle>
        <DialogContent dividers>
          {selectedOrder && <ListOrders id={selectedOrder?.id} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails}>Fechar</Button>
        </DialogActions>
      </Dialog>

      {/* Edição do pedido */}
      <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Editar Pedido</DialogTitle>
        <DialogContent dividers>
          {selectedOrder && (
            <AttOrder
              open={openEdit}
              order={selectedOrder.original}
              onClose={handleCloseEdit}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
