import { useState } from "react";

const initialState = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email.";
    if (formData.message.trim().length < 10) return "Message should be at least 10 characters.";
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) return setStatus({ type: "error", text: error });

    const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;
    if (!VITE_SERVICE_ID || !VITE_TEMPLATE_ID || !VITE_PUBLIC_KEY || !window.emailjs) {
      return setStatus({ type: "error", text: "EmailJS is not configured. Add VITE env values." });
    }

    try {
      setIsSending(true);
      await window.emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, formData, VITE_PUBLIC_KEY);
      setStatus({ type: "success", text: "Message sent successfully." });
      setFormData(initialState);
    } catch {
      setStatus({ type: "error", text: "Failed to send message. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section container fade-in">
      <h2>Contact</h2>
      <p className="section-copy">Email: vishakhasm1234@gmail.com • Phone: 7499752467</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <textarea name="message" placeholder="Message" rows="6" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        <button className="btn btn-primary" disabled={isSending} type="submit">{isSending ? "Sending..." : "Send"}</button>
        {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
      </form>
    </section>
  );
}

export default Contact;
