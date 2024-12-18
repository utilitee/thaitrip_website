// นำเข้าไลบรารี React และ Icon ที่จำเป็น
import React from "react";

// นำเข้า Navbar compo section
import Navbar from "../components/Navbar/Navbar";
import PlannerForm from "../components/Genprompt/PlannerForm";
import ScrollToTopButton from "../components/Button/ScrollToTopButton";
import ChatButton from "../components/Button/Chatpage";
import Imageslider from "../components/Imageslider/Imageslider";

// นำเข้ารูปภาพ AW ต่าง ๆ
import artworkIntro from "../assets/images/artwork/Aatwork Intro.png";
import hey from "../assets/images/artwork/hey.png";
import AWtest from "../assets/images/artwork/AWtest (3).png";

// นำเข้า Icon
import {
  BookmarkIcon, // ไอคอนสำหรับบุ๊คมาร์ก
  MapPinIcon, // ไอคอนตำแหน่งแผนที่
  CalendarIcon, // ไอคอนปฏิทิน
  SparklesIcon, // ไอคอนประกายแสง
  CheckCircleIcon, // ไอคอนวงกลมถูกต้อง
  DatabaseIcon, // ไอคอนฐานข้อมูล
  SailboatIcon,
  TentTreeIcon,
  NotebookPen,
  BookMarked,
  Lightbulb,
  MapPinned,
  MailCheck,
  CalendarCog,
  PencilRuler,
  ListChecks,
  CalendarCheck,
  Backpack,
} from "lucide-react";

// สร้าง Component หลักสำหรับหน้า Guide Page
// ส่วนนี้เป็น ่่javaScript

const Guidepage = () => {
  // กำหนดขั้นตอนการใช้งานเว็บไซต์เป็นอาร์เรย์
  // แต่ละ Object แทนขั้นตอนหนึ่งขั้นตอน ประกอบด้วย ไอคอน, หัวข้อ, คำอธิบาย และรายละเอียดเพิ่มเติม

  // สร้างเป็น componants ไว้ เรียกใช้งานใน section
  // steps คือ ตัวแปร ของ section วิธีการใช้งาน
  const steps = [
    {
      icon: <MapPinIcon />, // ไอคอนสำหรับขั้นตอนเลือกจุดหมาย
      title: "เลือกจุดหมายปลายทาง", // หัวข้อขั้นตอน
      description: "เลือกจังหวัดหรือเมืองที่คุณสนใจ", // คำอธิบายขั้นตอน
      details: [
        // รายละเอียดเพิ่มเติมของขั้นตอน
        "กรองตามประเภทการท่องเที่ยว เช่น ทะเล ภูเขา ธรรมชาติ หรือผจญภัย",
      ],
    },
    ///////////////////////////
    {
      icon: <CalendarCog />,
      title: "ระบุข้อมูลการเดินทาง",
      description: "แจ้งเงื่อนไขทริปของคุณ",
      details: [
        "ใส่วันที่ ที่คุณจะเดินทาง",
        "ระบุจำนวนวัน",
        "บอกงบประมาณคร่าว ๆ",
        "แจ้งประเภททริป เช่น ทะเล ภูเขา เมืองเก่า หรือชิลล์ ๆ",
      ],
    },
    ///////////////////////////
    {
      icon: <PencilRuler />,
      title: "ปรับแต่งแผนการเดินทาง",
      description: "แก้ไขหรือปรับเปลี่ยนแพลน",
      details: [
        "AI จะจัดแผนการเดินทางมาให้ในทันที พร้อมสถานที่ท่องเที่ยว ร้านอาหาร และกิจกรรมที่แนะนำ",
        "สามารถแจ้งให้ปรับเปลี่ยนแผน เช่น เพิ่ม/ลดสถานที่ที่ชอบ",
      ],
    },
    ///////////////////////////

    {
      icon: <ListChecks />,
      title: "เช็คข้อมูลเพิ่มเติม",
      description: "เช็คข้อมูลประกอบการตัดสินใจ",
      details: [
        "AI จะช่วยตรวจสอบ สภาพอากาศ ในพื้นที่ที่คุณจะเดินทาง",
        "ตรวจสอบระยะทางและเวลาการเดินทาง พร้อมลิงก์ Google Map",
      ],
    },
    //////////////////////////
    {
      icon: <CalendarCheck />,
      title: "ยืนยันและรับแผนการเดินทาง",
      description: "แจ้งสรุปแพลนและ Email ที่ต้องการให้จัดส่ง",
      details: [
        "ระบบจะส่งแพลนการเดินทางไปยัง E-Mail ของคุณ พร้อมรายละเอียดและลิงก์แผนที่",
      ],
    },

    //////////////////////////
    {
      icon: <Backpack />,
      title: "เตรียมตัวลุย!",
      description: "แค่ทำตามแผนที่วางไว้ก็พร้อมสำหรับทริปสุดพิเศษ",
      details: ["สามารถขอคำแนะนำเพิ่มเติมได้ทุกเมื่อ"],
    },
  ];

  // กำหนดคุณสมบัติของเว็บไซต์เป็นอาร์เรย์
  // สร้างเป็น componants ไว้ เรียกใช้งานใน section
  // features คือ ตัวแปร ของ section เกี่ยวกับ
  const features = [
    {
      icon: <DatabaseIcon />, // ไอคอนฐานข้อมูล
      title: "ฐานข้อมูลครอบคลุมทั่วไทย", // หัวข้อ
      description:
        "มีข้อมูลสถานที่ท่องเที่ยวมากกว่า 1,000 แห่ง ครอบคลุมทุกภาคของประเทศไทย", // คำอธิบาย
    },
    ///////////////////////////

    {
      icon: <NotebookPen />, // ไอคอน
      title: "วางแผนทริปท่องเที่ยว", // หัวข้อ
      description:
        "แนะนำสถานที่ท่องเที่ยว จัดเส้นทางการเดินทาง วางแผนตารางเวลา คำนวณค่าใช้จ่ายโดยประมาณ", // คำอธิบาย
    },
    ///////////////////////////
    {
      icon: <BookMarked />, // ไอคอนฐานข้อมูล
      title: "ให้ข้อมูลการวางแผนท่องเที่ยว", // หัวข้อคุณสมบัติ
      description:
        "สภาพอากาศตามฤดูกาล   เทศกาลและงานประเพณีต่าง ๆ  อาหารท้องถิ่น   ที่พัก  การเดินทาง   รวมถึงข้อควรระวังด้านความปลอดภัย",
    },

    ///////////////////////////
    {
      icon: <Lightbulb />,
      title: "แนะนำการท่องเที่ยว",
      description:
        "แนะนำทริคต่าง ๆ ที่ควรรู้ เช่น การแต่งกายที่เหมาะสมมารยาทและวัฒนธรรมไทย หรือเคล็ดลับการท่องเที่ยวอื่น ๆ ",
    },

    {
      icon: <MapPinned />,
      title: "ให้ลิงก์ Google Maps",
      description: "เพื่อให้เส้นทางการเดินทางดีที่สุดสำหรับสถานที่ท่องเที่ยว ",
    },

    {
      icon: <MailCheck />,
      title: "สรุปและส่งแพลนการท่องเที่ยว",
      description: "ส่งสรุปแพลนให้คุณทาง E-Mail พร้อม Google Maps ",
    },
  ];

  // สิ้นสุดในส่วนสร้าง Component สามารถเพิ่มได้ด้านบน//

  // ส่วนการ Return Component หลัก //
  // จัดเรียงหน้าเว็บ UI ด้วย Recat //

  return (
    <>
      {/*เรียกใช้ navbar */}

      {/* พื้นที่ของ page ทั้งหมด หรือคอนเทนเนอร์หลัก ใช้พื้นหลังสีเทา และตัวอักษรสีเทาเข้ม */}
      <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
        {/* ส่วนหัวของเว็บไซต์ จัดกึ่งกลาง มีระยะห่างด้านล่าง */}
        <header className="text-center mb-4 flex flex-col items-center">
          {/* ชื่อเว็บไซต์ ขนาดใหญ่ สีเทาเข้ม */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-gray-800">Guide</span>{" "}
            <span className="text-red-700">ThaiTrip</span>
          </h1>

          {/* คำบรรยายใต้ชื่อ สีเทาอ่อน */}
          <p className="text-xl text-gray-400">
            <span className="text-gray-400">
              แพลนทริปอัจฉริยะ ครอบคลุมทุกมุมประเทศไทย{" "}
            </span>{" "}
            <span className="text-gray-400 text-lg">
              เที่ยวง่าย ไม่สะดุด ครอบคลุมทุกที่ หมดห่วงเรื่องแพลน
            </span>
          </p>

          <div className="flex justify-center">
            <ChatButton />
          </div>
          {/* ส่วน header */}
        </header>

        {/*////////////////////////////////////////////////////////////////////// */}
        {/* ส่วนของ section ต่าง ๆ */}

        <Imageslider />

        {/* section Introduce Artwork */}
        <section className="bg-white shadow-md rounded-xl p-0 mb-6 md:mb-12">
          {/* กริดสำหรับแสดง ภาพ */}
          <div className="grid md:grid-cols-1 gap-0">
            <h1 className="text-3xl font-bold text-center mb-4 className= text-gray-600">
              Wanna explore Thailand ?
            </h1>
            {/* ภาพที่ 1 */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={AWtest}
                alt="ArtWorkIntro"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section Genprompt */}
        <section
          id="createprompt"
          className="bg-white shadow-md rounded-xl p-8 mb-12"
        >
          <PlannerForm />
        </section>

        {/* section  เกี่ยวกับ  (พื้นหลังขาว เงา มุมมน) */}
        <section id="about" className="bg-white shadow-md rounded-xl p-8 mb-12">
          {/* หัวข้อเกี่ยวกับ */}
          <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">
            เกี่ยวกับ Thaitrip
          </h2>

          {/* กำหนด Layout ด้วย Tailwind*/}
          {/* grid: คลาส Tailwind CSS md:grid-cols-2: กำหนดให้มี 2 คอลัมน์  gap-6:  gap  ในตารางเป็น 6 หน่วย*/}
          <div className="grid md:grid-cols-2 gap-6">
            {/* วนลูปการแสดงของออปเจ็คในเซคชั่น (ส่วนของแต่ละช่วงในเกี่ยวกับอะ) */}
            {/* .map(): เมธอดของ JavaScript ใช้วนลูปผ่านอาร์เรย์ และ สร้างองค์ประกอบใหม่ สำหรับแต่ละรายการในอาร์เรย์
              feature: ตัวแปลแต่ละรายการในอาร์เรย์ features
              index: ดัชนีของรายการในอาร์เรย์ (เริ่มต้นจาก 0) */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
              >
                {/* การจัดวางไอคอนในช่อง */}
                {/* แสดงไอคอนคุณสมบัติ */}

                <div className="flex justify-center mb-4">
                  {React.cloneElement(feature.icon, {
                    className: "w-12 h-12 text-gray-600 mb-4  ",
                  })}
                </div>

                {/* การจัดวางหัวข้อในช่อง */}
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center ">
                  {feature.title}
                </h3>

                {/* การจัดวางคำอธิบายเพิ่มเติมในช่อง*/}
                <p className="text-gray-700 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/*////////////////////////////////////////////////////////////////////// */}

        {/* sectionของวิธีการใช้งาน */}
        <section
          id="howtouse"
          className="bg-white shadow-md rounded-xl p-8 mb-12"
        >
          {/* หัวข้อวิธีการใช้งาน */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            วิธีการใช้งาน
          </h2>

          {/* เรียงกริดขั้นตอนการใช้งาน */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* วนลูปแสดงขั้นตอนการใช้งาน */}
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all"
              >
                {/* แสดงไอคอนขั้นตอน */}
                <div className="flex justify-center mb-4">
                  {React.cloneElement(step.icon, {
                    className: "w-16 h-16 text-gray-700",
                  })}
                </div>

                {/* หัวข้อขั้นตอน */}
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                  {step.title}
                </h3>

                {/* คำอธิบายขั้นตอน */}
                <p className="text-gray-700 text-center mb-4">
                  {step.description}
                </p>

                {/* รายละเอียดย่อยของขั้นตอน */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-gray-500">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/*////////////////////////////////////////////////////////////////////// */}

        {/* section ทริกเด็ดในการใช้งาน */}
        <section
          id="tips"
          className="bg-white p-8 overflow-hidden rounded-lg shadow-lg mb-12"
        >
          {/* หัวข้อวิธีการใช้งาน */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center ">
            ทริกเด็ดในการใช้งาน ThaiTrip
          </h2>

          {/* เรียงกริดขั้นตอนการใช้งาน */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className=" bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-lg font-medium text-gray-800 text-center">
              🔥 ขอคำแนะนำเฉพาะเจาะจง
            </h3>
            <p className="text-gray-600 text-center">
              อยากเที่ยวแบบไหนดี? บอกได้เลย เช่น
              "อยากได้ที่เที่ยวที่คนไม่พลุกพล่าน" หรือ "หากิจกรรมที่เด็ก ๆ
              จะสนุกด้วยได้"
            </p>
          </div>

          <div className=" bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-lg font-medium text-gray-800 text-center">
              🔥 อัปเดตข้อมูลตลอดเวลา
            </h3>
            <p className="text-gray-600 text-center">
              ก่อนออกเดินทางจริง ให้เช็คสภาพอากาศกับ AI อีกครั้ง เพื่อความชัวร์"
            </p>
          </div>

          <div className=" bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-lg font-medium text-gray-800 text-center">
              🔥 ตั้งงบประมาณอย่างชัดเจน
            </h3>
            <p className="text-gray-600 text-center">
              บอก AI ไปเลยว่าคุณมีงบเท่าไหร่ AI
              จะช่วยวางแผนให้เหมาะสมและคุ้มค่า"
            </p>
          </div>

          <div className=" bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all">
            <h3 className="text-lg font-medium text-gray-800 text-center">
              🔥 ขอคำแนะนำทางภาษา
            </h3>
            <p className="text-gray-600 text-center">
              ถ้าเจอคนในพื้นที่และอยากคุย แต่ไม่รู้จะพูดว่าอะไร ลองให้ AI
              ช่วยแปลหรือแนะนำคำง่าย ๆ"
            </p>
          </div>
          </div>
        </section>

        {/*////////////////////////////////////////////////////////////////////// */}

        {/* Section อื่น ๆ เพิ่มเติม เผื่อมี */}
        <ScrollToTopButton />
      </div>
    </>
  );
};

// ส่งออก Component เพื่อให้สามารถใช้งานในส่วนอื่นของแอปพลิเคชัน
export default Guidepage;
