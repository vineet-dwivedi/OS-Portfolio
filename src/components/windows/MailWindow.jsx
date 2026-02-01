import React from "react";
import MacWindows from "./MacWindows";
import "./mail.scss";

const MailWindow = () => {
  const openMail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=vineetdwivedi409@gmail.com&su=Hello%20Vineet&body=Hi%20Vineet",
      "_blank"
    );
  };

  return (
    <MacWindows>
      <div className="mail-window">
        <h2>Contact Me</h2>
        <p>Send me an email directly via Gmail</p>

        <button onClick={openMail}>Compose Mail</button>
      </div>
    </MacWindows>
  );
};

export default MailWindow;
