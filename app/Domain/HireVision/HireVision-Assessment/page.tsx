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
    "Technical and analytical role assessments",
    "Internal skill audits or role transitions",
    "High-volume online testing",
    "Post-training skill validation"
  ];

  const features = [
    {
      icon: Brain,
      title: "Custom and AI-Assisted Assessment Builder",
      description:
        "Create tests tailored to technical, aptitude, or role-specific skills.",
    },
    {
      icon: Mic,
      title: "Instant AI-Based Scoring",
      description:
        "Real-time scoring with comparative benchmarks and detailed insights.",
    },
    {
      icon: Video,
      title: "Dynamic Test Flow",
      description:
        "Questions adapt in difficulty based on live performance.",
    },
    {
      icon: BarChart3,
      title: "Built-in Integrity Monitoring",
      description:
        "Anti-cheating measures including webcam proctoring and time tracking.",
    },
    {
      icon: Target,
      title: "Detailed Candidate Reports",
      description:
        "Full reports with strengths, weaknesses, and success probability.",
    },
    {
      icon: Shield,
      title: "Ready-to-Use Test Library",
      description:
        "Pre-built expert-designed assessments available for instant use.",
    },
  ]

  return (
    <>
      <HireVisionHeader />
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
                  Assess Smarter, Hire with Confidence
                </span>
                <br />
                <span className="text-gray-800">
                  Intelligent Assessments. Accurate Insights. Confident Hiring.
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                AI-powered assessment platform for technical, cognitive, and role-specific tests—fully automated, customizable, and insightful.
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* The Problem Section */}
              <div className="space-y-6 flex flex-col items-start">
                <Badge className="bg-red-100 text-red-700 px-3 py-1 self-start">The Problem</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 self-start">Stuck with Outdated Assessments?</h2>
                <div className="space-y-4 text-lg text-gray-700 w-full">
                  <p>
                    <strong className="text-red-600">HireVision–TestAssessment </strong>enables dynamic, intelligent assessments 
                    <strong className="text-red-600">with automated scoring, adaptive</strong>
                    question logic, and real-time analytics—delivering deeper, faster insights.
                  </p>
                  <p>Tailors questions based on candidate responses</p>
                  <ul className="space-y-2 ml-0">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Automatically scores and ranks candidates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Provides real-time, actionable analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Ideal for technical/analytical roles and internal audits
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Supports high-volume and post-training evaluations
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Solution Section */}
              <div className="space-y-6 flex flex-col items-start">
                <Badge className="bg-green-100 text-green-700 px-3 py-1 self-start">The Solution</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 self-start">AI That Thinks Like You</h2>
                <div className="space-y-4 text-lg text-gray-700 w-full">
                  <p>
                    <strong className="text-green-600">HireVision CV Analysis</strong> uses advanced AI to understand job requirements and candidate qualifications at a deeper level.
                  </p>
                  <ul className="space-y-3 ml-0">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg width="20" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="16" stroke="#22C55E" strokeWidth="3" fill="none" />
                          <path d="M13 21.5L19 27L29 17" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
                Core Features You’ll Love
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
