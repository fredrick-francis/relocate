'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imagePaths = [
  '/tz-1.webp', '/tz-2.webp', '/tz-3.webp', '/tz-4.webp', '/tz-5.webp',
  '/tz-6.webp', '/tz-7.webp', '/tz-8.webp', '/tz-9.webp', '/tz-10.webp',
  '/tz-11.webp', '/tz-12.webp', '/tz-13.webp', '/tz-14.webp', '/tz-15.webp',
  '/tz-16.webp', '/tz-17.webp', '/tz-18.webp', '/tz-19.webp', '/tz-20.webp',
];

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
            {imagePaths.map((path, index) => (
              <SwiperSlide key={index}>
                <div className="position-relative w-100" style={{ height: '350px' }}>
                  <Image
                    src={path}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text - Right */}
        <div className="col-lg-6 col-md-12 text-center">
          <h2>Why Tanzania?</h2>
          <p className="lead">
            Tanzania is a land of breathtaking beauty, rich culture and endless opportunity.
            From the serene beaches to the bustling streets of Dar es Salaam and the tranquil
            highlands of Arusha, Tanzania offers a unique lifestyle that blends adventure with
            ease of living. Whether you're drawn by the natural wonders, the vibrant communities,
            or the potential for personal and professional growth, Tanzania is fast becoming a
            top destination for those seeking a fresh start or a new experience.
          </p>
        </div>
      </div>
    </div>
  );
}
