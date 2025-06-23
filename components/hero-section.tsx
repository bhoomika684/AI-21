// "use client"

// import { Button } from "@/components/ui/button"
// import DashboardMockup from "@/components/dashboard-mockup"
// import { motion } from "framer-motion"
// import { Play } from "lucide-react"

// const HeroSection = () => {
//   return (
//     <section className="bg-gray-50 py-20 lg:py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <div className="space-y-6">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
//               >
//                 Experience the Future of
//                 <br />
//                 <span className="text-gray-800">Recruitment with AI 21</span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-lg text-gray-600 max-w-lg"
//               >
//                 We are architects of innovation, shaping a landscape where digital recruitment thrives.
//               </motion.p>
//             </div>

//             <div className="flex items-center gap-4">
//               <Button className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white shadow-lg">
//                 Get Started
//               </Button>
//               {/* <button className="flex items-center space-x-2 text-green-600 hover:underline">
//                 <Play className="w-5 h-5" />
//                 <span>Watch Video</span>
//               </button> */}
//             </div>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <DashboardMockup />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

"use client"; // This directive marks the entire file as a Client Component

import React from 'react';
import { motion } from 'framer-motion';

// Mock Button component to avoid external dependencies.
// This ensures the component runs without needing shadcn/ui.
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = "", ...props }) => {
  return (
    <button className={`rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`} {...props}>
      {children}
    </button>
  );
};

// Placeholder for Image component. In a real Next.js app, you would typically
// use 'next/image' for image optimization. Here, we use a standard <img> tag
// and a placeholder URL for a standalone runnable example.
const Image: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, alt, width, height, className, style }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} className={className} style={style} />
  );
};

const HeroSection = () => {
  return (
    // The main section of the Hero component, with responsive padding and background gradient.
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-red-50 via-white to-rose-50 font-sans">
      {/* Background decoration: A subtle grid pattern for visual texture. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      {/* Animated blobs for background effect, creating a dynamic, blurred feel. */}
      {/* The 'animate-pulse' class provides a subtle scaling animation. */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      {/* Content wrapper, ensuring content is centered and has max width. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text and Button section, with Framer Motion animations. */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} // Initial state: invisible, slightly to the left
            animate={{ opacity: 1, x: 0 }}   // Animate to: visible, original position
            transition={{ duration: 0.8 }}   // Animation duration
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Main heading with animated entry. */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }} // Delay ensures it animates after the parent div
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              >
                Experience the Future of Recruitment
                <br />
                <span className="text-red-600">with AI 21</span>
              </motion.h1>

              {/* Sub-paragraph with animated entry. */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }} // Further delay for sequential animation
                className="text-lg sm:text-xl text-gray-700 max-w-lg"
              >
                We are architects of innovation, shaping a landscape where digital recruitment thrives.
              </motion.p>
            </div>

            {/* Call to action button with animated entry. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }} // Even further delay
              className="flex items-center gap-4"
            >
              <Button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg rounded-xl">
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Multiple Image/Card Placeholders, following the new pattern. */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} // Initial state: invisible, slightly to the right
            animate={{ opacity: 1, x: 0 }}   // Animate to: visible, original position
            transition={{ duration: 0.8, delay: 0.3 }} // Delay, animating slightly after left content starts
            className="flex justify-center lg:justify-end"
          >
            {/* Grid layout for the four dashboard-style cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">

              {/* Card 1: "Get Started" Card (top-left in mockup) */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-start text-left">
                <div className="flex items-center space-x-3 mb-4">
                  {/* Profile image placeholder */}
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                    <Image src="https://placehold.co/56x56/E0E0E0/333333?text=User" alt="Profile" width={56} height={56} className="rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-800 font-semibold">Get Started</p>
                    <span className="text-green-500 text-sm flex items-center">
                        {/* Right arrow icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        Start
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-1 font-medium">Choose your platform</p>
                <p className="text-gray-500 text-xs">User-friendly connect with user-friendly telehealth platform</p>
              </div>

              {/* Card 2: "New Income" Chart Card (top-right in mockup) */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">36,194</h3>
                  <span className="text-black-600 text-sm bg-black-50 px-3 py-1 rounded-full font-medium">New Income</span>
                </div>
                {/* Simplified line graph placeholder */}
                <div className="relative h-28 w-full">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 80 Q 25 20, 50 60 T 100 40" fill="none" stroke="#86EFAC" strokeWidth="2" />
                    <path d="M0 90 Q 25 30, 50 70 T 100 50" fill="none" stroke="#6EE7B7" strokeWidth="2" />
                    {/* Placeholder dot with value */}
                    <circle cx="85" cy="45" r="3" fill="#10B981" />
                    <text x="85" y="40" textAnchor="middle" fontSize="6" fill="#10B981">+1024</text>
                  </svg>
                </div>
              </div>

              {/* Card 3: "Upcoming" Tasks Card (bottom-left in mockup) */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 col-span-1 sm:col-span-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 text-gray-600 rounded-full p-2">
                      {/* Icon for Finished */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-lg font-bold text-gray-900">20+</p>
                      <p className="text-xs text-gray-500">+6 tasks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 text-gray-600 rounded-full p-2">
                      {/* Icon for Tracked */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-lg font-bold text-gray-900">31h</p>
                      <p className="text-xs text-gray-500">+6 hours</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-4 mt-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Opportunity</p>
                    <p className="text-sm text-gray-500">10 Character</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                    <Image src="https://placehold.co/32x32/D0D0D0/666666?text=JR" alt="Jerome Bell" width={32} height={32} className="rounded-full" />
                  </div>
                </div>
              </div>


              {/* Card 4: "Weekly Report" Bar Chart Card (bottom-right in mockup) */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 col-span-1 sm:col-span-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Weekly report</h3>
                  <span className="text-gray-500 text-sm bg-gray-50 px-2 py-1 rounded-full">01-07 May</span>
                </div>
                <div className="flex justify-around items-end h-32 pt-2">
                  {[
                    { day: 'Mon', value: 0.8 },
                    { day: 'Tue', value: 0.9 },
                    { day: 'Wed', value: 0.7 },
                    { day: 'Thu', value: 0.5 },
                    { day: 'Fri', value: 0.4 },
                    { day: 'Sat', value: 0.6 },
                    { day: 'Sun', value: 0.95 },
                  ].map((data, index) => (
                    <div key={data.day} className="flex flex-col items-center w-8">
                      <div className="w-4 rounded-t-sm" style={{ height: `${data.value * 100}%`, backgroundColor: index % 2 === 0 ? '#1F2937' : '#86EFAC' }}></div>
                      <p className="text-xs text-gray-500 mt-1">{data.day}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global styles for the React App. In a real Next.js app, these would typically be in
          `globals.css` or within a `layout.tsx` file. Included here for standalone execution
          within the immersive environment. */}
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif; /* Sets the font for the entire body */
          }
          /* Defines the grid background pattern using an SVG data URL. */
          .bg-grid-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34h-2v-4h4v4zm0-30h-2v4h4v-4zm-20 0h-2v4h4v-4zm20 16h-2v4h4v-4zm-20 0h-2v4h4v-4zm-20 0h-2v4h4v-4zM0 34h-2v4h4v-4zM0 0h-2v4h4v-4zm20 34h-2v4h4v-4zm-20 0h-2v4h4v-4zm20 16h-2v4h4v-4zm-20 0h-2v4h4v-4zm20 0h-2v4h4v-4zm-20 0h-2v4h4v-4zm0-16h-2v4h4v-4zm0-16h-2v4h4v-4zm0-16h-2v4h4v-4zm0 48h-2v4h4v-4zm0 0h-2v4h4v-4zM56 0h-2v4h4v-4zm-20 0h-2v4h4v-4zm20 16h-2v4h4v-4zm-20 0h-2v4h4v-4zm20 32h-2v4h4v-4zm-20 0h-2v4h4v-4zm20 0h-2v4h4v-4zm0-16h-2v4h4v-4zm0-16h-2v4h4v-4zm0-16h-2v4h4v-4zM40 0h-2v4h4v-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            background-size: 60px 60px; /* Sizes the grid pattern */
          }
          /* Keyframe animation for the 'pulse' effect on background blobs. */
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05); /* Slightly scales up at midpoint */
            }
          }
          .animate-pulse {
            animation: pulse 4s infinite ease-in-out; /* Applies the pulse animation */
          }
          .animate-pulse.delay-1000 {
            animation-delay: 1s; /* Delays the animation start for the second blob */
          }
        `}
      </style>
      {/* Tailwind CSS CDN for a runnable example. */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      {/* Google Font - Inter for consistent typography. */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default HeroSection; // Exporting HeroSection as the default component

