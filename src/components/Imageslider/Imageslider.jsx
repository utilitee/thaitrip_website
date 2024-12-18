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
        {/* BANGKOK */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/BANGKOK1 (2).png"
            alt="Image 1"
            className="w-full  h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* YAOWARAT */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/YAOWARAT (1).png"
            alt="Image 1"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* PHUKET */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/PHUKET (1).png"
            alt="Image 1"
            className="w-full  h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* PHIPHI */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/PHIPHI.png"
            alt="Image 2"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* PATTAYA */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/PATTAYA.png"
            alt="Image 1"
            className="w-full  h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* NIGHT MARKET */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="imageforslide/NIGHT MARKET.png"
            alt="Image 3"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* LOE*/}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/LOEI.png"
            alt="Image 4"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* KRABI */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/KRABI (1).png"
            alt="Image 4"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* KRABI */}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/KARNJANABURI.png"
            alt="Image 4"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* CHIANG RAI*/}
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/CHIANG RAI.png"
            alt="Image 4"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

         {/* CHIANG MAI*/}
         <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/CHIANG MAI.png"
            alt="Image 4"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

         {/* BKK CITY*/}
         <SwiperSlide className="flex justify-center items-center">
          <img
            src="/imageforslide/BKK CITY.png"
            alt="Image 4"
            className="w-full h-68 object-cover rounded-lg"
          />
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Imageslider;
