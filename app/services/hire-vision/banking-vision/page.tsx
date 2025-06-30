"use client"

import {
  ShieldCheck,
  AlertCircle,
  BadgeDollarSign,
  FileSearch,
  Search,
  LineChart,
  ChevronDown,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link"

export default function WhyYantrAIPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Compliance-Focused",
      fullDescription:
        "Built-in compliance checks and regulatory requirement validation.",
    },
    {
      icon: AlertCircle,
      title: "Risk Assessment",
      fullDescription:
        "Advanced risk assessment tools for financial sector hiring.",
    },
    {
      icon: BadgeDollarSign,
      title: "Specialized Matching",
      fullDescription:
        "Industry-specific matching algorithms for banking professionals.",
    },
  ]

  const products = [
    {
      icon: FileSearch,
      title: "FinanceHire Elite",
      slug: "/finance-hire-elite",
      description:
        "Specialized financial sector recruitment solution with regulatory compliance.",
      features: [
        "Regulatory compliance",
        "Background verification",
        "Risk scoring",
        "Audit trails",
      ],
    },
    {
      icon: Search,
      title: "BankingTalent Pro",
      slug: "/banking-talent-pro",
      description:
        "Advanced banking professional assessment platform with industry expertise.",
      features: [
        "Banking assessments",
        "Certification tracking",
        "Performance metrics",
        "Career mapping",
      ],
    },
    {
      icon: LineChart,
      title: "FinTech Recruiter",
      slug: "/fintech-recruiter",
      description:
        "Modern fintech talent acquisition system for innovative financial companies.",
      features: [
        "Tech-finance hybrid",
        "Innovation metrics",
        "Agile matching",
        "Startup culture fit",
      ],
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
              "url('https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1600')",
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
              <h1 className="text-3xl lg:text-4xl font-semibold mb-4 leading-relaxed">
                Banking Vision
              </h1>
              <p className="text-lg text-orange-400 font-medium">
                Specialized financial services recruitment platform with compliance-focused hiring and risk assessment tools.
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
              className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
            >
              Key Features
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="transition-transform"
                >
                  <Card className="border-2 border-gray-200 hover:border-red-200 transition-colors p-8">
                    <CardContent className="text-center p-0">
                      <div className="w-16 h-16 mx-auto mb-6 p-4 border-2 border-red-300 rounded-full">
                        <feature.icon className="w-full h-full text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-red-700 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-4">
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
              className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
            >
              Our Products
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12">
              {products.map((product, index) => (
                <Link href={product.slug} key={index}>
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-left border p-6 rounded-2xl shadow hover:shadow-lg hover:bg-red-100 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
                        <product.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-semibold text-red-700">{product.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <ul className="text-sm text-gray-800 list-disc list-inside space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-block text-red-600 font-medium hover:underline">
                      Learn More
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-500 to-red-400 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4"
            >
              Ready to unlock the power of <span className="text-white/90">real-time AI insights?</span>
            </motion.h2>
            <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Join 1000+ enterprise companies already using A21's specialized AI products to streamline operations, reduce costs, and accelerate growth.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90 mb-12">
              <div className="flex items-center gap-2">✅ 30-day free trial with full access</div>
              <div className="flex items-center gap-2">✅ Dedicated enterprise support team</div>
              <div className="flex items-center gap-2">✅ Custom integration assistance</div>
              <div className="flex items-center gap-2">✅ Scalable pricing for any organization</div>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
                Start Free Trial →
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-red-700 transition">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
