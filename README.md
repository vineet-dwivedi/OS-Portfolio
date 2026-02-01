# 🚀 VineetOS — macOS-Inspired Cinematic Portfolio

> A fully interactive **macOS-style portfolio OS** built using **React + SCSS**,  
> featuring glassmorphism windows, animated dock, cinematic intro, and real app interactions.

---

## ✨ About the Project

**VineetOS** is not a normal portfolio website.  
It is a **desktop-like operating system experience on the web**, inspired by **macOS UI/UX**.

This project is designed to demonstrate:
- Advanced frontend architecture
- UI/UX polish at product level
- Window & state orchestration
- Animation timing and interaction design

---

## 🎬 Features

- 🪟 Draggable macOS-style windows  
- 🧲 Animated Dock with hover magnification  
- 🌌 Cinematic curtain intro animation  
- 🧊 Glassmorphism UI (blur + depth)  
- 🎥 Video wallpaper background  
- 🧭 macOS-inspired top navigation bar  
- ⚙️ Single active window system  
- 📂 Finder-style file manager  
- 📆 Scrollable calendar app  
- 💻 CLI terminal emulator  
- 🔗 LinkedIn, GitHub & Mail integrations  

---

## 🧠 Architecture Philosophy

- **Single Source of Truth** for window state (`App.jsx`)
- Clean separation between UI & logic
- macOS-accurate behavior:
  - Only one window open at a time
  - Finder opens apps
  - Dock launches apps
  - Panel shortcuts work like macOS

---

## 🗂️ Project Structure

```bash
VineetOS/
├── public/
│   ├── wallpaper.mp4
│   ├── Vineet.pdf
│   └── doc-icons/
│       ├── github.svg
│       ├── note.svg
│       ├── pdf.svg
│       ├── calendar.svg
│       ├── spotify.svg
│       ├── mail.svg
│       ├── link.svg
│       ├── cli.svg
│       ├── files.svg
│       ├── refresh.svg
│       └── wifi.svg
│
├── src/
│   ├── assets/
│   │   └── github.json
│   │
│   ├── components/
│   │   ├── Dock.jsx
│   │   ├── Nav.jsx
│   │   ├── DateTime.jsx
│   │   └── windows/
│   │       ├── MacWindows.jsx
│   │       ├── Github.jsx
│   │       ├── Note.jsx
│   │       ├── Resume.jsx
│   │       ├── AppleMusic.jsx
│   │       ├── Cli.jsx
│   │       ├── Calendar.jsx
│   │       ├── Files.jsx
│   │       ├── LinkedInWindow.jsx
│   │       ├── MailWindow.jsx
│   │       └── WindowPanel.jsx
│
│   ├── scss/
│   │   ├── app.scss
│   │   ├── dock.scss
│   │   ├── nav.scss
│   │   ├── intro.scss
│   │   └── window.scss
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
│
├── package.json
└── README.md
```
---

## 🧩 Core Apps

### 🧲 Dock
- macOS-style icon magnification
- Smooth hover physics & elastic scaling
- App launch animations with focus switching

### 🪟 MacWindows
- Draggable & closable windows
- Minimize & refresh behavior (macOS-inspired)
- Glassmorphism blur with cinematic depth shadows

### 📂 Finder
- **Resume** → Opens Resume window
- **Projects** → Opens GitHub projects window
- **Notes** → Opens Notes app
- Finder auto-closes after opening apps (macOS behavior)

### 📆 Calendar
- Scrollable month view
- Highlights current day
- Clean glass UI with soft borders

### 💻 CLI
- Terminal-style command interface
- Scrollable output area
- Cinematic dark theme with glass accents

---

## ⚙️ Tech Stack

- **React (Vite)**
- **SCSS** (Glassmorphism, animations, depth effects)
- **react-rnd** (drag & resize windows)
- **Modern CSS**
  - `backdrop-filter`
  - `transform`
  - GPU-accelerated animations
- **State-driven UI architecture** (single source of truth)

---

## 🚀 Getting Started

```bash
git clone https://github.com/vineet-dwivedi/VineetOS.git
cd VineetOS
npm install
npm run dev

---

## 🖥️ Best Experience

For the best and smoothest experience, use the following setup:

- Desktop / Laptop view recommended  
- Chromium-based browsers:
  - Google Chrome
  - Microsoft Edge
  - Brave  
- Browser zoom level set to **100%**
- Hardware acceleration **enabled** in browser settings

---
```
## 📬 Contact

Feel free to connect or reach out:

- **Author:** **Vineet Dwivedi**
- **GitHub:** https://github.com/vineet-dwivedi  
- **LinkedIn:** https://linkedin.com/in/vineet-dwivedi  
- **Email:** vineetdwivedi409@gmail.com