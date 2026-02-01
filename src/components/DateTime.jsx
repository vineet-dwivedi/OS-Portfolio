import { useEffect, useState } from "react";

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  const date = time.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const clock = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <span style={styles.datetime}>
      {date} {clock}
    </span>
  );
};

export default DateTime;

const styles = {
  datetime: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: "rgba(255,255,255,0.85)",
    letterSpacing: "0.04em",
    userSelect: "none",

    padding: "0.15rem 0.45rem",
    borderRadius: "0.4rem",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",

    textShadow: "0 0 6px rgba(255,255,255,0.15)",
    transition: "opacity 0.3s ease",
  },
};
