"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface OscillatingParallaxProps {
  // Oscillation amplitude (pixels)
  ballAmplitude?: number;
  frontAmplitude?: number;
  middleAmplitude?: number;
  backAmplitude?: number;
  
  // Oscillation period (seconds)
  ballPeriod?: number;
  frontPeriod?: number;
  middlePeriod?: number;
  backPeriod?: number;
  
  // Colors for gradients
  frontStartColor?: string;
  frontEndColor?: string;
  middleStartColor?: string;
  middleEndColor?: string;
  backStartColor?: string;
  backEndColor?: string;
  ballColor?: string;
  
  // Image properties
  imageUrl?: string;
  imageSize?: number;
  useImage?: boolean;
}

const OscillatingParallax = ({
  // Default amplitudes
  ballAmplitude = 30,
  frontAmplitude = 80,
  middleAmplitude = 75,
  backAmplitude = 50,
  
  // Default periods (seconds)
  ballPeriod = 5,
  frontPeriod = 20,
  middlePeriod = 30,
  backPeriod = 50,
  
  // Default colors
  frontStartColor = "#3b82f6",
  frontEndColor = "#1d4ed8",
  middleStartColor = "#60a5fa",
  middleEndColor = "#2563eb",
  backStartColor = "#93c5fd",
  backEndColor = "#3b82f6",
  ballColor = "#ef4444",
  
  // Default image properties
  imageUrl = "./web/src/app/components/bulb.png",
  imageSize = 150,
  useImage = true
}: OscillatingParallaxProps) => {
  // States for positions
  const [ballPosition, setBallPosition] = useState(0);
  const [layerPositions, setLayerPositions] = useState({
    front: 0,
    middle: 0,
    back: 0
  });
  
  // Animation refs
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  // Define layer dimensions and positions
  const viewBoxWidth = 800;
  const viewBoxHeight = 400;
  const centerX = viewBoxWidth / 2;
  const ballY = 100;
  
  const backWidth = 1500;
  const backHeight = 400;
  const backY = 290;
  
  const middleWidth = 1400;
  const middleHeight = 330;
  const middleY = 350;
  
  const frontWidth = 1100;
  const frontHeight = 300;
  const frontY = 375;
  
  // Create gradient IDs
  const frontGradientId = "frontGradient";
  const middleGradientId = "middleGradient";
  const backGradientId = "backGradient";
  
  useEffect(() => {
    // Start animation immediately
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = (timestamp - startTimeRef.current) / 1000; // seconds
      
      // Calculate ball vertical position (sine wave)
      const ballY = Math.sin(elapsed * (2 * Math.PI / ballPeriod)) * ballAmplitude;
      
      // Calculate horizontal positions with different periods for parallax effect
      const frontX = Math.sin(elapsed * (2 * Math.PI / frontPeriod)) * frontAmplitude;
      const middleX = Math.sin(elapsed * (2 * Math.PI / middlePeriod)) * middleAmplitude;
      const backX = Math.sin(elapsed * (2 * Math.PI / backPeriod)) * backAmplitude;
      
      setBallPosition(ballY);
      setLayerPositions({
        front: frontX,
        middle: middleX,
        back: backX
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [ballAmplitude, ballPeriod, frontAmplitude, frontPeriod, middleAmplitude, middlePeriod, backAmplitude, backPeriod]);
  
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-lvh  ">
        
      {/* Cloud 3 */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `calc(50% + ${layerPositions.back}px)`,
          top: `${backY * (100 / viewBoxHeight)}%`,
          transform: 'translate(-50%, -50%)',
          width: `${backWidth}px`,
          height: `${backHeight}px`,
        }}
      >
        <Image src="/cloud3.svg" fill alt="cloud3" style={{ objectFit: 'contain' }} />
      </div>

      {/* Cloud 2 */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `calc(50% + ${layerPositions.middle}px)`,
          top: `${middleY * (100 / viewBoxHeight)}%`,
          transform: 'translate(-50%, -50%)',
          width: `${middleWidth}px`,
          height: `${middleHeight}px`,
        }}
      >
      <Image src="/cloud2.svg" fill alt="cloud2" style={{ objectFit: 'contain' }} />
      </div>

      {/* Cloud with horizontal oscillation (positioned absolutely) */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `calc(50% + ${layerPositions.front}px)`,
          top: `${frontY * (100 / viewBoxHeight)}%`,
          transform: 'translate(-50%, -50%)',
          width: `${frontWidth}px`,
          height: `${frontHeight}px`,
        }}
      >
      <Image src="/cloud1.svg" fill alt="cloud1" style={{ objectFit: 'contain' }} />
      </div>
        
        {/* PNG image overlay with vertical oscillation (positioned absolutely) */}
        {useImage && (
          <div 
            className="absolute pointer-events-none"
            style={{
              left: `calc(70% - ${0-imageSize/3}px)`,
              top: `${(ballY + ballPosition) * (100 / viewBoxHeight)}%`,
              transform: 'translate(-50%, -50%)',
              width: `${imageSize}px`,
              height: `${imageSize}px`,
            }}
          >
            <Image src="/rocket.svg" width={500} height={500} alt="rocket"/>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default OscillatingParallax;