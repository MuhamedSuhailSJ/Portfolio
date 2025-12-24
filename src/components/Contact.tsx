export const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="contact-card">
      <div className="contact-blob-1"></div>
      <div className="contact-blob-2"></div>
      <div className="contact-layout">
        <div className="contact-info">
          <span
            className="label-text"
            style={{
              color: "var(--primary)",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Get in Touch
          </span>
          <h2
            className="section-title"
            style={{
              fontSize: "2.5rem",
              lineHeight: "1.1",
              marginBottom: "1.5rem",
            }}
          >
            Let's work together.
          </h2>
          <p
            className="section-desc"
            style={{ maxWidth: "28rem", marginBottom: "2rem" }}
          >
            Have a project in mind or just want to say hi? Feel free to send me
            a message. I'm currently open for new opportunities.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <a className="contact-item" href="mailto:hello@alexdev.com">
              <div className="contact-icon-circle">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span>s.j.muhamedsuhail@outlook.in</span>
            </a>
            <a className="contact-item" href="tel:+1234567890">
              <div className="contact-icon-circle">
                <span className="material-symbols-outlined">call</span>
              </div>
              <span>+91 9345576059</span>
            </a>
            <div className="contact-item">
              <div className="contact-icon-circle">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <span>Chennai, IN</span>
            </div>
          </div>
          <div className="social-links">
            <a className="social-btn" href="#">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a className="social-btn" href="#">
              <span className="material-symbols-outlined">work</span>
            </a>
            <a className="social-btn" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-input"
                id="name"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                id="email"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-input form-textarea"
                id="message"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <button className="btn-submit" type="button">
              Send Message{" "}
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);