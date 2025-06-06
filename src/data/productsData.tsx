import { useEffect, useState } from "react";
import { useProducts } from "../../../hooks/Products/useProducts";
import { Box, Button } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { formatPrice } from "../utils/formatPrice";


export const TableProductsData = () => {
	const { data } = useProducts();
	const [rows, setRows] = useState([]);

	const columns = [
		{ field: "id", headerName: "#ID", width: 70 },
		{
			field: "image",
			headerName: "Imagem",
			width: 100,
			renderCell: (params) => (
				<img
					src={params.value}
					alt="Product"
					style={{ width: "100%", height: "auto" }}
				/>
			),
		},
		{ field: "product", headerName: "Produto", width: 260 },
		{ field: "category", headerName: "Categoria", width: 120 },
		{
			field: "brand",
			headerName: "Marca",
			width: 80,
		},
		{
			field: "price",
			headerName: "Valor",
			width: 130,
		},
		
		{
			field: "sku",
			headerName: "Codigo de barra",
			width: 200,
		},
		{
			field: "actions",
			headerName: "Ações",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 290,
			renderCell: (params) => (
				<>
					<Box sx={{ display: 'flex', alignItens: 'center', gap: '1rem' }}>
                        <Button variant="contained" sx={{ backgroundColor: '#f11d1d' }}>
                            <DeleteIcon  />
                        </Button>
                        <Button variant="contained">
                            <BorderColorIcon  />
                        </Button>
                        <Button variant="contained" sx={{ backgroundColor: '#ffb11e' }}>
                            <VisibilityIcon  />
                        </Button>
                    </Box>
					
				</>
			),
		},
	];

	useEffect(() => {
		const newRows = data?.content?.flatMap((product) => 
			product.variations.map((variation: any) => ({
				id: product.id_product,
				image: "http://192.168.15.6/api-php" + variation.image_path,
				product: product.name,
				category: product.branch,
				brand: product.branch,
				price: formatPrice(variation.price), // Se houver preço na variação
				stock: variation.stock, // Se houver estoque na variação
				sku: variation.sku, // Se houver SKU na variação
				actions: product.id_product,
			}))
		);
		setRows(newRows);
	}, [data]);

	return { rows, columns };
};