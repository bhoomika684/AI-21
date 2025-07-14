// // ...same code as Learningvision-videoBot page, but with component name LearningVisionPage
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

// const LearningVisionPage = () => {
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
//               className="text-center space-y-3"
//             >
//               <h2 className="text-4xl lg:text-5xl font-bold text-white">
//                 Ready to unlock the power of<br></br>
//                 real-time AI insights?
//               </h2>
//               <p className="text-xl text-red-100 max-w-3xl mx-auto">
//                 Reimagine work with AI-TwentyOne  — let’s get started.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

// export default LearningVisionPage
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Users,
  Eye,
  Sparkles,
  MessageSquare,
  Calendar,
  FileText,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import LearningVisionHeader from "@/components/learningvision-header"

export default function WhyYantrAIPage() {
  const router = useRouter()

  const features = [
    {
      icon: MessageSquare,
      title: "AI-Driven Personalized Learning Paths",
      fullDescription:
        "Delivers tailored training experiences for each employee based on role, performance, and learning style.",
    },
    {
      icon: Calendar,
      title: "Seamless Integration with Existing L&D Systems",
      fullDescription:
        "Enhances your current learning platforms by integrating AI without disrupting established workflows.",
    },
    {
      icon: Eye,
      title: "Real-Time Skill Gap Analysis",
      fullDescription:
        "Continuously identifies individual and team-level skill gaps to recommend targeted upskilling content.",
    },
    {
      icon: Sparkles,
      title: "Automated Content Curation & Recommendations",
      fullDescription:
        "Uses AI to surface the most relevant learning material from internal and external sources—instantly.",
    },
    {
      icon: Users,
      title: "Engagement & Progress Tracking with Predictive Insights",
      fullDescription:
        "Monitors employee engagement and learning outcomes with predictive analytics to drive better retention.",
    },
    {
      icon: FileText,
      title: "Solving Traditional L&D Bottlenecks",
      fullDescription:
        "Eliminates manual program planning, outdated content issues, and low engagement with a smart, adaptive learning approach.",
    },
  ]

  const products = [
    {
      icon: MessageSquare,
      title: "LearningVision – VideoBot",
      slug: "/Product/LearningVision/Learningvision-videoBot",
      description:
        "An AI-powered training assistant that analyzes your training videos and enables a smart, interactive chatbot next to the video.",
      features: [],
    },
  ]

  return (
    <>
      <LearningVisionHeader isMainLearningVisionPage={true} />
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
              <h1 className="text-4xl lg:text-5xl font-semibold mb-4 leading-relaxed">
                LearningVision
              </h1>
              <p className="text-lg text-white font-medium">
                AI-powered solutions designed for Learning & Development teams
                across every industry — enabling smarter training, upskilling,
                and growth.
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
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
            >
              Key features of LearningVision
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
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
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
            >
              Product Lineup
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12 justify-center">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="h-full flex justify-center"
                >
                  <Link href={product.slug} className="h-full flex-1 max-w-md mx-auto">
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
                      <div className="mt-2 text-red-700 font-medium">Learn More</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section removed as requested */}

        {/* CTA Section */}
        <section className="py-20 bg-red-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-red-600 mb-8">
              Ready to unlock the power of<br />real-time AI insights?
            </h2>
            <p className="text-2xl text-red-600 font-semibold mb-5">
              Reimagine work with AI-<span className='italic'>TwentyOne</span> — let’s get started.
            </p>
            <div className="flex justify-center">
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-red-600 text-red-600 font-semibold text-base px-6 py-2 rounded-lg hover:bg-white hover:text-red-700 transition-all bg-transparent"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

