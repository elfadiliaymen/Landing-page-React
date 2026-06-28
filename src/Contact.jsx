import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
  e.preventDefault();

  if (form.name.length < 3) {
    alert("Name must contain at least 3 characters.");
    return;
  }

  if (!form.email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  if (form.message.length < 10) {
    alert("Message must contain at least 10 characters.");
    return;
  }

  alert(
`Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
  );

  setForm({
    name: "",
    email: "",
    message: "",
  });
}

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">

        <div className="contact-content">

          <span className="contact-label">
            Connect
          </span>

          <h2 className="contact-title">
            Get in touch
          </h2>

          <p className="contact-subtitle">
            We're here to help you optimize your system.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">

            <div>
              <label className="form-label">Name</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="form-label">Email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label className="form-label">Message</label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Tell us what you need"
                required
              ></textarea>
            </div>

            <button className="contact-submit">
              Send
            </button>

          </form>

        </div>

        <div className="contact-image">
          <img src="/public/pexels-tima-miroshnichenko-5453841.jpg" alt="Contact" />
        </div>

      </div>
    </section>
  );
}

export default Contact;