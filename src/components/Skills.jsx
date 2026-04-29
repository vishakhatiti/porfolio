"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"] },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Database", items: ["MySQL", "MongoDB"] },
  { title: "APIs & Auth", items: ["REST APIs", "JWT", "OAuth2"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "Hoppscotch", "VS Code"] },
  { title: "Deployment", items: ["Vercel", "Render"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h3 className="section-title">Skills</h3>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div key={group.title} className="card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <h4 className="text-base font-semibold text-slate-100">{group.title}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
