import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};

  

  .container {
    width: 100%;
    max-width: 800px;
    background: ${({ theme }) => theme.background};
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 480px) {
      padding: 2rem 1.2rem;
      border-radius: 10px;
    }
  }

  .new_user {
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 0.95rem;
    text-align: center;
    margin-top: 1rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }

  .form_flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .button.contain {
    background: ${({ theme }) => theme.accent};
    color: white;
    padding: 0.85rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);

    width: 32%;

    &:hover {
      background: ${({ theme }) => theme.accent_hover || theme.accent};
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  label {
    color: ${({ theme }) => theme.text_secondary};
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  input {
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => `${theme.text_primary}30`};
    border-radius: 8px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text_primary};
    font-size: 1rem;
    transition: border 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.accent};
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.accent}33`};
    }
  }
`;
