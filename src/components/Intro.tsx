export const Intro = () => (
  <section className="hero-section">
    <div className="container hero-content-wrapper">
      <div className="hero-text">
        <div className="badge-available">
          <span className="indicator">
            <span className="indicator-ping"></span>
            <span className="indicator-dot"></span>
          </span>
          <span className="badge-text">Available for work</span>
        </div>
        <h1 className="hero-title">
          Building <span className="highlight-gradient">intelligent</span>
          <br />
          web system.
        </h1>
        <p className="hero-desc">
          I'm a Full-Stack Engineer, crafting clean, accessible, and
          high-performance systems.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Work
          </a>
          <a className="btn btn-outline" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-container">
          <div className="visual-glow"></div>
          <div className="visual-image"></div>
          <div className="floating-card card-1">
            <div className="icon-box icon-box-blue">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <p className="card-label">Focus</p>
              <p className="card-value">Clean Architecture</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="icon-box icon-box-purple">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <div>
              <p className="card-label">Passion</p>
              <p className="card-value">Reliable System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
