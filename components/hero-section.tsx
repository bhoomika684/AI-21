"use client";

import React from "react";
import { motion } from "framer-motion";
// No explicit 'Image' import from 'next/image' is used here as the background is set via CSS,
// but for other images within the component, 'next/image' would be recommended.

// Simple Button Component
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Image Component (kept for consistency, though not used for background)
const Image: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, alt, width, height, className, style }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    style={style}
  />
);

const HeroSection = () => {
  // This barData is not used in the current visual, but kept as it was in the original code.
  const barData = [
    { day: "Mon", value: 0.8 },
    { day: "Tue", value: 0.9 },
    { day: "Wed", value: 0.7 },
    { day: "Thu", value: 0.5 },
    { day: "Fri", value: 0.4 },
    { day: "Sat", value: 0.6 },
    { day: "Sun", value: 0.95 },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center font-sans bg-cover bg-center py-12" // Added min-h-screen, flex, items-center, justify-center, and py-12 for vertical padding
      // Setting the background image using the Pexels URL
      style={{ backgroundImage: "url('https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
      {/* Optional: Overlay for better text readability on top of the image */}
      <div className="absolute inset-0 bg-black opacity-30"></div> 

      {/* Background gradient circles - these will appear on top of the background image */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> {/* Added w-full */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg" // Increased font size, weight, and added shadow
              >
                One Platform. 21 AI Products..
                <br />
                <span className="text-red-600 font-extrabold">Where Intelligence Meets Impact</span> {/* Made 'AI 21' extra bold */}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 max-w-lg drop-shadow-md" // Increased font size for md screens and added subtle shadow
              >
                AI 21: 21 AI-Driven Products Transforming How Talent Meets Opportunity
              </motion.p>
            </div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
