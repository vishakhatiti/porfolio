import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[84vh] items-center py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(99,102,241,0.2),transparent_38%),radial-gradient(circle_at_90%_30%,rgba(6,182,212,0.18),transparent_35%)]" />
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>Full-Stack Developer • MERN</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Vishakha Mane</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">I design and build secure, scalable web products with clean user experiences, robust APIs, and reliable authentication systems.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full px-6 py-3 text-sm font-medium text-white" style={{ background: "linear-gradient(120deg,var(--accent),var(--accent-2))" }}>View Projects</a>
            <a href="#contact" className="rounded-full border px-6 py-3 text-sm font-medium" style={{ borderColor: "var(--border)" }}>Contact</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto card max-w-sm">
          <img src="/images/Photo.png" alt="Vishakha Mane" className="h-72 w-72 rounded-2xl object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
