export const Achievements = () => (
  <section className="achievements-section" id="achievements">
    <div className="container">
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">2+</span>
          <p className="stat-label">Years Experience</p>
        </div>
        <div className="stat-card">
          <span className="stat-number">34+</span>
          <p className="stat-label">Projects Done</p>
        </div>
        <div className="stat-card">
          <span className="stat-number">12</span>
          <p className="stat-label">Awards Won</p>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <p className="stat-label">Satisfaction</p>
        </div>
      </div>
      <div className="publications-layout">
        <div className="pub-sidebar">
          <div className="sticky-wrapper">
            <div className="section-label">
              <span className="label-line"></span>
              <span className="label-text">Research &amp; Writing</span>
            </div>
            <h3 className="section-title">Paper Publications</h3>
            <p className="section-desc">
              Contributing to the academic and professional community through
              research on web performance, accessibility, and modern interface
              design patterns.
            </p>
            <div className="focus-card">
              <div className="focus-header">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "var(--primary)" }}
                >
                  school
                </span>
                <p className="focus-title">Academic Focus</p>
              </div>
              <p className="focus-desc">
                My research primarily bridges the gap between theoretical
                computer science and practical frontend engineering.
              </p>
            </div>
          </div>
        </div>
        <div className="pub-list">
          <a className="pub-item" href="#">
            <div className="pub-item-hover-bg"></div>
            <div className="pub-item-border"></div>
            <div className="pub-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <h4 className="pub-title">
                  Optimizing React Virtual DOM Diffing for High-Frequency Data
                </h4>
                <p className="pub-authors">
                  Alex Dev, Sarah Jenkins, Dr. R. Williams
                </p>
                <div className="pub-meta">
                  <span className="pub-tag">Journal of Web Engineering</span>
                  <span className="pub-date">Vol. 14, Issue 2 • 2023</span>
                </div>
              </div>
              <div className="pub-icon-wrapper">
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </div>
          </a>
          <a className="pub-item purple" href="#">
            <div className="pub-item-hover-bg"></div>
            <div className="pub-item-border"></div>
            <div className="pub-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <h4 className="pub-title">
                  Accessibility First: A Framework for Inclusive Design Systems
                </h4>
                <p className="pub-authors">Alex Dev</p>
                <div className="pub-meta">
                  <span className="pub-tag">Intl. Conf. on HCI</span>
                  <span className="pub-date">Proceedings • 2022</span>
                </div>
              </div>
              <div className="pub-icon-wrapper">
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </div>
          </a>
          <a className="pub-item blue" href="#">
            <div className="pub-item-hover-bg"></div>
            <div className="pub-item-border"></div>
            <div className="pub-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <h4 className="pub-title">
                  Scalable State Management Patterns in Micro-Frontends
                </h4>
                <p className="pub-authors">Alex Dev, Michael Chang</p>
                <div className="pub-meta">
                  <span className="pub-tag">IEEE Software</span>
                  <span className="pub-date">Pages 45-52 • 2021</span>
                </div>
              </div>
              <div className="pub-icon-wrapper">
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);