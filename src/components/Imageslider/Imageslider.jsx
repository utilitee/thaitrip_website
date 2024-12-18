import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // เพิ่มบรรทัดนี้
import "swiper/swiper-bundle.css";
import "swiper/css/pagination"; // เพิ่มบรรทัดนี้
import "swiper/css/autoplay"; // เพิ่มบรรทัดนี้

function Imageslider() {
  return (
    <section className="bg-white shadow-md rounded-l p-8 mb-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // ระยะห่างระหว่างภาพ
        slidesPerView={1} // จำนวนภาพที่แสดงในแต่ละหน้าจอ
        loop={true} // เลื่อนวนรอบ
        speed={1500} // เพิ่มความ smooth ของการเลื่อน
        autoplay={{ delay: 3000, disableOnInteraction: false }} // เลื่อนอัตโนมัติทุก 3 วินาที
        pagination={{ clickable: true }} // ปุ่ม pagination
        effect="slide" // เอฟเฟกต์การเลื่อนแบบ smooth
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/BANGKOK1 (2).png"
            alt="Image 1"
            className="w-full  h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            src=" /imageforslide/pexels-egonshotsphotos-2240361.jpg"
            alt="Image 1"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/bridge-praram8.jpg"
            alt="Image 1"
            className="w-full  h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/pexels-freestockpro-1004366.jpg"
            alt="Image 2"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/chiang-mai.jpg"
            alt="Image 1"
            className="w-full  h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/pexels-mikegles-29589429.jpg"
            alt="Image 3"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/bangkok-2jpg.jpg"
            alt="Image 4"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Imageslider;
