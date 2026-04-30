import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about" className="py-16" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="section-title">About</h2>
      <div className="card mt-6 max-w-4xl">
        <p className="leading-8 text-[var(--muted)]">I am a full-stack developer focused on MERN stack applications that are performance-driven, user-centric, and production ready. My work combines reliable backend architecture, scalable MongoDB schemas, and polished frontend interfaces with thoughtful UX.</p>
      </div>
    </motion.section>
  );
}
