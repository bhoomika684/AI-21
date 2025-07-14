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
} from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"

const SmartInterviewProPage = () => {
  const router = useRouter()

  const features = [
    {
      icon: Brain,
      title: "Ask-the-Video Chatbot",
      description:
        "Learners get instant answers, based only on the video content — like having a built-in trainer.",
    },
    {
      icon: Mic,
      title: "Smart Timestamp Referencing",
      description:
        "The bot can guide learners back to the exact video moment tied to their question.",
    },
    {
      icon: Video,
      title: "Plug-and-Play Setup",
      description:
        "Upload your training video and you're done. No coding or manual setup needed.",
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

        {/* Features Section */}
        <section className="py-10 mb-24 bg-white shadow-xl rounded-3xl -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Features
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

        {/* CTA Section */}
        {/* CTA Section */}
        <section className="py-16 bg-red-50 text-red-600 text-center">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to unlock the power of <br /> real-time AI insights?</h2>
            <div className="mb-10">
              <p className="text-2xl md:text-2xl font-semibold">
                Reimagine work with AI-<span className='italic'>TwentyOne</span>  — let’s get started.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="/contact">
                <button className="bg-transparent border border-black text-Black font-semibold text-l px-10 py-2 rounded-md hover:bg-white hover:text-red-700 transition-all">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />

    </>
  )
}

export default SmartInterviewProPage
