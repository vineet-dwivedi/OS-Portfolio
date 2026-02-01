import React from "react";
import MacWindows from "./MacWindows";
import "./resume.scss";

const Resume = () => {
  return (
    <MacWindows>
      <div className="resume-window glass">
        <iframe
          src="/Vineet.pdf#toolbar=0&navpanes=0&scrollbar=1"
          title="Resume PDF"
        />
      </div>
    </MacWindows>
  );
};

export default Resume;