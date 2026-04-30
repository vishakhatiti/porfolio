import { motion } from "framer-motion";
import { achievements, education } from "../data/projects";

export default function Achievements() {
  return (
    <>
      <section id="achievements" className="py-16">
        <h2 className="section-title">Achievements</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {achievements.map((item, idx) => (
            <motion.div key={item} className="card flex items-start gap-3" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }}>
              <span className="mt-1.5 h-2.5 w-2.5 rounded-full" style={{ background: "linear-gradient(120deg,var(--accent),var(--accent-2))" }} />
              <p className="text-sm text-[var(--muted)]">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="education" className="py-16">
        <h2 className="section-title">Education</h2>
        <div className="mt-8 grid gap-4">
          {education.map((item) => <div key={item} className="card text-sm text-[var(--muted)]">{item}</div>)}
        </div>
      </section>
    </>
  );
}
