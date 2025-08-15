import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .swiper {
    max-width: 1100px;
    margin: 0 auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    width: 340px;
    margin-right: 1.6rem;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-pagination {
    position: static;

    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 4rem;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.semantic.label.normal};
      opacity: 0.16;
      border-radius: 50%;
      transition: all 0.3s;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;
