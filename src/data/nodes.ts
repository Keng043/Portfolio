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
    id: "cv",
    x: 240,
    y: 120,
    label: "COMPUTER VISION",
    desc: "Building systems that process and interpret visual information in real time.",
    tags: "OpenCV · Python",
    href: "/projects/attendance-system",
  },
  {
    id: "py",
    x: 150,
    y: 170,
    label: "PYTHON",
    desc: "Primary language across CLI tools, backend services, and ML pipelines.",
    tags: "CPython · asyncio",
    href: "/projects",
  },
  {
    id: "fr",
    x: 320,
    y: 190,
    label: "FACE RECOGNITION",
    desc: "dlib-based recognition pipeline with a live attendance state machine.",
    tags: "dlib · face_recognition",
    href: "/projects/attendance-system",
  },
  {
    id: "fs",
    x: 110,
    y: 280,
    label: "FULL-STACK",
    desc: "FastAPI and Flask backends paired with lightweight vanilla-JS frontends.",
    tags: "FastAPI · Flask",
    href: "/projects/sos-hub",
  },
  {
    id: "sys",
    x: 360,
    y: 300,
    label: "SYSTEMS",
    desc: "Security-first CLI tooling: allowlisting, sandboxing, hardened subprocess calls.",
    tags: "Linux · Security",
    href: "/projects/linux-cli",
  },
  {
    id: "algo",
    x: 230,
    y: 350,
    label: "ALGO TRADING",
    desc: "Grid-scalping EA for MT5 with ATR-based risk control.",
    tags: "MetaTrader 5 · Python",
    href: "/projects/grid-ea",
  },
  {
    id: "proj",
    x: 240,
    y: 420,
    label: "PROJECTS",
    desc: "Four shipped systems, from emergency response to trading bots.",
    tags: "View all",
    href: "/projects",
  },
];

export const LINKS: [string, string][] = [
  ["cv", "py"],
  ["cv", "fr"],
  ["cv", "proj"],
  ["py", "fs"],
  ["py", "sys"],
  ["py", "algo"],
  ["fr", "sys"],
  ["fs", "proj"],
  ["sys", "algo"],
  ["algo", "proj"],
];

export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    id: "attendance",
    index: "LOG 01",
    title: "Smart Attendance System",
    description:
      "Face-recognition attendance tracking with a live state machine and instructor dashboard.",
    href: "/projects/attendance-system",
  },
  {
    id: "sos",
    index: "LOG 02",
    title: "Smart SOS Hub",
    description:
      "Emergency response web app for Chiang Mai — GPS alerts, QR health ID, AI triage chatbot.",
    href: "/projects/sos-hub",
  },
  {
    id: "grid-ea",
    index: "LOG 03",
    title: "Grid-Scalping EA",
    description:
      "MetaTrader 5 trading bot with ATR-based risk control and percentage equity stops.",
    href: "/projects/grid-ea",
  },
];
