import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ernesto Contreras",
  initials: "EC",
  location: "Kelowna, British Columbia, V1Y 5T6",
  locationLink: "https://maps.app.goo.gl/K56a49byY4nxxu2B7",
  about:
    "Detail-oriented Front-End Web Devoleper and Data Analyst dedicated to building high-quality products.",
  summary: (
    <>
      Front-End Web Developer and Data Analyst specializing in creating 
      high-quality, user-centric applications and data-driven solutions. 
      Experienced in managing large-scale data operations, optimizing 
      real-time systems, and enhancing operational efficiency. 
      Proven ability to deliver precise, impactful results in fast-paced environments.
    </>
  ),
  avatarUrl: "https://raw.githubusercontent.com/ejcontrerast/emailSignature/main/public/email-image.png",
  personalWebsiteUrl: "https://ecdev.tech",
  contact: {
    email: "ejcontrerast@outlook.com",
    tel: "+12364575422",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ejcontrerast",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ejcontrerast/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Okanagan College",
      degree: "Computer Information Systems Diploma",
      start: "2021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Teleperfomance | Colombia",
      link: "https://www.teleperformance.com/en-us/locations/colombia-site/colombia/",
      badges: [""],
      title: "Mission Controller → WorkForce Management Junior Analyst | Full Time",
      logo: null,
      start: "2019",
      end: "2021",
      description: (
        <>
          Successfully managed large-scale data operations and team support processes in a fast-paced environment.
          <ul className="list-inside list-disc">
            <li>
              Ensured data accuracy in staff schedules and personal information databases, supporting seamless operations across multiple teams.
            </li>
            <li>
              Identified and resolved data discrepancies by tracing errors and collaborating with cross-departmental teams.
            </li>
            <li>
              Generated detailed performance reports, enhancing decision-making and operational efficiency.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jealous Fruits | Kelowna, BC",
      link: "https://www.jealousfruits.com",
      badges: [],
      title: "Unitec Cherry Sorter Operator | Seasonal Full Time",
      logo: null,
      start: "2022",
      end: "2023",
      description: (
        <>
          Effectively managed and optimized real-time operations for 24 cherry packing lines during peak seasonal production.
          <ul className="list-inside list-disc">
            <li>
              Programmed and adjusted packing lines to meet quality standards and client specifications in a high-paced environment.
            </li>
            <li>
              Developed an Excel-based visualization tool, streamlining packing adjustments and improving operational clarity.
            </li>
            <li>
              Coordinated with managers and technical support teams to ensure smooth transitions and enhanced productivity.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Delta Hotel by Marriott | Kelowna, BC",
      link: "https://www.marriott.com/en-us/hotels/ylwok-delta-hotels-grand-okanagan-resort/overview/",
      badges: [""],
      title: "Banquets Server/Houseman | Full Time",
      logo: null,
      start: "2022",
      end: null,
      description: (
        <>
          Contributed to the successful execution of corporate events through proactive teamwork and reliability.
          <ul className="list-inside list-disc">
            <li>
              Managed event setups and addressed unexpected challenges in a dynamic, fast-paced venue.
            </li>
            <li>
              Collaborated with teams to maintain high service quality, ensuring seamless event operations.
            </li>
            <li>
              Recognized by supervisors for reliability and dedication, contributing to positive guest experiences.
            </li>
          </ul>
        </>
      ),
    }
  ],
  volunteer: [
    {
      company: "Kelowna General Hospital | Kelowna, BC",
      link: "https://www.interiorhealth.ca/locations/kelowna-general-hospital",
      badges: [""],
      title: "Information Desk",
      logo: null,
      start: "2022",
      end: null,
      description: (
        <>
          Supported patients and families in the ICU and at the Information Desk by providing clear, compassionate guidance and directions throughout Kelowna General Hospital, ensuring a more comfortable and stress-free experience during their visits.
        </>
      ),
    }
  ],
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Database Systems"
  ],
  projects: [
    {
      title: "MineSweeper",
      techStack: ["Vite", "TypeScript", "React", "Tailwind CSS"],
      description:
        "Minesweeper game with customizable grid size, mine count, and timer. Features include flagging mines, revealing cells, and game status tracking.",
      link: {
        label: "MineSweeper-vercel.app",
        href: "https://minesweeper-two-lemon.vercel.app/",
      },
    },
    {
      title: "Algorithm Visualizer",
      techStack: [
        "Vite",
        "TypeScript",
        "React",
        "Tailwind CSS"
      ],
      description:
        "Platform for online visualizations and simulations of popular algorithms. Features include customizable speed, step-by-step execution, and real-time visualization. With code in Python and JavaScript.",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/ejcontrerast/visual-algorithms",
      },
    }
  ],
} as const;
