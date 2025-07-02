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
//       title: "Live Interview Automation",
//       description:
//         "Conducts interviews with intelligent question flow based on job descriptions and individual candidate profiles.",
//     },
//     {
//       icon: Mic,
//       title: "Concurrent Interviews",
//       description:
//         "Conduct multiple interviews within the same time period, irrespective of interviewing panel or job descriptions.",
//     },
//     {
//       icon: Video,
//       title: "Behavioral & Emotional Analytics",
//       description:
//         "Detects tone, facial cues, and speaking patterns for deeper evaluation.",
//     },
//     {
//       icon: BarChart3,
//       title: "Custom Interview Templates",
//       description:
//         "Build question sets tailored to specific roles or teams, and the AI will ask those questions along with the generated questions.",
//     },
//     {
//       icon: Target,
//       title: "No-Schedule Interviews",
//       description:
//         "Run interviews on-demand considering candidate’s availability and schedule, eliminating calendar conflicts entirely.",
//     },
//     {
//       icon: Shield,
//       title: "Insight-Rich Reports",
//       description:
//         "Generates summaries, performance scores, and video recordings for review.",
//     },
//   ]

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
//         {/* Hero Section */}
//         <section className="w-full py-10 bg-gradient-to-br from-red-50 via-white to-red-100 border-b border-red-100 relative overflow-hidden">
//           <img
//             src=""
//             alt=""
//             className="hidden md:block absolute inset-0 w-full h-full object-contain opacity-30 mix-blend-multiply pointer-events-none select-none"
//             style={{ zIndex: 1 }}
//           />
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center space-y-8"
//             >
//               <h1 className="text-3xl lg:text-3xl font-extrabold">
//                 <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
//                   Transform Interviews with AI
//                 </span>
//                 <br />
//                 <span className="text-gray-800">
//                   An AI-powered virtual interviewer that conducts, evaluates,
//                   scores candidate interviews.
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 Transform your interview process with AI-powered question
//                 generation, real-time assessment, and intelligent candidate
//                 evaluation. Experience the future of recruitment interviews.
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

//         {/* What's Broken / How It Works Section */}
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
//                 <h3 className="text-2xl font-semibold text-red-600"> What’s Broken in Traditional Interviews</h3>
//                 <p className="text-lg text-gray-700">
//                   Manual interviews are time-consuming, inconsistent, and hard to scale.
//                   Recruiters face scheduling chaos, subjective evaluations, and missed insights —
//                   making quality hiring inefficient and biased.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h3 className="text-2xl font-semibold text-red-600"> How HireVision – Interviewer Works</h3>
//                 <p className="text-lg text-gray-700">
//                   HireVision – Interviewer simulates a structured, real-time interview experience.
//                   It generates and asks questions, evaluates responses, and analyzes behavior —
//                   delivering smart, consistent assessments without human bias.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-20 mb-24 bg-gradient-to-br from-red-50 via-white to-red-100">
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
"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
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
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import HireVisionHeader from "@/components/hirevision-header"

const SmartInterviewProPage = () => {
  const router = useRouter()

  const benefits = [
    "Understands job context, not just keywords",
    "Ranks candidates by true fit, not just buzzwords",
    "Filters out irrelevant resumes automatically",
    "Highlights top talent instantly",
    "Saves hours of manual screening"
  ];

  const features = [
    {
      icon: Brain,
      title: "Live Interview Automation",
      description:
        "Conducts interviews with intelligent question flow based on job descriptions and individual candidate profiles.",
    },
    {
      icon: Mic,
      title: "Concurrent Interviews",
      description:
        "Conduct multiple interviews within the same time period, irrespective of interviewing panel or job descriptions.",
    },
    {
      icon: Video,
      title: "Behavioral & Emotional Analytics",
      description:
        "Detects tone, facial cues, and speaking patterns for deeper evaluation.",
    },
    {
      icon: BarChart3,
      title: "Custom Interview Templates",
      description:
        "Build question sets tailored to specific roles or teams, and the AI will ask those questions along with the generated questions.",
    },
    {
      icon: Target,
      title: "No-Schedule Interviews",
      description:
        "Run interviews on-demand considering candidate’s availability and schedule, eliminating calendar conflicts entirely.",
    },
    {
      icon: Shield,
      title: "Insight-Rich Reports",
      description:
        "Generates summaries, performance scores, and video recordings for review.",
    },
  ]

  return (
    <>
      <HireVisionHeader />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
        {/* Hero Section */}
        <section className="w-full py-10 bg-gradient-to-br from-red-50 via-white to-red-100 border-b border-red-100 relative overflow-hidden">
          <img
            src=""
            alt=""
            className="hidden md:block absolute inset-0 w-full h-full object-contain opacity-30 mix-blend-multiply pointer-events-none select-none"
            style={{ zIndex: 1 }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h1 className="text-3xl lg:text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Transform Interviews with AI
                </span>
                <br />
                <span className="text-gray-800">
                  An AI-powered virtual interviewer that conducts, evaluates,
                  scores candidate interviews.
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your interview process with AI-powered question
                generation, real-time assessment, and intelligent candidate
                evaluation. Experience the future of recruitment interviews.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                >
                  Watch Demo
                  <Video className="ml-2 h-5 w-5" />
                </Button>
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <Badge className="bg-red-100 text-red-700 px-3 py-1">The Problem</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Drowning in Resume Overload?</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <strong className="text-red-600">500+ resumes</strong> for a single position.
                    <strong className="text-red-600"> Hours of manual screening.</strong>
                    Great candidates slipping through the cracks.
                  </p>
                  <p>Traditional keyword filters miss context and nuance, leading to:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Overlooked qualified candidates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Hiring delays and bottlenecks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Recruiter burnout and inefficiency
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 flex flex-col items-start">
                <Badge className="bg-green-100 text-green-700 px-3 py-1 self-start">The Solution</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 self-start">AI That Thinks Like You</h2>
                <div className="space-y-4 text-lg text-gray-700 w-full">
                  <p>
                    <strong className="text-green-600">HireVision CV Analysis</strong> uses advanced AI to understand
                    job requirements and candidate qualifications at a deeper level.
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="22" cy="22" r="18" stroke="#22C55E" strokeWidth="3" fill="none" />
                          <path d="M13 22L19 28L31 16" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{benefit}</span>
                      </div>
                     ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Features Section */}
        <section className="py-20 mb-16 bg-gradient-to-br from-red-50 via-white to-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Smart Capabilities at a Glance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advanced capabilities that make SmartInterview Pro
                the leading AI interview solution
              </p>
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

        {/* Where It Fits Best Section */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h3 className="text-3xl font-semibold  text-left text-red-600">Where It Fits Best</h3>
              <ul className="text-lg text-gray-700 text-left max-w-xl mx-auto space-y-4 list-disc list-inside">
                <li>High-volume hiring.</li>
                <li>Remote, asynchronous, and unbiased evaluations.</li>
                <li>Behavioral and video analysis.</li>
                <li>Early-stage screening rounds in hiring processes.</li>
              </ul>
            </motion.div>
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
                Join hundreds of companies using SmartInterview Pro to make
                better hiring decisions faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
