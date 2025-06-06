import React from "react";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { AccountBalanceWallet as WalletIcon } from "@mui/icons-material";
import { useStore } from "../../../../hooks/Store/useStore";

export const Pagamentos = () => {

  const { loginStripeStore } = useStore();
  const isLoading = !loginStripeStore?.data;

  console.log(loginStripeStore?.data?.redirect_url)

  const url = loginStripeStore?.data?.redirect_url;
  

  return (
    <Box
      sx={{
        minHeight: "66vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 5, borderRadius: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Configure sua conta de Pagamentos
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Conecte sua conta Stripe para começar a receber pagamentos de forma segura.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<WalletIcon />}
            disabled={isLoading}
            sx={{ mt: 4, borderRadius: 3, px: 5, py: 1.5 }}
          >
            {isLoading ? "Carregando..." : <a style={{ color: '#fff' }} target="_blank" href={url}>Conectar com stripe</a>}
          </Button>

          {loginStripeStore?.error && (
            <Typography color="error" mt={2}>
              Não foi possível carregar a URL de conexão. Tente novamente.
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
};
