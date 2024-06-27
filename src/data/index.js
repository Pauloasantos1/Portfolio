import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "AT&T",
    date: " January 2023 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NCR Corporation",
    date: "2022",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Server / Server Manager",
    company_name: "South Kitchen + Bar",
    date: "2019 - 2022",
    details: [
      "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
];
const educations = [{
  degree: 'Masters of Science Computer Science',
  school: "Georgia Institute of Technology",
  time: "2024 - 2026 (Anticipated)",
  details: []
}, 
{
  degree: "Bachelor of Science Computer Science",
  school: "University of Georgia",
  time: "2018- 2022"
},
{
  degree: "Bachelor of Arts Spanish ",
  school: "University of Georgia",
  time: "2018-2022"
},
{
  degree: "Certification in Project Management",
  school: "Cornell University",
  time: "2024"
},
{
  degree: "Certified Agilist in Product Owner / Product Mananger",
  school: "SAFe 6.0",
  time: "2023"
}
]
const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio, educations };

