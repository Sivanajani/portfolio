import {
  springb,
  python,
  java,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  git,
  histoapp,
  ana,
  emotion,
  threejs,
  region,
  park,
  roche,
  fhnw,
  ksa,
  kiosk,
  docker,
  linux,
  Kotlin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "navbar.about",
  },
  {
    id: "tech",
    title: "navbar.tech",
  },
  {
    id: "work",
    title: "navbar.work",
  },
  {
    id: "projects",
    title: "navbar.projects",
  },
  {
    id: "contact",
    title: "navbar.contact",
  },
];

export const technologies = [

  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Spring Boot", icon: springb },
  { name: "Node JS", icon: nodejs },
  { name: "Docker", icon: docker },
  { name: "Linux", icon: linux },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "Git", icon: git },
  { name: "Java Script", icon: javascript },
  { name: "Kotlin", icon: Kotlin },
  { name: "Three.js", icon: threejs },

];

export const experiences = [
  {
    title: "sections.experience.roche.title",
    company_name: "sections.experience.roche.company",
    icon: roche,
    iconBg: "#fafafa",
    date: "sections.experience.roche.date",
    points: [
      "sections.experience.roche.point1",
      "sections.experience.roche.point2",
      "sections.experience.roche.point3",
      "sections.experience.roche.point4",
    ],
  },
  {
    title: "sections.experience.fhnw.title",
    company_name: "sections.experience.fhnw.company",
    icon: fhnw,
    iconBg: "#fafafa",
    date: "sections.experience.fhnw.date",
    points: [
      "sections.experience.fhnw.point1",
      "sections.experience.fhnw.point2",
      "sections.experience.fhnw.point3",
      "sections.experience.fhnw.point4",
    ],
  },
  {
    title: "sections.experience.ksa.title",
    company_name: "sections.experience.ksa.company",
    icon: ksa,
    iconBg: "#fafafa",
    date: "sections.experience.ksa.date",
    points: [
      "sections.experience.ksa.point1",
      "sections.experience.ksa.point2",
      "sections.experience.ksa.point3",
      "sections.experience.ksa.point4",
    ],
  },
  {
    title: "sections.experience.bistro.title",
    company_name: "sections.experience.bistro.company",
    icon: kiosk,
    iconBg: "#fafafa",
    date: "sections.experience.bistro.date",
    points: [
      "sections.experience.bistro.point1",
      "sections.experience.bistro.point2",
      "sections.experience.bistro.point3",
      "sections.experience.bistro.point4",
    ],
  },
];

export const projects = [
  {
    name: "projects.histoapp.name",
    description:
      "projects.histoapp.description",
    tags: [
      { name: "React", color: "lavender-text-gradient" },
      { name: "Kotlin", color: "lavender-text-gradient" },
      { name: "Docker", color: "lavender-text-gradient" },
      { name: "Spring Boot", color: "lavender-text-gradient" },
      { name: "Linux", color: "lavender-text-gradient" },
      { name: "Java Script", color: "lavender-text-gradient" },
      { name: "PACS-Integration", color: "lavender-text-gradient" },
      { name: "Node.js", color: "lavender-text-gradient" },
      { name: "Reverse-Proxy", color: "lavender-text-gradient" },
      { name: "PostgreSQL", color: "lavender-text-gradient" },
    ],
    image: histoapp,
    source_code_link: "https://github.com/Sivanajani/HistoApp",
  },
  {
    name: "projects.anamnese.name",
    description:
      "projects.anamnese.description",
    tags: [
      { name: "Python", color: "lavender-text-gradient" },
      { name: "OCR", color: "lavender-text-gradient" },
      { name: "Computer Vision", color: "lavender-text-gradient" },
    ],
    image: ana,
    source_code_link: "https://github.com/Sivanajani/Anamnese-Formular",
  },
  {
    name: "projects.region.name",
    description:
      "projects.region.description",
    tags: [
      { name: "Flood-Fill", color: "lavender-text-gradient" },
      { name: "Visualization", color: "lavender-text-gradient" },
      { name: "Matplotlib", color: "lavender-text-gradient" },
      { name: "region-growing", color: "lavender-text-gradient" },
      { name: "image processing", color: "lavender-text-gradient" },
      { name: "NumPy", color: "lavender-text-gradient" },
      { name: "Clean Code & Documetation", color: "lavender-text-gradient" },
      { name: "Debugging", color: "lavender-text-gradient" },
      { name: "Python", color: "lavender-text-gradient" },
    ],
    image: region,
    source_code_link:
      "https://github.com/Sivanajani/RegionGrowingLabeln",
  },
  {
    name: "projects.emotion.name",
    description:
      "projects.emotion.description",
    tags: [
      { name: "Computer Vision", color: "lavender-text-gradient" },
      { name: "Pytorch", color: "lavender-text-gradient" },
      { name: "ML", color: "lavender-text-gradient" },
      { name: "Deep-Learning", color: "lavender-text-gradient" },
      { name: "Facial-Expression", color: "lavender-text-gradient" },
    ],
    image: emotion,
    source_code_link: "https://github.com/Sivanajani/Emotion-Recognition-with-Vision-Transformer",
  },
  {
    name: "projects.parkinson.name",
    description:
      "projects.parkinson.description",
    tags: [
      { name: "Python", color: "lavender-text-gradient" },
      { name: "Pandas", color: "lavender-text-gradient" },
      { name: "medical-dataset", color: "lavender-text-gradient" },
      { name: "feature-engineering", color: "lavender-text-gradient" },
      { name: "seaborn", color: "lavender-text-gradient" },
    ],
    image: park,
    source_code_link: "https://github.com/Sivanajani/Parkinson-Datensatzanalyse",
  },
  

];
