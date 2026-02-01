import React, { useState, useEffect } from "react";
import "./dock.scss";

const icons = [
  { name: "github", src: "/doc-icons/github.svg" },
  { name: "note", src: "/doc-icons/note.svg" },
  { name: "resume", src: "/doc-icons/pdf.svg" },
  { name: "calendar", src: "/doc-icons/calendar.svg" },
  { name: "applemusic", src: "/doc-icons/music.svg" },
  { name: "mail", src: "/doc-icons/mail.svg" },
  { name: "link", src: "/doc-icons/link.svg" },
  { name: "cli", src: "/doc-icons/cli.svg" },
  { name: "files", src: "/doc-icons/finder.svg" },
];

const Dock = ({ openWindow }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`dock ${visible ? "show" : ""}`}>
      {icons.map((icon, index) => {
        const distance =
          hoveredIndex === null ? 99 : Math.abs(hoveredIndex - index);

        return (
          <div
            key={icon.name}
            className="icon"
            style={{ "--distance": distance }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openWindow(icon.name)}
          >
            <span className="glow" />
            <img src={icon.src} alt={icon.name} draggable={false} />
          </div>
        );
      })}
    </footer>
  );
};

export default Dock;
