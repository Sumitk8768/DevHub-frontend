import { useContext } from "react";
import { Project } from "../context/ProjectContext";
import ProjectCard from "../components/Projects/ProjectCard";

const TrendingProjects = () => {

    const { projects, loading } = useContext(Project);

    if (loading) {
  return <h1>Loading...</h1>;
}

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10">
          <h2 className="text-4xl font-bold">Trending Projects</h2>
          <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
            The most impactful repositories being built right now.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
   <ProjectCard key={project._id} project={project} />
))}
        </div>
      </section>
  )
}

export default TrendingProjects
