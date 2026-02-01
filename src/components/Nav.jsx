import React, { useEffect, useState } from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = ({ openWindow }) => {
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => window.location.reload(), 600);
  };

  return (
    <nav className={`mac-nav ${visible ? "show" : ""}`}>
      
      <div className="left">
        <div className="icon animated-v">
          <span>V</span>
        </div>

        <div className="nav-item strong">
          <p>Vineet Dwivedi</p>
        </div>

        
        <div className="nav-item clickable" onClick={() => openWindow("files")}>
          <p>File</p>
        </div>

        
        <div className="nav-item clickable" onClick={() => openWindow("panel")}>
          <p>Window</p>
        </div>

        
        <div className="nav-item clickable" onClick={() => openWindow("cli")}>
          <p>Terminal</p>
        </div>
      </div>

      
      <div className="right">
        <div
          className={`nav-icon refresh ${refreshing ? "spin" : ""}`}
          onClick={handleRefresh}
          title="Refresh"
        >
          <img src="/doc-icons/refresh.svg" alt="refresh" />
        </div>

        <div className="nav-icon">
          <img src="/doc-icons/wifi.svg" alt="wifi" />
        </div>

        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
