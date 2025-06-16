import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { formatPrice } from "../../../utils/formatPrice";
import { useProduct } from "../../../hooks/products/useProduct";
import { URL_HOST } from "../../../config/configUrl";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

export const TableProductsData = () => {
  //findAllProduct com paginação
  const [page, setPage] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 40,
  });
  const { findAllProduct, deleteProduct, isLoading } = useProduct(
    paginationModel.page + 1
  );
  const [rows, setRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleOpenDialog = (id: number) => {
    setSelectedProductId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedProductId(null);
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      deleteProduct.mutate(selectedProductId);
    }
    handleCloseDialog();
  };

  const columns = [
    { field: "id", headerName: "#ID", width: 70 },
    {
      field: "image",
      headerName: "Imagem",
      width: 100,
      renderCell: (params: any) => (
        <img
          src={params.value}
          alt="Product"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      ),
    },
    { field: "product", headerName: "Produto", width: 260 },
    { field: "category", headerName: "Categoria", width: 120 },
    { field: "brand", headerName: "Marca", width: 80 },
    { field: "price", headerName: "Valor", width: 130 },
    { field: "sku", headerName: "Código de barras", width: 200 },
    {
      field: "actions",
      headerName: "Ações",
      sortable: false,
      width: 290,
      renderCell: (params: any) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f11d1d" }}
            onClick={() => handleOpenDialog(params.row.id)}
          >
            <DeleteIcon />
          </Button>
          <Button
            variant="contained"
            component={Link}
            to={`/administrativo/produtos/atualizar?id=${params.row.id}`}
          >
            <BorderColorIcon />
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#ffb11e" }}>
            <VisibilityIcon />
          </Button>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    if (!findAllProduct.data?.content) return;
    console.log(findAllProduct.data?.page);
    console.log("Página atual:", page);
    console.log("Conteúdo retornado:", findAllProduct.data.content);

    const parsedRows = findAllProduct.data.content.flatMap((product: any) =>
      product.variations
        // .filter((item: any) => item.is_default === 1)
        .map((variation: any) => ({
          id: product.id_product,
          image: `${URL_HOST}${variation.image_path}`,
          product: product.name,
          category: product.category,
          brand: product.brand,
          price: formatPrice(variation.price),
          sku: variation.sku,
        }))
    );

    // 🔁 Verifica se os dados realmente mudaram antes de setar
    setRows((prevRows) => {
      const newIds = new Set(parsedRows.map((r) => r.id));
      const oldIds = new Set(prevRows.map((r) => r.id));
      const isDifferent =
        parsedRows.length !== prevRows.length ||
        [...newIds].some((id) => !oldIds.has(id));
      return isDifferent ? parsedRows : prevRows;
    });
  }, [findAllProduct.data]);

  return (
    <>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="server"
          rowCount={findAllProduct.data?.page?.total || 0} // total de produtos
          loading={isLoading}
        />
      </div>

      <Dialog
        open={openDialog}
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            handleCloseDialog();
          }
        }}
        BackdropProps={{ invisible: false }}
        disableEscapeKeyDown
      >
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você tem certeza que deseja excluir este produto?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Não
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
