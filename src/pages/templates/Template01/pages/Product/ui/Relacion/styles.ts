import styled from "styled-components";

export const SwiperContainer = styled.div`
  position: relative;

  .swiper-button-prev {
    left: -00px; // espaçamento à esquerda
    color: ${({ theme }) => theme.primary}; // ou a cor que desejar
    z-index: 1000000000000000000000000000;
  }

  .swiper-button-next {
    right: -0px; // espaçamento à direita
    color: ${({ theme }) => theme.primary};
    z-index: 10;
  }
`;
