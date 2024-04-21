import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        border: '2px solid #000',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className='cursor-none'
    >
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: '#000',
          borderRadius: '50%',
        }}
      >⚡</div>
    </div>
  );
};

export default CustomCursor;
