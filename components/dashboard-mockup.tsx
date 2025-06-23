"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const DashboardMockup = () => {
  return (
    <div className="relative space-y-4">
      {/* Main Analytics Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Card className="bg-white shadow-lg border-0 relative z-10">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">HireVision Active</p>
                  <Badge variant="secondary" className="bg-black-100 text-black-700 text-xs">
                    <motion.div
                      className="w-2 h-2 bg-red-500 rounded-full mr-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    Live
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-right">
              <motion.div
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                36,194
              </motion.div>
              <Badge className="bg-green-100 text-green-700 text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                New Candidates
              </Badge>
            </div>

            {/* Animated Chart Area */}
            <div className="h-32 bg-gradient-to-r from-green-50 to-green-100 rounded-lg relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 300 120">
                <motion.path
                  d="M0,80 Q75,60 150,70 T300,40"
                  stroke="#16a34a"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M0,100 Q75,85 150,90 T300,65 L300,120 L0,120 Z"
                  fill="url(#gradient)"
                  opacity="0.3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#16a34a" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="250"
                  cy="45"
                  r="3"
                  fill="#16a34a"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 2 }}
                />
              </svg>
              <div className="absolute top-2 right-2 text-xs text-gray-600">+30%</div>
            </div>

            <div className="text-sm text-gray-600">AI-Powered Recruitment Platform</div>
            <div className="text-xs text-gray-500">Intelligent candidate matching with advanced analytics</div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Report Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Card className="bg-white shadow-lg border-0 absolute top-8 right-0 w-64 z-20">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">Weekly Report</h3>
              <span className="text-xs text-gray-500">01-07 Dec</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-5 gap-1 text-xs text-center text-gray-500">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
            </div>
            <div className="grid grid-cols-5 gap-1 text-xs text-center">
              <div className="py-1">2</div>
              <div className="py-1">3</div>
              <div className="py-1">4</div>
              <div className="py-1">5</div>
              <div className="py-1">6</div>
            </div>

            {/* Animated Bar Chart */}
            <div className="flex items-end justify-between h-16 space-x-1">
              {[40, 60, 80, 45, 70, 55, 90].map((height, index) => (
                <motion.div
                  key={index}
                  className={`w-4 rounded-t ${index === 6 ? "bg-green-400" : "bg-gray-300"}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-500">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Status Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Card className="bg-white shadow-lg border-0 absolute bottom-0 left-0 w-72 z-15">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Interview Pipeline</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-gray-600">Completed</span>
                </div>
                <motion.div
                  className="text-lg font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  247+
                </motion.div>
                <div className="text-xs text-gray-500">interviews</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-xs text-gray-600">In Progress</span>
                </div>
                <motion.div
                  className="text-lg font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.7 }}
                >
                  89
                </motion.div>
                <div className="text-xs text-gray-500">active</div>
              </div>
            </div>

            <div className="border-t pt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Top Performer</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs text-gray-600">HireVision AI</span>
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs bg-green-100 text-green-700">AI</AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-600">Sarah Johnson</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default DashboardMockup
