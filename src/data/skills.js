import tastyTable from "../assets/tastytable.png";
import bookHaven from "../assets/bookhaven.png";
import sithi from "../assets/sithi.png";
import fitboost from "../assets/fitboost.png";
import arraheem from "../assets/logo.png";

export const frontEndSkills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Figma",
];

export const backEndSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "RESTful APIs",
  "JWT Authentication",
];

// src/data/educationAndCertificates.js

export const education = [
  {
    title: "Bachelor of Science (Computer Science)",
    institution: "Manonmaniam Sundaranar University",
    year: "2009",
    type: "Education",
  },

  {
    title: "Diploma of Information Technology (Frontend Development)",
    institution: "TAFE NSW",
    year: "2025",
    type: "Education",
  },
  {
    title: "Diploma of Information Technology (Backend Development)",
    institution: "TAFE NSW",
    year: "2024",
    type: "Education",
  },
];

export const certificates = [
  {
    title: "Meta Frontend Developer Certificate (In Progress)",
    institution: "Coursera",
    year: "In Progress",
    type: "Certificate",
  },
  {
    title: "Google UX Design Certificate (In Progress)",
    institution: "Coursera",
    year: "In Progress",
    type: "Certificate",
  },
];

export const workExperience = [
  {
    role: "VISUAL & DIGITAL ARTIST | E-COMMERCE OWNER",
    period: "2018 - Current",
    location: "Sydney, NSW",
    company: "Self-employed",
    responsibilities: [
      "Designed, developed, and managed an e-commerce website using Shopify, customizing themes and optimizing UX for seamless navigation.",
      "Used Photoshop and Procreate for digital artwork, product mockups, and marketing materials.",
      "Created and marketed digital and traditional artworks including print-on-demand products.",
      "Implemented SEO strategies and social media marketing to increase website traffic and improve visibility.",
      "Handled international and local customers, managing inquiries, orders, and customer support via email, social media, and WhatsApp.",
      "Produced eye-catching social media graphics that effectively communicated promotional messages and increased online visibility.",
    ],
  },
];

export const projects = [
  {
    title: "ArRaheem Cakes",
    image: arraheem,
    stack: "Nextjs and Sanity.io",
    description:
      "This project highlights my skills in React.js, Next.js, and responsive UI design to create a visually appealing, easy-to-navigate website that supports the bakery’s goal to increase online orders and brand presence in the Hyderabad marke",
    technologies: ["React.js", "Next.js", "Sanity.io", "Tailwind CSS"],
    features: [
      "An intuitive online cake catalog with categorized products and detailed descriptions",
      "Mobile-first design optimized for smooth browsing on all devices",
      "SEO-focused content structure to enhance local search visibility for Hyderabad",
    ],
    url: "https://arraheemcakes.vercel.app/",
  },
  {
    title: "Tasty Table",
    image: tastyTable,
    stack: "MERN Stack",
    description:
      "A food recipe blog application with user-based roles, infinite scrolling, filters, and search functionality.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Clerk Authentication",
      "TanStack",
      "Imagekit",
      "Tailwind CSS",
    ],
    features: [
      "Built with MongoDB, Express.js, React.js, and Node.js (MERN Stack)",
      "Integrated role-based authentication (admin, user)",
      "Implemented infinite scrolling, search, and advanced filtering using React Query (TanStack)",
    ],
    url: "https://tasty-table-food-recipe-blog.onrender.com/",
  },

  {
    title: "Book Haven",
    image: bookHaven,
    stack: "Vanilla JavaScript",
    description:
      "Book Haven is a minimalist book discovery app with search, bookmarking, and pagination powered by the Google Books API.",
    technologies: ["JavaScript", "HTML", "CSS", "Sass", "MVC Pattern"],
    features: [
      "Built using JavaScript, HTML, and CSS",
      "Implemented local storage for data persistence, allowing users to save bookmarks and preferences",
      "Integrated a search feature and pagination system",
      "Applied the MVC architecture to organize code efficiently and improve maintainability",
    ],
    url: "https://sithithasleema.github.io/book-haven-js/",
  },

  {
    title: "Personal Portfolio",
    image: sithi,
    stack: "React.js",
    description:
      "A personal portfolio website to showcase my projects, skills, and background as a frontend developer and digital artist.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    features: [
      "Personal Portfolio site built with React and Tailwind CSS to showcase projects, skills, and contact info.",
    ],
    url: "https://sithithasleema.github.io/sithi-portfolio-react/", // Add your live URL here if deployed
  },

  // {
  //   title: "Photo Gallery App",
  //   stack: "HTML, CSS, JavaScript",
  //   description:
  //     "A simple and responsive photo gallery that showcases images in a clean grid layout with interactive hover effects.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   features: [
  //     "Responsive grid layout for image display",
  //     "Interactive hover effects on images",
  //     "Filterable image categories using vanilla JavaScript",
  //     "Lightbox-style image preview for better UX",
  //   ],
  //   url: "https://sithithasleema.github.io/3_photogallery-css/",
  // },

  {
    title: "React Landing Page for FitBoost",
    image: fitboost,
    stack: "React.js",
    description:
      "A modern, responsive landing page built with React, highlighting design and performance with clean UI elements.",
    technologies: ["React.js", "Tailwind CSS"],
    features: [
      "Fully responsive layout with Tailwind CSS",

      "Reusable components and clean file structure",
      "Designed to serve as a startup or portfolio homepage",
      "Deployed on Vercel",
    ],
    url: "https://fitboost-six.vercel.app/",
  },
];

export const shopifyProjects = [
  {
    title: "Ar Raheem Islamic Arts",
    stack: "Shopify",
    description:
      "An e-commerce website dedicated to showcasing and selling Islamic art, including Arabic calligraphy and illuminated artworks.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "Procreate"],
    features: [
      "Designed and customized the Shopify theme to reflect the artistic and spiritual aesthetics of the brand",
      "Created and uploaded original digital artworks using Procreate",
      "Built product pages for both hand-painted and print-on-demand products",
      "Implemented payment gateways and local/international shipping options",
      "Managed hosting and domain configuration through GoDaddy",
    ],
    url: "https://www.arraheemislamicarts.com.au",
  },
];

export const figmaProjects = [
  {
    title: "Bite & Joy – Food Ordering App",
    stack: "Figma",
    description:
      "A user-friendly mobile app UI designed for a food ordering and delivery service, focused on simplicity, speed, and clean aesthetics.",
    technologies: ["Figma", "UI/UX Design", "Mobile App Design", "Prototyping"],
    features: [
      "Designed intuitive onboarding, menu browsing, cart, and checkout flows",
      "Used Figma components and auto layout for scalable and consistent design",
      "Created interactive prototypes to simulate the user journey and test usability",
    ],
    url: "https://www.figma.com/proto/JuQXMXPVMNntZeKm7jovc3/Bite-Joy?node-id=40-118&p=f&t=pBtVxYE1bRZmII2K-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
  },
];
