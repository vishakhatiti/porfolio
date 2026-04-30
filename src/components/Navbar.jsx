import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["about", "projects", "skills", "achievements", "education", "contact"];

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header initial={{ y: -32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-[0.08em]">Vishakha Mane</a>
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <li key={link}><a href={`#${link}`} className="capitalize text-[var(--muted)] hover:text-[var(--text)]">{link}</a></li>
          ))}
        </ul>
        <button onClick={() => setDark((v) => !v)} className="rounded-full border px-3 py-1.5 text-xs" style={{ borderColor: "var(--border)" }}>{dark ? "Light" : "Dark"}</button>
      </nav>
    </motion.header>
  );
}
