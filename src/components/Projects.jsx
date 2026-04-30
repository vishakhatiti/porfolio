import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="section-title">Selected Projects</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article key={project.title} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="tag">{tech}</span>)}</div>
            <ul className="mt-5 list-inside list-disc space-y-1 text-sm text-[var(--muted)]">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="mt-6 flex gap-5 text-sm font-medium">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>Live Project</a>}
              <a href={project.github} target="_blank" rel="noreferrer" style={{ color: "var(--accent-2)" }}>GitHub</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
