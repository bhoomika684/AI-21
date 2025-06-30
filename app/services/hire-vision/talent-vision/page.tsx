// "use client"

// import {
//   BarChart3,
//   UserCheck,
//   Globe2,
//   FileText,
//   Search,
//   Activity,
//   BrainCircuit,
//   ChevronDown,
//   CheckCircle,
// } from "lucide-react"
// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import Footer from "@/components/footer"
// import Header from "@/components/header"

// export default function WhyYantrAIPage() {
//   const features = [
//     {
//       icon: BarChart3,
//       title: "Advanced Analytics",
//       fullDescription:
//         "Deep insights into talent market trends and candidate performance metrics.",
//     },
//     {
//       icon: UserCheck,
//       title: "Candidate Evaluation",
//       fullDescription:
//         "Comprehensive assessment tools for thorough candidate evaluation.",
//     },
//     {
//       icon: Globe2,
//       title: "Market Intelligence",
//       fullDescription:
//         "Real-time market data and competitive intelligence for better decisions.",
//     },
//   ]

//   const products = [
//     {
//       icon: BrainCircuit,
//       title: "ResumeGenius AI",
//       description:
//         "Next-gen resume analysis with deep learning insights and skill extraction.",
//       features: [
//         "AI resume parsing",
//         "Skill extraction",
//         "Experience mapping",
//         "Quality scoring",
//       ],
//     },
//     {
//       icon: Search,
//       title: "TalentScope Analytics",
//       description:
//         "Comprehensive talent market analysis and benchmarking platform.",
//       features: [
//         "Market benchmarking",
//         "Salary insights",
//         "Trend analysis",
//         "Competitive data",
//       ],
//     },
//     {
//       icon: Activity,
//       title: "ProfileMaster Pro",
//       description:
//         "Advanced candidate profiling with behavioral insights and predictions.",
//       features: [
//         "Behavioral analysis",
//         "Personality insights",
//         "Performance prediction",
//         "Cultural fit",
//       ],
//     },
//   ]

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-red-50">
//         {/* Hero Section */}
//         <section
//           className="relative h-[500px] bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage:
//               "url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1600')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//           <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="max-w-3xl text-white"
//             >
//               <h1 className="text-3xl lg:text-4xl font-semibold mb-4 leading-relaxed">
//                 Talent Vision
//               </h1>
//               <p className="text-lg text-orange-400 font-medium">
//                 Advanced talent analytics and insights platform for comprehensive
//                 candidate evaluation and market intelligence.
//               </p>
//               <div className="mt-6 space-x-4">
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Key Features */}
//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto text-center">
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
//             >
//               Key Features
//             </motion.h2>

//             <div className="grid md:grid-cols-3 gap-8 mb-16">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="transition-transform"
//                 >
//                   <Card className="border-2 border-gray-200 hover:border-red-200 transition-colors p-8">
//                     <CardContent className="text-center p-0">
//                       <div className="w-16 h-16 mx-auto mb-6 p-4 border-2 border-red-300 rounded-full">
//                         <feature.icon className="w-full h-full text-purple-600" />
//                       </div>
//                       <h3 className="text-lg font-semibold text-red-700 mb-2">
//                         {feature.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 mt-4">
//                         {feature.fullDescription}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-2xl lg:text-3xl font-semibold text-red-700 mb-16"
//             >
//               Our Products
//             </motion.h2>

//             <div className="grid md:grid-cols-3 gap-12">
//               {products.map((product, index) => (
//                 <motion.div
//                   key={index}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   initial={{ opacity: 0, y: 30 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="text-left border p-6 rounded-2xl shadow hover:shadow-lg"
//                 >
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
//                       <product.icon className="w-6 h-6" />
//                     </div>
//                     <h4 className="text-xl font-semibold text-red-700">
//                       {product.title}
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-600 mb-4">{product.description}</p>
//                   <ul className="text-sm text-gray-800 list-disc list-inside space-y-1">
//                     {product.features.map((feature, i) => (
//                       <li key={i}>{feature}</li>
//                     ))}
//                   </ul>
//                   <button className="mt-4 text-red-600 font-medium hover:underline">
//                     Learn More
//                   </button>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Call To Action Section */}
//         <section className="bg-gradient-to-br from-red-600 via-red-500 to-pink-500 py-20 px-6 text-center text-white">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//               Ready to unlock the power of <span className="text-white">real-time AI insights?</span>
//             </h2>
//             <p className="text-lg mb-8">
//               Join 1000+ enterprise companies already using A21's specialized AI products to
//               streamline operations, reduce costs, and accelerate growth.
//             </p>
//             <div className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-10">
//               {[
//                 "30-day free trial with full access",
//                 "Dedicated enterprise support team",
//                 "Custom integration assistance",
//                 "Scalable pricing for any organization",
//               ].map((text, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   <CheckCircle className="text-green-300 w-5 h-5" />
//                   <span>{text}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center gap-4 flex-wrap">
//               <button className="bg-white text-red-600 px-6 py-3 rounded-xl text-base font-semibold hover:bg-red-100 transition">
//                 Start Free Trial →
//               </button>
//               <button className="border border-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-white hover:text-red-600 transition">
//                 Schedule Demo
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   )
// }
"use client"

import {
  BarChart3,
  UserCheck,
  Globe2,
  FileText,
  Search,
  Activity,
  BrainCircuit,
  ChevronDown,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link"

export default function WhyYantrAIPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      fullDescription: "Deep insights into talent market trends and candidate performance metrics.",
    },
    {
      icon: UserCheck,
      title: "Candidate Evaluation",
      fullDescription: "Comprehensive assessment tools for thorough candidate evaluation.",
    },
    {
      icon: Globe2,
      title: "Market Intelligence",
      fullDescription: "Real-time market data and competitive intelligence for better decisions.",
    },
  ]

  const products = [
    {
      icon: BrainCircuit,
      title: "ResumeGenius AI",
      slug: "/resume-genius-ai",
      description: "Next-gen resume analysis with deep learning insights and skill extraction.",
      features: ["AI resume parsing", "Skill extraction", "Experience mapping", "Quality scoring"],
    },
    {
      icon: Search,
      title: "TalentScope Analytics",
      slug: "/talent-scope-analytics",
      description: "Comprehensive talent market analysis and benchmarking platform.",
      features: ["Market benchmarking", "Salary insights", "Trend analysis", "Competitive data"],
    },
    {
      icon: Activity,
      title: "ProfileMaster Pro",
      slug: "/profile-master-pro",
      description: "Advanced candidate profiling with behavioral insights and predictions.",
      features: ["Behavioral analysis", "Personality insights", "Performance prediction", "Cultural fit"],
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
              "url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1600')",
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
              <h1 className="text-3xl lg:text-4xl font-semibold mb-4 leading-relaxed">Talent Vision</h1>
              <p className="text-lg text-orange-400 font-medium">
                Advanced talent analytics and insights platform for comprehensive candidate evaluation and market
                intelligence.
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
                      <h3 className="text-lg font-semibold text-red-700 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-4">{feature.fullDescription}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Products Section */}
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
                <Link key={index} href={product.slug}>
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

        {/* Call To Action */}
        <section className="bg-gradient-to-br from-red-600 via-red-500 to-pink-500 py-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to unlock the power of <span className="text-white">real-time AI insights?</span>
            </h2>
            <p className="text-lg mb-8">
              Join 1000+ enterprise companies already using A21's specialized AI products to streamline operations,
              reduce costs, and accelerate growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-10">
              {[
                "30-day free trial with full access",
                "Dedicated enterprise support team",
                "Custom integration assistance",
                "Scalable pricing for any organization",
              ].map((text, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-300 w-5 h-5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-white text-red-600 px-6 py-3 rounded-xl text-base font-semibold hover:bg-red-100 transition">
                Start Free Trial →
              </button>
              <button className="border border-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-white hover:text-red-600 transition">
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
