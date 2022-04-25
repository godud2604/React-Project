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
          <h1 className='title'>드림어반스퀘어 입점</h1>
          <p className='sub'>
            진주혁신도시의 핫플레이스 <br />
            드림어반스퀘어 맛집,핫플 모두 만나 보세요.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main-txt-wrap'>
          <h1 className='title'>추가 배너2</h1>
          <p className='sub'>
            진주혁신도시의 핫플레이스 <br />
            드림어반스퀘어 맛집,핫플 모두 만나 보세요.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='main-txt-wrap'>
          <h1 className='title'>추가 배너3</h1>
          <p className='sub'>
            진주혁신도시의 핫플레이스 <br />
            드림어반스퀘어 맛집,핫플 모두 만나 보세요.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSection;