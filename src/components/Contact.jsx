import { useEffect, useState } from "react";

const initial = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  useEffect(() => {
    if (window.emailjs && import.meta.env.VITE_PUBLIC_KEY) {
      window.emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
    }
  }, []);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Valid email is required.";
    if (formData.message.trim().length < 15) nextErrors.message = "Message must be at least 15 characters.";
    return nextErrors;
  };

  const onChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setStatus({ type: "", text: "" });
    if (Object.keys(nextErrors).length || !window.emailjs) return;

    try {
      setLoading(true);
      await window.emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData
      );
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
        <label>Name<input type="text" name="name" value={formData.name} onChange={onChange} />{errors.name && <span className="error">{errors.name}</span>}</label>
        <label>Email<input type="email" name="email" value={formData.email} onChange={onChange} />{errors.email && <span className="error">{errors.email}</span>}</label>
        <label>Message<textarea name="message" rows="5" value={formData.message} onChange={onChange} />{errors.message && <span className="error">{errors.message}</span>}</label>
        <button className="btn btn-primary" disabled={loading} type="submit">{loading ? "Sending..." : "Send Message"}</button>
        {status.text && <p className={`status ${status.type}`}>{status.text}</p>}
      </form>
    </section>
  );
}

export default Contact;
