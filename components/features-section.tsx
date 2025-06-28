"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Brain, Users, Zap, Target, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recruitment",
      description:
        "Our platform automatically adapts and optimizes recruitment processes using advanced AI algorithms and machine learning.",
      gradient: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      delay: 0.1,
    },
    {
      icon: Target,
      title: "Smart Candidate Matching",
      description:
        "Elevate your recruitment with intelligent candidate matching from 500+ data points to ensure perfect job fit.",
      gradient: "from-purple-400 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      delay: 0.2,
    },
    {
      icon: Users,
      title: "Collaborative Hiring",
      description:
        "Streamline communication, share files, and manage recruitment efficiently within the team workspace.",
      gradient: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      delay: 0.3,
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your recruitment dashboard anywhere with our responsive, mobile-optimized platform.",
      gradient: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      delay: 0.4,
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process thousands of applications in minutes with our high-performance recruitment engine.",
      gradient: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      delay: 0.5,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption to protect sensitive candidate and company data.",
      gradient: "from-red-400 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-rose-100 to-red-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-200 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          {/* <motion.p
            className="text-sm font-medium text-red-600 uppercase tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            FEATURES
          </motion.p> */}
          <motion.h2
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Powerful Features
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500`}
                    animate={{ opacity: isHovered ? 0.05 : 0 }}
                  />

                  <motion.div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-0`}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-[1px] bg-white rounded-lg" />
                  </motion.div>

                  <div className="relative z-10">
                    <CardHeader className="space-y-4 pb-4">
                      <motion.div
                        className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center relative overflow-hidden`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0`}
                          animate={{ opacity: isHovered ? 0.2 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <IconComponent
                          className={`h-8 w-8 ${feature.textColor} relative z-10 transition-colors duration-300`}
                        />
                      </motion.div>

                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <AnimatePresence>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isHovered ? "auto" : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0 pb-6">
                          <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: isHovered ? 0 : 20 }}
                            transition={{ delay: isHovered ? 0.1 : 0 }}
                          >
                            <div className={`w-12 h-0.5 bg-gradient-to-r ${feature.gradient} mb-4 rounded-full`} />
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                          </motion.div>
                        </CardContent>
                      </motion.div>
                    </AnimatePresence>

                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: isHovered ? 1 : 0.8,
                        opacity: isHovered ? 1 : 0,
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
