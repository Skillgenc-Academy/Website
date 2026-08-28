import { useEffect, useState, useRef } from 'react';

export default function CountUp({ end, duration = 2, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / (duration * 1000), 1);
      
      // Easing out quint for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progressRatio, 5);
      
      const currentCount = Math.floor(easeOut * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }
      
      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    // reset for re-renders if necessary
    startTimeRef.current = null;
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  const formattedCount = count.toLocaleString();

  return <>{prefix}{formattedCount}{suffix}</>;
}
