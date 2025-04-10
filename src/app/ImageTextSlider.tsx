'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageTextSlider() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Swiper - Left */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src="/tz-1.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-2.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-3.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-4.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-5.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-6.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-7.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-8.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-9.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-10.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-11.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-12.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-13.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-14.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-15.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-16.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-17.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-18.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-19.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/tz-20.webp"
                className="img-fluid rounded"
                alt="Slide 1"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>

        {/* Text - Right */}
        <div className="col-lg-6 col-md-12 text-center">
          <h2>Why Tanzania?</h2>
          <p className="lead">
          Tanzania is a land of breathtaking beauty, rich culture and endless opportunity. From the serene beaches to the bustling streets of Dar es Salaam and the tranquil highlands of Arusha, Tanzania offers a unique lifestyle that blends adventure with ease of living. Whether you're drawn by the natural wonders, the vibrant communities, or the potential for personal and professional growth, Tanzania is fast becoming a top destination for those seeking a fresh start or a new experience.
          </p>
        </div>
      </div>
    </div>
  );
}
