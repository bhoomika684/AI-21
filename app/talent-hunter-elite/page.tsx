// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Brain, Mic, Video, BarChart3, ArrowRight, Users, Shield, Target } from "lucide-react"
// import Footer from "@/components/footer"
// import Header from "@/components/header"

// const SmartInterviewProPage = () => {
//   const features = [
//     {
//       icon: Brain,
//       title: "AI-Powered Question Generation",
//       description:
//         "Automatically generates relevant interview questions based on job requirements and candidate profile",
//     },
//     {
//       icon: Mic,
//       title: "Real-time Speech Analysis",
//       description: "Analyzes speech patterns, tone, and communication skills during the interview",
//     },
//     {
//       icon: Video,
//       title: "Facial Expression Recognition",
//       description: "Advanced computer vision to assess non-verbal communication and confidence levels",
//     },
//     {
//       icon: BarChart3,
//       title: "Instant Performance Scoring",
//       description: "Provides immediate scoring and detailed feedback on candidate performance",
//     },
//     {
//       icon: Target,
//       title: "Behavioral Assessment",
//       description: "Evaluates personality traits and cultural fit using advanced psychological models",
//     },
//     {
//       icon: Shield,
//       title: "Bias-Free Evaluation",
//       description: "Eliminates human bias with objective, data-driven assessment criteria",
//     },
//   ]

//   const benefits = [
//     { metric: "75%", label: "Faster Interview Process" },
//     { metric: "90%", label: "Accuracy in Candidate Assessment" },
//     { metric: "60%", label: "Reduction in Hiring Time" },
//     { metric: "95%", label: "Client Satisfaction Rate" },
//   ]

//   return (
//     <>
//     <Header/>
//     <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center space-y-8"
//           >
//             <h1 className="text-3xl lg:text-3xl font-extrabold">
//               <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
//                 SmartInterview Pro
//               </span>
//               <br />
//               <span className="text-gray-800">AI-Powered Interview Conductor</span>
//             </h1>

//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Transform your interview process with AI-powered question generation, real-time assessment, and
//               intelligent candidate evaluation. Experience the future of recruitment interviews.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//               >
//                 Start Free Trial
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
//               >
//                 Watch Demo
//                 <Video className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Stats */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center space-y-2"
//               >
//                 <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
//                   {benefit.metric}
//                 </div>
//                 <div className="text-gray-600">{benefit.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover the advanced capabilities that make SmartInterview Pro the leading AI interview solution
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//               const IconComponent = feature.icon
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
//                     <CardHeader className="space-y-4">
//                       <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
//                         <IconComponent className="h-8 w-8 text-red-600" />
//                       </div>
//                       <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-600">{feature.description}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center space-y-8"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Transform Your Interviews?</h2>
//             <p className="text-xl text-red-100 max-w-3xl mx-auto">
//               Join hundreds of companies using SmartInterview Pro to make better hiring decisions faster.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//               >
//                 Start Free Trial
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
//                 Contact Sales
//                 <Users className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default SmartInterviewProPage
"use client"

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
import Footer from "@/components/footer"
import Header from "@/components/header"

const SmartInterviewProPage = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Question Generation",
      description:
        "Automatically generates relevant interview questions based on job requirements and candidate profile",
    },
    {
      icon: Mic,
      title: "Real-time Speech Analysis",
      description: "Analyzes speech patterns, tone, and communication skills during the interview",
    },
    {
      icon: Video,
      title: "Facial Expression Recognition",
      description: "Advanced computer vision to assess non-verbal communication and confidence levels",
    },
    {
      icon: BarChart3,
      title: "Instant Performance Scoring",
      description: "Provides immediate scoring and detailed feedback on candidate performance",
    },
    {
      icon: Target,
      title: "Behavioral Assessment",
      description: "Evaluates personality traits and cultural fit using advanced psychological models",
    },
    {
      icon: Shield,
      title: "Bias-Free Evaluation",
      description: "Eliminates human bias with objective, data-driven assessment criteria",
    },
  ]

  const benefits = [
    { metric: "75%", label: "Faster Interview Process" },
    { metric: "90%", label: "Accuracy in Candidate Assessment" },
    { metric: "60%", label: "Reduction in Hiring Time" },
    { metric: "95%", label: "Client Satisfaction Rate" },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h1 className="text-3xl lg:text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  SmartInterview Pro
                </span>
                <br />
                <span className="text-gray-800">AI-Powered Interview Conductor</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your interview process with AI-powered question generation, real-time assessment, and
                intelligent candidate evaluation. Experience the future of recruitment interviews.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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

        {/* Benefits Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {benefit.metric}
                  </div>
                  <div className="text-gray-600">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advanced capabilities that make SmartInterview Pro the leading AI interview solution
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
                        <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
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

        {/* ✅ New CTA Section with Red Background */}
        {/* Updated CTA Section - Matching Screenshot */}
<section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
  <div className="max-w-7xl mx-auto px-4 text-center space-y-10">
    <h2 className="text-4xl md:text-5xl font-bold">
      Ready to unlock the power of real-time AI insights?
    </h2>
    <p className="text-xl max-w-4xl mx-auto leading-relaxed">
      Join 1000+ enterprise companies already using A21's specialized AI products to streamline
      operations, reduce costs, and accelerate growth.
    </p>

    <div className="flex flex-wrap justify-center items-start gap-6 text-white font-medium text-lg mt-4">
      {[
        "30-day free trial with full access",
        "Dedicated enterprise support team",
        "Custom integration assistance",
        "Scalable pricing for any organization",
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 min-w-[220px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-center">{item}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
      <Button
        size="lg"
        className="bg-white text-red-700 text-lg font-semibold px-6 py-3 hover:bg-red-100"
      >
        Start Free Trial →
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-white text-white text-lg font-semibold px-6 py-3 hover:bg-white/10"
      >
        Schedule Demo
      </Button>
    </div>
  </div>
</section>

      </div>
      <Footer />
    </>
  )
}

export default SmartInterviewProPage
