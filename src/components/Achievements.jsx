import { motion } from "framer-motion";

const items = [
  "BBA (Computer Applications), Savitribai Phule Pune University (2023–2026) — SGPA: 8.7",
  "Google Cloud Arcade 2025",
  "Apna College Sigma 8.0",
  "UI/UX Design – Coursera",
  "AI/ML & ChatGPT – Great Learning",
  "Zonal Finalist – Avishkar (3 times)",
  "Top 50 – SPPU Startup Olympiad",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <h3 className="section-title">Achievements & Education</h3>
      <div className="mt-8 grid gap-4">
        {items.map((item, idx) => (
          <motion.div key={item} className="card flex items-start gap-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-400" />
            <p className="text-slate-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
