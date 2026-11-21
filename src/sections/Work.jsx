import ProjectCard from "../components/ProjectCard.jsx";
import "./Work.css";

export default function Work({ projects }) {
  return (
    <div className="work">
      {projects.map((p, i) => (
        <ProjectCard key={p.title + i} project={p} />
      ))}
    </div>
  );
}
