"use client";

import React, { useRef, useState } from "react";

interface Tilt3DProps {
  children: React.ReactNode;
  maxTilt?: number; // Maximum tilt angle in degrees
  scale?: number;   // Scale on hover
  className?: string;
}

export default function Tilt3D({
  children,
  maxTilt = 12,
  scale = 1.03,
  className = "",
}: Tilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease",
  });
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({
    opacity: 0,
    background: "radial-gradient(circle at 0px 0px, rgba(34, 211, 238, 0.15) 0%, transparent 80%)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const el = cardRef.current;
    const rect = el.getBoundingClientRect();

    // Mouse coordinates relative to card element
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    // Normalised position: from -0.5 to 0.5
    const normX = posX / rect.width - 0.5;
    const normY = posY / rect.height - 0.5;

    // Calculate rotation angles
    const rotX = -(normY * maxTilt);
    const rotY = normX * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
    });

    // Update dynamic mouse-following glow highlight position
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${posX}px ${posY}px, rgba(34, 211, 238, 0.22) 0%, transparent 60%)`,
    });
  };

  const handleMouseEnter = () => {
    // Add shadow and active transition scale
  };

  const handleMouseLeave = () => {
    // Reset rotations smoothly
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease",
    });
    setGlowStyle({
      opacity: 0,
      background: "radial-gradient(circle at 0px 0px, rgba(34, 211, 238, 0.15) 0%, transparent 80%)",
      transition: "opacity 0.6s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={style}
    >
      {/* Glow Highlight overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
        style={glowStyle}
      />
      {children}
    </div>
  );
}
