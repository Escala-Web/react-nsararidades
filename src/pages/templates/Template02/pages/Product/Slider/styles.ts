import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 850px;

  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    width: 100%;
  }

  .swiper-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    background-color: ${({ theme }) => `${theme.primary}10`};
  }

  .thumbs-swiper {
    margin-top: 10px;
    max-width: 150px;
  }

  .thumb-img {
    width: 100%;
    height: auto;
    opacity: 0.7;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .swiper-image {
      height: auto;
      max-height: 300px;
    }
  }

  @media (max-width: 480px) {
    .swiper-image {
      max-height: 200px;
    }
  }
`;
