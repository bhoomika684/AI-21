import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, ClipboardCheck, Video, BarChart3 } from "lucide-react"

const services = [
  {
    title: "Interviewer",
    description:
      "AI-powered interviewer that conducts comprehensive candidate assessments with intelligent questioning and real-time evaluation.",
    icon: Users,
    href: "/recruitment/hirevision-interviewer",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Resume Analysis",
    description:
      "Advanced resume parsing and analysis system that extracts key information and matches candidates to job requirements.",
    icon: FileText,
    href: "/recruitment/resume-analysis",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Test",
    description:
      "Comprehensive testing platform with customizable assessments for technical skills, aptitude, and personality evaluation.",
    icon: ClipboardCheck,
    href: "/recruitment/test",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "InterviewPro",
    description:
      "Professional interview management system with scheduling, feedback collection, and collaborative decision-making tools.",
    icon: BarChart3,
    href: "/recruitment/interview-pro",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Video Analysis",
    description:
      "AI-driven video interview analysis that evaluates communication skills, body language, and candidate engagement levels.",
    icon: Video,
    href: "/recruitment/video-analysis",
    color: "bg-red-50 text-red-600",
  },
]

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Recruitment Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment tools powered by AI to streamline your hiring process and find the best
              candidates efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <Button className="w-full bg-green-700 hover:bg-green-800 text-white" asChild>
                      <a href={service.href}>Learn More →</a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
