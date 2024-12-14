// import React from 'react';

// import Guidepage from './pages/Guidepage.jsx';
// import ThaiTripPage from './pages/Thaitrippage.jsx';
// export default function App() {
//   return <Guidepage />;
// }

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Guidepage from "./pages/Guidepage.jsx";
import ThaiTripPage from "./pages/Thaitrippage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<Guidepage />} />

        {/* หน้า ThaiTrip */}
        <Route path="/thaitrip" element={<ThaiTripPage />} />

        {/* เพิ่มเส้นทางสำหรับ Guidepage */}
        <Route path="/guide" element={<Guidepage />} />
      </Routes>
    </Router>
  );
}
