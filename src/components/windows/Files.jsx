import MacWindows from "./MacWindows";
import "./files.scss";

const files = [
  {
    name: "Resume.pdf",
    icon: "📄",
    key: "resume",
  },
  {
    name: "Projects",
    icon: "📁",
    key: "github",
  },
  {
    name: "Notes.txt",
    icon: "📝",
    key: "note",
  },
];

const Files = ({ onClose, openWindow }) => {
  const handleOpen = (key) => {
    openWindow(key); 
    onClose();      
  };

  return (
    <MacWindows title="Finder" onClose={onClose}>
      <div className="finder">
        {files.map((file) => (
          <div
            className="file"
            key={file.name}
            onClick={() => handleOpen(file.key)}
          >
            <span className="icon">{file.icon}</span>
            <p>{file.name}</p>
          </div>
        ))}
      </div>
    </MacWindows>
  );
};

export default Files;
