const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

  .chart-box {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      margin-bottom: 1rem;
      font-size: 18px;
      color: #444;
      text-align: center;
    }

    canvas {
      max-height: 300px !important;
      max-width: 300px !important;
    }
  }
`;
