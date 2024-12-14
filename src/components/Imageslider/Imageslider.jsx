import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

function Imageslider() {
  return (
    <section className="bg-white shadow-md rounded-l p-8 mb-8">
      <Swiper
        spaceBetween={10}  // ระยะห่าง แต่ละภาพ
        slidesPerView={1}  // จำนวนภาพ แต่ละหน้า
        loop={true}  // เลื่อนวนรอบ
        autoplay={{ delay: 3000 , disableOnInteraction: false}}  // เล่นอัตโนมัติ
        pagination={{ clickable: true }}  // แสดงปุ่ม pagination ที่คลิกได้
        navigation={true}  // ปุ่ม เลื่อนภาพซ้ายขวา
      >
        <SwiperSlide>
          <img src="/src/assets/images/artwork/hey.png" alt="Image 1" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/images/artwork/artwork3.png" alt="Image 2" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/images/artwork/artwork1.jpg" alt="Image 3" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
}

export default Imageslider;

//----------  ยังไม่ได้เรียกใช้ ยังติดอยู่ ------------ //