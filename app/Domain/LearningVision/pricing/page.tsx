// "use client"

// import Link from "next/link"
// import {
//   Brain,
//   Search,
//   Filter,
//   Users,
//   Eye,
//   Sparkles,
//   MessageSquare,
//   ChevronDown,
//   Calendar,
//   FileText,
// } from "lucide-react"
// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import Footer from "@/components/footer"
// import Header from "@/components/header"

// export default function WhyYantrAIPage() {
//   const features = [
//     {
//       icon: MessageSquare, // Interview/communication
//       title: "AI-Conducted Virtual Interviews",
//       fullDescription:
//         "Automated interview sessions powered by AI ensure consistent, unbiased candidate assessments with zero manual intervention.",
//     },
//     {
//       icon: Calendar, // Scheduling
//       title: "Autonomous Scheduling Assistant",
//       fullDescription:
//         "Eliminate back-and-forth coordination by using AI that schedules interviews instantly based on candidate availability.",
//     },
//     {
//       icon: Eye, // Video/behavioral analysis
//       title: "Behavioural & Emotional Video Analysis",
//       fullDescription:
//         "Advanced video analytics decode facial cues, tone, and behavioral patterns to provide deeper candidate insights beyond resumes",
//     },
//     {
//       icon: Sparkles, // Time/efficiency
//       title: "Significant Time & Effort Reduction",
//       fullDescription:
//         "Streamline hiring by automating repetitive tasks — saving recruiters hours while speeding up the selection process.",
//     },
//     {
//       icon: Users, // Shortlisting/matching
//       title: "Data-Backed Shortlisting & Matching",
//       fullDescription:
//         "AI matches candidates to roles using predictive analytics and performance potential — ensuring better fit and fewer dropouts.",
//     },
//     {
//       icon: FileText, // Reports
//       title: "Comprehensive Candidate Reports",
//       fullDescription:
//         "Get full-stack reports with interview summaries, AI-generated scores, behavioural insights, and decision-ready recommendations.",
//     },
//   ]

//   const products = [
//     {
//       icon: MessageSquare,
//       title: "HireVision-Interviewer",
//       slug: "/Domain/HireVision/HireVision-Interviewer",
//       description:
//         "An AI-powered virtual interviewer that conducts, evaluates, and scores candidate interviews in real time — complete with behavioral and emotional analysis for deeper insights.",
//       features: [
//       ],
//     },
//     {
//       icon: Users,
//       title: "HireVision-CV Analysis",
//       slug: "/Domain/HireVision/HireVision-CVAnalysis",
//       description:
//         "AI-driven resume screening tool that scans large candidate pools and intelligently shortlists the top matches based on the specific job description, ensuring faster and more accurate talent discovery.",
//       features: [
//       ],
//     },
//     {
//       icon: Sparkles,
//       title: "HireVision-Assessment",
//       slug: "/Domain/HireVision/HireVision-Assessment",
//       description:
//         "Deliver customizable, AI-evaluated technical and aptitude assessments with automated scoring, performance benchmarking, and tailored test reports",
//       features: [
//       ],
//     },
//   ]

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-red-50">
//         {/* Hero Section */}
//         <section
//           className="relative h-[500px] bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage:
//               "url('https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1600')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//           <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="max-w-3xl text-white"
//             >
//               <h1 className="text-3xl lg:text-4xl font-semibold mb-4 leading-relaxed">
//                 HireVision
//               </h1>
//               <p className="text-lg text-orange-400 font-medium">
//                 A complete AI-powered hiring solution designed to intelligently interview, source, and shortlist top talent — faster and smarter.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Key Features */}
//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto text-center">
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
//             >
//               Key features of HireVision
//             </motion.h2>

//             <div className="grid md:grid-cols-3 gap-6 mb-16">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.04 }}
//                   className="transition-transform h-full"
//                 >
//                   <Card className="border border-gray-200 bg-white shadow-md h-full flex flex-col justify-between min-h-[210px] rounded-xl hover:shadow-xl hover:border-red-300 transition-all duration-300">
//                     <CardContent className="text-center flex flex-col h-full p-4">
//                       <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border border-red-200 rounded-full bg-red-50">
//                         <feature.icon className="w-6 h-6 text-purple-600" />
//                       </div>
//                       <h3 className="text-base font-semibold text-red-700 mb-2">
//                         {feature.title}
//                       </h3>
//                       <p className="text-sm text-gray-700">
//                         {feature.fullDescription}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
//             >
//              Product Lineup
//             </motion.h2>

//             <div className="grid md:grid-cols-3 gap-12">
//               {products.map((product, index) => (
//                 <motion.div
//                   key={index}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   initial={{ opacity: 0, y: 30 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="h-full flex"
//                 >
//                   <Link href={product.slug} className="h-full flex-1">
//                     <div className="h-full flex flex-col text-left border p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer transition">
//                       <div className="flex items-center gap-4 mb-4">
//                         <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
//                           <product.icon className="w-6 h-6" />
//                         </div>
//                         <h4 className="text-xl font-semibold text-red-700">
//                           {product.title}
//                         </h4>
//                       </div>
//                       <p className="text-sm text-gray-600 mb-4">
//                         {product.description}
//                       </p>
//                       <ul className="text-sm text-gray-800 list-disc list-inside space-y-1 flex-1">
//                         {product.features.map((feature, i) => (
//                           <li key={i}>{feature}</li>
//                         ))}
//                       </ul>
//                       <div className="mt-4 text-red-600 font-medium hover:underline">
//                         Learn More
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white py-16 px-6 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             Ready to unlock the power of{" "}
//             <span className="text-white">real-time AI insights?</span>
//           </h2>
//           <p className="text-lg max-w-3xl mx-auto mb-10">
//             Join 1000+ enterprise companies already using A21's specialized AI
//             products to streamline operations, reduce costs, and accelerate
//             growth.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
//             {[
//               "30-day free trial with full access",
//               "Dedicated enterprise support team",
//               "Custom integration assistance",
//               "Scalable pricing for any organization",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-center gap-2 text-sm"
//               >
//                 <span className="text-green-300 text-xl">✔</span>
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center gap-6">
//             <button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-red-100 transition">
//               Start Free Trial →
//             </button>
//             <button className="border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-red-700 transition">
//               Schedule Demo
//             </button>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   )
// }
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageSquare, Calendar, Eye, Sparkles, Users, FileText } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import HireVisionHeader from "@/components/hirevision-header"

export default function WhyYantrAIPage() {
  const router = useRouter()

  const features = [
    {
      icon: MessageSquare,
      title: "AI-Conducted Virtual Interviews",
      fullDescription:
        "Automated interview sessions powered by AI ensure consistent, unbiased candidate assessments with zero manual intervention.",
    },
    {
      icon: Calendar,
      title: "Autonomous Scheduling Assistant",
      fullDescription:
        "Eliminate back-and-forth coordination by using AI that schedules interviews instantly based on candidate availability.",
    },
    {
      icon: Eye,
      title: "Behavioural & Emotional Video Analysis",
      fullDescription:
        "Advanced video analytics decode facial cues, tone, and behavioral patterns to provide deeper candidate insights beyond resumes",
    },
    {
      icon: Sparkles,
      title: "Significant Time & Effort Reduction",
      fullDescription:
        "Streamline hiring by automating repetitive tasks — saving recruiters hours while speeding up the selection process.",
    },
    {
      icon: Users,
      title: "Data-Backed Shortlisting & Matching",
      fullDescription:
        "AI matches candidates to roles using predictive analytics and performance potential — ensuring better fit and fewer dropouts.",
    },
    {
      icon: FileText,
      title: "Comprehensive Candidate Reports",
      fullDescription:
        "Get full-stack reports with interview summaries, AI-generated scores, behavioural insights, and decision-ready recommendations.",
    },
  ]

  const products = [
    {
      icon: MessageSquare,
      title: "HireVision-Interviewer",
      slug: "/Domain/HireVision/HireVision-Interviewer",
      description:
        "An AI-powered virtual interviewer that conducts, evaluates, and scores candidate interviews in real time — complete with behavioral and emotional analysis for deeper insights.",
      features: [],
    },
    {
      icon: Users,
      title: "HireVision-CV Analysis",
      slug: "/Domain/HireVision/HireVision-CVAnalysis",
      description:
        "AI-driven resume screening tool that scans large candidate pools and intelligently shortlists the top matches based on the specific job description, ensuring faster and more accurate talent discovery.",
      features: [],
    },
    {
      icon: Sparkles,
      title: "HireVision-Assessment",
      slug: "/Domain/HireVision/HireVision-Assessment",
      description:
        "Deliver customizable, AI-evaluated technical and aptitude assessments with automated scoring, performance benchmarking, and tailored test reports",
      features: [],
    },
  ]

  return (
    <>
      <HireVisionHeader isMainHireVisionPage={true} />
      <div className="min-h-screen bg-red-50">
        {/* Hero Section */}
        <section
          className="relative h-[500px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl lg:text-4xl font-semibold mb-4 leading-relaxed">
                HireVision
              </h1>
              <p className="text-lg text-white font-medium">
                A complete AI-powered hiring solution designed to intelligently interview, source, and shortlist top talent — faster and smarter.
              </p><br></br>
              <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-red-600 bg-red"
                  onClick={() => router.push("")}
                >
                  Get Started
                  <Users className="ml-2 h-5 w-5" />
                </Button> 
            </motion.div>
          </div>
          
        </section>

        {/* Key Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
            >
              Key features of HireVision
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  className="transition-transform h-full"
                >
                  <Card className="border border-gray-200 bg-white shadow-md h-full flex flex-col justify-between min-h-[210px] rounded-xl hover:shadow-xl hover:border-red-300 transition-all duration-300">
                    <CardContent className="text-center flex flex-col h-full p-4">
                      <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border border-red-200 rounded-full bg-red-50">
                        <feature.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-base font-semibold text-red-700 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {feature.fullDescription}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
            >
              Product Lineup
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.2 }}
                  className="h-full flex"
                >
                  <Link href={product.slug} className="h-full flex-1">
                    <div className="h-full flex flex-col text-left border p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer transition">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
                          <product.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-semibold text-red-700">
                          {product.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <ul className="text-sm text-gray-800 list-disc list-inside space-y-1 flex-1">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <div className="mt-4 text-red-600 font-medium hover:underline">
                        Learn More
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to unlock the power of<br></br>
real-time AI insights?
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Reimagine work with AI-21 — let’s get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button> */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                  <Users className="ml-2 h-5 w-5" />
                </Button> 
                
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
