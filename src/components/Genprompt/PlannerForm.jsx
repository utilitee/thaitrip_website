import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

// รายการจังหวัดสำหรับเลือก
const provinces = [
  { value: "bangkok", label: "กรุงเทพมหานคร" },
  { value: "krabi", label: "กระบี่" },
  { value: "kanchanaburi", label: "กาญจนบุรี" },
  { value: "kalasin", label: "กาฬสินธุ์" },
  { value: "kamphaengphet", label: "กำแพงเพชร" },
  { value: "khonkaen", label: "ขอนแก่น" },
  { value: "nakhon-ratchasima", label: "นครราชสีมา" },
  { value: "chachoengsao", label: "ฉะเชิงเทรา" },
  { value: "chanthaburi", label: "จันทบุรี" },
  { value: "chainat", label: "ชัยนาท" },
  { value: "chaiyaphum", label: "ชัยภูมิ" },
  { value: "chiang-mai", label: "เชียงใหม่" },
  { value: "chiang-rai", label: "เชียงราย" },
  { value: "chonburi", label: "ชลบุรี" },
  { value: "chumphorn", label: "ชุมพร" },
  { value: "sa-kaeo", label: "สระแก้ว" },
  { value: "nakhon-nayok", label: "นครนายก" },
  { value: "nakhon-phanom", label: "นครพนม" },
  { value: "phetchabun", label: "เพชรบูรณ์" },
  { value: "phetchaburi", label: "เพชรบุรี" },
  { value: "tak", label: "ตาก" },
  { value: "nakhon-phatom", label: "นครปฐม" },
  { value: "tak", label: "ตาก" },
  { value: "trang", label: "ตรัง" },
  { value: "trat", label: "ตราด" },
  { value: "ayutthaya", label: "พระนครศรีอยุธยา" },
  { value: "nan", label: "น่าน" },
  { value: "narathiwat", label: "นราธิวาส" },
  { value: "nong-bua-lamphu", label: "หนองบัวลำภู" },
  { value: "nong-khai", label: "หนองคาย" },
  { value: "nonthaburi", label: "นนทบุรี" },
  { value: "nakhon-sawan", label: "นครสวรรค์" },
  { value: "bueng-kan", label: "บึงกาฬ" },
  { value: "buriram", label: "บุรีรัมย์" },
  { value: "pathumthani", label: "ปทุมธานี" },
  { value: "prachuap-khiri-khan", label: "ประจวบคีรีขันธ์" },
  { value: "prachinburi", label: "ปราจีนบุรี" },
  { value: "phetchabun", label: "เพชรบูรณ์" },
  { value: "phichit", label: "พิจิตร" },
  { value: "phitsanulok", label: "พิษณุโลก" },
  { value: "phayao", label: "พะเยา" },
  { value: "phrae", label: "แพร่" },
  { value: "phuket", label: "ภูเก็ต" },
  { value: "phangnga", label: "พังงา" },
  { value: "phattalung", label: "พัทลุง" },
  { value: "mae-hongsorn", label: "แม่ฮ่องสอน" },
  { value: "mahasarakham", label: "มหาสารคาม" },
  { value: "mukdahan", label: "มุกดาหาร" },
  { value: "yasothon", label: "ยโสธร" },
  { value: "yala", label: "ยะลา" },
  { value: "ranong", label: "ระนอง" },
  { value: "ratchaburi", label: "ราชบุรี" },
  { value: "rayong", label: "ระยอง" },
  { value: "roi-et", label: "ร้อยเอ็ด" },
  { value: "lampang", label: "ลำปาง" },
  { value: "lamphun", label: "ลำพูน" },
  { value: "loei", label: "เลย" },
  { value: "lopburi", label: "ลพบุรี" },
  { value: "sakhon-nakhon", label: "สกลนคร" },
  { value: "satun", label: "สตูล" },
  { value: "si-sa-ket", label: "ศรีสะเกษ" },
  { value: "sing-buri", label: "สิงห์บุรี" },
  { value: "sukhothai", label: "สุโขทัย" },
  { value: "samutsongkhram", label: "สมุทรสงคราม" },
  { value: "samutsakhon", label: "สมุทรสาคร" },
  { value: "samutprakarn", label: "สมุทรปราการ" },
  { value: "saraburi", label: "สระบุรี" },
  { value: "songkhla", label: "สงขลา" },
  { value: "suphan-buri", label: "สุพรรณบุรี" },
  { value: "surin", label: "สุรินทร์" },
  { value: "nong-khai", label: "หนองคาย" },
  { value: "nong-bua-lamphu", label: "หนองบัวลำภู" },
  { value: "ang-thong", label: "อ่างทอง" },
  { value: "amnatcharoen", label: "อำนาจเจริญ" },
  { value: "udonthani", label: "อุดรธานี" },
  { value: "uthaithani", label: "อุทัยธานี" },
  { value: "ubonratchathani", label: "อุบลราชธานี" },
];

const startLocations = provinces;

// รายการวิธีการเดินทาง
const travelMethods = [
  { value: "bus", label: "รถโดยสาร" },
  { value: "plane", label: "เครื่องบิน" },
  { value: "car", label: "รถส่วนตัว" },
];

// กำหนดสไตล์ custom สำหรับ Select
const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "white",
    borderColor: state.isFocused ? "#6B7280" : "#D1D5DB",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#6B7280",
    },
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#6B7280" : isFocused ? "#F3F4F6" : "white",
    color: isSelected ? "white" : "#374151",
    "&:hover": {
      backgroundColor: "#F3F4F6",
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "white",
    border: "1px solid #D1D5DB",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#374151",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9CA3AF",
  }),
};

const PlannerForm = () => {
  // State สำหรับเก็บข้อมูลฟอร์ม
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [travelDates, setTravelDates] = useState({ start: null, end: null });
  const [travelMethod, setTravelMethod] = useState(null);
  const [budget, setBudget] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [startLocation, setStartLocation] = useState(null);

  // ฟังก์ชันจัดการการส่งข้อมูล
  const handleSubmit = () => {
    const selectedProvinceNames =
      selectedProvince?.map((location) => location.label).join(" และ ") ||
      "ไม่ระบุ";
    const prompt = `ฉันต้องการวางแผนท่องเที่ยวไปยังจังหวัด ${
      selectedProvinceNames || "ไม่ระบุ"
    } ออกเดินทางจากจังหวัด ${startLocation?.label} วันที่ ${
      travelDates.start ? format(travelDates.start, "d MMMM yyyy") : "ไม่ระบุ"
    } ถึง ${
      travelDates.end ? format(travelDates.end, "d MMMM yyyy") : "ไม่ระบุ"
    } วิธีการเดินทาง: ${travelMethod?.label || "ไม่ระบุ"} งบประมาณ: ${
      budget || "ไม่ระบุ"
    } สิ่งที่อยากทำ/ที่อยากไป: ${specialRequest || "ไม่มี"}`;
  
    try {
      // คัดลอกข้อความ
      navigator.clipboard.writeText(prompt).then(() => {
        setCopiedText(prompt);
  
        // เข้ารหัส prompt ก่อนส่งไปยัง URL
        const url = `https://thaitripsau.utilitee.me?q=${prompt}`
  
        // เปิดหน้าต่างใหม่
        const newWindow = window.open(
          url, 
          "_blank", 
          "width=1480,height=980"
        );
  
        if (!newWindow) {
          alert("กรุณาอนุญาตให้เปิดป๊อปอัพ");
          return;
        }
  
        // รอให้หน้าเว็บโหลด
        newWindow.addEventListener('load', () => {
          try {
            // ค้นหา input และปุ่มส่ง (ปรับ selector ตามเว็บไซต์)
            const inputField = newWindow.document.querySelector('input[name="prompt"], #prompt-input, textarea[name="prompt"]');
            const sendButton = newWindow.document.querySelector('button[type="submit"], #send-button');
            
            if (inputField) {
              inputField.value = prompt;
              inputField.dispatchEvent(new Event('input', { bubbles: true }));
            }
            
            if (sendButton) {
              sendButton.click();
            }
          } catch (err) {
            console.error('เกิดข้อผิดพลาดในการกรอกข้อมูล:', err);
          }
        });
  
      }).catch((err) => {
        console.error('ไม่สามารถคัดลอกข้อความได้:', err);
        alert('ไม่สามารถคัดลอกข้อความได้ กรุณาลองอีกครั้ง');
      });
    } catch (err) {
      console.error('เกิดข้อผิดพลาด:', err);
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่');
    }
  
  };

  return (
    <div className="bg-gray-50 max-h-screen flex items-center justify-center p-2">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold text-gray-500 mb-4 text-center">
          วางแผนทริปท่องเที่ยว
        </h2>

        {/* ฟอร์มกรอกข้อมูล */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              สถานที่เริ่มต้น
            </label>
            <Select
              options={startLocations}
              onChange={setStartLocation}
              isSearchable
              placeholder="เลือกสถานที่เริ่มต้น..."
              styles={customStyles}
            />
          </div>

          {/* เลือกจังหวัด */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              จังหวัดที่ต้องการท่องเที่ยว(เลือกได้มากกว่า 1)
            </label>
            <Select
              options={provinces}
              onChange={setSelectedProvince}
              isSearchable
              isMulti // เพิ่มการเลือกหลายตัวเลือก
              placeholder="เลือกจังหวัด..."
              styles={customStyles}
            />
          </div>

          {/* วันเริ่มทริป */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              วันที่ออกเดินทาง
            </label>
            <DatePicker
              selected={travelDates.start}
              onChange={(date) =>
                setTravelDates({ ...travelDates, start: date })
              }
              placeholderText="วันไป"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-gray-200"
              dateFormat="d MMMM yyyy"
            />
          </div>

          {/* วันสิ้นสุดทริป */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              วันที่เดินทางกลับ
            </label>
            <DatePicker
              selected={travelDates.end}
              onChange={(date) => setTravelDates({ ...travelDates, end: date })}
              placeholderText="วันกลับ"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-gray-200"
              dateFormat="d MMMM yyyy"
              
            />
          </div>

          {/* เลือกวิธีการเดินทาง */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              วิธีเดินทาง
            </label>
            <Select
              options={travelMethods}
              onChange={setTravelMethod}
              placeholder="วิธีเดินทาง..."
              styles={customStyles}
              // styles={{
              //   control: (base) => ({
              //     ...base,
              //     borderColor: "#D1D5DB",
              //     "&:hover": { borderColor: "#6B7280" },
              //   }),
              // }}
            />
          </div>

          {/* งบประมาณ */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              งบประมาณ (บาท)
            </label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="ระบุงบประมาณ"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-gray-200"
              
            />
          </div>

          {/* กิจกรรมพิเศษ */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-400 mb-2">
              สถานที่/กิจกรรมพิเศษที่สนใจ
            </label>
            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              placeholder="ระบุสถานที่หรือกิจกรรมพิเศษ"
              className="w-full p-2 border border-gray-300 rounded text-sm min-h-[50px] focus:ring-2 focus:ring-gray-200"
            ></textarea>
          </div>

          {/* ปุ่ม คัดลอก ส่ง */}
          <div className="flex items-end justify-center max-h-fulll mb-6 bg- ">
            <button
              onClick={handleSubmit}
              className="btn bg-gray-500 text-gray-50 "
            >
              Create Plan
            </button>
          </div>
        </div>

        {/* ส่วนแสดงข้อความที่คัดลอก */}
        {copiedText && (
          <div className="bg-gray-100 p-4 rounded mt-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              ข้อความที่คัดลอก
            </label>
            <div className="bg-white p-3 border border-gray-300 rounded text-sm">
              {copiedText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlannerForm;
