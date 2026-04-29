import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 Vishakha Mane</p>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-violet-300"><FaLinkedin /></a>
          <a href="https://github.com/vishakhatiti" target="_blank" rel="noreferrer" className="hover:text-violet-300"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}
