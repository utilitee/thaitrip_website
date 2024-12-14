import React from "react";
import Navbar from "../components/Navbar/Navbar"; 

const Thaitrippage = () => {
  return (
    <div>
      <Navbar />

      
      <iframe
        src="https://thaitripsau.utilitee.me/auth"
        id="thaitrip"
        title="ThaiTrip"
        width="100%"
        height="600"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Thaitrippage;

//--------------- ไม่ได้ใช้แล้ว -------------------//