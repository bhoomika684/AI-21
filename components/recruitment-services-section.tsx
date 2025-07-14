// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card" // Assuming shadcn/ui Card
// import { Button } from "@/components/ui/button" // Assuming shadcn/ui Button (though less used now)
// import { motion } from "framer-motion"
// import { Users, Eye, Building, ArrowRight, ChevronRight } from "lucide-react" // Added ChevronRight for list items

// const CompactRecruitmentServicesSection = () => {
//   // Original services data, adapted for the new layout with image URLs
//   const services = [
//     {
//       id: 1,
//       title: "HireVision",
//       icon: "Users",
//       slug: "HireVision",
//       imageUrl: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Updated image URL for 1st service
//       color: "bg-red-50 text-red-600 border-red-200", // Not directly used for background of card, but can be for icons
//       description:
//         "Comprehensive AI-powered hiring solution with intelligent interviewing, sourcing, and shortlisting capabilities.",
//       products: [
//         {
//           name: "HireVision-Interviewer",
//           // slug: "smart-interview-pro",
//           description: "AI-powered interview conductor with real-time assessment",
//           // count: 5, // Dummy count for demonstration
//         },
//         {
//           name: "HireVision-CV Analysis",
//           // slug: "talent-hunter-elite",
//           description: "Advanced candidate sourcing with AI-driven matching",
//           // count: 12, // Dummy count
//         },
//         {
//           name: "HireVision-Assessment",
//           slug: "quick-select-master",
//           description: "Intelligent shortlisting with predictive analytics",
//           // count: 8, // Dummy count
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "LearningVision",
//       icon: "Eye",
//       slug: "/LearningVision",
//       imageUrl: "https://images.pexels.com/photos/3771055/pexels-photo-3771055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Updated image URL for 2nd service
//       color: "bg-blue-50 text-blue-600 border-blue-200", // Can be adjusted if icons were used
//       description:
//         "Advanced talent analytics and insights platform for comprehensive candidate evaluation and market intelligence.",
//       products: [
//         {
//           name: "ResumeGenius AI",
//           // slug: "resume-genius-ai",
//           description: "Next-gen resume analysis with deep learning insights",
//           // count: 7,
//         },
//         {
//           name: "Product 1",
//           // slug: "talent-scope-analytics",
//           description: "Comprehensive talent market analysis and benchmarking",
//           // count: 15,
//         },
//         {
//           name: "Product 2",
//           slug: "profile-master-pro",
//           description: "Advanced candidate profiling with behavioral insights",
//           // count: 10,
//         },
//       ],
//     },
//     // Removed Banking Vision section as requested
//   ]

//   // Helper function to get the Lucide icon component based on its name string (not used in this layout)
//   const getIcon = (iconName: string) => {
//     switch (iconName) {
//       case "Users":
//         return Users
//       case "Eye":
//       case "Building":
//         return Building // Using Building for Eye and Building as they are not explicitly used in the new layout
//       default:
//         return Users
//     }
//   }

//   return (
//     <section className="py-10 bg-gradient-to-br from-red-50 to-red-100 font-inter"> {/* Updated background gradient */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Heading and Description */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
//             AI-Powered Solutions That Go Beyond Boundaries
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Powering Progress Across Domains with Cutting-Edge AI
//           </p>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//            AI-TwentyOne  offers a suite of intelligent solutions built to address real-world challenges across diverse industries  from recruitment and training to finance, retail, and beyond.
//           </p>
//         </motion.div>

//         {/* Grid for Service Cards - Adjusted to 2 columns since Banking Vision is removed */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {services.map((service, idx) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
//                 <CardContent className="p-0">
//                   {/* Image at the top of the card */}
//                   <div className="w-full h-48 overflow-hidden">
//                     <img
//                       src={service.imageUrl}
//                       alt={service.title}
//                       className="w-full h-full object-cover"
//                       // Fallback for image loading errors
//                       onError={(e) => {
//                         e.currentTarget.src = `https://placehold.co/600x400/FFCCCC/880000?text=Image+Error`; // Red-themed fallback
//                         e.currentTarget.onerror = null; // Prevent infinite loop
//                       }}
//                     />
//                   </div>

//                   {/* Dark Title Bar */}
//                   <a
//                     href={`/Domain/${service.slug}`} // Make the entire bar clickable
//                     className="flex items-center justify-between bg-red-600 text-white p-4 cursor-pointer hover:bg-red-700 transition-colors" // Updated to red-800
//                   >
//                     <h3 className="text-xl font-bold">{service.title}</h3>
//                     {/* Plus icon (ArrowRight rotated) */}
//                     <ArrowRight className="w-6 h-6 transform rotate-0 transition-transform group-hover:rotate-45" />
//                   </a>

//                   {/* Products List Section */}
//                   <div className="p-4 bg-white">
//                     <ul className="space-y-2">
//                       {service.products.map((product, i) => (
//                         <li key={i} className="flex items-center text-gray-700 text-base">
//                           <ChevronRight className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" /> {/* Remains red */}
//                           <span className="flex-1">{product.name}</span>
//                           <span className="ml-2 text-red-600 font-semibold text-sm">
//                             {/* {product.count} */}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CompactRecruitmentServicesSection
// // "use client"

// // import { useKeenSlider } from "keen-slider/react"
// // import "keen-slider/keen-slider.min.css"
// // import { useRef, useState, useEffect } from "react"
// // import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
// // import { motion } from "framer-motion"
// // import { Card, CardContent } from "@/components/ui/card"

// // const CompactRecruitmentServicesSection = () => {
// //   const [sliderRef, instanceRef] = useKeenSlider({
// //     loop: true,
// //     mode: "free",
// //     rubberband: true,
// //     slides: {
// //       perView: 1,
// //       spacing: 16,
// //     },
// //     breakpoints: {
// //       "(min-width: 640px)": {
// //         slides: { perView: 1, spacing: 20 },
// //       },
// //       "(min-width: 1024px)": {
// //         slides: { perView: 2, spacing: 24 },
// //       },
// //     },
// //     dragSpeed: 0.8,
// //     created() {
// //       setLoaded(true)
// //     },
// //   })

// //   const [loaded, setLoaded] = useState(false)

// //   // Auto-scroll every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       instanceRef.current?.next()
// //     }, 5000)
// //     return () => clearInterval(interval)
// //   }, [instanceRef])

// //   const services = [
// //     {
// //       id: 1,
// //       title: "HireVision",
// //       slug: "HireVision",
// //       imageUrl: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg",
// //       products: [
// //         { name: "HireVision-Interviewer" },
// //         { name: "HireVision-CV Analysis" },
// //         { name: "HireVision-Assessment" },
// //       ],
// //     },
// //     {
// //       id: 2,
// //       title: "LearningVision",
// //       slug: "/LearningVision",
// //       imageUrl: "https://images.pexels.com/photos/3771055/pexels-photo-3771055.jpeg",
// //       products: [
// //         { name: "ResumeGenius AI" },
// //         { name: "Product 1" },
// //         { name: "Product 2" },
// //       ],
// //     },
// //   ]

// //   return (
// //     <section className="py-10 bg-gradient-to-br from-red-50 to-red-100 font-inter relative">
// //       <div className="max-w-6xl mx-auto px-4">
// //         {/* Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-10"
// //         >
// //           <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
// //             AI-Powered Solutions That Go Beyond Boundaries
// //           </h2>
// //           <p className="mt-4 text-xl text-gray-600">
// //             Powering Progress Across Domains with Cutting-Edge AI
// //           </p>
// //         </motion.div>

// //         {/* Scroll Buttons */}
// //         {loaded && (
// //           <div className="absolute top-[50%] -translate-y-1/2 left-2 z-10 hidden lg:flex">
// //             <button
// //               onClick={() => instanceRef.current?.prev()}
// //               className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
// //             >
// //               <ArrowLeft />
// //             </button>
// //           </div>
// //         )}
// //         {loaded && (
// //           <div className="absolute top-[50%] -translate-y-1/2 right-2 z-10 hidden lg:flex">
// //             <button
// //               onClick={() => instanceRef.current?.next()}
// //               className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
// //             >
// //               <ArrowRight />
// //             </button>
// //           </div>
// //         )}

// //         {/* Carousel Cards */}
// //         <div ref={sliderRef} className="keen-slider px-1 w-full scroll-smooth">
// //           {services.map((service, idx) => (
// //             <motion.div
// //               key={service.id}
// //               className="keen-slider__slide"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: idx * 0.2 }}
// //               viewport={{ once: true }}
// //             >
// //               <Card className="overflow-hidden border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all bg-white">
// //                 <CardContent className="p-0">
// //                   <div className="w-full h-48 overflow-hidden">
// //                     <img
// //                       src={service.imageUrl}
// //                       alt={service.title}
// //                       className="w-full h-full object-cover"
// //                       onError={(e) => {
// //                         e.currentTarget.src = `https://placehold.co/600x400/FFCCCC/880000?text=Image+Error`
// //                         e.currentTarget.onerror = null
// //                       }}
// //                     />
// //                   </div>

// //                   <a
// //                     href={`/Domain/${service.slug}`}
// //                     className="flex items-center justify-between bg-red-600 text-white p-4 hover:bg-red-700 transition-colors"
// //                   >
// //                     <h3 className="text-xl font-bold">{service.title}</h3>
// //                     <ArrowRight className="w-6 h-6" />
// //                   </a>

// //                   <div className="p-4 bg-white">
// //                     <ul className="space-y-2">
// //                       {service.products.map((product, i) => (
// //                         <li key={i} className="flex items-center text-gray-700 text-base">
// //                           <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
// //                           <span>{product.name}</span>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default CompactRecruitmentServicesSection
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Eye, Building } from "lucide-react"
import { Card } from "@/components/ui/card"

const CompactRecruitmentServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "HireVision",
      icon: "Users",
      slug: "https://hirevisionai.com/",
      imageUrl:
        "https://images.pexels.com/photos/7172774/pexels-photo-7172774.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description:
        "Comprehensive AI-powered hiring solution with intelligent interviewing, sourcing, and shortlisting capabilities.",
    },
    {
      id: 2,
      title: "LearningVision",
      icon: "Eye",
      slug: "LearningVision",
      imageUrl:
        "https://images.pexels.com/photos/4219041/pexels-photo-4219041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Advanced talent analytics and insights platform for comprehensive candidate evaluation and market intelligence.",
    },
  ]

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return Users
      case "Eye":
        return Eye
      case "Building":
        return Building
      default:
        return Users
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-red-600">
            AI-Powered Solutions That Go Beyond Boundaries
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Powering Progress Across Domains with Cutting-Edge AI
          </p> */}
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            AI-<span className='italic'>TwentyOne</span>  offers a suite of intelligent solutions built to address real-world challenges across diverse industries from recruitment and training to finance, retail, and beyond.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = getIconComponent(service.icon)

            // Use custom background for LearningVision card only
            const isLearningVision = service.title === "LearningVision"
            const customBg = isLearningVision
              ? "https://images.pexels.com/photos/4219041/pexels-photo-4219041.jpeg?auto=compress&cs=tinysrgb&w=800"
              : service.imageUrl

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.title === "HireVision" ? service.slug : `/Product/${service.slug}`}
                  target={service.title === "HireVision" ? "_blank" : undefined}
                  rel={service.title === "HireVision" ? "noopener noreferrer" : undefined}
                  className="block group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-2xl"
                >
                  <Card className="relative h-96 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    {/* Card image: stack of books for LearningVision only */}
                    <img
                      src={customBg}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                      style={{ filter: 'none' }}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400/FFCCCC/880000?text=Image+Error"
                        e.currentTarget.onerror = null
                      }}
                    />

                    {/* Light black overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

                    {/* Content with improved text visibility */}
                    <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-black/70 p-2 rounded-lg backdrop-blur-sm">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-white drop-shadow-lg tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white text-base max-w-sm font-semibold drop-shadow-lg">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompactRecruitmentServicesSection
