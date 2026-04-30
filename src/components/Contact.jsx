import { useEffect, useState } from "react";

const initial = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  useEffect(() => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    if (window.emailjs && publicKey) {
      window.emailjs.init(publicKey);
    }
  }, []);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Valid email is required.";
    if (formData.message.trim().length < 15) nextErrors.message = "Message must be at least 15 characters.";
    return nextErrors;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setStatus({ type: "", text: "" });

    if (Object.keys(nextErrors).length) return;

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!window.emailjs || !serviceId || !templateId || !publicKey) {
      setStatus({ type: "error", text: "Email service is not configured yet. Add EmailJS script and VITE variables." });
      return;
    }

    try {
      setLoading(true);
      await window.emailjs.send(serviceId, templateId, formData, publicKey);
      setStatus({ type: "success", text: "Message sent successfully. I will get back to you soon." });
      setFormData(initial);
    } catch {
      setStatus({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section shell fade-in-section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={formData.name} onChange={onChange} placeholder="Your name" />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={onChange} placeholder="your@email.com" />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={onChange} placeholder="Tell me about your project..." />
        {errors.message && <span className="error">{errors.message}</span>}

        <button className="btn btn-primary" disabled={loading} type="submit">
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status.text && <p className={`status ${status.type}`}>{status.text}</p>}
      </form>
    </section>
  );
}

export default Contact;
