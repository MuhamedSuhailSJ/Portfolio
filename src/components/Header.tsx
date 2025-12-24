const Header = () => (
  <header className="site-header">
    <div className="header-container">
      <div className="logo-area">
        <div className="logo-icon">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.25rem" }}
          >
            terminal
          </span>
        </div>
        <h2 className="logo-text">Muhamed Suhail</h2>
      </div>
      <nav className="nav-links">
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#experience">
          Experience
        </a>
        <a className="nav-link" href="#achievements">
          Achievements
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </nav>
      <button className="btn-download">Download Resume</button>
      <button className="btn-mobile-menu">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>
);

export default Header;
