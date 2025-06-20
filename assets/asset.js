import { SiMysql } from "react-icons/si";
import {
  FaDocker,
  FaLaravel,
  FaNodeJs,
  FaServer,
  FaVuejs,
  FaCloud,
  FaRoute,
} from "react-icons/fa";
import { FiCode, FiCpu, FiDatabase, FiServer } from "react-icons/fi";
import { IoHardwareChipOutline } from "react-icons/io5";

export const tools = [
  {
    icon: <FaVuejs className="text-green-500 text-xl" />,
    name: "Vue",
    desc: "Frontend Development",
  },
  {
    icon: <FaLaravel className="text-red-500 text-xl" />,
    name: "Laravel",
    desc: "Backend Systems",
  },
  {
    icon: <FaNodeJs className="text-sky-500 text-xl" />,
    name: "Jvascript",
    desc: "Backend Development",
  },
  {
    icon: <SiMysql className="text-blue-400 text-xl" />,
    name: "Database",
    desc: "Data Management",
  },
  {
    icon: <FaServer className="text-amber-400 text-xl" />,
    name: "Proxmox",
    desc: "Home Lab Server",
  },
  {
    icon: <FaDocker className="text-cyan-400 text-xl" />,
    name: "Docker",
    desc: "Containerization",
  },
  {
    icon: <FaRoute className="text-indigo-400 text-xl" />,
    name: "APIs",
    desc: "RESTful Services",
  },
  {
    icon: <IoHardwareChipOutline className="text-indigo-400 text-xl" />,
    name: "IoT",
    desc: "Device Management",
  },
];

export const experiences = [
  {
    year: "2024 July - Present",
    role: "Senior Laravel Developer",
    company: "Digital Engineering Tech Company",
    descriptions: [
      "Maintained cloud development for Old Real-Time Fuel Monitoring System",
      "Maintained backend development for Old Real-Time Fuel Management System",
      "Developed and Lead Cloud Infrastructure for New Real-Time Fuel Monitoring System",
      "Developed and Lead Backend Development for New Real-Time Fuel Management System",
    ],
  },
  {
    year: "2023 Oct - 2024 May",
    role: "Senior Laravel Developer",
    company: "Solution Hubs IT Company",
    descriptions: [
      "Developed and Lead backend development for Road & Tranport Department ( Online Booking System )",
      "Developed and Lead backend development for Ministry of Transport and Communications ( Online License Registration System ) for Maritime and Towers Telecomunication Devices etc..",
    ],
  },
  {
    year: "2022 Sep - 2024 Oct",
    role: "Senior Laravel Developer",
    company: "SecureLink IT Company",
    descriptions: [
      "Developed and Lead backend development for Food & Drug Administration (FDA) E-submission System",
      "Developed and Lead backend development for Local Food & Drug Administration (LFDA) E-submission System",
    ],
  },
  {
    year: "2021 Feb - 2022 Aug",
    role: "Junior Laravel Developer",
    company: "Linn IT Solutions & Services",
    descriptions: [
      `Developed and maintained HRMS System`,
      "Gold & Jewellery Management System",
      "Customer Satisfaction Review API",
    ],
  },
  {
    year: "2019 Jun - 2020 Oct",
    role: "Junior Laravel Developer",
    company: "Sunflower IT Solutions",
    descriptions: [`Developed and maintained Student Management System`],
  },
];

export const skills = [
  { name: "Laravel", icon: <FiServer className="w-5 h-5" />, level: "Expert" },
  {
    name: "API Development",
    icon: <FiCpu className="w-5 h-5" />,
    level: "Expert",
  },
  { name: "PHP", icon: <FiCode className="w-5 h-5" />, level: "Expert" },
  { name: "Git", icon: <FiCode className="w-5 h-5" />, level: "Expert" },
  {
    name: "MySQL",
    icon: <FiDatabase className="w-5 h-5" />,
    level: "Advanced",
  },
  { name: "Node.js", icon: <FiCode className="w-5 h-5" />, level: "Advanced" },
  { name: "React", icon: <FiCode className="w-5 h-5" />, level: "Advanced" },
  { name: "Docker", icon: <FiCode className="w-5 h-5" />, level: "Advanced" },
];
