"use client"

import Link from "next/link"
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
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function WhyYantrAIPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Interviews",
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
      title: "HireVision – Interviewer",
      slug: "/smart-interview-pro",
      description:
        "An AI-powered virtual interviewer that conducts, evaluates, and scores candidate interviews in real time — complete with behavioral and emotional analysis for deeper insights.",
      features: [],
    },
    {
      icon: Users,
      title: "HireVision – CV Analysis",
      slug: "/talent-hunter-elite",
      description:
        "AI-driven resume screening tool that scans large candidate pools and intelligently shortlists the top matches based on the specific job description, ensuring faster and more accurate talent discovery.",
      features: [],
    },
    {
      icon: Sparkles,
      title: "HireVision – Assessment",
      slug: "/quick-select-master",
      description:
        "Deliver customizable, AI-evaluated technical and aptitude assessments with automated scoring, performance benchmarking, and tailored test reports",
      features: [],
    },
  ]

  return (
    <>
      <Header />
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
                HireVision
              </h1>
              <p className="text-lg text-white font-medium">
                A complete AI-powered hiring solution designed to intelligently
                interview, source, and shortlist top talent — faster and smarter.
              </p>
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
              Key features of HireVision
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

            <div className="grid md:grid-cols-3 gap-12">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#e53935] to-[#c62828] text-white py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-snug">
              Ready to unlock the power of<br />  real-time AI insights?
            </h2>
            <p className="text-lg md:text-xl font-medium mb-5">
              Reimagine work with AI-21 — let’s get started.
            </p>
            <button className="text-white font-semibold px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-red-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
