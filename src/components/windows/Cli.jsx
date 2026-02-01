import React from 'react'
import MacWindow from './MacWindows'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => `I am an aspiring Frontend Developer passionate about building
high-performance, user-centric web applications. Skilled in React.js,
modern JavaScript, and responsive design. Currently pursuing B.Tech in
Computer Science at JNCT and training at Sheriyans Coding School.

I focus on clean code architecture, component reusability, and
delivering smooth user experiences. Always learning, always building. 🚀`
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `
┌─────────────────────────────────────────────┐
│              TECHNICAL SKILLS                │
├─────────────────────────────────────────────┤
│ Frontend     → React.js, JavaScript (ES6+)   │
│                HTML5, CSS3, Tailwind CSS      │
│                Responsive & Mobile-First      │
│                                               │
│ State Mgmt   → Context API, React Hooks       │
│                useState, useEffect,           │
│                useContext, useReducer          │
│                                               │
│ APIs & Async → RESTful APIs, Axios            │
│                Fetch API, Async/Await, JSON   │
│                                               │
│ Routing      → React Router                   │
│                                               │
│ Tools        → Git, GitHub, NPM, VS Code      │
│                Chrome DevTools                 │
│                                               │
│ Deployment   → Vercel, Netlify, CI/CD         │
│                                               │
│ Concepts     → Component-Driven Architecture  │
│                DOM Manipulation               │
│                Dark/Light Theme Management    │
│                Clean Code, Agile              │
└─────────────────────────────────────────────┘`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `
┌─────────────────────────────────────────────┐
│                 PROJECTS                     │
├─────────────────────────────────────────────┤
│                                               │
│ 1. JobSphere – Job Discovery Dashboard        │
│    → React.js | Context API | Tailwind CSS    │
│    → User auth, protected routes,             │
│      application tracking & dark/light mode   │
│                                               │
│ 2. User Explorer Dashboard                    │
│    → React.js | RESTful API | Axios           │
│    → Reusable components, dynamic data,       │
│      error handling & theme persistence       │
│                                               │
│ 3. Daily Planner Application                  │
│    → Vanilla JS | HTML5 | CSS3                │
│    → Pomodoro timer, task management,         │
│      water tracking & note-taking             │
│                                               │
│ 🔗 GitHub  → github.com/vineet-dwivedi        │
│ 🌐 Portfolio → portfolio-pearl-nine.vercel.app │
└─────────────────────────────────────────────┘`
        },
        experience: {
            description: 'Display work experience & education',
            usage: 'experience',
            fn: () => `
┌─────────────────────────────────────────────┐
│           EXPERIENCE & EDUCATION             │
├─────────────────────────────────────────────┤
│                                               │
│ 📌 Open Source Dev & Personal Projects        │
│    Nov 2024 – Present                         │
│    → Built 3+ production-grade React apps     │
│    → Mastered custom hooks, Context API       │
│    → Deployed to Vercel & Netlify (CI/CD)     │
│    → Git branching & structured commits       │
│                                               │
│ 🎓 B.Tech Computer Science                    │
│    Jawaharlal Nehru College of Technology     │
│    8th Sem (Ongoing) | Expected: May 2026     │
│    Coursework: DSA, OOP, DBMS, Networks       │
│                                               │
│ 🎓 Web Development Cohort 2.0                  │
│    Sheriyans Coding School (Ongoing)          │
│    React.js, Modern JS, Production Frontend   │
└─────────────────────────────────────────────┘`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `
┌─────────────────────────────────────────────┐
│              CONTACT ME                      │
├─────────────────────────────────────────────┤
│                                               │
│  📧  vineetdwivedi409@gmail.com               │
│  📞  +91 8349877758                           │
│  📍  Indore, Madhya Pradesh, India            │
│                                               │
└─────────────────────────────────────────────┘`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/vineet-dwivedi', '_blank')
                return '🚀 Opening GitHub profile... github.com/vineet-dwivedi'
            }
        },
        linkedin: {
            description: 'Open LinkedIn profile',
            usage: 'linkedin',
            fn: () => {
                window.open('https://linkedin.com/in/vineet-dwivedi', '_blank')
                return '🚀 Opening LinkedIn... linkedin.com/in/vineet-dwivedi'
            }
        },
        portfolio: {
            description: 'Open portfolio website',
            usage: 'portfolio',
            fn: () => {
                window.open('https://portfolio-pearl-nine.vercel.app', '_blank')
                return '🚀 Opening Portfolio... portfolio-pearl-nine.vercel.app'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => '📄 Resume download started... Good luck! 🍀'
        },
        social: {
            description: 'View all social & profile links',
            usage: 'social',
            fn: () => `
┌─────────────────────────────────────────────┐
│              SOCIAL LINKS                    │
├─────────────────────────────────────────────┤
│                                               │
│  💼  linkedin.com/in/vineet-dwivedi           │
│  🐙  github.com/vineet-dwivedi                │
│  🌐  portfolio-pearl-nine.vercel.app          │
│                                               │
└─────────────────────────────────────────────┘`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔══════════════════════════════════════════════╗
║                                              ║
║     Welcome to Vineet Dwivedi's CLI! 👋      ║
║     Aspiring Frontend Developer              ║
║                                              ║
╚══════════════════════════════════════════════╝

Hey there! 🙌 This is my interactive portfolio.
Explore my skills, projects & experience using
terminal commands below.

Type 'help' to see all available commands, or try:

  • about        → Learn about me
  • skills       → View my tech stack
  • projects     → Check out my work
  • experience   → See my journey so far
  • contact      → Get in touch
  • social       → All my profile links
  • github       → Open my GitHub
  • linkedin     → Open my LinkedIn
  • portfolio    → Open my portfolio site
  • resume       → Download my resume

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'vineet@portfolio:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli