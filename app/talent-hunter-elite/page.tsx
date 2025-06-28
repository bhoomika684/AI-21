"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Play,
  Video,
  Mail,
  Lightbulb,
  Globe,
  Filter,
  TrendingUp,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function TalentHunterElitePage() {
  const additionalFeatures = [
    {
      icon: Globe,
      title: "Global Talent Sourcing",
      description: "Access candidates worldwide with location-based filtering and remote work preferences.",
    },
    {
      icon: Filter,
      title: "Advanced Search Filters",
      description:
        "Sophisticated filtering options including skills, experience, location, salary expectations, and more.",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description:
        "Real-time salary benchmarks, hiring trends, and competitive intelligence for better decision making.",
    },
    {
      icon: UserCheck,
      title: "Candidate Verification",
      description: "Automated background checks, skill verification, and reference validation for top candidates.",
    },
  ]

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/*  */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">TalentHunter Elite</h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Advanced candidate sourcing platform powered by AI-driven matching technology. Discover, engage, and hire
            top talent faster than ever before with intelligent automation and predictive analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Start Free 14-Day Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-red-200 hover:bg-red-50">
              <Video className="w-5 h-5 mr-2" />
              Watch Platform Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-4xl font-bold text-red-600 mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Candidate Profiles</div>
            </motion.div>
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-4xl font-bold text-red-600 mb-2">92%</div>
              <div className="text-gray-600 font-medium">Match Accuracy</div>
            </motion.div>
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-4xl font-bold text-red-600 mb-2">75%</div>
              <div className="text-gray-600 font-medium">Faster Sourcing</div>
            </motion.div>
            <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Companies Trust Us</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Extended Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Additional features that make TalentHunter Elite the most comprehensive sourcing platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-0 bg-white/60 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-red-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Talent Sourcing?</h2>
              <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
                Join over 1000 companies using TalentHunter Elite to find and hire top talent faster with AI-powered
                sourcing technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 px-8 py-4 text-lg"
                >
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Explore Features
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • 14-day free trial • Access to 10M+ candidate profiles
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}
