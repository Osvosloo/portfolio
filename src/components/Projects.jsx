import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Projects.css";

const projects = [
  {
    id: 2,
    title: "Game Development",
    symbol: "🎮",
    description: "A multiplayer card game.",
    link: "https://example.com/project2",
    images: ["game-screenshot1.png", "game-screenshot2.png"], // Add actual image paths
    videoId: "your-video-id-2",
    technologies: ["Unity", "C#", "Photon"],
    features: ["Multiplayer mode", "Real-time gameplay", "Customizable cards"],
    testimonials: ["Addictive gameplay!", "Fun with friends!"],
  },
  {
    id: 3,
    title: "Big Data",
    symbol: "📊",
    description: "Machinery health reporting automation with SCADA.",
    link: "https://example.com/project3",
    images: ["bigdata-screenshot1.png", "bigdata-screenshot2.png"], // Add actual image paths
    videoId: "your-video-id-3",
    technologies: ["Python", "Pandas", "SCADA"],
    features: ["Automated reporting", "Real-time data analysis"],
    testimonials: ["Increased efficiency!", "Great insights!"],
  },
  {
    id: 4,
    title: "Goal Tracking App",
    symbol: "🎯",
    description:
      "An app for managing daily goals with progress tracking and AI consistency review.",
    link: "https://example.com/goal-tracking-app",
    images: ["goalapp-screenshot1.png", "goalapp-screenshot2.png"], // Add actual image paths
    videoId: "your-video-id-4",
    technologies: ["React", "Node.js", "MongoDB"],
    features: ["Daily reminders", "Progress tracking", "AI suggestions"],
    testimonials: ["Helped me stay on track!", "Very user-friendly!"],
  },
];

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-icon">{project.symbol}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/project/${project.id}`}>Learn More</Link>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
