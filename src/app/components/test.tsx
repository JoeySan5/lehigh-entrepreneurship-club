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
  ballAmplitude = 3,
  frontAmplitude = 50,
  middleAmplitude = 100,
  backAmplitude = 200,
  
  // Default periods (seconds)
  ballPeriod = 1,
  frontPeriod = 20,
  middlePeriod = 30,
  backPeriod = 40,
  
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
  imageSize = 100,
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
  
  const backWidth = 900;
  const backHeight = 200;
  const backY = 200;
  
  const middleWidth = 900;
  const middleHeight = 350;
  const middleY = 250;
  
  const frontWidth = 900;
  const frontHeight = 300;
  const frontY = 300;
  
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
      <div className="relative w-full h-[400px] border border-gray-300 bg-gray-50">
        
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
              left: `calc(70% - ${imageSize/2}px)`,
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