import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";
import type { CSSProperties } from "react";

type ProjectAccent =
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "fuchsia"
  | "rose"
  | "orange"
  | "amber"
  | "lime"
  | "emerald";

type ProjectLinkType = "repo" | "demo" | "notebook";

interface ProjectLink {
  label: string;
  url: string;
  type: ProjectLinkType;
}

interface Project {
  title: string;
  category: string;
  tools: string;
  description: string;
  accent: ProjectAccent;
  links: ProjectLink[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Prescripto - Doctor Appointment Platform",
    category: "Full Stack Web App",
    tools: "React, Node.js, Express, MongoDB",
    image: "/images/prescripto-snapshot.png",
    accent: "teal",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/Prescripto",
        type: "repo",
      },
    ],
    description:
      "Built a full-stack platform with patient and admin dashboards, secure authentication, and appointment scheduling.",
  },
  {
    title: "YouTube Sentiment Analysis",
    category: "AI / Machine Learning",
    tools: "Python, NLP, Pandas",
    image: "/images/youtube-sentiment.png",
    accent: "amber",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/Youtube_sentimentAnalysis",
        type: "repo",
      },
    ],
    description:
      "Developed a sentiment analysis model to classify comments and analyze audience sentiment using NLP techniques.",
  },
  {
    title: "Fire Detection System",
    category: "Computer Vision",
    tools: "Python, OpenCV",
    image: "/images/fire-detection.png",
    accent: "orange",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/Image_Processing_based_fire_detection",
        type: "repo",
      },
    ],
    description:
      "Designed an image processing system to detect fire in real-time scenarios for safety-focused applications.",
  },
  {
    title: "FS Projects Collection",
    category: "Frontend Projects Hub",
    tools: "HTML, CSS, JavaScript, Vercel",
    accent: "sky",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "A collection of frontend projects built with HTML, CSS, and JavaScript and deployed on Vercel.",
  },
  {
    title: "Shopping Cart",
    category: "Frontend Web App",
    tools: "HTML, CSS, JavaScript",
    accent: "blue",
    links: [
      {
        label: "Live Demo",
        url: "https://fs-projects-two.vercel.app/",
        type: "demo",
      },
      {
        label: "Source Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "Interactive shopping cart experience with product handling and client-side state logic.",
  },
  {
    title: "Cosmetics Items",
    category: "Frontend Web App",
    tools: "HTML, CSS, JavaScript",
    accent: "violet",
    links: [
      {
        label: "Live Demo",
        url: "https://wwwcosmeticscom.vercel.app/",
        type: "demo",
      },
      {
        label: "Source Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "Product-focused cosmetics interface with clean card layouts and browsing interactions.",
  },
  {
    title: "Weather Condition",
    category: "Frontend Utility App",
    tools: "HTML, CSS, JavaScript, Weather API",
    accent: "emerald",
    links: [
      {
        label: "Live Demo",
        url: "https://weathertempcom.vercel.app/",
        type: "demo",
      },
      {
        label: "Source Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "Weather lookup application with clean UI, quick search flow, and dynamic condition rendering.",
  },
  {
    title: "Emojis",
    category: "Frontend Micro Project",
    tools: "HTML, CSS, JavaScript",
    accent: "fuchsia",
    links: [
      {
        label: "Live Demo",
        url: "https://emojis-bay.vercel.app/",
        type: "demo",
      },
      {
        label: "Source Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "Emoji-focused interactive project designed for quick browsing and playful UI experimentation.",
  },
  {
    title: "Meme Templates",
    category: "Frontend Creative App",
    tools: "HTML, CSS, JavaScript",
    accent: "rose",
    links: [
      {
        label: "Live Demo",
        url: "https://memetemplatescom.vercel.app/",
        type: "demo",
      },
      {
        label: "Source Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "Template-based meme project for fun content exploration with responsive frontend styling.",
  },
  {
    title: "Users Details",
    category: "Frontend Data App",
    tools: "HTML, CSS, JavaScript",
    accent: "cyan",
    links: [
      {
        label: "Live Demo",
        url: "https://usersdetailscom.vercel.app/",
        type: "demo",
      },
      {
        label: "Source Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "User information listing interface with structured data presentation and clear card-based UI.",
  },
  {
    title: "Recipes Data",
    category: "Frontend Data App",
    tools: "HTML, CSS, JavaScript",
    accent: "indigo",
    links: [
      {
        label: "Live Demo",
        url: "https://receipescom.vercel.app/",
        type: "demo",
      },
      {
        label: "Source Repository",
        url: "https://github.com/krishna663-wq/FS-Projects",
        type: "repo",
      },
    ],
    description:
      "Recipe data interface with easy-to-scan content blocks and smooth browsing experience.",
  },
  {
    title: "3D Demo Website",
    category: "3D Web Experience",
    tools: "HTML, CSS, JavaScript, 3D Rendering",
    accent: "lime",
    links: [
      {
        label: "Live Demo",
        url: "https://3-d-demo-website.vercel.app/",
        type: "demo",
      },
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/3D_Demo_Website",
        type: "repo",
      },
    ],
    description:
      "A 3D demo website showcasing interactive visual presentation and immersive frontend concepts.",
  },
  {
    title: "Machine Learning Notebooks",
    category: "ML / Colab Work",
    tools: "Python, Scikit-learn, Jupyter/Colab",
    accent: "amber",
    links: [
      {
        label: "View Notebooks",
        url: "https://github.com/krishna663-wq/Machine_Learning",
        type: "notebook",
      },
    ],
    description:
      "Hands-on machine learning notebook collection covering practical model building and data workflows.",
  },
  {
    title: "NLP Text Processing",
    category: "NLP Project Collection",
    tools: "Python, NLP, Text Processing",
    accent: "teal",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/NLP_text_processing",
        type: "repo",
      },
    ],
    description:
      "Natural language processing experiments focused on text cleaning, analysis, and language understanding tasks.",
  },
  {
    title: "Neural Networks",
    category: "Deep Learning Projects",
    tools: "Python, Neural Networks",
    accent: "orange",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/Neural_Networks",
        type: "repo",
      },
    ],
    description:
      "Neural network learning projects exploring model design, training, and practical deep learning experimentation.",
  },
  {
    title: "MOE Document Analyzer",
    category: "AI Application",
    tools: "Python, NLP, Mixture of Experts",
    accent: "blue",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/krishna663-wq/Documents_Analyzer",
        type: "repo",
      },
    ],
    description:
      "Mixture of Experts based document analyzer focused on smart routing and improved analysis quality.",
  },
];

const repoLinkColors = [
  "#3b82f6",
  "#8b5cf6",
  "#ef4444",
  "#14b8a6",
  "#0ea5e9",
  "#ec4899",
  "#22c55e",
  "#f97316",
  "#a855f7",
  "#06b6d4",
  "#84cc16",
  "#6366f1",
  "#f59e0b",
  "#0d9488",
  "#7c3aed",
  "#dc2626",
];

const getProjectLinkStyle = (
  projectIndex: number,
  link: ProjectLink
): CSSProperties | undefined => {
  if (link.type !== "repo") return undefined;

  return {
    ["--projectLinkColor" as string]:
      repoLinkColors[projectIndex % repoLinkColors.length],
  };
};

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card project-card--${project.accent}`}
              key={project.title}
            >
              {project.image && (
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-info">
                <div className="project-header">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{project.title}</h4>
                </div>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tools">
                  <span className="tools-label">Tools & Features</span>
                  <p>{project.tools}</p>
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`project-link-button project-link-button--${link.type}`}
                      style={getProjectLinkStyle(index, link)}
                      data-cursor="disable"
                    >
                      {link.label} <MdArrowOutward />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
