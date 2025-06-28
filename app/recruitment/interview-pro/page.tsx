import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Clock, Target, CheckCircle, Calendar, FileText } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Interview Pro - Professional Interview Management | AI-21",
  description:
    "Comprehensive interview management platform with AI-powered question banks, real-time scoring, and collaborative evaluation tools.",
}

export default function InterviewProPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Question Bank",
      description: "AI-curated questions tailored to specific roles and skill requirements",
    },
    {
      icon: Clock,
      title: "Real-time Scoring",
      description: "Live evaluation and scoring during interviews with instant feedback",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-interviewer support with shared notes and collaborative scoring",
    },
    {
      icon: Target,
      title: "Custom Evaluation",
      description: "Customizable scoring criteria and evaluation frameworks",
    },
  ]

  const interviewTypes = [
    {
      title: "Technical Interviews",
      description: "Coding challenges, system design, and technical problem-solving",
      features: ["Code evaluation", "System design", "Technical Q&A", "Live coding"],
    },
    {
      title: "Behavioral Interviews",
      description: "Soft skills assessment and cultural fit evaluation",
      features: ["STAR method", "Culture fit", "Leadership skills", "Communication"],
    },
    {
      title: "Panel Interviews",
      description: "Multi-interviewer sessions with coordinated evaluation",
      features: ["Multiple evaluators", "Shared scoring", "Real-time notes", "Consensus building"],
    },
  ]

  const benefits = [
    "Reduce interview preparation time by 80%",
    "Standardize evaluation across all interviewers",
    "Improve candidate experience with structured process",
    "Generate detailed interview reports automatically",
    "Track interviewer performance and bias",
    "Integrate with existing ATS systems",
  ]

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-red-600">Interview Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your interview process with AI-powered question banks, real-time scoring, and collaborative
                evaluation tools. Make every interview count with Interview Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-semibold">Interview Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Today's Interviews</span>
                    </div>
                    <span className="text-blue-600 font-bold">8</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium">Completed</span>
                    </div>
                    <span className="text-green-600 font-bold">5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-600" />
                      <span className="font-medium">Reports Generated</span>
                    </div>
                    <span className="text-purple-600 font-bold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Powerful Interview Features</h2>
            <p className="text-xl text-gray-600">Everything you need for professional interview management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-red-100 hover:border-red-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Interview Types We Support</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for every interview scenario</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {interviewTypes.map((type, index) => (
              <Card key={index} className="border-red-100 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Interview Pro?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-8">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Transform your interview process with professional tools and AI assistance
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Start Free Trial</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Elevate Your Interview Process</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies using Interview Pro for better, faster, and fairer hiring decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Get Started Now
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}
