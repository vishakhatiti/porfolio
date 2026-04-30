import { motion } from "framer-motion";

const links = ["about", "projects", "skills", "achievements", "contact"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-900/75 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-wide text-slate-100">
          Vishakha Mane
        </a>
        <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="transition hover:text-violet-300 capitalize">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
