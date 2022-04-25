import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper';

const SwiperSection = () => {
  SwiperCore.use([ Pagination, Navigation, Autoplay]);
  
  return (
    <Swiper 
      pagination={{
        "type": "fraction"
      }} 
      loop={true}
      autoplay={{ delay: 2000 }}
      navigation={true} 
      className="home-swiper"
    >
      <SwiperSlide>
        <div className='main-txt-wrap'>
          <h1 className='title'>휴대폰 특가 할인</h1>
          <p className='sub'>
            적립된 포인트로 휴대폰 구매시 사용 가능해요. <br />
            (최대 20만 포인트 사용 가능)
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main-txt-wrap'>
          <h1 className='title'>추가 배너2</h1>
          <p className='sub'>
            적립된 포인트로 휴대폰 구매시 사용 가능해요. <br />
            (최대 20만 포인트 사용 가능)
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main-txt-wrap'>
          <h1 className='title'>추가 배너3</h1>
          <p className='sub'>
            적립된 포인트로 휴대폰 구매시 사용 가능해요. <br />
            (최대 20만 포인트 사용 가능)
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSection;