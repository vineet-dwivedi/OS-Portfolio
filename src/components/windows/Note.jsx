import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindows from "./MacWindows";
import "./note.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Note = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindows>
      <div className="note-window glass">
        {markdown ? (
          <Markdown
            components={{
              code({ inline, className, children }) {
                if (inline) {
                  return <code className="inline-code">{children}</code>;
                }

                return (
                  <div className="terminal">
                    <div className="terminal-header">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>

                    <SyntaxHighlighter
                      style={atelierDuneDark}
                      language="javascript"
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                );
              },
            }}
          >
            {markdown}
          </Markdown>
        ) : (
          <p className="loading">Loading notes…</p>
        )}
      </div>
    </MacWindows>
  );
};

export default Note;