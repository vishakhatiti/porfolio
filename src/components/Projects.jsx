import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h3 className="section-title">Projects</h3>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <h4 className="text-xl font-semibold text-slate-100">{project.title}</h4>
            <p className="mt-3 text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-200">{tech}</span>
              ))}
            </div>
            <ul className="mt-5 list-inside list-disc space-y-1 text-sm text-slate-400">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 text-sm">
              {project.live && <a href={project.live} target="_blank" className="text-violet-300 hover:text-violet-200" rel="noreferrer">Live</a>}
              <a href={project.github} target="_blank" className="text-sky-300 hover:text-sky-200" rel="noreferrer">GitHub</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
