// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

const SwiperContainer = styled(Swiper)`
  /* background-color: red; */
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 500px) {
    height: 100vw;
  }
  /* 
  .swiper-button-prev {

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  } */
  //pagination bar에 적용하는 스타일 -활성화된 bullet

  .swiper-pagination {
    margin-bottom: calc(100px - 10px);

    //모바일
    @media screen and (max-width: 500px) {
      position: absolute;
      /* transform: translateY(270px); */
      top: 270px;
    }
  }
  //pagination bar에 적용하는 스타일 - 전체 bullet
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    margin: 0 30px !important;
    text-align: center;
    line-height: 20px;
    font-size: 18px;

    background: #9cb9ca; //선택안된거
    opacity: 1;
    /* background: transparent; */
    transition: background 0.3s ease;

    &:hover {
      color: #000;
    }
    //모바일
    @media screen and (max-width: 500px) {
      width: 10px;
      height: 10px;
      margin: 0 10px !important;
    }
  }
  .swiper-pagination-bullet-active {
    color: #000;

    background: #007aff;
  }
`;

const MainSwiper = () => {
  return (
    <>
      <SwiperContainer
        loop={true}
        spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>11</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>222222</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>133333333</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>144444444444</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>1555555555551</div>
        </SwiperSlide>
      </SwiperContainer>
    </>
  );
};
export default MainSwiper;
