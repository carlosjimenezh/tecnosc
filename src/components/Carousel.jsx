import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  const images = ['/carousel/slide1.jpg', '/carousel/slide1.jpg', '/carousel/slide1.jpg', '/carousel/slide1.jpg', '/carousel/slide1.jpg']
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={15}
      slidesPerView={1}
      navigation
      loop={true}
      // autoplay={{ delay: 2000, disableOnInteraction: true}}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      breakpoints={{
        767: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        }
      }}
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index} className='aspect-square'>
            <img src={image} className='rounded-xl h-full w-full object-cover' />
          </SwiperSlide>
        )
      })}
      
    </Swiper>
  );
};
