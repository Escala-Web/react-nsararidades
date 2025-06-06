import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 2rem auto;
  /* padding: 1.5rem 2rem; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #2e3a59;
  background: #f4f7fc;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgb(50 50 93 / 0.1);

  .filters {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.8rem;
	margin-bottom: 2.2rem;

	label {
	  display: flex;
	  flex-direction: column;
	  font-weight: 600;
	  font-size: 1rem;
	  color: #3a4661;
	  min-width: 200px;

	  select,
	  input {
		margin-top: 0.5rem;
		padding: 0.6rem 1rem;
		font-size: 1rem;
		border: 1.5px solid #b0bec5;
		border-radius: 8px;
		background-color: #fff;
		transition: border-color 0.25s ease;

		&:focus {
		  outline: none;
		  border-color: #3366ff;
		  box-shadow: 0 0 8px #3366ff44;
		}
	  }
	}
  }

  
  .grid-charts {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-template-rows: 400px auto;
	gap: 2.5rem 2rem;
	justify-items: center;

	/* 2 gráficos no topo e 1 embaixo centralizado */
	grid-template-areas:
	  "pie bar"
	  "line line";

	.pie-chart {
	  grid-area: pie;
	  width: 100%;
	  /* height: 420px; */
	}
	.bar-chart {
	  grid-area: bar;
	  width: 100%;
	  /* height: 420px; */
	}
	.line-chart {
	  grid-area: line;
	  width: 100%;
	  /* height: 420px; */
	}
  }

  .chart-box {
	background: #fff;
	border-radius: 16px;
	box-shadow: 0 5px 15px rgb(50 50 93 / 0.1);
	padding: 1.8rem;
	width: 100%;
	height: 100%;

	transition: box-shadow 0.3s ease;
	&:hover {
	  box-shadow: 0 10px 25px rgb(51 102 255 / 0.25);
	}

	canvas {
		background-color: transparent;
	}
  }

  @media (max-width: 720px) {
	.filters {
	  flex-direction: column;
	  align-items: center;
	  label {
		min-width: 100%;
		max-width: 320px;
	  }
	}
	.grid-charts {
	  grid-template-columns: 1fr;
	  grid-template-rows: auto;
	  grid-template-areas:
		"pie"
		"bar"
		"line";
	  gap: 1.8rem 0;
	  justify-items: stretch;

	  .pie-chart,
	  .bar-chart,
	  .line-chart {
		height: 320px;
	  }
	}
  }
`;