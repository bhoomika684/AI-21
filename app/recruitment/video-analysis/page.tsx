import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Eye, Mic, Activity, CheckCircle } from "lucide-react"

export default function VideoAnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mx-auto">
              <Video className="h-8 w-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Video Analysis</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI-driven video interview analysis that evaluates communication skills, body language, emotional
              intelligence, and candidate engagement levels for comprehensive assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8">
                Analyze Video
              </Button>
              {/* <Button size="lg" variant="outline" className="border-gray-300">
                See Sample Analysis
              </Button> */}
            </div>
          </div>

          {/* Analysis Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Visual Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced computer vision analyzes facial expressions, eye contact, and body language patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Facial expression mapping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Eye contact tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Posture analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                  <Mic className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Audio Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Speech pattern analysis including tone, pace, clarity, and emotional indicators.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Speech clarity assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Tone and pace analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Confidence indicators</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                  <Activity className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Engagement Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive engagement scoring based on attention, responsiveness, and interaction quality.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Attention span tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Response timing analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Interaction quality scoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advanced AI Analysis Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Upload Video</h3>
                <p className="text-gray-600 text-sm">Securely upload interview videos in any format for analysis.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900">AI Processing</h3>
                <p className="text-gray-600 text-sm">
                  Advanced algorithms analyze visual, audio, and behavioral patterns.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Generate Insights</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive analysis with detailed metrics and recommendations.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Review Results</h3>
                <p className="text-gray-600 text-sm">
                  Access detailed reports with actionable insights for hiring decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Unlock Hidden Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Objective candidate assessment",
                "Reduce unconscious bias",
                "Identify communication skills",
                "Measure emotional intelligence",
                "Predict cultural fit",
                "Scalable video screening",
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
