import { motion } from "framer-motion";
import { skills } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="section-title">Skills</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items], i) => (
          <motion.div key={group} className="card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <h3 className="text-base font-semibold">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="tag">{item}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
