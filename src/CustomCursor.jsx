import { useEffect, useRef } from "react";
import "./cursor.scss";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  let lastX = window.innerWidth / 2;
  let lastY = window.innerHeight / 2;

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = lastX;
    let mouseY = lastY;
    let currentX = lastX;
    let currentY = lastY;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.min(Math.sqrt(dx * dx + dy * dy), 30);

      const p = document.createElement("span");
      p.className = "cursor-sparkle";
      p.style.left = lastX + "px";
      p.style.top = lastY + "px";
      p.style.setProperty("--dx", `${dx * 0.3}px`);
      p.style.setProperty("--dy", `${dy * 0.3}px`);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1200);


      const scaleX = 1 + speed * 0.015;
      const scaleY = 1 - speed * 0.01;
      cursor.style.setProperty("--sx", scaleX);
      cursor.style.setProperty("--sy", scaleY);

      lastX = mouseX;
      lastY = mouseY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      cursor.style.transform = `
        translate3d(${currentX}px, ${currentY}px, 0)
        translate(-50%, -50%)
        scale(var(--sx), var(--sy))
      `;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return <div ref={cursorRef} className="cinematic-cursor" />;
};

export default CustomCursor;
