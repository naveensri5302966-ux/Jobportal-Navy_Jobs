function Header({ setPage, currentPage }) {
  return (
    <header className="navbar">
      <div className="logo" onClick={() => setPage("home")}>
        <span className="logo-symbol">◈</span>
        <span className="logo-text">JOBS-NAVY</span>
      </div>

      <nav className="navbar-links">
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className={currentPage === "jobs" ? "active" : ""}
          onClick={() => setPage("jobs")}
        >
          Jobs
        </button>

        <button
          className={currentPage === "saved" ? "active" : ""}
          onClick={() => setPage("saved")}
        >
          Saved
        </button>

        <button
          className={currentPage === "alerts" ? "active" : ""}
          onClick={() => setPage("alerts")}
        >
          Alerts
        </button>

        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={currentPage === "profile" ? "active" : ""}
          onClick={() => setPage("profile")}
        >
          Profile
        </button>
      </nav>
    </header>
  );
}

export default Header;