export const Experience = () => (
  <section className="experience-section" id="experience">
    <div className="container" style={{ maxWidth: "56rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 className="section-title" style={{ marginBottom: "1rem" }}>
          Professional Journey
        </h2>
        <p className="section-desc">
          A timeline of my career and key milestones.
        </p>
      </div>
      <div className="timeline-container">
        <div className="timeline-line-center"></div>
        <div className="timeline-line-left"></div>
        <div className="timeline-item">
          <div className="timeline-content-left">
            <h3 className="role-title">Software Engineer Intern</h3>
            <p className="company-name">AIRBUS</p>
            <p className="role-year">Aug, 2025 - Present</p>
            <p className="role-desc">
              Engineered a large-scale, modular application using Microservice
              and Micro-frontend architecture, reducing system coupling by 40%
              and improving maintainability. Employed Angular/React for the
              frontend and ASP.NET for the backend to enhance application
              efficiency. Designed the system to be highly decoupled and
              resilient, significantly enhancing stability. Improved application
              performance more than 30%.
            </p>
          </div>
          <div className="timeline-dot dot-active"></div>
          <div
            className="timeline-content-right"
            style={{ display: "none" }}
          ></div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content-left"></div>
          <div className="timeline-dot dot-inactive"></div>
          <div className="timeline-content-right">
            <h3 className="role-title">ML Research Intern</h3>
            <p className="company-name">
              National Institute Of Technology, Tiruchirappalli
            </p>
            <p className="role-year">Jan, 2025 - Jul, 2025</p>
            <p className="role-desc">
              Conducted research on Machine Learning models focused on
              large-scale time-series data. Developed a project titled ”Deep
              Data-Driven Prediction of Battery Temperature with LSTM and GRU
              Models” having 99.99% prediction accuracy and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
