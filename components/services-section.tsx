"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, CheckCircle, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Enterprise Solutions",
      description: "Comprehensive recruitment without limits with advanced analytics and custom integrations.",
      features: ["Unlimited job postings", "Advanced analytics", "Custom integrations"],
    },
    {
      icon: Users,
      title: "Digital Strategy Mastery",
      description: "Optimize and strategize digital strategy with data-driven recruitment approaches.",
      features: ["Strategy consulting", "Performance optimization", "Market analysis"],
    },
    {
      icon: CheckCircle,
      title: "Innovative Web Design",
      description: "User-centric website designs for modern recruitment platforms and career portals.",
      features: ["Custom design", "Mobile responsive", "User experience focus"],
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Dedicated customer support available round the clock for all your recruitment needs.",
      features: ["24/7 availability", "Expert assistance", "Priority support"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Mastering Digital Solutions for a Future of
                <span className="text-green-600">Possibilities</span>
              </h2>
              <p className="text-lg text-gray-600">
                At AI 21, our approach blends beyond conventional methodologies, we are prepared to master the full
                breadth of digital excellence.
              </p>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                Get Started →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">8,225 Employees</h3>
                  <Badge className="bg-green-100 text-green-700">Processing</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">74%</div>
                    <div className="text-sm text-gray-600">Hired</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">36%</div>
                    <div className="text-sm text-gray-600">Processing</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hired</span>
                    <span className="text-gray-900">74%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "74%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processing</span>
                    <span className="text-gray-900">36%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gray-800 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "36%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium text-gray-900 mb-3">35% Products</div>
                  <div className="grid grid-cols-4 gap-2">
                    {[60, 80, 40, 90].map((height, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-300 rounded"
                        style={{ height: `${height}px` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}px` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
