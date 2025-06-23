// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Users,
//   FileText,
//   ClipboardCheck,
//   BarChart3,
//   Video,
//   CheckCircle,
//   Star,
//   Clock,
//   Target,                                       
//   Brain,
//   Zap,
//   Shield,
// } from "lucide-react"

// const RecruitmentServicesSection = () => {
//   // ✅ Set default active to ID 1
//   const [activeService, setActiveService] = useState<number>(1)

//   const services = [
//     {
//       id: 1,
//       title: "HireVision-Interviewer",
//       displayTitle: <>Interviewer</>,
//       icon: Users,
//       color: "bg-blue-50 text-blue-600 border-blue-200",
//       activeColor: "bg-blue-600 text-white",
//       description:
//         "AI-powered interviewer that conducts comprehensive candidate assessments with intelligent questioning and real-time evaluation.",
//       features: [
//         { icon: Brain, title: "AI-Powered Questioning", description: "Intelligent question generation." },
//         { icon: BarChart3, title: "Real-time Evaluation", description: "Instant assessment with analytics." },
//         { icon: Target, title: "Behavioral Analysis", description: "Assess communication and cultural fit." },
//         { icon: Clock, title: "Time Efficient", description: "Reduces interview time by 70%." },
//       ],
//       stats: [
//         { label: "Interviews Conducted", value: "50K+" },
//         { label: "Time Saved", value: "70%" },
//         { label: "Accuracy Rate", value: "94%" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Resume Analysis",
//       icon: FileText,
//       color: "bg-green-50 text-green-600 border-green-200",
//       activeColor: "bg-green-600 text-white",
//       description:
//         "Advanced AI-powered resume parsing and analysis system that extracts key information and matches candidates to job requirements.",
//       features: [
//         { icon: Zap, title: "Smart Parsing", description: "Extract info from any format." },
//         { icon: Target, title: "Job Matching", description: "Scores candidate fit accurately." },
//         { icon: BarChart3, title: "Skills Assessment", description: "Skill levels, certification check." },
//         { icon: CheckCircle, title: "Quality Scoring", description: "Improvement suggestions & ATS score." },
//       ],
//       stats: [
//         { label: "Resumes Processed", value: "100K+" },
//         { label: "Parsing Accuracy", value: "99%" },
//         { label: "Processing Speed", value: "2 sec" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Test",
//       icon: ClipboardCheck,
//       color: "bg-purple-50 text-purple-600 border-purple-200",
//       activeColor: "bg-purple-600 text-white",
//       description:
//         "Comprehensive testing platform with customizable assessments for technical skills, aptitude, and personality evaluation.",
//       features: [
//         { icon: Brain, title: "Technical Assessments", description: "Coding, system design, tech skills." },
//         { icon: Target, title: "Aptitude Testing", description: "Logical, numerical & reasoning." },
//         { icon: Users, title: "Personality Insights", description: "Behavioral and culture fit." },
//         { icon: Shield, title: "Anti-Cheating", description: "Proctoring, plagiarism detection." },
//       ],
//       stats: [
//         { label: "Tests Created", value: "25K+" },
//         { label: "Question Bank", value: "500K+" },
//         { label: "Success Rate", value: "96%" },
//       ],
//     },
//     {
//       id: 4,
//       title: "InterviewPro",
//       icon: BarChart3,
//       color: "bg-orange-50 text-orange-600 border-orange-200",
//       activeColor: "bg-orange-600 text-white",
//       description:
//         "Professional interview management system with scheduling, feedback collection, and collaborative decision-making tools.",
//       features: [
//         { icon: Clock, title: "Smart Scheduling", description: "Calendar integration and optimization." },
//         { icon: Users, title: "Team Collaboration", description: "Shared notes, decision tracking." },
//         { icon: BarChart3, title: "Analytics Dashboard", description: "Performance and hiring metrics." },
//         { icon: CheckCircle, title: "Feedback System", description: "Customizable evaluation forms." },
//       ],
//       stats: [
//         { label: "Interviews Scheduled", value: "75K+" },
//         { label: "Time Saved", value: "80%" },
//         { label: "User Satisfaction", value: "98%" },
//       ],
//     },
//     {
//       id: 5,
//       title: "Video Analysis",
//       icon: Video,
//       color: "bg-red-50 text-red-600 border-red-200",
//       activeColor: "bg-red-600 text-white",
//       description:
//         "AI-driven video interview analysis that evaluates communication skills, body language, and candidate engagement levels.",
//       features: [
//         { icon: Video, title: "Visual Analysis", description: "Posture, expression, eye contact." },
//         { icon: Brain, title: "Speech Analysis", description: "Tone, pace, confidence indicators." },
//         { icon: Target, title: "Engagement Metrics", description: "Responsiveness and attention." },
//         { icon: BarChart3, title: "Predictive Insights", description: "Fit prediction using video AI." },
//       ],
//       stats: [
//         { label: "Videos Analyzed", value: "30K+" },
//         { label: "Accuracy Rate", value: "92%" },
//         { label: "Insights Generated", value: "150+" },
//       ],
//     },
//   ]

//   // ✅ Disable toggle-off
//   const handleServiceClick = (id: number) => setActiveService(id)

//   const activeServiceData = services.find((s) => s.id === activeService)

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center space-y-1 mb-10"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Recruitment Solution</h2>
//           <br />
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover our AI-powered recruitment tools designed to streamline your hiring process.
//           </p>
//         </motion.div>

//         <div className="text-left text-gray-600 max-w-3xl mx-auto">
//           <h1 className="text-2xl font-bold text-green-600">Hire Vision</h1>
//         </div>
//         <br />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           <div className="space-y-4">
//             {services.map((s, i) => {
//               const Icon = s.icon
//               const isActive = s.id === activeService
//               return (
//                 <motion.div
//                   key={s.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card
//                     className={`cursor-pointer transition-all border-2 ${
//                       isActive
//                         ? "border-green-500 bg-gradient-to-r from-green-50 to-blue-50 shadow-xl"
//                         : "border-gray-200 hover:border-gray-300 hover:shadow-md"
//                     }`}
//                     onClick={() => handleServiceClick(s.id)}
//                   >
//                     <CardContent className="p-6">
//                       <div className="flex items-center space-x-4">
//                         <motion.div
//                           className={`w-12 h-12 rounded-lg flex items-center justify-center ${
//                             isActive ? s.activeColor : s.color
//                           }`}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <Icon className="h-6 w-6" />
//                         </motion.div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold text-gray-900">
//                             {s.displayTitle || s.title}
//                           </h3>
//                           <p className="text-sm text-gray-600 mt-1 line-clamp-2">{s.description}</p>
//                         </div>
//                         <motion.div
//                           className={`w-6 h-6 rounded-full border-2 ${
//                             isActive ? "border-green-500 bg-green-500" : "border-gray-300"
//                           }`}
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           {isActive && (
//                             <motion.div
//                               initial={{ scale: 0 }}
//                               animate={{ scale: 1 }}
//                               className="w-full h-full rounded-full bg-green-500 flex items-center justify-center"
//                             >
//                               <CheckCircle className="h-3 w-3 text-white" />
//                             </motion.div>
//                           )}
//                         </motion.div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )
//             })}
//           </div>

//           <div className="lg:sticky lg:top-8">
//             <AnimatePresence mode="wait">
//               {activeServiceData && (
//                 <motion.div
//                   key={activeServiceData.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <Card className="bg-gradient-to-br from-gray-50 to-white shadow-2xl border-0 overflow-hidden">
//                     <CardContent className="p-8 space-y-8">
//                       <div className="text-center space-y-4">
//                         <motion.div
//                           className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${activeServiceData.activeColor}`}
//                           whileHover={{ rotate: 5 }}
//                         >
//                           <activeServiceData.icon className="h-8 w-8" />
//                         </motion.div>
//                         <h3 className="text-2xl font-bold text-gray-900">
//                           {activeServiceData.displayTitle || activeServiceData.title}
//                         </h3>
//                         <p className="text-gray-600">{activeServiceData.description}</p>
//                       </div>

//                       <div className="grid grid-cols-3 gap-4">
//                         {activeServiceData.stats.map((s, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.4, delay: i * 0.1 }}
//                             className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
//                           >
//                             <div className="text-2xl font-bold text-gray-900">{s.value}</div>
//                             <div className="text-xs text-gray-600">{s.label}</div>
//                           </motion.div>
//                         ))}
//                       </div>

//                       <div className="space-y-4">
//                         <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {activeServiceData.features.map((f, i) => (
//                             <motion.div
//                               key={i}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
//                               className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 space-y-2 hover:shadow-md"
//                             >
//                               <div className="flex items-center space-x-2">
//                                 <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
//                                   <f.icon className="h-4 w-4 text-gray-600" />
//                                 </div>
//                                 <h5 className="font-medium text-gray-900">{f.title}</h5>
//                               </div>
//                               <p className="text-sm text-gray-600">{f.description}</p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="text-center pt-4">
//                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                           <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 shadow-lg">
//                             Try {activeServiceData.title} →
//                           </Button>
//                         </motion.div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default RecruitmentServicesSection
// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Users,
//   FileText,
//   ClipboardCheck,
//   BarChart3,
//   Video,
//   CheckCircle,
//   Star,
//   Clock,
//   Target,                                       
//   Brain,
//   Zap,
//   Shield,
// } from "lucide-react"

// const RecruitmentServicesSection = () => {
//   // ✅ Set default active to ID 1
//   const [activeService, setActiveService] = useState<number>(1)

//   const services = [
//     {
//       id: 1,
//       title: "HireVision-Interviewer",
//       displayTitle: <>Interviewer</>,
//       icon: Users,
//       color: "bg-blue-50 text-blue-600 border-blue-200",
//       activeColor: "bg-blue-600 text-white",
//       description:
//         "AI-powered interviewer that conducts comprehensive candidate assessments with intelligent questioning and real-time evaluation.",
//       features: [
//         { icon: Brain, title: "AI-Powered Questioning", description: "Intelligent question generation." },
//         { icon: BarChart3, title: "Real-time Evaluation", description: "Instant assessment with analytics." },
//         { icon: Target, title: "Behavioral Analysis", description: "Assess communication and cultural fit." },
//         { icon: Clock, title: "Time Efficient", description: "Reduces interview time by 70%." },
//       ],
//       stats: [
//         { label: "Interviews Conducted", value: "50K+" },
//         { label: "Time Saved", value: "70%" },
//         { label: "Accuracy Rate", value: "94%" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Resume Analysis",
//       icon: FileText,
//       color: "bg-green-50 text-green-600 border-green-200",
//       activeColor: "bg-green-600 text-white",
//       description:
//         "Advanced AI-powered resume parsing and analysis system that extracts key information and matches candidates to job requirements.",
//       features: [
//         { icon: Zap, title: "Smart Parsing", description: "Extract info from any format." },
//         { icon: Target, title: "Job Matching", description: "Scores candidate fit accurately." },
//         { icon: BarChart3, title: "Skills Assessment", description: "Skill levels, certification check." },
//         { icon: CheckCircle, title: "Quality Scoring", description: "Improvement suggestions & ATS score." },
//       ],
//       stats: [
//         { label: "Resumes Processed", value: "100K+" },
//         { label: "Parsing Accuracy", value: "99%" },
//         { label: "Processing Speed", value: "2 sec" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Test",
//       icon: ClipboardCheck,
//       color: "bg-purple-50 text-purple-600 border-purple-200",
//       activeColor: "bg-purple-600 text-white",
//       description:
//         "Comprehensive testing platform with customizable assessments for technical skills, aptitude, and personality evaluation.",
//       features: [
//         { icon: Brain, title: "Technical Assessments", description: "Coding, system design, tech skills." },
//         { icon: Target, title: "Aptitude Testing", description: "Logical, numerical & reasoning." },
//         { icon: Users, title: "Personality Insights", description: "Behavioral and culture fit." },
//         { icon: Shield, title: "Anti-Cheating", description: "Proctoring, plagiarism detection." },
//       ],
//       stats: [
//         { label: "Tests Created", value: "25K+" },
//         { label: "Question Bank", value: "500K+" },
//         { label: "Success Rate", value: "96%" },
//       ],
//     },
//     {
//       id: 4,
//       title: "InterviewPro",
//       icon: BarChart3,
//       color: "bg-orange-50 text-orange-600 border-orange-200",
//       activeColor: "bg-orange-600 text-white",
//       description:
//         "Professional interview management system with scheduling, feedback collection, and collaborative decision-making tools.",
//       features: [
//         { icon: Clock, title: "Smart Scheduling", description: "Calendar integration and optimization." },
//         { icon: Users, title: "Team Collaboration", description: "Shared notes, decision tracking." },
//         { icon: BarChart3, title: "Analytics Dashboard", description: "Performance and hiring metrics." },
//         { icon: CheckCircle, title: "Feedback System", description: "Customizable evaluation forms." },
//       ],
//       stats: [
//         { label: "Interviews Scheduled", value: "75K+" },
//         { label: "Time Saved", value: "80%" },
//         { label: "User Satisfaction", value: "98%" },
//       ],
//     },
//     {
//       id: 5,
//       title: "Video Analysis",
//       icon: Video,
//       color: "bg-red-50 text-red-600 border-red-200",
//       activeColor: "bg-red-600 text-white",
//       description:
//         "AI-driven video interview analysis that evaluates communication skills, body language, and candidate engagement levels.",
//       features: [
//         { icon: Video, title: "Visual Analysis", description: "Posture, expression, eye contact." },
//         { icon: Brain, title: "Speech Analysis", description: "Tone, pace, confidence indicators." },
//         { icon: Target, title: "Engagement Metrics", description: "Responsiveness and attention." },
//         { icon: BarChart3, title: "Predictive Insights", description: "Fit prediction using video AI." },
//       ],
//       stats: [
//         { label: "Videos Analyzed", value: "30K+" },
//         { label: "Accuracy Rate", value: "92%" },
//         { label: "Insights Generated", value: "150+" },
//       ],
//     },
//   ]

//   // ✅ Disable toggle-off
//   const handleServiceClick = (id: number) => setActiveService(id)

//   const activeServiceData = services.find((s) => s.id === activeService)

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center space-y-1 mb-10"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Recruitment Solution</h2>
//           <br />
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover our AI-powered recruitment tools designed to streamline your hiring process.
//           </p>
//         </motion.div>

//         <div className="text-left text-gray-600 max-w-3xl mx-auto">
//           <h1 className="text-2xl font-bold text-black-600">Hire Vision</h1>
//         </div>
//         <br />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           <div className="space-y-4">
//             {services.map((s, i) => {
//               const Icon = s.icon
//               const isActive = s.id === activeService
//               return (
//                 <motion.div
//                   key={s.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card
//                     className={`cursor-pointer transition-all border-2 ${
//                       isActive
//                         ? "border-green-500 bg-gradient-to-r from-green-50 to-blue-50 shadow-xl"
//                         : "border-gray-200 hover:border-gray-300 hover:shadow-md"
//                     }`}
//                     onClick={() => handleServiceClick(s.id)}
//                   >
//                     <CardContent className="p-6">
//                       <div className="flex items-center space-x-4">
//                         <motion.div
//                           className={`w-12 h-12 rounded-lg flex items-center justify-center ${
//                             isActive ? s.activeColor : s.color
//                           }`}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <Icon className="h-6 w-6" />
//                         </motion.div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold text-gray-900">
//                             {s.displayTitle || s.title}
//                           </h3>
//                           <p className="text-sm text-gray-600 mt-1 line-clamp-2">{s.description}</p>
//                         </div>
//                         <motion.div
//                           className={`w-6 h-6 rounded-full border-2 ${
//                             isActive ? "border-green-500 bg-green-500" : "border-gray-300"
//                           }`}
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           {isActive && (
//                             <motion.div
//                               initial={{ scale: 0 }}
//                               animate={{ scale: 1 }}
//                               className="w-full h-full rounded-full bg-green-500 flex items-center justify-center"
//                             >
//                               <CheckCircle className="h-3 w-3 text-white" />
//                             </motion.div>
//                           )}
//                         </motion.div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )
//             })}
//           </div>

//           <div className="lg:sticky lg:top-8">
//             <AnimatePresence mode="wait">
//               {activeServiceData && (
//                 <motion.div
//                   key={activeServiceData.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <Card className="bg-gradient-to-br from-gray-50 to-white shadow-2xl border-0 overflow-hidden">
//                     <CardContent className="p-8 space-y-8">
//                       <div className="text-center space-y-4">
//                         <motion.div
//                           className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${activeServiceData.activeColor}`}
//                           whileHover={{ rotate: 5 }}
//                         >
//                           <activeServiceData.icon className="h-8 w-8" />
//                         </motion.div>
//                         <h3 className="text-2xl font-bold text-gray-900">
//                           {activeServiceData.displayTitle || activeServiceData.title}
//                         </h3>
//                         <p className="text-gray-600">{activeServiceData.description}</p>
//                       </div>

//                       <div className="grid grid-cols-3 gap-4">
//                         {activeServiceData.stats.map((s, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.4, delay: i * 0.1 }}
//                             className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
//                           >
//                             <div className="text-2xl font-bold text-gray-900">{s.value}</div>
//                             <div className="text-xs text-gray-600">{s.label}</div>
//                           </motion.div>
//                         ))}
//                       </div>

//                       <div className="space-y-4">
//                         <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {activeServiceData.features.map((f, i) => (
//                             <motion.div
//                               key={i}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
//                               className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 space-y-2 hover:shadow-md"
//                             >
//                               <div className="flex items-center space-x-2">
//                                 <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
//                                   <f.icon className="h-4 w-4 text-gray-600" />
//                                 </div>
//                                 <h5 className="font-medium text-gray-900">{f.title}</h5>
//                               </div>
//                               <p className="text-sm text-gray-600">{f.description}</p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="text-center pt-4">
//                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                           <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 shadow-lg">
//                             Try {activeServiceData.title} →
//                           </Button>
//                         </motion.div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default RecruitmentServicesSection

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  FileText,
  ClipboardCheck,
  BarChart3,
  Video,
  CheckCircle,
  Clock,
  Target,
  Brain,
  Zap,
  Shield,
  ArrowDownCircle,
  XCircle,
} from "lucide-react"

const RecruitmentServicesSection = () => {
  const [activeService, setActiveService] = useState<number>(1)
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false)

  const services = [
    {
      id: 1,
      title: "HireVision-Interviewer",
      displayTitle: <>Interviewer</>,
      icon: Users,
      color: "bg-red-50 text-red-600 border-red-200",
      activeColor: "bg-red-600 text-white",
      description:
        "AI-powered interviewer that conducts comprehensive candidate assessments with intelligent questioning and real-time evaluation.",
      features: [
        { icon: Brain, title: "AI-Powered Questioning", description: "Intelligent question generation." },
        { icon: BarChart3, title: "Real-time Evaluation", description: "Instant assessment with analytics." },
        { icon: Target, title: "Behavioral Analysis", description: "Assess communication and cultural fit." },
        { icon: Clock, title: "Time Efficient", description: "Reduces interview time by 70%." },
      ],
      stats: [
        { label: "Interviews Conducted", value: "50K+" },
        { label: "Time Saved", value: "70%" },
        { label: "Accuracy Rate", value: "94%" },
      ],
    },
    {
      id: 2,
      title: "Resume Analysis",
      icon: FileText,
      color: "bg-rose-50 text-rose-600 border-rose-200",
      activeColor: "bg-rose-600 text-white",
      description:
        "Advanced AI-powered resume parsing and analysis system that extracts key information and matches candidates to job requirements.",
      features: [
        { icon: Zap, title: "Smart Parsing", description: "Extract info from any format." },
        { icon: Target, title: "Job Matching", description: "Scores candidate fit accurately." },
        { icon: BarChart3, title: "Skills Assessment", description: "Skill levels, certification check." },
        { icon: CheckCircle, title: "Quality Scoring", description: "Improvement suggestions & ATS score." },
      ],
      stats: [
        { label: "Resumes Processed", value: "100K+" },
        { label: "Parsing Accuracy", value: "99%" },
        { label: "Processing Speed", value: "2 sec" },
      ],
    },
    {
      id: 3,
      title: "Test",
      icon: ClipboardCheck,
      color: "bg-red-50 text-red-600 border-red-200",
      activeColor: "bg-red-600 text-white",
      description:
        "Comprehensive testing platform with customizable assessments for technical skills, aptitude, and personality evaluation.",
      features: [
        { icon: Brain, title: "Technical Assessments", description: "Coding, system design, tech skills." },
        { icon: Target, title: "Aptitude Testing", description: "Logical, numerical & reasoning." },
        { icon: Users, title: "Personality Insights", description: "Behavioral and culture fit." },
        { icon: Shield, title: "Anti-Cheating", description: "Proctoring, plagiarism detection." },
      ],
      stats: [
        { label: "Tests Created", value: "25K+" },
        { label: "Question Bank", value: "500K+" },
        { label: "Success Rate", value: "96%" },
      ],
    },
    {
      id: 4,
      title: "InterviewPro",
      icon: BarChart3,
      color: "bg-rose-50 text-rose-600 border-rose-200",
      activeColor: "bg-rose-600 text-white",
      description:
        "Professional interview management system with scheduling, feedback collection, and collaborative decision-making tools.",
      features: [
        { icon: Clock, title: "Smart Scheduling", description: "Calendar integration and optimization." },
        { icon: Users, title: "Team Collaboration", description: "Shared notes, decision tracking." },
        { icon: BarChart3, title: "Analytics Dashboard", description: "Performance and hiring metrics." },
        { icon: CheckCircle, title: "Feedback System", description: "Customizable evaluation forms." },
      ],
      stats: [
        { label: "Interviews Scheduled", value: "75K+" },
        { label: "Time Saved", value: "80%" },
        { label: "User Satisfaction", value: "98%" },
      ],
    },
    {
      id: 5,
      title: "Video Analysis",
      icon: Video,
      color: "bg-red-50 text-red-600 border-red-200",
      activeColor: "bg-red-600 text-white",
      description:
        "AI-driven video interview analysis that evaluates communication skills, body language, and candidate engagement levels.",
      features: [
        { icon: Video, title: "Visual Analysis", description: "Posture, expression, eye contact." },
        { icon: Brain, title: "Speech Analysis", description: "Tone, pace, confidence indicators." },
        { icon: Target, title: "Engagement Metrics", description: "Responsiveness and attention." },
        { icon: BarChart3, title: "Predictive Insights", description: "Fit prediction using video AI." },
      ],
      stats: [
        { label: "Videos Analyzed", value: "30K+" },
        { label: "Accuracy Rate", value: "92%" },
        { label: "Insights Generated", value: "150+" },
      ],
    },
  ]

  const handleServiceClick = (id: number) => setActiveService(id)
  const activeServiceData = services.find((s) => s.id === activeService)

  return (
    <section className="py-20 bg-gradient-to-br from-white via-red-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-1 mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Recruitment Solution</h2>
          <br />
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our AI-powered recruitment tools designed to streamline your hiring process.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsSectionOpen(!isSectionOpen)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300"
              >
                {isSectionOpen ? (
                  <>
                    <span>Hide Details</span> <XCircle className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    <span>Click Here</span> <ArrowDownCircle className="h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isSectionOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="text-left text-gray-600 max-w-3xl mx-auto mt-8">
                <h1 className="text-2xl font-bold text-red-600">Hire Vision</h1>
              </div>
              <br />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  {services.map((s, i) => {
                    const Icon = s.icon
                    const isActive = s.id === activeService
                    return (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                      >
                        <Card
                          className={`cursor-pointer transition-all border-2 ${
                            isActive
                              ? "border-red-500 bg-gradient-to-r from-red-50 to-rose-50 shadow-xl"
                              : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                          }`}
                          onClick={() => handleServiceClick(s.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <motion.div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                  isActive ? s.activeColor : s.color
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Icon className="h-6 w-6" />
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">{s.displayTitle || s.title}</h3>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{s.description}</p>
                              </div>
                              <motion.div
                                className={`w-6 h-6 rounded-full border-2 ${
                                  isActive ? "border-red-500 bg-red-500" : "border-gray-300"
                                }`}
                                whileHover={{ scale: 1.1 }}
                              >
                                {isActive && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-full h-full rounded-full bg-red-500 flex items-center justify-center"
                                  >
                                    <CheckCircle className="h-3 w-3 text-white" />
                                  </motion.div>
                                )}
                              </motion.div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="lg:sticky lg:top-8">
                  <AnimatePresence mode="wait">
                    {activeServiceData && (
                      <motion.div
                        key={activeServiceData.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Card className="bg-gradient-to-br from-white to-red-50 shadow-2xl border-0 overflow-hidden">
                          <CardContent className="p-8 space-y-8">
                            <div className="text-center space-y-4">
                              <motion.div
                                className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${activeServiceData.activeColor}`}
                                whileHover={{ rotate: 5 }}
                              >
                                <activeServiceData.icon className="h-8 w-8" />
                              </motion.div>
                              <h3 className="text-2xl font-bold text-gray-900">
                                {activeServiceData.displayTitle || activeServiceData.title}
                              </h3>
                              <p className="text-gray-600">{activeServiceData.description}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                              {activeServiceData.stats.map((s, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.4, delay: i * 0.1 }}
                                  className="text-center p-4 bg-white rounded-lg shadow-sm border border-red-100"
                                >
                                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                                  <div className="text-xs text-gray-600">{s.label}</div>
                                </motion.div>
                              ))}
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activeServiceData.features.map((f, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                    className="bg-white p-4 rounded-lg shadow-sm border border-red-100 space-y-2 hover:shadow-md transition-shadow"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                                        <f.icon className="h-4 w-4 text-red-600" />
                                      </div>
                                      <h5 className="font-medium text-gray-900">{f.title}</h5>
                                    </div>
                                    <p className="text-sm text-gray-600">{f.description}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            <div className="text-center pt-4">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 shadow-lg transition-all duration-300">
                                  Try {activeServiceData.title} →
                                </Button>
                              </motion.div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default RecruitmentServicesSection
