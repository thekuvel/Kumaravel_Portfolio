import { Link } from "react-router-dom";
import projectsData from "./projectsData";

export default function Projects() {
  return (
    <div className="grid gap-8">
      {projectsData.map((project) => (
        <section
          key={project.title}
          className="grid gap-20 grid-cols-2 lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <img
              className="border border-none rounded"
              src={project.images[0]}
              alt="img"
            />
          </div>
          <div className="grid gap-4 ">
            <h1 className="font-semibold text-3xl">{project.title}</h1>
            <p className="text-neutral-400">{project.description}</p>
            <div className="flex gap-4">
              {project.images[0] && (
                <Link
                  to="#"
                  className="flex items-center px-2 py-1 border rounded"
                >
                  View design
                </Link>
              )}
              {project.deployedLink && (
                <Link
                  to={project.deployedLink}
                  target="_blank"
                  className="flex items-center px-2 py-1 border rounded"
                >
                  Deployed link
                </Link>
              )}
              {project.repositoryLink && (
                <Link
                  to={project.repositoryLink}
                  target="_blank"
                  className="flex items-center px-2 py-1 border rounded"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
