import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Autoplay, Scrollbar, Navigation } from 'swiper/modules';

import styled from 'styled-components';

import leftSrc from '/assets/images/common/left-arrow.svg';
import rightSrc from '/assets/images/common/right-arrow.svg';
const MainSwiper = () => {
  return (
    <SwiperStyle
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      scrollbar={{
        hide: false, // 스크롤바를 숨기지 않음
        draggable: true, // 사용자가 스크롤바를 직접 조작 가능
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Autoplay, Navigation, Scrollbar]}
      className="mySwiper"
    >
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
        {' '}
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
      </SwiperSlide>
      <SwiperSlide>
        {' '}
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
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <SwiperSlideStyle>
          <SwiperContainer>
            <SwiperLeft>
              <p>내가 추천하고 싶은 팀원은요</p>
              <h1>최고의 팀원에게 남겨주는</h1>
              <h1>리뷰를 확인하세요</h1>
            </SwiperLeft>
            <SwiperImg
              src={'/assets/images/main/swiper4.svg'}
              alt={'swiper_img'}
            />
          </SwiperContainer>
        </SwiperSlideStyle>
      </SwiperSlide>
    </SwiperStyle>
  );
};

export default MainSwiper;

const SwiperStyle = styled(Swiper)`
  position: relative;
  z-index: 0;

  .swiper-scrollbar {
    position: absolute;
    left: calc(50% - 61.2rem);
    top: 70%;
    transform: translateY(-50%);
    width: 15.4rem;
    height: 0.8rem;

    background-color: white;
    /* position: absolute; */
    z-index: 1;
  }
  .swiper-scrollbar-drag {
    background-color: #5c5ffa; /* 드래그 상태일 때 색상 조절 */
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: calc(70% + 2rem);
    transform: translateY(-50%);
    width: 1rem;
    height: 2rem;
    /* background-color: red; */
    /* border: 1px solid red; */
  }

  // 이전 버튼
  .swiper-button-prev {
    left: calc(50% - 61.2rem + 15.4rem + 2rem);

    background: url(${leftSrc}) no-repeat;
    background-size: cover;
    background-position: center;
  }
  //다음 버튼
  .swiper-button-next {
    left: calc(50% - 61.2rem + 15.4rem + 2rem + 3rem);

    background: url(${rightSrc}) no-repeat;
    background-size: cover;
    background-position: center;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
`;

const SwiperSlideStyle = styled.div`
  height: 48rem;
  background-image: url('/assets/images/main/swiper_background.svg');
  background-size: cover;
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
