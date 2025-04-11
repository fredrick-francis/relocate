'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const testimonials = [
  {
    name: "John Doe",
    comment: "This service was amazing and exceeded my expectations!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    comment: "Very professional and friendly team. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    comment: "Relocation was smooth and stress-free, thanks to you!",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    comment: "Good experience overall, I would use this service again.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
  },
];

export default function TestimonialsSwiper() {
  return (
    <div className="container mb-5 my-5">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card p-4 shadow-sm h-100 border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-circle"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h5 className="mb-0">{item.name}</h5>
              </div>
              <p className="text-muted">&quot;{item.comment}&quot;</p>
              <div className="text-warning">
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
