import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, MessageSquare, Users, CheckCircle } from "lucide-react"

export default function InterviewProPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mx-auto">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">InterviewPro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional interview management system with intelligent scheduling, collaborative feedback collection,
              and data-driven decision-making tools for streamlined hiring processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8">
                Schedule Interview
              </Button>
              {/* <Button size="lg" variant="outline" className="border-gray-300">
                View Dashboard
              </Button> */}
            </div>
          </div>

          {/* Core Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  AI-powered scheduling that finds optimal time slots for all participants automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Feedback System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Structured feedback collection with customizable evaluation forms and scoring rubrics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Real-time collaboration tools for interview panels with shared notes and decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comprehensive analytics and reporting for interview performance and hiring metrics.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Workflow */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Streamlined Interview Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Setup</h3>
                <p className="text-gray-600 text-sm">
                  Configure interview rounds, evaluation criteria, and team members.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Schedule</h3>
                <p className="text-gray-600 text-sm">
                  Automatically schedule interviews based on availability and preferences.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Conduct</h3>
                <p className="text-gray-600 text-sm">
                  Use guided interview templates and real-time collaboration tools.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Decide</h3>
                <p className="text-gray-600 text-sm">Aggregate feedback and make data-driven hiring decisions.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose InterviewPro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Reduce scheduling time by 80%",
                "Standardized evaluation process",
                "Improved candidate experience",
                "Real-time collaboration",
                "Comprehensive reporting",
                "Integration with popular tools",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
