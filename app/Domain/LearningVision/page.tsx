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
            <div className="max-w-3xl mx-auto text-center py-20">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-red-600 mb-6">
                Ready to unlock the power of<br />real-time AI insights?
              </h1>
              <p className="text-2xl text-red-600 font-semibold mb-8">
                Reimagine work with AI-<span className='italic'>TwentyOne</span> — let’s get started.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border border-red-600 text-red-600 font-semibold text-lg px-10 py-2 rounded-md hover:bg-white hover:text-red-700 transition-all bg-transparent"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </div>
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
        <section className="bg-red-50 text-black py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-snug">
              Ready to unlock the power of<br /> real-time AI insights?
            </h2>
            <p className="text-lg md:text-xl font-medium mb-5">
              Reimagine work with AI-<span className='italic text-red-700'>TwentyOne</span>  — let’s get started.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-red-700 text-red-700 hover:bg-red-100 bg-transparent"
              onClick={() => router.push("/contact")}
            >
              Contact Us
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

