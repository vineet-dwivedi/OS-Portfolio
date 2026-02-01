import MacWindows from "./MacWindows";
import "./windowpanel.scss";

const WindowPanel = ({ openWindow, onClose }) => {
  return (
    <MacWindows title="System Overview" onClose={onClose}>
      <div className="window-panel">

        <section className="hero">
          <h1>Welcome back, Vineet</h1>
          <p>macOS-style system control</p>
        </section>

        <section className="stats">
          <div className="stat">
            <span>OS</span>
            <p>Vineet OS</p>
          </div>
          <div className="stat">
            <span>Role</span>
            <p>Full-Stack Engineer</p>
          </div>
          <div className="stat">
            <span>Status</span>
            <p>Online</p>
          </div>
        </section>

        <section className="apps">
          <h3>Quick Launch</h3>

          <div className="app-grid">
            <button onClick={() => openWindow("cli")}>Terminal</button>
            <button onClick={() => openWindow("github")}>GitHub</button>
            <button onClick={() => openWindow("note")}>Notes</button>
            <button onClick={() => openWindow("calendar")}>Calendar</button>
            <button onClick={() => openWindow("applemusic")}>Music</button>
            <button onClick={() => openWindow("resume")}>Resume</button>
          </div>
        </section>

      </div>
    </MacWindows>
  );
};

export default WindowPanel;
