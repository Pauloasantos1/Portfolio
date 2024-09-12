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
    id: "about",
    title: "About",
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
      "As a Software Engineer in the Chief Security Office, I have spearheaded the development of a web tool utilizing <span style='color: white;'>Python (Django)</span> and <span style='color: white;'>Javascript (Angular)</span>",
      "My proactive approach to <span style='color: white;'>documentation</span> has ensured comprehensive clarity and coherence, facilitating seamless <span style='color: white;'>future collaboration</span> .",
      "Mentored <span style='color: white;'>interns</span> and provided<span style='color: white;'> guidance</span> throughout their software engineering journeys, fostering their professional growth and development..",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NCR Corporation",
    date: "2022",
    details: [
      "Mentored and guided two interns in the successful migration of their<span style='color: white;'> Java Spring</span> BFF (Backend for Frontend) to <span style='color: white;'>NestJS</span>, showcasing my ability to manage intricate <span style='color: white;'>API calls</span> and aggregate crucial account and transaction data from multiple sources.",
      "<span style='color: white;'>Consolidated numerous API calls</span> for transactional data across hundreds of regional and national banks",
    ],
  },
  {
    title: "Server / Server Manager",
    company_name: "South Kitchen + Bar",
    date: "2019 - 2022",
    details: [
      "Skillfully managed high-volume customer traffic, serving an average of 20-25 people at a time, and contributing to the restaurant's success by helping to achieve average weekend sales of <span style='color: white;'>$15,000 to $18,000 </span>.",
      "Facilitated the onboarding of <span style='color: white;'>15+ new employees</span> and contributed to the development of a streamlined and repeatable training process.",
      "",
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
const about = 
  {
  info: [
  "I’m Paulo Santos, a passionate <span style='color: white;'> Full-Stack Software </span> Engineer currently working at AT&T. With expertise in",
  " technologies like Python (Django) and JavaScript (Angular, React), I have a strong foundation in building",
  " scalable web applications. I’m also pursuing a Master’s degree in Computer Science at Georgia Tech to deepen",
  " my understanding of advanced computing concepts. Outside of work, I enjoy hiking with my dogs, drinkings lots of coffee, ",
  "and exploring new developments in the technology world. My goal is to continue innovating and building impactful solutions that make a difference.",
  ]
};

export { experiences, portfolio, educations, about };

