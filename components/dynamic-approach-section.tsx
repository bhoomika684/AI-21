"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

const DynamicApproachSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/*Left column*/}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8" /* Removed cursor-pointer class and onClick */
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Dynamic Approach to Recruitment and 
              <span className="text-red-600"> Hiring Excellence</span>
            </h2>
            <p className="text-lg text-gray-600">
              At AI 21, we embrace a dynamic approach to recruitment design and hiring excellence. We don&apos;t just
              follow trends; we set them. Our commitment is to transform traditional hiring practices by leveraging
              cutting-edge technology and innovative methodologies.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/signup">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white">
                Get Started →
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main support card */}
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Prescription Support</h3>
                <Button variant="ghost" size="sm" aria-label="Close">
                  ×
                </Button>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="h-5 w-5" />
                <div>
                  <div className="font-medium text-gray-900">7:30 pm</div>
                  <div className="text-sm">Aug 20</div>
                </div>
              </div>

              {/* Customer satisfaction block */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-900">124 Happy customers</span>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mb-3">5 rating</div>

                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {["JD", "SM", "AL"].map((label) => (
                      <Avatar key={label} className="h-6 w-6 border-2 border-white">
                        <AvatarFallback className="text-xs">{label}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-xs bg-gray-200 py-0.5 px-2 rounded-md">5 rating</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Floating “Watch demo” card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-l-red-600 border-y-2 border-y-transparent ml-1" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Watch Demo</div>
                <div className="text-xs text-gray-600">2:30 min</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default DynamicApproachSection