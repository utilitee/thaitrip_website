import React, { useState } from "react";

const ChatButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { label: "Chat with AI", link: "https://thaitripsau.utilitee.me/" },
  ];

  const handleThaitripClick = () => {
    // เมื่อคลิกปุ่ม จะนำไปที่ลิงค์ที่กำหนด
    window.location.href = navLinks[0].link;
  };

  return (
    <button
      onClick={handleThaitripClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="btn text-xl flex items-center space-x-1 shadow-red-800  border-red-700 "
      style={{
        // backgroundImage: isHovered
        //   ? "url('/images/Logo/HoverBackground.png')" // ภาพพื้นหลังเมื่อ hover
        //   : "url('/images/Logo/Background.png')", // ภาพพื้นหลังปกติ
        backgroundColor: isHovered ? "#F8FAFC" : "#F8FAFC",
        backgroundSize: "cover", // ปรับขนาดภาพพื้นหลังให้เต็มปุ่ม
        backgroundPosition: "center", // จัดตำแหน่งภาพพื้นหลังให้อยู่ตรงกลาง
      }}
    >
      <span className=" text-sm sm:text-base  text-gray-800 hover:text-red-700 transition-colors duration-300">
        Chat With AI
      </span>
      <img
        src={isHovered ? "/images/Logo/HoverLogo.png" : "/images/Logo/Logo.png"}
        alt="Thaitrip Logo"
        className="h-10 w-10 transition-transform duration-300 hover:scale-110  "
      />
      
    </button>
  );
};

export default ChatButton;
