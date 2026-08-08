import { useEffect, useState } from 'react';

export default function useFPSMonitor() {
  const [fps, setFps] = useState(60);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId;
    let lowFpsStreak = 0;

    const measureFPS = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (now - lastTime));
        setFps(currentFps);

        if (currentFps < 45) {
          lowFpsStreak++;
          if (lowFpsStreak >= 3) {
            // Consistent low performance over 3 seconds
            setIsLowPerformance(true);
            document.documentElement.setAttribute('data-low-performance', 'true');
          }
        } else {
          lowFpsStreak = Math.max(0, lowFpsStreak - 1);
          if (lowFpsStreak === 0 && currentFps >= 55) {
            // Recovered
            setIsLowPerformance(false);
            document.documentElement.removeAttribute('data-low-performance');
          }
        }

        frameCount = 0;
        lastTime = now;
      }

      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { fps, isLowPerformance };
}
