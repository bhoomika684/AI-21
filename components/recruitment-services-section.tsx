"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card" // Assuming shadcn/ui Card
import { Button } from "@/components/ui/button" // Assuming shadcn/ui Button (though less used now)
import { motion } from "framer-motion"
import { Users, Eye, Building, ArrowRight, ChevronRight } from "lucide-react" // Added ChevronRight for list items

const CompactRecruitmentServicesSection = () => {
  // Original services data, adapted for the new layout with image URLs
  const services = [
    {
      id: 1,
      title: "Hire Vision",
      icon: "Users",
      slug: "hire-vision",
      imageUrl: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Updated image URL for 1st service
      color: "bg-red-50 text-red-600 border-red-200", // Not directly used for background of card, but can be for icons
      description:
        "Comprehensive AI-powered hiring solution with intelligent interviewing, sourcing, and shortlisting capabilities.",
      products: [
        {
          name: "SmartInterview Pro",
          slug: "smart-interview-pro",
          description: "AI-powered interview conductor with real-time assessment",
          // count: 5, // Dummy count for demonstration
        },
        {
          name: "TalentHunter Elite",
          slug: "talent-hunter-elite",
          description: "Advanced candidate sourcing with AI-driven matching",
          // count: 12, // Dummy count
        },
        {
          name: "QuickSelect Master",
          slug: "quick-select-master",
          description: "Intelligent shortlisting with predictive analytics",
          // count: 8, // Dummy count
        },
        {
          name: "Candidate Profiler",
          slug: "candidate-profiler",
          description: "Detailed candidate insights",
          // count: 3, // Dummy count
        },
      ],
    },
    {
      id: 2,
      title: "Talent Vision",
      icon: "Eye",
      slug: "hire-vision/talent-vision",
      imageUrl: "https://images.pexels.com/photos/3771055/pexels-photo-3771055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Updated image URL for 2nd service
      color: "bg-blue-50 text-blue-600 border-blue-200", // Can be adjusted if icons were used
      description:
        "Advanced talent analytics and insights platform for comprehensive candidate evaluation and market intelligence.",
      products: [
        {
          name: "ResumeGenius AI",
          slug: "resume-genius-ai",
          description: "Next-gen resume analysis with deep learning insights",
          // count: 7,
        },
        {
          name: "TalentScope Analytics",
          slug: "talent-scope-analytics",
          description: "Comprehensive talent market analysis and benchmarking",
          // count: 15,
        },
        {
          name: "ProfileMaster Pro",
          slug: "profile-master-pro",
          description: "Advanced candidate profiling with behavioral insights",
          // count: 10,
        },
        {
          name: "Market Intelligence",
          slug: "market-intelligence",
          description: "Insights into talent market trends",
          // count: 4,
        },
      ],
    },
    {
      id: 3,
      title: "Banking Vision",
      icon: "Building",
      slug: "hire-vision/banking-vision",
      imageUrl: "https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Updated image URL for 3rd service
      color: "bg-green-50 text-green-600 border-green-200", // Can be adjusted if icons were used
      description:
        "Specialized financial services recruitment platform with compliance-focused hiring and risk assessment tools.",
      products: [
        {
          name: "FinanceHire Elite",
          slug: "finance-hire-elite",
          description: "Specialized financial sector recruitment solution",
          // count: 9,
        },
        {
          name: "BankingTalent Pro",
          slug: "banking-talent-pro",
          description: "Advanced banking professional assessment platform",
          // count: 6,
        },
        {
          name: "FinTech Recruiter",
          slug: "fintech-recruiter",
          description: "Modern fintech talent acquisition system",
          // count: 11,
        },
        {
          name: "Compliance Check",
          slug: "compliance-check",
          description: "Automated compliance verification",
          // count: 2,
        },
      ],
    },
  ]

  // Helper function to get the Lucide icon component based on its name string (not used in this layout)
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return Users
      case "Eye":
      case "Building":
        return Building // Using Building for Eye and Building as they are not explicitly used in the new layout
      default:
        return Users
    }
  }

  return (
    <section className="py-10 bg-gradient-to-br from-red-50 to-red-100 font-inter"> {/* Updated background gradient */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Our Advanced AI Recruitment Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge AI-powered tools designed to revolutionize your hiring process across various
            domains.
          </p>
        </motion.div>

        {/* Grid for Service Cards - Adapts to 1, 2, or 3 columns based on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  {/* Image at the top of the card */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      // Fallback for image loading errors
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/FFCCCC/880000?text=Image+Error`; // Red-themed fallback
                        e.currentTarget.onerror = null; // Prevent infinite loop
                      }}
                    />
                  </div>

                  {/* Dark Title Bar */}
                  <a
                    href={`/services/${service.slug}`} // Make the entire bar clickable
                    className="flex items-center justify-between bg-red-600 text-white p-4 cursor-pointer hover:bg-red-700 transition-colors" // Updated to red-800
                  >
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    {/* Plus icon (ArrowRight rotated) */}
                    <ArrowRight className="w-6 h-6 transform rotate-0 transition-transform group-hover:rotate-45" />
                  </a>

                  {/* Products List Section */}
                  <div className="p-4 bg-white">
                    <ul className="space-y-2">
                      {service.products.map((product, i) => (
                        <li key={i} className="flex items-center text-gray-700 text-base">
                          <ChevronRight className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" /> {/* Remains red */}
                          <span className="flex-1">{product.name}</span>
                          <span className="ml-2 text-red-600 font-semibold text-sm">
                            {/* {product.count} */}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompactRecruitmentServicesSection
