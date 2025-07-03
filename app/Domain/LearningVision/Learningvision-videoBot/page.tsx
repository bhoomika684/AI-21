// "use client"

// import { useRouter } from "next/navigation"
// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import {
//   Brain,
//   Mic,
//   Video,
//   BarChart3,
//   ArrowRight,
//   Users,
//   Shield,
//   Target,
// } from "lucide-react"
// import Footer from "@/components/footer"
// import Header from "@/components/header"

// const SmartInterviewProPage = () => {
//   const router = useRouter()

//   const features = [
//     {
//       icon: Brain,
//       title: "Ask-the-Video Chatbot",
//       description:
//         "Learners get instant answers, based only on the video content — like having a built-in trainer.",
//     },
//     {
//       icon: Mic,
//       title: "Smart Timestamp Referencing",
//       description:
//         "The bot can guide learners back to the exact video moment tied to their question.",
//     },
//     {
//       icon: Video,
//       title: "Plug-and-Play Setup",
//       description:
//         "Upload your training video and you're done. No coding or manual setup needed.",
//     },
//     {
//       icon: BarChart3,
//       title: "Global Language Support",
//       description:
//         "Multilingual interactions make it easy for diverse teams to learn in their own language.",
//     },
//     {
//       icon: Target,
//       title: "Instant Highlights & Summaries",
//       description:
//         "Extract key points and takeaways automatically from each training video.",
//     },
//     {
//       icon: Shield,
//       title: "Learner Insight Dashboard",
//       description:
//         "See what employees are confused about and where engagement peaks or drops.",
//     },
//   ]

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
//         {/* Hero Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center space-y-8"
//             >
//               <h1 className="text-3xl lg:text-3xl font-extrabold">
//                 <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
//                    From Watching to Understanding
//                 </span>
//                 <br />
//                 <span className="text-gray-800">
//                   Your Training Videos Just Got a Brain
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 VideoBot transforms static training content into an AI-driven, interactive learning experience — where employees can ask questions and get instant, accurate answers from the video itself.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
//                 >
//                   Watch Demo
//                   <Video className="ml-2 h-5 w-5" />
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-10 mb-24 bg-white shadow-xl rounded-3xl -mt-8 relative z-10">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Powerful AI Features
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Discover the advanced capabilities that make SmartInterview Pro
//                 the leading AI interview solution
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {features.map((feature, index) => {
//                 const IconComponent = feature.icon
//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
//                       <CardHeader className="space-y-4">
//                         <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
//                           <IconComponent className="h-8 w-8 text-red-600" />
//                         </div>
//                         <CardTitle className="text-xl font-bold text-gray-900">
//                           {feature.title}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-gray-600">{feature.description}</p>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center space-y-8"
//             >
//               <h2 className="text-4xl lg:text-5xl font-bold text-white">
//                 Ready to Transform Your Interviews?
//               </h2>
//               <p className="text-xl text-red-100 max-w-3xl mx-auto">
//                 Join hundreds of companies using SmartInterview Pro to make
//                 better hiring decisions faster.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//                 >
//                   Start Free Trial
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white/10 bg-transparent"
//                   onClick={() => router.push("/contact")}
//                 >
//                   Contact Us
//                   <Users className="ml-2 h-5 w-5" />
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default SmartInterviewProPage
// // "use client"

// // import { useRouter } from "next/navigation"
// // import { motion } from "framer-motion"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import {
// //   Brain,
// //   Mic,
// //   Video,
// //   BarChart3,
// //   ArrowRight,
// //   Users,
// //   Shield,
// //   Target,
// // } from "lucide-react"
// // import Footer from "@/components/footer"
// // import Header from "@/components/header"

// // const SmartInterviewProPage = () => {
// //   const router = useRouter()

// //   const features = [
// //     {
// //       icon: Brain,
// //       title: "Contextual JD Matching",
// //       description:
// //         "Goes beyond keywords to match candidates based on actual job relevance.",
// //     },
// //     {
// //       icon: Mic,
// //       title: "Fit-First Candidate Ranking",
// //       description:
// //         "Ranks resumes based on skill alignment, experience, and job readiness.",
// //     },
// //     {
// //       icon: Video,
// //       title: "Role-Based Filtering",
// //       description:
// //         "Apply filters like years of experience, education, or certifications.",
// //     },
// //     {
// //       icon: BarChart3,
// //       title: "Bias-Free Evaluation",
// //       description:
// //         "Removes identifiers to support diversity and reduce unconscious bias.",
// //     },
// //     {
// //       icon: Target,
// //       title: "Bulk Upload & Fast Analysis",
// //       description:
// //         "Process hundreds of resumes in seconds for high-volume roles.",
// //     },
// //     {
// //       icon: Shield,
// //       title: "Interactive Dashboard",
// //       description:
// //         "View ranked lists, download reports, and deep-dive into candidate profiles.",
// //     },
// //   ]

// //   return (
// //     <>
// //       <Header />
// //       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
// //         {/* Hero Section */}
// //         <section className="w-full py-10 md:py-20 bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
// //           {/* Decorative background image */}
// //           {/* <img
// //             src="https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg"
// //             alt="Woman playing chess against a robot"
// //             className="hidden md:block absolute inset-0 w-full h-full object-contain opacity-30 mix-blend-multiply pointer-events-none select-none"
// //             style={{ zIndex: 1, maxWidth: '900px', margin: '0 auto', left: 0, right: 0 }}
// //           /> */}
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="text-center space-y-8"
// //             >
// //               <h1 className="text-3xl lg:text-3xl font-extrabold">
// //                 <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
// //                   📄 AI That Reads Resumes Like a Pro
// //                 </span>
// //                 <br />
// //                 <span className="text-gray-800">
// //                   Screen Smarter. Shortlist Faster. Hire Better.
// //                 </span>
// //               </h1>

// //               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //                 AI-powered resume analysis and ranking that finds the best candidate matches for your job roles — instantly and at scale.
// //               </p>

// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <Button
// //                   size="lg"
// //                   variant="outline"
// //                   className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
// //                 >
// //                   Watch Demo
// //                   <Video className="ml-2 h-5 w-5" />
// //                 </Button>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Features Section */}
// //         <section className="py-12 mb-24 bg-gradient-to-br from-red-50 via-white to-red-100">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //               className="text-center mb-16"
// //             >
// //               <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //                 Powerful AI Features
// //               </h2>
// //               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //                 Discover the advanced capabilities that make SmartInterview Pro
// //                 the leading AI interview solution
// //               </p>
// //             </motion.div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {features.map((feature, index) => {
// //                 const IconComponent = feature.icon
// //                 return (
// //                   <motion.div
// //                     key={index}
// //                     initial={{ opacity: 0, y: 30 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.6, delay: index * 0.1 }}
// //                     viewport={{ once: true }}
// //                   >
// //                     <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
// //                       <CardHeader className="space-y-4">
// //                         <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
// //                           <IconComponent className="h-8 w-8 text-red-600" />
// //                         </div>
// //                         <CardTitle className="text-xl font-bold text-gray-900">
// //                           {feature.title}
// //                         </CardTitle>
// //                       </CardHeader>
// //                       <CardContent>
// //                         <p className="text-gray-600">{feature.description}</p>
// //                       </CardContent>
// //                     </Card>
// //                   </motion.div>
// //                 )
// //               })}
// //             </div>
// //           </div>
// //         </section>

// //         {/* CTA Section */}
// //         <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8 }}
// //               viewport={{ once: true }}
// //               className="text-center space-y-8"
// //             >
// //               <h2 className="text-4xl lg:text-5xl font-bold text-white">
// //                 Ready to Transform Your Interviews?
// //               </h2>
// //               <p className="text-xl text-red-100 max-w-3xl mx-auto">
// //                 Join hundreds of companies using SmartInterview Pro to make
// //                 better hiring decisions faster.
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <Button
// //                   size="lg"
// //                   className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
// //                 >
// //                   Start Free Trial
// //                   <ArrowRight className="ml-2 h-5 w-5" />
// //                 </Button>
// //                 <Button
// //                   size="lg"
// //                   variant="outline"
// //                   className="border-white text-white hover:bg-white/10 bg-transparent"
// //                   onClick={() => router.push("/contact")}
// //                 >
// //                   Contact Us
// //                   <Users className="ml-2 h-5 w-5" />
// //                 </Button>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </section>
// //       </div>
// //       <Footer />
// //     </>
// //   )
// // }

// // export default SmartInterviewProPage
// "use client"

// import { useRouter } from "next/navigation"
// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import {
//   Brain,
//   Mic,
//   Video,
//   BarChart3,
//   ArrowRight,
//   Users,
//   Shield,
//   Target,
// } from "lucide-react"
// import Footer from "@/components/footer"
// import Header from "@/components/header"

// const SmartInterviewProPage = () => {
//   const router = useRouter()

//   const features = [
//     {
//       icon: Brain,
//       title: "Contextual JD Matching",
//       description:
//         "Goes beyond keywords to match candidates based on actual job relevance.",
//     },
//     {
//       icon: Mic,
//       title: "Fit-First Candidate Ranking",
//       description:
//         "Ranks resumes based on skill alignment, experience, and job readiness.",
//     },
//     {
//       icon: Video,
//       title: "Role-Based Filtering",
//       description:
//         "Apply filters like years of experience, education, or certifications.",
//     },
//     {
//       icon: BarChart3,
//       title: "Bias-Free Evaluation",
//       description:
//         "Removes identifiers to support diversity and reduce unconscious bias.",
//     },
//     {
//       icon: Target,
//       title: "Bulk Upload & Fast Analysis",
//       description:
//         "Process hundreds of resumes in seconds for high-volume roles.",
//     },
//     {
//       icon: Shield,
//       title: "Interactive Dashboard",
//       description:
//         "View ranked lists, download reports, and deep-dive into candidate profiles.",
//     },
//   ]

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
//         {/* Hero Section */}
//         <section className="w-full py-10 md:py-20 bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center space-y-8"
//             >
//               <h1 className="text-3xl lg:text-3xl font-extrabold">
//                 <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
//                   📄 AI That Reads Resumes Like a Pro
//                 </span>
//                 <br />
//                 <span className="text-gray-800">
//                   Screen Smarter. Shortlist Faster. Hire Better.
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 AI-powered resume analysis and ranking that finds the best candidate matches for your job roles — instantly and at scale.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
//                 >
//                   Watch Demo
//                   <Video className="ml-2 h-5 w-5" />
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Problem & Solution Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-2 gap-12"
//             >
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-semibold text-red-600">🧠 The Challenge with Resume Overload</h3>
//                 <p className="text-lg text-gray-700">
//                   Recruiters often face hundreds of CVs per role — making it nearly impossible to assess each one manually. Keyword filters miss context, resulting in overlooked talent and hiring delays.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-semibold text-red-600">🔍 What HireVision – CV Analysis Does</h3>
//                 <p className="text-lg text-gray-700">
//                   It evaluates resumes based on job descriptions, scoring each candidate’s fit using context-aware AI. It ranks, filters, and highlights top talent — saving time and boosting accuracy.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-12 mb-24 bg-gradient-to-br from-red-50 via-white to-red-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Powerful AI Features
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Discover the advanced capabilities that make SmartInterview Pro the leading AI interview solution
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {features.map((feature, index) => {
//                 const IconComponent = feature.icon
//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
//                       <CardHeader className="space-y-4">
//                         <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
//                           <IconComponent className="h-8 w-8 text-red-600" />
//                         </div>
//                         <CardTitle className="text-xl font-bold text-gray-900">
//                           {feature.title}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-gray-600">{feature.description}</p>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Use Cases Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="bg-red-50 border border-red-200 rounded-2xl p-10 shadow-lg"
//             >
//               <h3 className="text-3xl font-semibold text-red-600 text-center mb-6">
//                 🧪 Use Cases in Action
//               </h3>
//               <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside max-w-2xl mx-auto">
//                 <li>Mass screening for roles for each job role.</li>
//                 <li>Re-scoring historical candidates for new roles.</li>
//                 <li>Filtering large talent pools with minimal effort.</li>
//                 <li>Streamlining agency or contract hiring.</li>
//               </ul>
//             </motion.div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center space-y-8"
//             >
//               <h2 className="text-4xl lg:text-5xl font-bold text-white">
//                 Ready to Transform Your Interviews?
//               </h2>
//               <p className="text-xl text-red-100 max-w-3xl mx-auto">
//                 Join hundreds of companies using SmartInterview Pro to make better hiring decisions faster.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//                 >
//                   Start Free Trial
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white/10 bg-transparent"
//                   onClick={() => router.push("/contact")}
//                 >
//                   Contact Us
//                   <Users className="ml-2 h-5 w-5" />
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default SmartInterviewProPage
"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Mic,
  Video,
  BarChart3,
  ArrowRight,
  Users,
  Shield,
  Target,
  CheckCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import LearningVisionHeader from "@/components/learningvision-header"

const SmartInterviewProPage = () => {
  const router = useRouter()

  const benefits = [
    "Deliver interactive onboarding without additional trainers",
    "Support technical/process-heavy training with instant clarification",
    "Empower global, multilingual teams to self-learn at their pace",
    "Use AI to pinpoint learning gaps and adapt content",
    "Improve employee engagement across L&D programs",
    "Cut down on repetitive trainer Q&A and manual follow-ups"
  ];

  const features = [
    {
      icon: Brain,
      title: "  Ask-the-Video Chatbot",
      description:
        "Learners get instant answers, based only on the video content — like having a built-in trainer.",
    },
    {
      icon: Mic,
      title: "Plug-and-Play Setup",
      description:
        "Upload your training video and you're done. No coding or manual setup needed.",
    },
    {
      icon: Video,
      title: "Smart Timestamp Referencing",
      description:
        "The bot can guide learners back to the exact video moment tied to their question.",
    },
    {
      icon: BarChart3,
      title: "Global Language Support",
      description:
        "Multilingual interactions make it easy for diverse teams to learn in their own language.",
    },
    {
      icon: Target,
      title: "Instant Highlights & Summaries",
      description:
        "Extract key points and takeaways automatically from each training video.",
    },
    {
      icon: Shield,
      title: "Learner Insight Dashboard",
      description:
        "See what employees are confused about and where engagement peaks or drops.",
    },
  ]

  return (
    <>
      <LearningVisionHeader />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
        {/* Hero Section */}
        <section className="w-full py-10 md:py-20 bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h1 className="text-3xl lg:text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  From Watching to Understanding
                </span>
                <br />
                <span className="text-gray-800">
                  Your Training Videos Just Got a Brain
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                VideoBot transforms static training content into an AI-driven, interactive learning experience — where employees can ask questions and get instant, accurate answers from the video itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                >
                  Watch Demo
                  <Video className="ml-2 h-5 w-5" />
                </Button> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-2 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-0 sm:px-0 lg:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-start"
            >
              {/* Left: The Problem */}
              <div className="space-y-4 flex flex-col items-start">
                <Badge className="bg-red-100 text-red-700 px-3 py-1 mb-2">The Problem</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">The Problem with Passive Learning</h2>
                <div className="space-y-4 text-lg text-gray-700 mt-4">
                  <p>
                    <span className="font-bold text-red-600">Learners are forced</span> to scrub through long footage,
                    <span className="font-bold text-red-600"> can't ask questions,</span>
                    and often walk away confused. The result?
                  </p>
                  <p>Limited learner interaction and engagement</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                       Poor retention of key concepts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                      Repetitive trainer follow-ups
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                    Time-consuming navigation through long videos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: The Solution */}
              <div className="space-y-4 flex flex-col items-start">
                <Badge className="bg-green-100 text-green-700 px-3 py-1 mb-2">The Solution</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">AI That Thinks Like You</h2>
                <div className="space-y-4 text-lg text-gray-700 mt-4">
                  <p>
                    <span className="font-bold text-green-600">VideoBot transforms static</span>training videos into interactive, AI-driven experiences — letting employees ask questions and get instant,  accurate answers from the video itself.
                  </p>
                  <ul className="space-y-3 ml-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 mb-24 bg-gradient-to-br from-red-50 via-white to-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Power Features You’ll Love
              </h2>
              {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advanced capabilities that make SmartInterview Pro the leading AI interview solution
              </p> */}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                      <CardHeader className="space-y-4">
                        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-red-600" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to Transform Your Interviews?
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Join hundreds of companies using SmartInterview Pro to make better hiring decisions faster.
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

export default SmartInterviewProPage
