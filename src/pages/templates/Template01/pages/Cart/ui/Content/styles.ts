import styled from "styled-components";

export const Container = styled.div`
  min-width: 1440px;
  margin: 2rem auto;
  padding: 0rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

export const Layout = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

export const CartList = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: .2rem;
`;

export const CartItemStyled = styled.div`
  background: ${({ theme }) => theme.text_third || "#fff"};
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    .price {
      font-weight: bold;
      color: ${({ theme }) => theme.text_primary || "#3366ff"};
    }

    button {
      background: transparent;
      border: none;
      color: #e63946;
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
`;

export const Summary = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.surface || "#f9f9f9"};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);

  h3 {
    margin-bottom: 1rem;
  }

  .line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
  }

  .total {
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  .checkout {
    margin-top: 2rem;
    width: 100%;
    padding: 0.8rem;
    background-color: ${({ theme }) => theme.primary || "#3366ff"};
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #254eda;
    }
  }
`;
