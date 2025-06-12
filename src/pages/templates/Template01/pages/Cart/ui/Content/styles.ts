import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 1rem;
  margin: 2rem auto;
  overflow: hidden;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

export const Layout = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartList = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const CartItemStyled = styled.div`
  background: ${({ theme }) => theme.text_third || "#fff"};
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  img {
    width: 80px;
    height: auto;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    flex: 1;
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

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    .actions {
      width: 100%;
      justify-content: space-between;
    }

    img {
      width: 100%;
      max-width: 100px;
    }
  }
`;

export const Summary = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.surface || "#f9f9f9"};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  width: 100%;
  box-sizing: border-box;

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
