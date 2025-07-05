import { SiMysql } from "react-icons/si";
import {
  FaDocker,
  FaLaravel,
  FaNodeJs,
  FaServer,
  FaVuejs,
  FaRoute,
} from "react-icons/fa";
import { FiCode, FiDatabase, FiGlobe, FiServer } from "react-icons/fi";
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
    name: "Node.js",
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
      "Developed and Lead development for Ministry of Transport and Communications ( Student Management System )",
      "Developed and Lead development for Ministry of Transport and Communications ( E-learning Management System )",
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
    name: "API",
    icon: <FiGlobe className="w-5 h-5" />,
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

export const projects = [
  {
     id: 1,
     title: 'Real Time Fuel Monitoring and Management System',
     description: 'A real-time fuel monitoring and management system for monitoring and managing fuel consumption and inventory',
     technologies: ['Laravel', 'Nextjs', 'Tailwind', 'Mosquitto', 'Redis', 'MySQL', 'Docker'],
     image: 'fms.png',
  },
  {
    id: 2,
    title: 'Human Resource Management System',
    description: 'A complete HRMS system for managing employees, departments, and payroll',
    technologies: ['Laravel', 'MySql', 'Bootstrap', 'Blade', 'Jquery'],
    image: 'hrms.png',
  },
  {
    id: 3,
    title: 'Mosquitto Client (Laravel Package )',
    description: 'This is a simple Laravel wrapper for interacting with MQTT brokers using the PhpMqtt\Client library. It provides an easy way to publish and subscribe to topics, and handle MQTT connections.',
    technologies: ['PHP', 'Laravel', 'Composer', 'Mosquitto'],
    image: 'mqtt.png',
  },
  
  {
     id: 4,
     title: 'Sudhamma Real Estate',
     description: 'Online real estate platforms to quickly find properties. Users apply filters such as location, price, property type (house, apartment, land, commercial), and transaction type (rent or sale)',
     technologies: ['Nextjs', 'Tailwind', 'Nodejs', 'MySQL'],
     image: 'sudhmma.jpg',
  },
  {
    id: 5,
    title: 'Student Management System',
    description: 'A complete student management system for managing students, teachers, and classes ',
    technologies: ['Laravel', 'Vuejs', 'Inertia', 'Tailwind'],
    image: 'sms.png',
  },
  {
    id: 6,
    title: 'Convert (Laravel Package)',
    description: 'Easy to use laravel package for converting date, number, nrc to english and myanmar.',
    technologies: ['Laravel', 'Composer', 'PHP'],
    image: 'convert.png',
  }
];
