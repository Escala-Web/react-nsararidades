import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Container } from "./styles";
import { usePayment } from "../../../../../../hooks/Payment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const monthMap: Record<string, string> = {
  jan: "Janeiro",
  feb: "Fevereiro",
  mar: "Março",
  apr: "Abril",
  may: "Maio",
  jun: "Junho",
  jul: "Julho",
  aug: "Agosto",
  sep: "Setembro",
  oct: "Outubro",
  nov: "Novembro",
  dec: "Dezembro",
};

export const GraphSales = ({ color = "#3366ff" }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [filteredData, setFilteredData] = useState([]);

  const { paymentsFaturesGraph } = usePayment();

  const monthlyData = paymentsFaturesGraph?.data?.content?.monthly?.["2025"] || {};

  const realData = Object.entries(monthlyData).map(([key, value]: any) => ({
    name: monthMap[key],
    faturamento: parseFloat(value.total),
  }));

useEffect(() => {
  const filtered = realData
    .filter((d) => d.faturamento >= minValue && d.faturamento <= maxValue)
    .filter((d) => (selectedMonth ? d.name === selectedMonth : true));

  setFilteredData(filtered);
}, [selectedMonth, minValue, maxValue, JSON.stringify(realData)]);



  const labels = filteredData.map((d) => d.name);
  const dataValues = filteredData.map((d) => d.faturamento);

  const lineData = {
    labels,
    datasets: [
      {
        label: "Faturamento",
        data: dataValues,
        fill: true,
        borderColor: color,
        backgroundColor: `rgba(51, 102, 255, 0.15)`,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: color,
        borderWidth: 3,
      },
    ],
  };

  const barData = {
    labels,
    datasets: [
      {
        label: "Faturamento",
        data: dataValues,
        backgroundColor: color,
        borderRadius: 6,
        maxBarThickness: 45,
      },
    ],
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: "Participação no faturamento",
        data: dataValues,
        backgroundColor: [
          "#3366ff",
          "#50c9b4",
          "#f5a623",
          "#d0021b",
          "#9013fe",
          "#b8e986",
          "#7ed321",
          "#417505",
          "#f8e71c",
          "#bd10e0",
          "#f2949e",
          "#4a4a4a",
        ].slice(0, labels.length),
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  const accumulatedDataValues = [];
  filteredData.reduce((acc, cur, i) => {
    const newSum = acc + cur.faturamento;
    accumulatedDataValues[i] = newSum;
    return newSum;
  }, 0);

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { font: { size: 14 }, color: "#2e3a59" } },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            if (context.dataset.label?.includes("Participação")) {
              return `${context.label}: ${context.parsed}%`;
            }
            return `R$ ${context.parsed.y.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
        bodyFont: { size: 13 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 13, weight: "500" },
          color: "#455a64",
          callback: (value: number) =>
            `R$ ${Number(value).toLocaleString("pt-BR", { minimumFractionDigits: 0 })}`,
        },
        grid: {
          color: "#e1e8f0",
          borderDash: [4, 6],
        },
      },
      x: {
        ticks: {
          font: { size: 13, weight: "600" },
          color: "#455a64",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right", labels: { font: { size: 13 }, color: "#2e3a59" } },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = dataValues.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
        bodyFont: { size: 13 },
      },
    },
  };

  return (
    <Container>
      <div className="filters">
        <label>
          Mês:
          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            <option value="">Todos</option>
            {Object.values(monthMap).map((monthName) => (
              <option key={monthName} value={monthName}>
                {monthName}
              </option>
            ))}
          </select>
        </label>

        <label>
          Valor mínimo (R$):
          <input
            type="number"
            min={0}
            step={10}
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
          />
        </label>

        <label>
          Valor máximo (R$):
          <input
            type="number"
            min={0}
            step={10}
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="grid-charts">
        <div className="chart-box pie-chart">
          <Pie data={pieData} options={pieOptions} />
        </div>

        <div className="chart-box bar-chart">
          <Bar data={barData} options={commonOptions} />
        </div>

        <div className="chart-box line-chart">
          <Line data={lineData} options={commonOptions} />
        </div>
      </div>
    </Container>
  );
};
