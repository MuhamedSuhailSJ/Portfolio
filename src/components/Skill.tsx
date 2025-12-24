export const Skill = () => (
  < >
    <div className="backdrop-wrapper">
      <div className="gradient-orb orb-primary"></div>
      <div className="gradient-orb orb-secondary"></div>
      <div className="texture-overlay"></div>
    </div>
    <main className="component-wrapper">
      <div className="content-container">
        <div className="header-block">
          <h2 className="section-title">Technical Skill Set</h2>
          <p className="section-desc">
            A comprehensive overview of my technical abilities and the tools I
            use to build modern, scalable web applications.
          </p>
        </div>
        <div className="categories-grid">
          <article className="skill-card theme-blue">
            <div className="top-accent-bar"></div>
            <div className="card-header-group">
              <div className="icon-wrapper">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <div className="card-title-group">
                <h3>Languages</h3>
                <p className="card-subtitle">Core Syntax</p>
              </div>
            </div>
            <div className="tags-list">
              <span className="skill-pill">Python</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">C</span>
              <span className="skill-pill">C++</span>
              <span className="skill-pill">C#</span>
              <span className="skill-pill">SQL</span>
              <span className="skill-pill">HTML/CSS</span>
            </div>
          </article>
          <article className="skill-card theme-purple">
            <div className="top-accent-bar"></div>
            <div className="card-header-group">
              <div className="icon-wrapper">
                <span className="material-symbols-outlined">desktop_windows</span>
              </div>
              <div className="card-title-group">
                <h3>Frontend</h3>
                <p className="card-subtitle">UI Development</p>
              </div>
            </div>
            <div className="tags-list">
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Angular</span>
              <span className="skill-pill">Redux</span>
              <span className="skill-pill">Bootstrap</span>
              <span className="skill-pill">Flexbox</span>
              <span className="skill-pill">Micro-frontends</span>
            </div>
          </article>
          <article className="skill-card theme-emerald">
            <div className="top-accent-bar"></div>
            <div className="card-header-group">
              <div className="icon-wrapper">
                <span className="material-symbols-outlined">dns</span>
              </div>
              <div className="card-title-group">
                <h3>Backend</h3>
                <p className="card-subtitle">Server &amp; APIs</p>
              </div>
            </div>
            <div className="tags-list">
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">.NET</span>
              <span className="skill-pill">REST APIs</span>
              <span className="skill-pill">Micro-services</span>
            </div>
          </article>
          <article className="skill-card theme-orange">
            <div className="top-accent-bar"></div>
            <div className="card-header-group">
              <div className="icon-wrapper">
                <span className="material-symbols-outlined">database</span>
              </div>
              <div className="card-title-group">
                <h3>Databases</h3>
                <p className="card-subtitle">Data Storage</p>
              </div>
            </div>
            <div className="tags-list">
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">SQLite</span>
            </div>
          </article>
          <article className="skill-card theme-pink card-wide-layout">
            <div className="top-accent-bar"></div>
            <div className="card-header-group">
              <div className="icon-wrapper">
                <span className="material-symbols-outlined">construction</span>
              </div>
              <div className="card-title-group">
                <h3>Tools &amp; Concepts</h3>
                <p className="card-subtitle">DevOps &amp; Theory</p>
              </div>
            </div>
            <div className="tags-list">
              <span className="skill-pill">Git</span>
              <span className="skill-pill">Linux</span>
              <span className="skill-pill">Power BI</span>
              <span className="skill-pill">AI/ML</span>
              <span className="skill-pill">NumPy</span>
              <span className="skill-pill">OOP</span>
              <span className="skill-pill">API Testing</span>
              <span className="skill-pill">Pandas</span>
              <span className="skill-pill">AWS</span>
              <span className="skill-pill">Scikit-Learn</span>
            </div>
          </article>
        </div>
      </div>
    </main>
  </ >
);