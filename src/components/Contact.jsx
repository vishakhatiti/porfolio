import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ user_name: "", user_email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ user_name: "", user_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="section-title">Contact</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="card space-y-4">
          <input className="input" name="user_name" value={form.user_name} onChange={onChange} placeholder="Name" required />
          <input className="input" type="email" name="user_email" value={form.user_email} onChange={onChange} placeholder="Email" required />
          <textarea className="input min-h-32" name="message" value={form.message} onChange={onChange} placeholder="Message" required />
          <button className="rounded-full px-6 py-3 text-sm font-medium text-white" style={{ background: "linear-gradient(120deg,var(--accent),var(--accent-2))" }}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-sm text-emerald-500">Message sent successfully.</p>}
          {status === "error" && <p className="text-sm text-rose-500">Failed to send. Check EmailJS keys.</p>}
        </form>
        <div className="card space-y-4 text-sm text-[var(--muted)]">
          <p>Email: <a href="mailto:vishakhasm1234@gmail.com" style={{ color: "var(--accent)" }}>vishakhasm1234@gmail.com</a></p>
          <p>Phone: <a href="tel:7499752467" style={{ color: "var(--accent)" }}>7499752467</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/vishakha-mane-070053280" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>linkedin.com/in/vishakha-mane-070053280</a></p>
          <p>GitHub: <a href="https://github.com/vishakhatiti" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>github.com/vishakhatiti</a></p>
        </div>
      </div>
    </section>
  );
}
