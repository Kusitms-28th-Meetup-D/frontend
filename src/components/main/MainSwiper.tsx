import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

const MainSwiper = () => {
  return (
    <SwiperStyle pagination={true} className="mySwiper">
      <SwiperSlideStyle>
        <SwiperContainer>
          <SwiperLeft>
            <p>원팀이 처음이세요?</p>
            <h1>원팀에서 원하는 팀원을</h1>
            <h1>한번에 찾아보세요!</h1>
          </SwiperLeft>
          <SwiperImg
            src={'/assets/images/main/swiper1.svg'}
            alt={'swiper_img'}
          />
        </SwiperContainer>
      </SwiperSlideStyle>

      <SwiperSlideStyle>
        <SwiperContainer>
          <SwiperLeft>
            <p>원팀이 처음이세요?</p>
            <h1>원팀에서 원하는 팀원을</h1>
            <h1>한번에 찾아보세요!</h1>
          </SwiperLeft>
          <SwiperImg
            src={'/assets/images/main/swiper2.svg'}
            alt={'swiper_img'}
          />
        </SwiperContainer>
      </SwiperSlideStyle>

      <SwiperSlideStyle>
        <SwiperContainer>
          <SwiperLeft>
            <p>나는 어떤 팀원일까?</p>
            <h1>나와 함께 했던 팀원들이</h1>
            <h1>남겨준 리뷰를 확인하세요</h1>
          </SwiperLeft>
          <SwiperImg
            src={'/assets/images/main/swiper3.svg'}
            alt={'swiper_img'}
          />
        </SwiperContainer>
      </SwiperSlideStyle>

      <SwiperSlideStyle>
        <SwiperContainer>
          <SwiperLeft>
            <p>내가 추천하고 싶은 팀원은요</p>
            <h1>최고의 팀원에게 남겨주는</h1>
            <h1>추천사를 확인하세요</h1>
          </SwiperLeft>
          <SwiperImg
            src={'/assets/images/main/swiper4.svg'}
            alt={'swiper_img'}
          />
        </SwiperContainer>
      </SwiperSlideStyle>
    </SwiperStyle>
  );
};

export default MainSwiper;

const SwiperStyle = styled(Swiper)`
  z-index: 0;
`;

const SwiperSlideStyle = styled(SwiperSlide)`
  height: 48rem;
  background-image: url('/assets/images/main/swiper_background.svg');
`;

const SwiperContainer = styled.div`
  width: 122.4rem;
  margin: 0 auto;
  padding: 6rem 0 4rem 0;
  display: flex;
  justify-content: space-between;
`;

const SwiperLeft = styled.div`
  p {
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
  }
  h1 {
    ${({ theme }) => theme.fonts.heading2};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SwiperImg = styled.img`
  transform: translateY(-4rem);
  width: 40rem;
  height: 38.3rem;
  margin-right: 5rem;
`;
