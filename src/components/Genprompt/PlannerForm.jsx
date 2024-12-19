import React, { useState, useEffect } from "react";
import Select from "react-select"; // ไลบรารีไว้สร้าง Dropdown Select Box
import DatePicker from "react-datepicker"; // ไลบรารีไว้เลือกวันที่ แบบปฏิทิน
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; //  ไลบรารีเซ็ทฟอร์แมตวันที่

// Keeping existing constants (provinces, startLocations, travelMethods, customStyles)...
// ตัวแปล provinces - เป็น array ที่เก็บข้อมูลจังหวัดต่าง ๆ
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

// ประกาศฟังชั่น startLocations ให้เลือกจังหวัดได้แบบเดวกับ provinces ชุดข้อมูลเดียวกัน
const startLocations = provinces;

// สร้างตัวแปล ให้เลือกวิธีเดินทาง
const travelMethods = [
  { value: "bus", label: "รถโดยสาร" },
  { value: "plane", label: "เครื่องบิน" },
  { value: "car", label: "รถส่วนตัว" },
];

// ฟังก์ชันการแสดงผล comma

const formatNumber = (value) => {
  let number = value.replace(/[^0-9]/g, "");
  if (number) {
    number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return number;
};

// ประกาศฟังชั่น customStyles เพื่อกำหนด style ให้ react-select (ใช้กับพวก dropdown ) เป็น css แบบ inline
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
    paddingLeft: '5px', 
    color: "#9CA3AF",
    fontSize: "0.875rem",
  }),
};

// ประกาศฟังชั่น PlannerForm โดชใช้ useState เพื่อเก็บข้อมูลต่าง ๆ จากฟอร์ม แต่ละ State
const PlannerForm = () => {
  const [selectedProvince, setSelectedProvince] = useState(null); // เก็บข้อมูลจังหวัด
  const [travelDates, setTravelDates] = useState({ start: null, end: null }); // เก็บข้อมูลวันที่เริ่ม และ สิ้นสุด ในรูปแบบอ็อบเจ็กต์
  const [travelMethod, setTravelMethod] = useState(null); // เก็บข้อมูลวิธีการเดินทาง
  const [budget, setBudget] = useState(""); // เก็บข้อมูลงบประมาณ
  const [specialRequest, setSpecialRequest] = useState(""); // เก็บข้อมูลรีเควสพิเศษ
  const [copiedText, setCopiedText] = useState(""); // เก็บข้อความที่คัดลอก
  const [startLocation, setStartLocation] = useState(null); // เก็บข้อมูลสถานที่เริ่มต้น
  const [isFormValid, setIsFormValid] = useState(false); // ใช้เก็บสถานะการตรวจสอบความถูกต้องของฟอร์ม โดยเริ่มต้นเป็น false (ฟอร์มไม่สมบูรณ์)
  const [filledFieldsCount, setFilledFieldsCount] = useState(0); // ใช้เก็บจำนวนฟิลด์ในฟอร์มที่กรอก
  // ฟังก์ชัน setIsFormValid และ setFilledFieldsCount ใช้ในการตรวจสอบว่า ฟอร์มนี้สามารถส่งได้ไหม โดยจะทำการเช็คค่าของช่องทั้งหมดในฟอร์ม

  // Check if at least 3 fields are filled
  // useEffect ใช้ตรวจสอบทุกครั้งที่ state เปลี่ยน
  useEffect(() => {
    const countFilledFields = () => {
      let count = 0;

       // ตรวจสอบว่า selectedProvince และ startLocation ถูกกรอกหรือไม่
    const isProvinceValid = selectedProvince?.length > 0; // ต้องเลือกจังหวัดอย่างน้อย 1
    const isStartLocationValid = !!startLocation; // ต้องกรอกจุดเริ่มต้น

      // // Count filled fields
      // if (selectedProvince?.length > 0) count++;
      // if (startLocation) count++;
      // if (travelDates.start) count++;
      // if (travelDates.end) count++;
      // if (travelMethod) count++;
      // if (budget.trim()) count++;
      // if (specialRequest.trim()) count++;

      // setFilledFieldsCount(count);
      // setIsFormValid(count >= 3);

      // Count filled fields
    if (isProvinceValid) count++;
    if (isStartLocationValid) count++;
    if (travelDates.start) count++;
    if (travelDates.end) count++;
    if (travelMethod) count++;
    if (budget.trim()) count++;
    if (specialRequest.trim()) count++;

    setFilledFieldsCount(count);
     // ต้องกรอก selectedProvince และ startLocation และกรอกข้อมูลช่องอื่นรวมกันให้ครบ 3 ช่องขึ้นไป
     setIsFormValid(isProvinceValid && isStartLocationValid && count >= 3);
    
    };

    // countFilledFields นับจำนวนช่องที่ถูกกรอก ถ้ากรอกครบ 3 ช่องขึ้นไป จะทำให้ isFormValid เป็น true
    countFilledFields();
  }, [
    selectedProvince,
    startLocation,
    travelDates,
    travelMethod,
    budget,
    specialRequest,
  ]);


  // ตรวจสอบ isFormValid - ถ้ายังกรอกไม่ครบ 3 ช่องจะไม่ทำอะไร
  const handleSubmit = () => {

    // ตรวจสอบว่าผู้ใช้กรอก selectedProvince หรือยัง
    if (!selectedProvince || selectedProvince.length === 0) {
      alert("กรุณาเลือกจังหวัดปลายทาง");
      return;
    }
  
    // ตรวจสอบว่าผู้ใช้กรอก startLocation หรือยัง
    if (!startLocation) {
      alert("กรุณาเลือกจังหวัดเริ่มต้น");
      return;
    }
  
    // ตรวจสอบว่าฟอร์มครบตามเงื่อนไข (ช่องที่กรอกครบ 3 ช่องขึ้นไป)
    if (!isFormValid) {
      alert("กรุณากรอกข้อมูลให้ครบ 3 ช่องขึ้นไป");
      return;
    }

    //สร้าง prompt - โดยรวบรวมข้อมูลจาก state มาเรียบเรียง
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

    // คัดลอกข้อความไปยังคลิปบอร์ด - ใช้ navigator.clipboard.writeText
    // เปิดหน้าต่างใหม่ เป็นป้อบอัพ - ไปยัง URL โดยส่ง prompt เป็น query parameter
    try {
      navigator.clipboard
        .writeText(prompt)
        .then(() => {
          setCopiedText(prompt);
          const url = `https://thaitripsau.utilitee.me?q=${prompt}`;
          const newWindow = window.open(url, "_blank", "width=1480,height=980");

          if (!newWindow) {
            alert("กรุณาอนุญาตให้เปิดป๊อปอัพ");
            return;
          }

          newWindow.addEventListener("load", () => {
            try {
              const inputField = newWindow.document.querySelector(
                'input[name="prompt"], #prompt-input, textarea[name="prompt"]'
              );
              const sendButton = newWindow.document.querySelector(
                'button[type="submit"], #send-button'
              );

              if (inputField) {
                inputField.value = prompt;
                inputField.dispatchEvent(new Event("input", { bubbles: true }));
              }

              if (sendButton) {
                sendButton.click();
              }
            } catch (err) {
              console.error("เกิดข้อผิดพลาดในการกรอกข้อมูล:", err);
            }
          });
        })
        .catch((err) => {
          console.error("ไม่สามารถคัดลอกข้อความได้:", err);
          alert("ไม่สามารถคัดลอกข้อความได้ กรุณาลองอีกครั้ง");
        });
    } catch (err) {
      console.error("เกิดข้อผิดพลาด:", err);
      alert("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 
    bg-[url('/images/Thailavd2.jpg')] bg-cover bg-center md:bg-fixed"
    >
      <div className="w-full max-w-4xl bg-white/70 shadow-lg rounded-xl p-6 space-y-6">
        <h2 className="text-l sm:text-xl font-bold text-gray-700 text-center mb-4 md:mb-6">
          วางแผนทริปท่องเที่ยว
        </h2>

        {/* Grid กลุ่มสถานที่เริ่มต้นและจังหวัด */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8">
          {/* กลุ่มสถานที่เริ่มต้นและจังหวัด */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2">
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

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                จังหวัดที่ต้องการท่องเที่ยว
              </label>
              <Select
                options={provinces}
                onChange={setSelectedProvince}
                isSearchable
                isMulti
                placeholder="เลือกจังหวัด..."
                styles={customStyles}
              />
            </div>
          </div>

          {/* กลุ่มวันที่ */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="block text-xs sm:text-sm  font-medium text-gray-600 mb-2">
                วันที่ออกเดินทาง
              </label>
              <DatePicker
                selected={travelDates.start}
                onChange={(date) =>
                  setTravelDates({ ...travelDates, start: date })
                }
                placeholderText="วันไป"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gray-200"
                dateFormat="d MMMM yyyy"
                minDate={new Date()} // ห้ามเลือกวันย้อนหลัง
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-xs sm:text-sm  font-medium text-gray-600 mb-2">
                วันที่เดินทางกลับ
              </label>
              <DatePicker
                selected={travelDates.end}
                onChange={(date) =>
                  setTravelDates({ ...travelDates, end: date })
                }
                placeholderText="วันกลับ"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gray-200"
                dateFormat="d MMMM yyyy"
                minDate={travelDates.start || new Date()} // ห้ามเลือกก่อนวันไป
              />
            </div>
          </div>
        </div>

        {/* Grid วิธีเดินทางและงบประมาณ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8">
          <div>
            <label className="block text-xs sm:text-sm  font-medium text-gray-600 mb-2">
              วิธีเดินทาง
            </label>
            <Select
              options={travelMethods}
              onChange={setTravelMethod}
              placeholder="วิธีเดินทาง..."
              styles={customStyles}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm  font-medium text-gray-600 mb-2">
              งบประมาณ (บาท)
            </label>
            <input
              type="text"
              value={budget}
              onChange={(e) => {
                const formattedValue = formatNumber(e.target.value);
                setBudget(formattedValue);
              }}
              placeholder="ระบุงบประมาณ"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gray-200 bg-white"
            />
          </div>
        </div>

        {/* Grid รีเควสพิเศษ */}
        <div className="px-4 md:px-8">
          <label className="block text-xs sm:text-sm  font-medium text-gray-600 mb-2">
            สถานที่/กิจกรรมพิเศษที่สนใจ
          </label>
          <textarea
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder="เพิ่มรายละเอียดพิเศษ (ถ้ามี)"
            className="w-full p-2 border border-gray-300 rounded-md text-sm h-[70px] md:h-[50px] resize-none focus:ring-2 focus:ring-gray-200 "
          />
          <div className="text-xs text-gray-500 mt-1 text-right">
            {specialRequest.length}/200 ตัวอักษร
          </div>
        </div>

        {/* ปุ่มสร้างแผน */}
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={handleSubmit}
            
            className={`w-full text-sm sm:text-base md:w-auto px-6 py-3 rounded-lg transition-all duration-300 ${
              !isFormValid
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-600 hover:bg-gray-700 text-white hover:shadow-lg"
            }`}
          >
            สร้างแผนการเดินทาง
          </button>
          <div className="text-sm text-gray-500 mt-2">
            กรุณากรอกข้อมูลอย่างน้อย 3 ช่อง ({filledFieldsCount}/3)
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerForm;

//----------  อันนี้ From แบบเก่าอะ-----------------//

// <div className="bg-gray-50 max-h-screen flex items-center justify-center p-2">
//   <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-4">
//     <h2 className="text-2xl font-bold text-gray-500 mb-4 text-center">
//       วางแผนทริปท่องเที่ยว
//     </h2>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//       <div className="mb-2">
//         <label className="block text-sm font-medium text-gray-400 mb-2">
//           สถานที่เริ่มต้น
//         </label>
//         <Select
//           options={startLocations}
//           onChange={setStartLocation}
//           isSearchable
//           placeholder="เลือกสถานที่เริ่มต้น..."
//           styles={customStyles}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-400 mb-2">
//           จังหวัดที่ต้องการท่องเที่ยว(เลือกได้มากกว่า 1)
//         </label>
//         <Select
//           options={provinces}
//           onChange={setSelectedProvince}
//           isSearchable
//           isMulti
//           placeholder="เลือกจังหวัด..."
//           styles={customStyles}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-400 mb-2">
//           วันที่ออกเดินทาง
//         </label>
//         <DatePicker
//           selected={travelDates.start}
//           onChange={(date) => setTravelDates({ ...travelDates, start: date })}
//           placeholderText="วันไป"
//           className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-gray-200"
//           dateFormat="d MMMM yyyy"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-400 mb-2">
//           วันที่เดินทางกลับ
//         </label>
//         <DatePicker
//           selected={travelDates.end}
//           onChange={(date) => setTravelDates({ ...travelDates, end: date })}
//           placeholderText="วันกลับ"
//           className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-gray-200"
//           dateFormat="d MMMM yyyy"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-400 mb-2">
//           วิธีเดินทาง
//         </label>
//         <Select
//           options={travelMethods}
//           onChange={setTravelMethod}
//           placeholder="วิธีเดินทาง..."
//           styles={customStyles}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-400 mb-2">
//           งบประมาณ (บาท)
//         </label>
//         <input
//           type="number"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//           placeholder="ระบุงบประมาณ"
//           className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-gray-200"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-400 mb-2 ">
//           สถานที่/กิจกรรมพิเศษที่สนใจ
//         </label>
//         <textarea
//           value={specialRequest}
//           onChange={(e) => setSpecialRequest(e.target.value)}
//           placeholder="ระบุสถานที่หรือกิจกรรมพิเศษ"
//           className="w-full p-2 border border-gray-300 rounded text-sm min-h-[50px] focus:ring-2 focus:ring-gray-200"
//         />
//       </div>

//       <div className="flex flex-col items-center justify-center max-h-full mb-6">
//         <button
//           onClick={handleSubmit}
//           disabled={!isFormValid}
//           className={`btn ${
//             !isFormValid
//             ? 'bg-gray-300 cursor-not-allowed'
//             : 'bg-gray-500 hover:bg-gray-600'
//           } text-gray-50 transition-colors duration-200`}
//         >
//           Create Plan
//         </button>
//         <div className="text-xs text-gray-400 mt-2 justify-end">
//           กรอกข้อมูลอย่างน้อย 3 ช่อง ({filledFieldsCount}/3)
//         </div>
//       </div>
//     </div>

//     {copiedText && (
//       <div className="bg-gray-100 p-4 rounded mt-4">
//         <label className="block text-sm font-medium text-gray-400 mb-2">
//           ข้อความที่คัดลอก
//         </label>
//         <div className="bg-white p-3 border border-gray-300 rounded text-sm">
//           {copiedText}
//         </div>
//       </div>
//     )}
//   </div>
// </div>
