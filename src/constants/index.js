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
    title: "About",
  },
  {
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    title: "Materials Management Intern",
    company_name: "F. Hoffmann-La Roche AG, Kaiseraugst AG",
    icon: roche,
    iconBg: "#fafafa",
    date: "Sep. 2023 - Feb. 2024",
    points: [
      "Development and implementation of automation processes",
      "Extensive use of Google Apps and Google Apps Script",
      "Creation and maintenance of informative Google Sites",
      "Conducted training sessions for Lucidspark",
    ],
  },
  {
    title: "Responsible IT Services",
    company_name: "FHNW Fachhochschule Nordwestschweiz, Windisch AG",
    icon: fhnw,
    iconBg: "#fafafa",
    date: "Sep. 2022 - Feb. 2023",
    points: [
      "Managed IT support requests and ensured efficient issue resolution",
      "Development, management, and implementation of IT strategies",
      "Responsible for the development and maintenance of the website",
      "Experience working with SAP systems",
    ],
  },
  {
    title: "Practical training in nursing support",
    company_name: "KSA Kantonsspital Aarau, Aarau AG",
    icon: ksa,
    iconBg: "#fafafa",
    date: "Sep. 2020 - Feb. 2021",
    points: [
      "Coordination and scheduling of appointments",
      "Office correspondence",
      "Patient and family support",
      "Nursing and household tasks",
    ],
  },
  {
    title: "Saleswoman & Office Manager (Family business)",
    company_name: "Kiosk Bistro Lebensmittel, Oberdorf BL",
    icon: kiosk,
    iconBg: "#fafafa",
    date: "Dez. 2017 - Sep. 2020",
    points: [
      "Various administrative tasks (MS-Office program)",
      "Office correspondence",
      "Quality, data, and freshness control",
      "Customer service and providing information to customers",
    ],
  },
];

export const projects = [
  {
    name: "HistoApp",
    description:
      "React & Spring Boot app (Fullstack) for viewing and annotating DICOM-based tissue images, integrated with Orthanc PACS and Keycloak.",
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
    name: "Anamnesis Form – Automated PDF Analysis",
    description:
      "This project focuses on the automated analysis and processing of anamnesis forms. The goal is to extract printed content from PDFs, evaluate checkboxes, and match results against a catalog of statements.",
    tags: [
      { name: "Python", color: "lavender-text-gradient" },
      { name: "OCR", color: "lavender-text-gradient" },
      { name: "Computer Vision", color: "lavender-text-gradient" },
    ],
    image: ana,
    source_code_link: "https://github.com/Sivanajani/Anamnese-Formular",
  },
  {
    name: "Region Growing Labeln",
    description:
      "Region Growing segmentation of star-like blobs using Python, NumPy, Matplotlib, and scikit-image.",
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
    name: "Emotion Recognition with Vision Transformer",
    description:
      "Fine-tuning a Vision Transformer (ViT) model for emotion classification using the FER2013 dataset – including preprocessing, augmentation and training.",
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
    name: "Parkinson Datensatzanalyse",
    description:
      "Data preprocessing and visualization of 5,875 voice recordings from Parkinson's patients to explore predictors of UPDRS scores.",
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
