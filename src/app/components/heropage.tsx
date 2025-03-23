// AnimatedSvg.tsx - The animation component
"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';

// Props to make the component configurable
interface AnimatedSvgProps {
  // Animation configuration
  amplitude?: number; // Maximum distance from center (vertical)
  period?: number; // Time for one complete oscillation (in seconds)
  verticalSpeed?: number; // Speed multiplier for vertical movement
  lateralNoiseAmount?: number; // Amount of side-to-side movement
  lateralNoiseSpeed?: number; // How quickly the lateral noise changes
  centerX?: number; // Center X position
  centerY?: number; // Center Y position
  
  // Custom SVG content to replace the ball
  customSvgContent?: ReactNode;
}

const AnimatedSvg: React.FC<AnimatedSvgProps> = ({
  amplitude = 70, // Default amplitude
  period = 2, // Default period
  verticalSpeed = 1, // Default vertical speed multiplier
  lateralNoiseAmount = 5, // Default lateral noise amount
  lateralNoiseSpeed = 1.5, // Default lateral noise speed
  centerX = 100,
  centerY = 100,
  customSvgContent
}) => {
  // Animation state
  const [position, setPosition] = useState({ x: centerX, y: centerY });
  const [isAnimating, setIsAnimating] = useState(true); // Start animating immediately
  const [color, setColor] = useState('#3b82f6'); // Blue color
  
  // Use useRef to track the animation frame ID and time
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (isAnimating) {
      const animate = (timestamp: number) => {
        // Initialize start time if not set
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        
        // Calculate elapsed time in seconds
        const elapsedTime = (timestamp - startTimeRef.current) / 1000;
        
        // Calculate vertical position using sine wave with speed adjustment
        const verticalAngle = (2 * Math.PI / period) * elapsedTime * verticalSpeed;
        const verticalPosition = centerY - amplitude * Math.sin(verticalAngle);
        
        // Calculate lateral noise using a different frequency sine wave
        const lateralAngle = (2 * Math.PI / lateralNoiseSpeed) * elapsedTime * 0.7; // Offset frequency for variety
        const lateralPosition = centerX + lateralNoiseAmount * Math.sin(lateralAngle);
        
        setPosition({
          x: lateralPosition,
          y: verticalPosition
        });
        
        // Continue animation
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      // Start the animation
      animationFrameRef.current = requestAnimationFrame(animate);
    }
    
    // Cleanup function
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAnimating, amplitude, period, verticalSpeed, centerX, centerY, lateralNoiseAmount, lateralNoiseSpeed]);
  
  const resetAnimation = () => {
    setIsAnimating(false);
    setPosition({ x: centerX, y: centerY });
    startTimeRef.current = null;
    
    // Restart animation after a short delay
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="mb-2 text-sm text-gray-600">
        Amplitude: {amplitude}px | Period: {period}s | Vertical Speed: {verticalSpeed}x | Lateral: {lateralNoiseAmount}px
      </div>
      
      <svg viewBox="0 0 200 200" width="300" height="300" className="border border-gray-300 bg-gray-50">
        {/* Center lines (subtle) */}
        <line x1="30" y1={centerY} x2="170" y2={centerY} stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4" />
        <line x1={centerX} y1="30" x2={centerX} y2="170" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4" />
        
        {/* Top and bottom amplitude markers */}
        <line x1="30" y1={centerY - amplitude} x2="170" y2={centerY - amplitude} stroke="#e0e0e0" strokeWidth="1" />
        <line x1="30" y1={centerY + amplitude} x2="170" y2={centerY + amplitude} stroke="#e0e0e0" strokeWidth="1" />
        
        {/* Animated Element */}
        <g transform={`translate(${position.x}, ${position.y})`}>
          {customSvgContent ? (
            // Scale the custom SVG appropriately
            <g transform="scale(0.15) translate(-1455, -400)">
              {customSvgContent}
            </g>
          ) : (
            // Default ball
            <circle 
              cx="0" 
              cy="0" 
              r="15" 
              fill={color}
              stroke="#2563eb"
              strokeWidth="1.5"
            />
          )}
        </g>
        
        {/* Text */}
        <text x="100" y="20" textAnchor="middle" fontSize="12" fill="#475569">Oscillating Animation</text>
      </svg>
      
      <div className="flex space-x-4">
        <button
          onClick={resetAnimation}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AnimatedSvg;