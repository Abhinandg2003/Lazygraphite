import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted (CRITICAL)
useEffect(() => {
  requestAnimationFrame(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  });
}, []);


  // Watch for theme changes
  useEffect(() => {
    if (!mounted) return;

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [mounted]);

  // Generate stars only in dark mode
  useEffect(() => {
    if (!mounted || !isDark) {
      setStars([]);
      return;
    }

    generateStars();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isDark, mounted]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  // 🌞 No stars in light mode or before mount
  if (!mounted || !isDark) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `
              pulse-subtle ${star.animationDuration}s ease-in-out infinite,
              star-move ${star.animationDuration * 3}s ease-in-out infinite
            `,
          }}
        />
      ))}
    </div>
  );
};
