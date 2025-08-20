import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  const images = ['/galeria/i13.jpg', '/galeria/i6.jpg', '/galeria/i20.jpg', '/galeria/i22.jpg', '/galeria/i5.jpg']
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={20}
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
          spaceBetween: 20,
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
            <img src={image} className='rounded h-full w-full object-cover' loading='lazy'/>
          </SwiperSlide>
        )
      })}
      
    </Swiper>
  );
};
