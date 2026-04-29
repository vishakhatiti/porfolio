"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ user_name: "", user_email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ user_name: "", user_email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <h3 className="section-title">Contact</h3>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.form onSubmit={sendEmail} className="card space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <input name="user_name" value={form.user_name} onChange={handleChange} placeholder="Name" required className="field" />
          <input type="email" name="user_email" value={form.user_email} onChange={handleChange} placeholder="Email" required className="field" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required rows={5} className="field" />
          <button disabled={loading} className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-400 disabled:opacity-60">{loading ? "Sending..." : "Send Message"}</button>
          {status === "success" && <p className="text-sm text-emerald-400">Message sent successfully.</p>}
          {status === "error" && <p className="text-sm text-rose-400">Failed to send message. Please try again.</p>}
        </motion.form>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4 className="text-lg font-semibold text-slate-100">Let&apos;s connect</h4>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>Email: <a href="mailto:vishakhasm1234@gmail.com" className="text-violet-300">vishakhasm1234@gmail.com</a></li>
            <li>Phone: <a href="tel:7499752467" className="text-violet-300">7499752467</a></li>
            <li>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-violet-300">Profile</a></li>
            <li>GitHub: <a href="https://github.com/vishakhatiti" target="_blank" rel="noreferrer" className="text-violet-300">vishakhatiti</a></li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
