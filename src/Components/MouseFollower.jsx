// src/components/MouseFollower.jsx
import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        top: 0,
        left: 0,
        transform: `translate(calc(${position.x}px - 12px), calc(${position.y}px - 12px))`,
      }}
    >
      <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default MouseFollower;
