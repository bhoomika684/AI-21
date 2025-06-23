// export default DigitalSolutionsSection
/**
 * Digital Solutions Section - Showcases AI 21's comprehensive digital recruitment solutions
 *
 * Features:
 * - Interactive analytics dashboard with animated progress bars
 * - Four key solution areas with detailed descriptions
 * - Smooth animations and hover effects
 * - Responsive design for all screen sizes
 * - Click-to-contact functionality as requested
 *
 * Solutions highlighted:
 * 1. Enterprise Solutions
 * 2. Digital Strategy Mastery
 * 3. Innovative Web Design
 * 4. 24/7 Customer Support
 *
 * @returns {JSX.Element} Digital solutions showcase with analytics
 */
"use client"

// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { BarChart, Shield, Palette, Headphones } from "lucide-react"
// import { motion } from "framer-motion"
// import Link from "next/link"

const DigitalSolutionsSection = () => {
  // const solutions = [
  //   {
  //     title: "Enterprise Solution",
  //     description: "Comprehensive recruitment without limits with advanced analytics and custom integrations.",
  //     icon: BarChart,
  //   },
  //   {
  //     title: "Digital Strategy Mastery",
  //     description: "Optimize and strategize digital strategy with data-driven recruitment approaches.",
  //     icon: Shield,
  //   },
  //   {
  //     title: "Innovative Web Design",
  //     description: "User-centric website designs for modern recruitment platforms and career portals.",
  //     icon: Palette,
  //   },
  //   {
  //     title: "24/7 Customer Support",
  //     description: "Dedicated customer support available round the clock for all your recruitment needs.",
  //     icon: Headphones,
  //   },
  // ]

  return (
    // <section className="py-20 bg-gray-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    //       {/* Left Side - Content and Solutions */}
    //       <motion.div
    //         initial={{ opacity: 0, x: -30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.6 }}
    //         viewport={{ once: true }}
    //         className="space-y-8"
    //       >
    //         {/* Section Header */}
    //         {/* <div className="space-y-6"> */}
    //           {/* <motion.h2
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.6, delay: 0.2 }}
    //             viewport={{ once: true }}
    //             className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
    //           >
    //             Mastering Digital Solutions for a Future of
    //             <span className="text-green-600"> Possibilities</span>
    //           </motion.h2> */}
    //           {/* <motion.p
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.6, delay: 0.4 }}
    //             viewport={{ once: true }}
    //             className="text-lg text-gray-600"
    //           >
    //             At AI 21, our approach blends beyond conventional methodologies, we are prepared to master the full
    //             breadth of digital excellence.
    //           </motion.p>
    //         </div> */}

    //         {/* Solutions Grid */}
    //         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //           {solutions.map((solution, index) => {
    //             const IconComponent = solution.icon
    //             return (
    //               <motion.div
    //                 key={index}
    //                 initial={{ opacity: 0, y: 20 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
    //                 viewport={{ once: true }}
    //                 className="space-y-3 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
    //                 onClick={() => (window.location.href = "/contact")}
    //               >
    //                 <div className="flex items-center space-x-3">
    //                   <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
    //                     <IconComponent className="h-4 w-4" />
    //                   </div>
    //                   <h3 className="font-semibold text-gray-900">{solution.title}</h3>
    //                 </div>
    //                 <p className="text-sm text-gray-600">{solution.description}</p>
    //               </motion.div>
    //             )
    //           })}
    //         </div> */}

    //         {/* Call to Action */}
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: 1 }}
    //           viewport={{ once: true }}
    //         >
    //           <Link href="/signup">
    //             {/* <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all">
    //               Get Started →
    //             </Button> */}
    //           </Link>
    //         </motion.div>
    //       </motion.div>

    //       {/* Right Side - Analytics Dashboard */}
    //       <motion.div
    //         initial={{ opacity: 0, x: 30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.6, delay: 0.2 }}
    //         viewport={{ once: true }}
    //         className="relative"
    //       >
    //         <Card className="bg-white shadow-2xl border-0 overflow-hidden">
    //           <div className="p-8 space-y-6">
    //             {/* Dashboard Header */}
    //             <div className="flex items-center justify-between">
    //               <h3 className="text-xl font-semibold text-gray-900">8,225 Employees</h3>
    //               <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
    //                 Processing
    //               </div>
    //             </div>

    //             {/* Statistics Display */}
    //             {/* <div className="grid grid-cols-2 gap-6">
    //               <div className="text-center">
    //                 <motion.div
    //                   className="text-3xl font-bold text-gray-900"
    //                   initial={{ opacity: 0 }}
    //                   whileInView={{ opacity: 1 }}
    //                   transition={{ duration: 1, delay: 0.5 }}
    //                   viewport={{ once: true }}
    //                 >
    //                   74%
    //                 </motion.div>
    //                 <div className="text-sm text-gray-600">Hired</div>
    //               </div>
    //               <div className="text-center">
    //                 <motion.div
    //                   className="text-3xl font-bold text-gray-900"
    //                   initial={{ opacity: 0 }}
    //                   whileInView={{ opacity: 1 }}
    //                   transition={{ duration: 1, delay: 0.7 }}
    //                   viewport={{ once: true }}
    //                 >
    //                   36%
    //                 </motion.div>
    //                 <div className="text-sm text-gray-600">Processing</div>
    //               </div>
    //             </div> */}

    //             {/* Progress Bars */}
    //             {/* <div className="space-y-4">
    //               <div className="space-y-2">
    //                 <div className="flex justify-between text-sm">
    //                   <span className="text-gray-600">Hired</span>
    //                   <span className="text-gray-900 font-medium">74%</span>
    //                 </div>
    //                 <div className="w-full bg-gray-200 rounded-full h-3">
    //                   <motion.div
    //                     className="bg-green-500 h-3 rounded-full"
    //                     initial={{ width: 0 }}
    //                     whileInView={{ width: "74%" }}
    //                     transition={{ duration: 1.5, delay: 0.5 }}
    //                     viewport={{ once: true }}
    //                   />
    //                 </div>
    //               </div>
    //               <div className="space-y-2">
    //                 <div className="flex justify-between text-sm">
    //                   <span className="text-gray-600">Processing</span>
    //                   <span className="text-gray-900 font-medium">36%</span>
    //                 </div>
    //                 <div className="w-full bg-gray-200 rounded-full h-3">
    //                   <motion.div
    //                     className="bg-gray-800 h-3 rounded-full"
    //                     initial={{ width: 0 }}
    //                     whileInView={{ width: "36%" }}
    //                     transition={{ duration: 1.5, delay: 0.7 }}
    //                     viewport={{ once: true }}
    //                   />
    //                 </div>
    //               </div>
    //             </div> */}

    //             {/* Chart Section */}
    //             <div className="pt-6 border-t border-gray-100">
    //               <div className="text-sm font-medium text-gray-900 mb-4">35% Products</div>
    //               <div className="grid grid-cols-4 gap-3">
    //                 {[60, 80, 40, 90].map((height, index) => (
    //                   <motion.div
    //                     key={index}
    //                     className="bg-gray-300 rounded-sm"
    //                     style={{ height: `${height}px` }}
    //                     initial={{ height: 0 }}
    //                     whileInView={{ height: `${height}px` }}
    //                     transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
    //                     viewport={{ once: true }}
    //                   />
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </Card>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
    <section>
      {/* All original JSX content is now commented out. */}
      {/* You can add a placeholder or an empty div here if needed to render something. */}
      {/* For example: */}
      {/* <div>
        <p>Digital Solutions Section - Content currently commented out.</p>
      </div> */}
    </section>
  )
}

export default DigitalSolutionsSection