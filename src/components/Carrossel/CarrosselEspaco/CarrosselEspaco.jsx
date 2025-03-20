import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import header1 from '../../../assets/header1.jpeg';
import header2 from '../../../assets/header2.jpeg';
import header3 from '../../../assets/header3.jpeg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Carrossel.css';

const CarrosselEspaco = () => {
  const slides = [
    {
      id: 1,
      image: header1,
      title: 'Título do Slide 1',
      description: 'Descrição do Slide 1',
    },
    {
      id: 2,
      image: header2,
      title: 'Título do Slide 2',
      description: 'Descrição do Slide 2',
    },
    {
      id: 3,
      image: header3,
      title: 'Título do Slide 3',
      description: 'Descrição do Slide 3',
    },
  ];

  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrosselEspaco;