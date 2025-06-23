import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, Code, Brain, Users, CheckCircle } from "lucide-react"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mx-auto">
              <ClipboardCheck className="h-8 w-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Comprehensive Testing Platform</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced assessment platform with customizable tests for technical skills, aptitude, personality
              evaluation, and domain-specific knowledge to ensure perfect candidate fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8">
                Create Test
              </Button>
              {/* <Button size="lg" variant="outline" className="border-gray-300">
                Browse Templates
              </Button> */}
            </div>
          </div>

          {/* Test Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive coding challenges, system design questions, and technology-specific assessments.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Programming languages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>System architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Database design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Aptitude & Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cognitive ability tests, logical reasoning, and problem-solving assessments.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Numerical reasoning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Verbal comprehension</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Abstract thinking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Personality & Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Behavioral assessments, communication skills, and cultural fit evaluation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Leadership potential</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Work style preferences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Platform Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advanced Testing Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Customizable test templates",
                "Real-time proctoring",
                "Anti-cheating measures",
                "Detailed analytics",
                "Automated scoring",
                "Multi-language support",
                "Mobile-friendly interface",
                "Integration with ATS",
                "Candidate feedback system",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
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
