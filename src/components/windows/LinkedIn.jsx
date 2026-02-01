import React from "react";
import MacWindows from "./MacWindows";
import "./linkedin.scss";

const LinkedInWindow = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/vineet-dwivedi/", "_blank", "noopener,noreferrer");
  };

  return (
    <MacWindows>
      <div className="linkedin-window">
        <h2>LinkedIn Profile</h2>
        <p>Click the button below to view my LinkedIn.</p>
        <button onClick={openLinkedIn}>Open LinkedIn</button>
      </div>
    </MacWindows>
  );
};

export default LinkedInWindow;
