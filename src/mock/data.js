import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hanif Ali | Freelance Software Developer',
  lang: 'en',
  description: 'I am Hanif Ali. I am a Software Engineering sophomore and a Freelance Backend Developer.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'I am ',
  name: 'Hanif Ali',
  subtitle: "I'm a Freelance Software Developer",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Hi 👋,',
  paragraphTwo: 'I am Hanif Ali. I study Software Engineering student at the National University of Sciences and Technology, Islamabad. Currently, I am also working as a Freelance Backend Developer at Pikkal & Co.',
  paragraphThree: 'I love Programming and learning new technologies. Therefore, I am constantly working to expand the domain of my skills.',
  resume: 'https://drive.google.com/file/d/17_SpTM1i5pJFLXlEnutTg1ORzLS0ZGJh/view?usp=sharing', // if no resume, the button will not show up
  upwork: 'https://www.upwork.com/freelancers/~01e4e24f6f1a812341',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projects_codebench.png',
    title: 'CodeBench - Assignment Grader',
    info: 'Semester Project for CS221 - Object Oriented Programming.',
    info2: 'Provides a portal for Teachers to assign Programming Assignments and students to upload their solutions. The grader then uses a combination of Static and Dynamic Analysis to automatically grade each submission.',
    url: '',
    repo: 'https://github.com/hanif-ali/CodeBench-Backend',
  },
  {
    id: nanoid(),
    img: 'projects_til.png',
    title: 'TIL - Today I Learned',
    info: 'A log of small things that I learn day to day across a variety of languages and technologies.',
    info2: '',
    url: '',
    repo: 'https://github.com/hanif-ali/til', 
  },
  {
    id: nanoid(),
    img: 'projects_lightbulbs.png',
    title: 'Lightbulbs - Idea Sharing Platform',
    info: 'Semester Project for CS 114 - Introduction to Programming',
    info2: 'An Idea sharing Platform built with Django. Inspired by Pinterest and Reddit and uses Hot Algorithm to prioritize Ideas that are posted by users.',
    url: '',
    repo: 'https://github.com/hanif-ali/lightbulbs', 
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alihanif016@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hanif-ali',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/haneefaly',
    },
    {
      id: nanoid(),
      name: 'quora',
      url: 'https://quora.com/Hanif-Ali-11',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/haneefaly',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
