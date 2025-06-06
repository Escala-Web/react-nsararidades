import styled from "styled-components";

export const Container = styled.div`
  min-height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .container {
    width: 100%;
    max-width: 800px;
    background-color: ${({ theme }) => theme.background_primary};
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 2.5rem;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }
`;
