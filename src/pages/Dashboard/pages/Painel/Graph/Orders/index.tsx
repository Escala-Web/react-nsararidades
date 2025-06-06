import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import styled from "styled-components";
import { useOrders } from "../../../../../../hooks/Orders/useOrder";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

  .chart-box {
    width: 45%;
    min-width: 300px;
  }
`;

const labels = [
  "Cancelado",  // CANCELLED
  "Pendente",   // PENDING
  "Processando",// PROCESSING
  "Enviado",    // SHIPPED
  "Entregue",   // DELIVERED
  "Estornado",  // REFUNDED
  "Devolvido",  // RETURNED
];


const backgroundColors = [
  "#f44336", // Cancelado
  "#FEC53D", // Pendente
  "#2196f3", // Processando
  "#FF9800", // Enviado
  "#4CAF50", // Entregue
  "#9C27B0", // Estornado
  "#607D8B", // Devolvido
];

export const GraphOrders = () => {
  const { orderGraphs, isLoading, isError } = useOrders();

  if (isLoading) return <p>Carregando gráficos...</p>;
  if (isError) return <p>Erro ao carregar dados dos gráficos.</p>;



  // Converte os dados da API para os valores do gráfico na mesma ordem dos labels
  const content = orderGraphs?.data?.content || {};
  const values = [
  content.CANCELLED || 0,
  content.PENDING || 0,
  content.PROCESSING || 0,
  content.SHIPPED || 0,
  content.DELIVERED || 0,
  content.REFUNDED || 0,
  content.RETURNED || 0,
];

  const pieData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels,
    datasets: [
      {
        label: "Pedidos",
        data: values,
        backgroundColor: backgroundColors,
        borderRadius: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
        labels: {
          font: { size: 14 },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    indexAxis: "y" as const,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw} pedidos`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
      <div className="chart-box">
        <h3>Status em Percentual</h3>
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div className="chart-box">
        <h3>Status em Quantidade</h3>
        <Bar data={barData} options={barOptions} />
      </div>
    </Container>
  );
};
