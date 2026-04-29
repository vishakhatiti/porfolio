"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[84vh] items-center py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.15),transparent_35%)]" />
      <div className="grid w-full items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-sm uppercase tracking-[0.16em] text-violet-300">Full-Stack Developer</p>
          <h1 className="text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">Vishakha Mane</h1>
          <h2 className="mt-4 text-lg text-slate-300 sm:text-xl">MERN Stack — APIs — Authentication</h2>
          <p className="mt-6 max-w-xl text-slate-400">Building scalable, secure, and user-focused web applications</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-400">View Projects</a>
            <a href="#contact" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400 hover:text-violet-200">Contact Me</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto">
          <div className="rounded-full bg-gradient-to-br from-violet-500 to-sky-400 p-1 shadow-2xl shadow-violet-500/20">
            <Image src="/images/Photo.png" alt="Vishakha Mane profile" width={300} height={300} className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
