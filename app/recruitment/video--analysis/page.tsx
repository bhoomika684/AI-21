import React, { memo, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Search, Target, Zap, CheckCircle } from "lucide-react"

const keyFeatures = [
  {
    icon: Search,
    title: "Smart Parsing",
    description:
      "Extract and structure information from any resume format with 99% accuracy using advanced NLP technology.",
  },
  {
    icon: Target,
    title: "Job Matching",
    description:
      "Intelligent matching algorithm that scores candidate fit based on skills, experience, and job requirements.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get comprehensive analysis reports in seconds, not hours. Process hundreds of resumes simultaneously.",
  },
]

const analysisFeatures1 = [
  "Skills extraction and categorization",
  "Experience timeline analysis",
  "Education verification",
  "Certification validation",
  "Language proficiency assessment",
]
const analysisFeatures2 = [
  "Career progression tracking",
  "Keyword density analysis",
  "ATS compatibility scoring",
  "Red flag identification",
  "Recommendation scoring",
]

type KeyFeatureCardProps = {
  icon: React.ElementType
  title: string
  description: string
}
const KeyFeatureCard = memo(
  function KeyFeatureCard({ icon: Icon, title, description }: KeyFeatureCardProps) {
    return (
      <Card className="bg-white border-2 border-red-200 shadow-lg">
        <CardHeader>
          <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    )
  },
)
KeyFeatureCard.displayName = "KeyFeatureCard"

type AnalysisFeatureProps = { feature: string }
const AnalysisFeature = memo(
  function AnalysisFeature({ feature }: AnalysisFeatureProps) {
    return (
      <div className="flex items-center space-x-3">
        <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
        <span className="text-gray-700">{feature}</span>
      </div>
    )
  },
)
AnalysisFeature.displayName = "AnalysisFeature"

function VideoAnalysisPage() {
  const features1 = useMemo(() => analysisFeatures1, [])
  const features2 = useMemo(() => analysisFeatures2, [])

  return (
    <div className="min-h-screen bg-red-50">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mx-auto">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Video Analysis</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI-powered resume parsing and analysis system that extracts key information, evaluates candidate
              fit, and matches profiles to job requirements with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8">
                Analyze Resume
              </Button>
              <Button size="lg" variant="outline" className="border-red-300 text-red-700">
                View Sample Report
              </Button>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, idx) => (
              <KeyFeatureCard key={idx} {...feature} />
            ))}
          </div>

          {/* Analysis Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-2 border-red-200">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive Analysis Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {features1.map((feature, idx) => (
                  <AnalysisFeature key={idx} feature={feature} />
                ))}
              </div>
              <div className="space-y-6">
                {features2.map((feature, idx) => (
                  <AnalysisFeature key={idx} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default memo(VideoAnalysisPage)
