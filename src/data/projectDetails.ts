export interface ProjectImage {
  src: string;
  label: string;
  caption?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  index: string;
  category: string;
  year: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  result: string;
  achievement?: string;
  team?: string;
  institution?: string;
  members?: string[];
  advisor?: string;
  event?: string;
  eventDate?: string;
  location?: string;
  motivation?: string;
  howItWorks?: string;
  images?: ProjectImage[];
}

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "orgspace",
    title: "OrgSpace",
    index: "LOG 01",
    category: "WEB APPLICATION",
    year: "2026",
    status: "BUILD LOG",
    summary:
      "เว็บแอปพลิเคชันสำหรับบริหารจัดการทรัพยากรบุคคลภายในองค์กร โดยเน้นการจัดโครงสร้างข้อมูลและประสบการณ์การใช้งานให้เข้าถึงฟังก์ชันต่าง ๆ ได้อย่างเป็นระบบ",
    problem: "พื้นที่สำหรับเล่าปัญหาและบริบทของโปรเจกต์ จะเติมรายละเอียดภายหลัง",
    solution: "พื้นที่สำหรับอธิบายแนวคิดและวิธีแก้ปัญหา จะเติมรายละเอียดภายหลัง",
    role: "Frontend / UI development",
    technologies: ["Frontend", "Web App"],
    result: "พื้นที่สำหรับสรุปผลลัพธ์ของโปรเจกต์",
  },
  {
    slug: "sos",
    title: "Smart SOS Hub",
    index: "LOG 02",
    category: "EMERGENCY · AI",
    year: "2026",
    status: "BUILD LOG",
    summary:
      "เว็บแอปพลิเคชันช่วยเหลือฉุกเฉินสำหรับเชียงใหม่ รวมเบอร์ฉุกเฉิน บันทึกข้อมูลสุขภาพ และ AI Chatbot สำหรับให้ข้อมูลเบื้องต้นแก่ผู้ใช้งาน",
    problem: "พื้นที่สำหรับเล่าปัญหาและบริบทของโปรเจกต์ จะเติมรายละเอียดภายหลัง",
    solution: "พื้นที่สำหรับอธิบายแนวคิดและวิธีแก้ปัญหา จะเติมรายละเอียดภายหลัง",
    role: "Development / System integration",
    technologies: ["Web App", "AI", "Emergency System"],
    result: "พื้นที่สำหรับสรุปผลลัพธ์ของโปรเจกต์",
  },
  {
    slug: "attendance",
    title: "Smart Attendance",
    index: "LOG 03",
    category: "COMPUTER VISION",
    year: "2026",
    status: "BUILD LOG",
    summary:
      "ระบบเช็กชื่อและติดตามการเข้าเรียนด้วย Face Recognition และ OpenCV พร้อม State Machine สำหรับติดตามสถานะการเข้าเรียนของนักศึกษา",
    problem: "พื้นที่สำหรับเล่าปัญหาและบริบทของโปรเจกต์ จะเติมรายละเอียดภายหลัง",
    solution: "พื้นที่สำหรับอธิบายแนวคิดและวิธีแก้ปัญหา จะเติมรายละเอียดภายหลัง",
    role: "Computer Vision / Software development",
    technologies: ["Python", "OpenCV", "Face Recognition"],
    result: "พื้นที่สำหรับสรุปผลลัพธ์ของโปรเจกต์",
  },
  {
    slug: "docker-dashboard",
    title: "Touchless Docker Dashboard",
    index: "LOG 04",
    category: "COMPUTER VISION · SYSTEMS",
    year: "2026",
    status: "BUILD LOG",
    summary:
      "Dashboard สำหรับควบคุมและติดตาม Docker Container ด้วย Computer Vision และ Hand Gesture โดยใช้การเคลื่อนไหวของมือเป็นคำสั่งในการจัดการ Container",
    problem: "พื้นที่สำหรับเล่าปัญหาและบริบทของโปรเจกต์ จะเติมรายละเอียดภายหลัง",
    solution: "พื้นที่สำหรับอธิบายแนวคิดและวิธีแก้ปัญหา จะเติมรายละเอียดภายหลัง",
    role: "Computer Vision / Dashboard development",
    technologies: ["Computer Vision", "Docker", "Hand Gesture"],
    result: "พื้นที่สำหรับสรุปผลลัพธ์ของโปรเจกต์",
  },  {
    slug: "security-command-center",
    title: "Smart Security Command Center",
    index: "LOG 05",
    category: "SECURITY · COMPUTER VISION",
    year: "2026",
    status: "BUILD LOG",
    summary:
      "ระบบจดจำใบหน้าและบันทึกการเข้า–ออกห้องของนักศึกษา เพื่อช่วยติดตามการใช้งานห้องและจัดเก็บข้อมูลการเข้าออกอย่างเป็นระบบ",
    problem: "พื้นที่สำหรับเล่าปัญหาและบริบทของโปรเจกต์ จะเติมรายละเอียดภายหลัง",
    solution: "พื้นที่สำหรับอธิบายแนวคิดและวิธีแก้ปัญหา จะเติมรายละเอียดภายหลัง",
    role: "Computer Vision / Security system development",
    technologies: ["Face Recognition", "Security", "Computer Vision"],
    result: "พื้นที่สำหรับสรุปผลลัพธ์ของโปรเจกต์",
  },
  {
    slug: "wireless-helmet-signal-light",
    title: "Wireless Helmet Signal Light",
    index: "AWARD 01",
    category: "IOT · SAFETY INNOVATION",
    year: "2022",
    status: "AWARDED",
    summary:
      "อุปกรณ์เสริมหมวกกันน็อคนิรภัยอัจฉริยะที่รับสัญญาณไฟเลี้ยวและไฟเบรกจากรถจักรยานยนต์ผ่าน Wi-Fi แล้วแสดงผลด้วยไฟ LED บนหมวก เพื่อเพิ่มการมองเห็นและลดความเสี่ยงในการเกิดอุบัติเหตุบนท้องถนน",
    problem:
      "คณะผู้จัดทำเล็งเห็นปัญหาอุบัติเหตุบนท้องถนน และพบว่าสัญญาณไฟเลี้ยวหรือไฟเบรกของรถจักรยานยนต์บางรุ่นอาจมองเห็นได้ไม่ชัด โดยเฉพาะเมื่ออยู่ในระยะประชิดหรือมุมที่มองเห็นสัญญาณจากตัวรถได้ยาก จึงเกิดแนวคิดในการย้ายสัญญาณสำคัญมาแสดงบนหมวกกันน็อกให้เห็นได้ชัดขึ้น",
    solution:
      "พัฒนาระบบ Wireless Helmet Signal Light โดยมีตัวส่งสัญญาณติดตั้งอยู่บนรถจักรยานยนต์ และตัวรับสัญญาณเป็นชุดไฟ LED ที่ติดตั้งบริเวณหมวกกันน็อก ทั้งสองส่วนเชื่อมต่อกันด้วย Wi-Fi เพื่อส่งข้อมูลสถานะไฟเลี้ยวและไฟเบรกแบบไร้สาย",
    role: "สมาชิกทีม FtwoK / IoT and prototype development",
    technologies: ["IoT", "Wi-Fi", "LED", "Wireless Signal", "Embedded System", "Safety Innovation"],
    result:
      "พัฒนาต้นแบบที่สามารถแสดงสัญญาณไฟเลี้ยวซ้ายและขวาด้วยไฟสีเหลืองแบบกระพริบ และแสดงสัญญาณไฟเบรกด้วยไฟสีแดงบนหมวก เพื่อช่วยให้ผู้ใช้ถนนด้านหลังสังเกตสัญญาณได้ง่ายขึ้น",
    achievement: "🏆 1ST PRIZE · Prime Minister’s Award for Health Promotion Innovation 2022 · ประเภทอาชีวศึกษา",
    team: "Team FtwoK",
    institution: "วิทยาลัยเทคโนโลยีพาณิชยการลานนา เชียงใหม่",
    members: [
      "น.ส.ชสนันท์ เปรมประไพพร",
      "นายก้องเกียรติ จิรวัฒนคุณากร",
      "นางสาวนินาริต้า นิเจ",
    ],
    advisor: "อาจารย์สุรชัย เจริญศรี · ครูที่ปรึกษา",
    event: "โครงการประกวดนวัตกรรมสร้างเสริมสุขภาพ Prime Minister’s Award for Health Promotion Innovation 2022 · จัดโดยสำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.)",
    eventDate: "10 พฤศจิกายน 2565",
    location: "สามย่านมิตรทาวน์ฮอลล์ สามย่านมิตรทาวน์ กรุงเทพมหานคร",
    motivation:
      "จากการตระหนักถึงปัญหาอุบัติเหตุบนท้องถนน คณะผู้จัดทำจึงเลือกหัวข้อ “ลดอุบัติเหตุทางถนน” และมองหาวิธีทำให้สัญญาณการเลี้ยวและการเบรกของรถจักรยานยนต์สื่อสารกับผู้ใช้รถใช้ถนนด้านหลังได้ชัดเจนขึ้น โดยเฉพาะในกรณีที่ไฟสัญญาณบนตัวรถอยู่ในตำแหน่งที่มองเห็นได้ยาก",
    howItWorks:
      "ตัวส่งสัญญาณติดตั้งอยู่ที่รถจักรยานยนต์ ทำหน้าที่ตรวจจับสถานะไฟเลี้ยวและไฟเบรก แล้วส่งข้อมูลผ่าน Wi-Fi ไปยังตัวรับสัญญาณที่ติดตั้งร่วมกับไฟ LED บนหมวกกันน็อก เมื่อเปิดไฟเลี้ยวซ้ายหรือขวา ไฟสีเหลืองจะกระพริบเพื่อแสดงทิศทาง ส่วนเมื่อเบรก ไฟสีแดงจะทำงาน และเมื่อปล่อยเบรก สัญญาณไฟเบรกจะดับลง",
    images: [
      { src: "/projects/wireless-helmet/award-stage.jpg", label: "IMAGE 01", caption: "รับรางวัลชนะเลิศ Prime Minister’s Award for Health Promotion Innovation 2022" },
      { src: "/projects/wireless-helmet/helmet-prototype.jpg", label: "IMAGE 02", caption: "ต้นแบบ Wireless Helmet Signal Light และชุดไฟ LED บนหมวกกันน็อก" },
      { src: "/projects/wireless-helmet/award-group.jpg", label: "IMAGE 03", caption: "ภาพรวมผู้เข้าร่วมและทีมที่ได้รับรางวัลในงาน PM Award 2022" },
    ],
  },  {
    slug: "helmet-safe-your-life",
    title: "Helmet Safe Your Life",
    index: "AWARD 02",
    category: "IOT · SAFETY SYSTEM",
    year: "2023",
    status: "AWARDED",
    summary:
      "ระบบความปลอดภัยสำหรับรถจักรที่ตรวจสอบการสวมหมวกกันน็อกก่อนอนุญาตให้สตาร์ทรถ โดยใช้เซนเซอร์ภายในหมวก",
    problem:
      "การไม่สวมหมวกกันน็อกเพิ่มความเสี่ยงต่อการบาดเจ็บจากอุบัติเหตุ จึงต้องการสร้างระบบที่ช่วยบังคับใช้พฤติกรรมความปลอดภัยตั้งแต่ก่อนเริ่มขับขี่",
    solution:
      "ติดตั้งเซนเซอร์ในหมวกกันน็อกและเชื่อมต่อกับระบบควบคุมรถ เพื่อให้สามารถตรวจสอบสถานะการสวมหมวกก่อนเริ่มใช้งาน",
    role: "IoT / Prototype development",
    technologies: ["IoT", "Sensor", "Embedded System", "Safety Innovation"],
    result: "พัฒนาเป็นต้นแบบและนำเสนอในเวทีการแข่งขันนวัตกรรมด้านการสร้างเสริมสุขภาพ",
    achievement: "🏆 HONORABLE MENTION · Prime Minister’s Award for Health Promotion Innovation 2023",
    team: "Team Good 4 You · วิทยาลัยเทคโนโลยีพาณิชยการลานนา เชียงใหม่",
  },
];

export function getProjectDetail(slug: string) {
  return PROJECT_DETAILS.find((project) => project.slug === slug);
}
