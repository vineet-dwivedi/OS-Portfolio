import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./macwindow.scss";

const MacWindows = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <Rnd
      style={{ zIndex: isMaximized ? 9999 : 10 }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      bounds="body"
      size={isMaximized ? { width: "100vw", height: "100vh" } : undefined}
      position={isMaximized ? { x: 0, y: 0 } : undefined}
      default={{
        x: 300,
        y: 200,
        width: "40vw",
        height: "40vh",
      }}
    >
      <div
        className={`window 
          ${isMaximized ? "maximized" : ""} 
          ${isMinimized ? "minimized" : ""}`}
      >

        <div className="nav">
          <div className="dots">

            <div
              className="dot color-1"
              onClick={() => setIsOpen(false)}
            />

            <div
              className="dot color-2"
              onClick={() => setIsMinimized(!isMinimized)}
            />

            <div
              className="dot color-3"
              onClick={() => {
                setIsMaximized(!isMaximized);
                setIsMinimized(false);
              }}
            />
          </div>

          <div className="title">
            <p>vineetdwivedi - 25h</p>
          </div>
        </div>

        {!isMinimized && (
          <div className="main-content">{children}</div>
        )}
      </div>
    </Rnd>
  );
};

export default MacWindows;