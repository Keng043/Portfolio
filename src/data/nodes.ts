export interface SkillNode {
  id: string;
  x: number;
  y: number;
  label: string;
  desc: string;
  tags: string;
  href: string;
}

// พิกัด x/y อ้างอิงจาก viewBox 480x480 ของ network SVG
export const NODES: SkillNode[] = [
  {
    id: "orgspace",
    x: 150,
    y: 150,
    label: "ORGSPACE",
    desc: "เว็บแอปพลิเคชันสำหรับบริหารจัดการทรัพยากรบุคคลภายในองค์กร โดยผมรับผิดชอบการพัฒนา Frontend และหน้าบ้านให้ผู้ใช้งานเข้าถึงข้อมูลและฟังก์ชันต่าง ๆ ได้อย่างเป็นระบบ",
    tags: "Frontend · Web App",
    href: "https://github.com/Keng043/orgspace-frontend",
  },
  {
    id: "sos",
    x: 330,
    y: 150,
    label: "SMART SOS HUB",
    desc: "เว็บแอปพลิเคชันช่วยเหลือฉุกเฉินสำหรับเชียงใหม่ รวมเบอร์ฉุกเฉิน บันทึกข้อมูลสุขภาพ และ AI Chatbot สำหรับให้ข้อมูลเบื้องต้นแก่ผู้ใช้งาน",
    tags: "Emergency · AI",
    href: "https://github.com/Keng043/smart-sos-hub",
  },
  {
    id: "attendance",
    x: 110,
    y: 300,
    label: "SMART ATTENDANCE",
    desc: "ระบบเช็กชื่อและติดตามการเข้าเรียนด้วย Face Recognition และ OpenCV พร้อม State Machine สำหรับติดตามสถานะการเข้าเรียนของนักศึกษา",
    tags: "OpenCV · Face Recognition",
    href: "https://github.com/Keng043/smart_attendance",
  },
  {
    id: "docker-dashboard",
    x: 370,
    y: 300,
    label: "TOUCHLESS DOCKER DASHBOARD",
    desc: "Dashboard สำหรับควบคุมและติดตาม Docker Container ด้วย Computer Vision และ Hand Gesture โดยใช้การเคลื่อนไหวของมือเป็นคำสั่งในการจัดการ Container",
    tags: "Computer Vision · Docker",
    href: "https://github.com/Keng043/touchless-docker-dashboard",
  },
  {
    id: "security-command-center",
    x: 240,
    y: 420,
    label: "SECURITY COMMAND CENTER",
    desc: "ระบบจดจำใบหน้าและบันทึกการเข้า–ออกห้องของนักศึกษา เพื่อช่วยติดตามการใช้งานห้องและจัดเก็บข้อมูลการเข้าออกอย่างเป็นระบบ",
    tags: "Face Recognition · Security",
    href: "https://github.com/Keng043/smart_security_command_center",
  },
];

export const LINKS: [string, string][] = [
  ["orgspace", "sos"],
  ["orgspace", "attendance"],
  ["sos", "docker-dashboard"],
  ["sos", "security-command-center"],
  ["attendance", "docker-dashboard"],
  ["attendance", "security-command-center"],
  ["docker-dashboard", "security-command-center"],
];

export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
  tags?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "orgspace",
    index: "LOG 01",
    title: "OrgSpace",
    description:
      "เว็บแอปพลิเคชันสำหรับบริหารจัดการทรัพยากรบุคคลภายในองค์กร โดยผมรับผิดชอบการพัฒนา Frontend และหน้าบ้านให้ผู้ใช้งานเข้าถึงข้อมูลและฟังก์ชันต่าง ๆ ได้อย่างเป็นระบบ",
    href: "https://github.com/Keng043/orgspace-frontend",
  },
  {
    id: "sos",
    index: "LOG 02",
    title: "Smart SOS Hub",
    description:
      "เว็บแอปพลิเคชันช่วยเหลือฉุกเฉินสำหรับเชียงใหม่ รวมเบอร์ฉุกเฉิน บันทึกข้อมูลสุขภาพ และ AI Chatbot สำหรับให้ข้อมูลเบื้องต้นแก่ผู้ใช้งาน",
    href: "https://github.com/Keng043/smart-sos-hub",
  },
  {
    id: "attendance",
    index: "LOG 03",
    title: "Smart Attendance",
    description:
      "ระบบเช็กชื่อและติดตามการเข้าเรียนด้วย Face Recognition และ OpenCV พร้อม State Machine สำหรับติดตามสถานะการเข้าเรียนของนักศึกษา",
    href: "https://github.com/Keng043/smart_attendance",
  },
  {
    id: "docker-dashboard",
    index: "LOG 04",
    title: "Touchless Docker Dashboard",
    description:
      "Dashboard สำหรับควบคุมและติดตาม Docker Container ด้วย Computer Vision และ Hand Gesture โดยใช้การเคลื่อนไหวของมือเป็นคำสั่งในการจัดการ Container",
    href: "https://github.com/Keng043/touchless-docker-dashboard",
  },
  {
    id: "security-command-center",
    index: "LOG 05",
    title: "Smart Security Command Center",
    description:
      "ระบบจดจำใบหน้าและบันทึกการเข้า–ออกห้องของนักศึกษา เพื่อช่วยติดตามการใช้งานห้องและจัดเก็บข้อมูลการเข้าออกอย่างเป็นระบบ",
    href: "https://github.com/Keng043/smart_security_command_center",
  },
  {
    id: "wireless-helmet-signal-light",
    index: "AWARD 01",
    title: "Wireless Helmet Signal Light",
    description:
      "อุปกรณ์เสริมหมวกกันน็อคนิรภัยอัจฉริยะที่แสดงสัญญาณไฟเลี้ยวและไฟเบรกบนหมวก เพื่อช่วยเพิ่มการมองเห็นและลดความเสี่ยงจากอุบัติเหตุบนท้องถนน",
    href: "/projects/wireless-helmet-signal-light",
    tags: "IoT · Safety Innovation · 1ST PRIZE",
  },
];
