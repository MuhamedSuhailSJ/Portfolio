export const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="projects-header">
      <div className="projects-intro">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-desc" style={{ maxWidth: "32rem" }}>
          A showcase of some of my best work in web development and UI/UX
          design.
        </p>
      </div>
      <a className="link-more" href="#">
        See all projects{" "}
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "0.875rem" }}
        >
          arrow_forward
        </span>
      </a>
    </div>
    <div className="projects-grid">
      <div className="project-card">
        <div className="project-image-wrapper">
          <div className="project-overlay"></div>
          <div
            className="project-bg"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXBLdWsP5hF64vPRCZMxbYHgr-t21ZiOTt6RRC7WAeRoj_Ijo8sdNgoskwzd7VQn20wW0sM9HZgWuH46yAJTA9gPThlTLPxtMHPaFD7PyUEcEUnFSCS0bZwpC_hOnBhRXK86c8f2zfBqCuOEh1smUUT1fxE3fAjI9HURlmjp58ZsZO0DAejvnu2DqWcEUFVohmgxirEpaQt74E2jiuLSCJT6OEc5w0F9qGa10y7z8ugxXHRvvQaEp_r2tlrgZCJ_Q2UnYVdXh1aG8')`,
            }}
          ></div>
        </div>
        <div className="project-content">
          <div className="tags">
            <span className="tag tag-primary">React</span>
            <span className="tag tag-neutral">Node.js</span>
          </div>
          <h3 className="project-title">E-Commerce Redesign</h3>
          <p className="project-desc">
            A complete overhaul of an existing platform focusing on conversion
            optimization and mobile responsiveness.
          </p>
          <a className="link-case" href="#">
            View Case Study{" "}
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "0.875rem", marginLeft: "0.25rem" }}
            >
              arrow_outward
            </span>
          </a>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image-wrapper">
          <div className="project-overlay"></div>
          <div
            className="project-bg"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdwhvHIy67pZHUs_WxHtHCDt1AqBuzq5hDv7tj2ufyNzR6wtBPgpUDjJ1CK-pje6TYFLYcfJPYGAYcVjMPCMqHDWwwuXzSmvuZ4jUUUn4KXj3uYIfV5OarvCf5z3WLgIKVD12zgHCyhuoNrvjjVW2FfuZeyil7QEZ8xH4KjWYRIVNtoOYB3Hh8gifsY6hLJ_-bTUW4Iz3ydlWv_yF-xltZlzs3k1DoCZhoL8lxNWCvKFQXoUrdlR-FFcHZT5XP8eTW1kh_091iky8')`,
            }}
          ></div>
        </div>
        <div className="project-content">
          <div className="tags">
            <span className="tag tag-primary">Vue</span>
            <span className="tag tag-neutral">Firebase</span>
          </div>
          <h3 className="project-title">Fintech Dashboard</h3>
          <p className="project-desc">
            Real-time data visualization dashboard for tracking personal
            investments and crypto assets.
          </p>
          <a className="link-case" href="#">
            View Case Study{" "}
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "0.875rem", marginLeft: "0.25rem" }}
            >
              arrow_outward
            </span>
          </a>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image-wrapper">
          <div className="project-overlay"></div>
          <div
            className="project-bg"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAziNYcGbqNY9Q8GTW0TQamEzbUKWGZXjoSAhyt_vpyWcfeuOGhSZOY4MgMtMX2o6HjBi1rTbR19sRVrajExusZlwT4pE6wltRwGy9AE3a-1n9DVIja3FpS5EsOwuGsX5981HhiXYXQWX8JdE54ql4tAxLXmbDR9jrwo2PInA3yBPbzlasfOKRyZuwRdvpSeEJ872Z8pzlROxLBafmypgCwXXgCKZZH2LsRlGbMgElspNb423-EWXASw7umCNbCekKVG-gCBFWR4Rk')`,
            }}
          ></div>
        </div>
        <div className="project-content">
          <div className="tags">
            <span className="tag tag-primary">Swift</span>
            <span className="tag tag-neutral">UIKit</span>
          </div>
          <h3 className="project-title">Travel App</h3>
          <p className="project-desc">
            Native iOS application helping users discover hidden gems and plan
            their perfect itinerary.
          </p>
          <a className="link-case" href="#">
            View Case Study{" "}
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "0.875rem", marginLeft: "0.25rem" }}
            >
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);