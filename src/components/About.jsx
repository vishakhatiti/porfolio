"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="section-title">About</h3>
      <div className="card mt-6 max-w-4xl">
        <p className="leading-7 text-slate-300">
          I am a full-stack developer focused on crafting reliable web applications with the MERN stack. I build seamless frontend experiences, scalable backend services, and robust authentication workflows using JWT and OAuth2. I enjoy integrating APIs, solving real-world problems with data-driven features, and delivering products that are secure, performant, and intuitive for users.
        </p>
      </div>
    </motion.section>
  );
}
