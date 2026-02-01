import React, { useState, useEffect } from "react";
import "./app.scss";
import "./intro.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import AppleMusic from "./components/windows/AppleMusic";
import Cli from "./components/windows/Cli";
import Calendar from "./components/windows/Calendar";
import LinkedInWindow from "./components/windows/LinkedIn";
import MailWindow from "./components/windows/MailWindow";
import Files from "./components/windows/Files";
import WindowPanel from "./components/windows/WindowPanel";
import CustomCursor from "./CustomCursor";

const App = () => {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    applemusic: false,
    cli: false,
    calendar: false,
    link: false,
    mail: false,
    files: false,
    panel: false,
  });

  const openWindow = (key) => {
    if (!(key in windowState)) return;

    setWindowState((prev) => {
      const reset = Object.keys(prev).reduce(
        (acc, k) => ({ ...acc, [k]: false }),
        {}
      );
      return { ...reset, [key]: true };
    });
  };

  const closeWindow = (key) => {
    setWindowState((prev) => ({ ...prev, [key]: false }));
  };


  return (
    <>
      {showIntro && <CurtainIntro />}

      <main className={`app-wrapper ${showIntro ? "hidden" : "show"}`}>
        <CustomCursor/>

        <video
          className="bg-video"
          src="/wallpaper.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <Nav openWindow={openWindow} />

        <Dock openWindow={openWindow} />

        {windowState.github && (
          <Github onClose={() => closeWindow("github")} />
        )}

        {windowState.note && (
          <Note onClose={() => closeWindow("note")} />
        )}

        {windowState.resume && (
          <Resume onClose={() => closeWindow("resume")} />
        )}

        {windowState.applemusic && (
          <AppleMusic onClose={() => closeWindow("applemusic")} />
        )}

        {windowState.cli && (
          <Cli onClose={() => closeWindow("cli")} />
        )}

        {windowState.calendar && (
          <Calendar onClose={() => closeWindow("calendar")} />
        )}

        {windowState.link && (
          <LinkedInWindow onClose={() => closeWindow("link")} />
        )}

        {windowState.mail && (
          <MailWindow onClose={() => closeWindow("mail")} />
        )}

        {windowState.files && (
          <Files
            openWindow={openWindow}
            onClose={() => closeWindow("files")}
          />
        )}

        {windowState.panel && (
          <WindowPanel
            openWindow={openWindow}
            onClose={() => closeWindow("panel")}
          />
        )}
      </main>
    </>
  );
};

export default App;

const CurtainIntro = () => {
  return (
    <div className="intro-screen">
      <div className="stars"></div>
      <div className="curtain left"></div>
      <div className="curtain right"></div>
      <h1 className="elite-v">V</h1>
    </div>
  );
};
