import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // ใช้ hook เพื่อดึงเส้นทางปัจจุบัน

  const handleThaitripClick = () => {
    window.open(
      "https://thaitripsau.utilitee.me", // ลิงก์ที่ต้องการเปิด
      "Thaitrip", // ชื่อของหน้าต่าง (สามารถใช้ได้หลายครั้งในหน้าเดียวกัน)
      "width=1480,height=980,scrollbars=yes" // ตัวเลือกของ popup (ขนาดหน้าต่างและการเปิด scrollbars)
    );
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">

       {/* ปุ่ม option สามขีด ใส่ไว้เผื่อมีอะไร ถ้าไม่ใช้ค่อยเอาออก
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div> */}


      {/* ปุ่ม Thaitrip และ single page อื่นๆ */}
      <div className="flex-1">
        <button onClick={handleThaitripClick}
          className="btn btn-ghost text-xl flex items-center space-x-2"
        >
          <img
            src="/src/assets/images/Logo/Logo.png"
            alt="Thaitrip Logo"
            className="h-10 w-10" 
          />
          <span>Thaitrip</span>
        </button>
        {/* ปุ่มGuide ทำไว้เผื่อเพิ่มหน้า*/}
        {/* <Link to="/guide" className="btn btn-ghost text-xl"> Guide </Link>  */}
        
        <a href="#createprompt" className="btn btn-ghost text-l"> Generate Prompt</a>
        <a href="#about" className="btn btn-ghost text-l">About </a>
        <a href="#howtouse" className="btn btn-ghost text-l"> How to Use</a>
        <a href="#tips" className="btn btn-ghost text-l">Chat Tips</a>
      </div>

      {/* ปุ่ม option สามจุด ใส่ไว้เผื่อมีอะไร ถ้าไม่ใช้ค่อยเอาออก */}
      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div> */}

      
    </div>
  );
}
