"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import HireVisionHeader from "@/components/hirevision-header"

export default function HireVisionPricingPage() {
  const router = useRouter()

  return (
    <>
      <HireVisionHeader currentPage="pricing" />
      <div className="min-h-screen bg-red-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                HireVision Pricing
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Choose the perfect plan for your hiring needs. From small businesses to enterprise companies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Pricing Plans</h2>
              <p className="text-gray-600">Free for small businesses. Paid for bigger companies with multiple accounts.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Single Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <Users className="w-8 h-8 mb-2 text-red-400" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 tracking-widest">SINGLE</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">Free</div>
                <ul className="text-gray-600 text-sm mb-6 space-y-1 text-center">
                  <li>Unique Klets Address</li>
                  <li>Customized Design</li>
                  <li>1 Team Member</li>
                  <li>Max 10 Chats Per Week</li>
                  <li>E-mail Fallback</li>
                </ul>
                <button className="mt-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">GET IT NOW</button>
              </motion.div>
              
              {/* Team Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow p-8 flex flex-col items-center border-2 border-red-300 hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
                </div>
                <Users className="w-8 h-8 mb-2 text-red-400" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 tracking-widest">TEAM</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">$49<span className="text-base font-normal text-gray-500">/month</span></div>
                <ul className="text-gray-600 text-sm mb-6 space-y-1 text-center">
                  <li>Unique Klets Address</li>
                  <li>Customized Design</li>
                  <li>2-5 Team Members</li>
                  <li>Unlimited Chats</li>
                  <li>E-mail Fallback</li>
                  <li>Soon: Reports & Analytics</li>
                </ul>
                <button className="mt-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">TRY IT NOW</button>
              </motion.div>
              
              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <Users className="w-8 h-8 mb-2 text-red-400" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 tracking-widest">ENTERPRISE</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">POA</div>
                <ul className="text-gray-600 text-sm mb-6 space-y-1 text-center">
                  <li>Host on Custom Domain</li>
                  <li>Customized Design</li>
                  <li>Unlimited Team Members</li>
                  <li>Unlimited Accounts</li>
                  <li>E-mail Fallback</li>
                  <li>Soon: Reports & Analytics</li>
                  <li>Advanced Integrations</li>
                </ul>
                <button className="mt-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">GET IN TOUCH</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HireVision?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the power of AI-driven hiring with features designed to streamline your recruitment process.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "AI-Powered Interview Automation",
                "Advanced CV Analysis & Ranking",
                "Comprehensive Assessment Tools",
                "Behavioral & Emotional Analysis",
                "Real-time Candidate Scoring",
                "Bias-free Evaluation Process"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to revolutionize your hiring?
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Join companies already using HireVision to make smarter hiring decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => router.push("/contact")}
                >
                  Get Started Today
                  <Users className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  onClick={() => router.push("/Domain/HireVision")}
                >
                  Learn More
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
