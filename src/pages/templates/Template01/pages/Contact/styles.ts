import styled from "styled-components";

export const Container = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 6rem;

    @media (max-width: 1450px) {
      flex-direction: column-reverse;
      gap: 3rem;
    }

    @media (max-width: 768px) {
      gap: 2rem;
    }
  }

  .container_form {
    width: 60%;

    h2 {
      color: ${({ theme }) => theme.text_primary};
      font-size: 2.2rem;
      margin-bottom: 1rem;

      span {
        color: ${({ theme }) => theme.accent};
      }
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .container_maps {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    @media (max-width: 1450px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .card {
    border-radius: 16px;
    width: 100%;
    padding: 2rem;
    background: ${({ theme }) => theme.text_third};

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease-in-out;

    border: 1px solid ${({ theme }) => `${theme.text_primary}20`};

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 1450px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }

    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.accent};
      background-color: ${({ theme }) => `${theme.accent}20`};
      padding: 0.8rem;
      border-radius: 50%;
    }

    h4 {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.text_primary};
    }

    p {
      margin: 0;
      font-size: 1rem;
      color: ${({ theme }) => theme.text_secondary};
      word-break: break-word;
      max-width: 280px;
    }
  }

  .maps {
    width: 100%;
    height: 300px;
    border: 1px solid ${({ theme }) => `${theme.text_primary}50`};
    background-color: #fff;
    border-radius: 8px;
  }

  .active {
    /* destaque opcional */
  }
`;
