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
    title: "Senior Software Engineer, Automation Platforms",
    company_name: "AT&T",
    date: "November 2024 - Present",
    details: [
      "Architecting and enhancing <span style='color: white;'>ServiceNow</span> to govern over <span style='color: white;'>17,000+ software and hardware assets</span> under the Technology Strategies & Standards group.",
      "Building and optimizing <span style='color: white;'>flows</span>, <span style='color: white;'>business rules</span>, and <span style='color: white;'>scripts</span> to implement security controls and validate compliance against frameworks like <span style='color: white;'>NIST 800-53</span> and <span style='color: white;'>ISO 27001</span>.",
      "Partnering with risk, security, and architecture teams to identify automation opportunities and deploy enhancements that <span style='color: white;'>improve resiliency</span> and reduce risk."
    ],
  },
  {
    title: "Sr. Specialist Software Engineer, Chief Security Office",
    company_name: "AT&T",
    date: "November 2023 - November 2024",
    details: [
      "Built a full-stack <span style='color: white;'>Django/Angular</span> tool for tracking and managing user stories securely across teams.",
      "Reduced new developer onboarding time by <span style='color: white;'>40%</span> via improved documentation and refined system architecture.",
      "Implemented <span style='color: white;'>OAuth2 authentication</span>, SSO integration, and <span style='color: white;'>Azure Monitor</span> logging achieving 99.9% trace coverage with no critical penetration test findings.",
      "Automated <span style='color: white;'>golden image deployments</span> using Azure DevOps, reducing manual update cycles by 50%.",
      "Mentored junior engineers and instituted <span style='color: white;'>peer-review practices</span>, reducing post-deployment defects by 25% in 3 months."
    ],
  },
  {
    title: "Specialist Technical Business Manager, Chief Security Office",
    company_name: "AT&T",
    date: "January 2023 - November 2023",
    details: [
      "Supported the development of <a href='https://www.business.att.com/products/att-dynamic-defense.html' target='_blank' style='color: white; text-decoration: underline;'>AT&T Dynamic Defense</a>, a proactive threat detection platform that enhances enterprise security posture.",
      "Managed backlog alignment with security milestones and coordinated sprint execution with engineers and compliance leads.",
      "Improved resolution timelines by integrating <span style='color: white;'>Jira</span> + <span style='color: white;'>Confluence</span> for streamlined issue tracking.",
      "Led the implementation of user-driven <span style='color: white;'>UI/UX enhancements</span> to boost usability across internal stakeholders."
    ],
  },
  {
    title: "Software Engineer I",
    company_name: "NCR Corporation",
    date: "July 2022 - January 2023",
    details: [
      "Refactored legacy <span style='color: white;'>Spring BFF APIs</span> into <span style='color: white;'>NestJS microservices</span>, reducing deployment errors by 30% and shrinking CVE remediation windows from 14 to 3 days.",
      "Developed a secure banking widget using <span style='color: white;'>ReactJS (MUI)</span> to display real-time transactions, ensuring customer-facing <span style='color: white;'>cybersecurity compliance</span>.",
      "Collaborated with platform security teams to implement <span style='color: white;'>CI/CD pipelines</span> and maintain secure code practices across the SDLC."
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
  degree: "Masters of Science Computer Science",
  school: "Georgia Institute of Technology 🐝",
  time: "2024 - 2026 (Anticipated)",
  details: [
    "<span class='text-gray-300'>Specializing in cybersecurity and human-computer interaction, with coursework centered on secure system design, digital threat analysis, and ethical AI development.</span>",
    "<strong class='text-white'>Relevant Coursework:</strong><br/>" +
    "<ul class='list-disc ml-6 space-y-1'>" +
    "<li><a href='https://omscs.gatech.edu/cs-6035-introduction-information-security' target='_blank' class='text-blue-400 hover:underline'>Introduction to Information Security</a></li>" +
    "<li><a href='https://omscs.gatech.edu/inta-6450-data-analytics-and-security' target='_blank' class='text-blue-400 hover:underline'>Data Analytics and Security</a></li>" +
    "<li><a href='https://omscs.gatech.edu/cs-6750-human-computer-interaction' target='_blank' class='text-blue-400 hover:underline'>Human-Computer Interaction</a></li>" +
    "<li><a href='https://omscs.gatech.edu/cs-6603-ai-ethics-and-society' target='_blank' class='text-blue-400 hover:underline'> AI Ethics and Society</a></li>" +
    "<li><a href='https://omscs.gatech.edu/cs-6440-intro-health-informatics' target='_blank' class='text-blue-400 hover:underline'>Introduction to Health Informatics</a></li>" +
    "<li><a href='https://omscs.gatech.edu/cs-8803-mobile-ubiquitous-computing' target='_blank' class='text-blue-400 hover:underline'>Mobile & Ubiquitous Computing</a></li>" +
    "<li><a href='https://omscs.gatech.edu/cs-6460-educational-technology' target='_blank' class='text-blue-400 hover:underline'>Educational Technology</a></li>" +
    "</ul>"
  ],
},
{
  degree: "Bachelor of Science Computer Science",
  school: "University of Georgia 🐶",
  time: "2018 - 2022",
  details: [
    "<span class='text-gray-300'>Built a foundation in scalable systems design, security fundamentals, and software engineering best practices through a Bachelor of Science in Computer Science at UGA.</span>",
    "<strong class='text-white'>Relevant Coursework:</strong><br/>" +
    "<ul class='list-disc ml-6 space-y-1'>" +
    "<li><a href='https://computing.uga.edu/courses/content/csci-40506050' target='_blank' class='text-blue-400 hover:underline'>Software Engineering</a></li>" +
    "<li><a href='https://computing.uga.edu/courses/content/csci-4720' target='_blank' class='text-blue-400 hover:underline'>Computer Architecture and Organization</a></li>" +
    "<li><a href='https://computing.uga.edu/courses/content/csci-47306730' target='_blank' class='text-blue-400 hover:underline'>Operating Systems</a></li>" +
    "<li><a href='https://computing.uga.edu/courses/content/csci-40606060' target='_blank' class='text-blue-400 hover:underline'>Mobile Software Development</a></li>" +
    "<li><a href='https://computing.uga.edu/courses/content/csci-2670' target='_blank' class='text-blue-400 hover:underline'>Introduction to Theory of Computing</a></li>" +
    "<li><a href='https://computing.uga.edu/courses/content/csci-2720' target='_blank' class='text-blue-400 hover:underline'>Data Structure</a></li>" +
    "</ul>"
  ],
},
{
  degree: "Bachelor of Arts Spanish",
  school: "University of Georgia 🐶",
  time: "2018 - 2022",
  details: [
    "<span class='text-gray-300'>As a native Spanish speaker, pursued formal studies to deepen literacy skills in reading, writing, and professional communication. Focused on mastering linguistic structure, advanced grammar, and cultural contexts across Spain and Latin America.</span>"+
    "<strong class='text-white'>Relevant Coursework:</strong><br/>" +
    "<ul class='list-disc ml-6 space-y-1'>" +
    "<li><a href='https://roml.franklin.uga.edu/courses/content/spanling-3050' target='_blank' class='text-blue-400 hover:underline'>Introduction to Spanish Linguistics</a></li>" +
    "<li><a href='https://roml.franklin.uga.edu/courses/content/spanling-4650' target='_blank' class='text-blue-400 hover:underline'>Spanish Phonetics and Language Variation</a></li>" +
    "<li><a href='https://roml.franklin.uga.edu/courses/content/span-4080' target='_blank' class='text-blue-400 hover:underline'>Discovering Cultural Formation</a></li>" +
    "<li><a href='https://roml.franklin.uga.edu/courses/content/roml-4030' target='_blank' class='text-blue-400 hover:underline'>Advanced Topics in Latino Literatures and Cultures</a></li>" +
    "<li><a href='https://roml.franklin.uga.edu/courses/content/span-4070' target='_blank' class='text-blue-400 hover:underline'>Latin American Voices of Change</a></li>" +
    "<li><a href='https://roml.franklin.uga.edu/courses/content/span-4030' target='_blank' class='text-blue-400 hover:underline'>Latinx in the United States</a></li>" +
    "</ul>"
  ],
},
{
  degree: "Certificate in Project Management",
  school: "Cornell University",
  time: "February 2024",
  details: [
    "<span class='text-gray-300'>Completed eCornell’s professional certificate in <span class='text-white font-semibold'>Project Management</span>, with emphasis on agile delivery, stakeholder communication, and risk management.</span>",
    "<img src='/CornellCertificate-1.png' alt='Cornell Project Management Certificate' class='mt-4 mx-auto rounded-lg w-[300px] shadow-xl' />"
  ],
},
{
  degree: "SAFe 6 Product Owner / Product Manager",
  school: "Scaled Agile, Inc.",
  time: "Valid until June 2026",
  details: [
    "<span class='text-gray-300'>Certified SAFe® 6 POPM, demonstrating proficiency in backlog management, PI planning, and agile product delivery within lean enterprise frameworks.</span>",
    "<img src='/SAFe6Cert-1.png' alt='SAFe 6 POPM Certificate' class='mt-4 mx-auto rounded-lg w-[300px] shadow-xl' />"
  ],
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

