import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useOrderStatusGetById } from "../../../../../../hooks/Orders/useOrder";
import { URL_HOST } from "../../../../../../config/configUrl";

export const ListOrders = ({ id }: { id: number | string }) => {
  const { data, isLoading, error } = useOrderStatusGetById(id);

  if (isLoading) return <Typography>Carregando...</Typography>;
  if (error)
    return <Typography color="error">Erro ao carregar pedido</Typography>;

  const order = data?.content;

  if (!order) return <Typography>Nenhum pedido encontrado.</Typography>;

  return (
    <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardHeader
        title={`Pedido #${order.id_order}`}
        subheader={`Criado em: ${new Date(order.created_at).toLocaleString()}`}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Usuário
            </Typography>
            <Typography variant="body1">{order.user?.username}</Typography>
            <Typography variant="body2" color="text.secondary">
              {order.user?.email}
            </Typography>

            {order.user?.person_type == "Jurídica" ? (
              <Typography variant="body2" color="text.secondary">
                CNPJ: {order.user?.cnpj}
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                CPF: {order.user?.cpf}
              </Typography>
            )}

            <Typography variant="body2" color="text.secondary">
              Contato:{" "}
              {order.user?.contact.map((contato) => {
                return contato.number;
              })}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Endereço
            </Typography>
            <Typography variant="body1">
              {order.address?.public_area}, {order.address?.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {order.address?.district}, {order.address?.city} -{" "}
              {order.address?.state}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CEP: {order.address?.zip_code}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Produtos
            </Typography>
            <List dense disablePadding>
              {order.products?.map((product: any, index: number) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                    src={`${URL_HOST}${product?.image_path}`}
                    alt=""
                  />
                  <ListItemText
                    primary={product.name}
                    secondary={
                      <>
                        Quantidade: {product.quantity} | Preço:{" "}
                        <span style={{ color: "#28a745" }}>
                          R$ {product.price}
                        </span>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* Bloco Entrega */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  Entrega
                </Typography>
                <Typography variant="body1">
                  Transportadora: {order.shipping?.carrier}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Serviço: {order.shipping?.shipping_type}
                </Typography>
                <Typography variant="h6" color="#dc3545">
                  R$ {order.shipping?.shipping_cost}
                </Typography>
              </Grid>
            </Grid>

            {/* Bloco Total embaixo ocupando tudo */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Total
              </Typography>
              <Typography variant="h6" color="primary">
                R${" "}
                {(
                  Number.parseFloat(order.total_price) +
                  Number.parseFloat(order.shipping.shipping_cost)
                ).toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pagamento até:{" "}
                {new Date(order.payment_expires_at).toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
