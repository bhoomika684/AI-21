import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Brain, MessageSquare, BarChart3, Clock, CheckCircle } from "lucide-react"

const features = [
	{
		title: "AI-Powered Questioning",
		description:
			"Intelligent question generation based on job requirements and candidate responses.",
		icon: Brain,
	},
	{
		title: "Real-time Evaluation",
		description:
			"Instant assessment of candidate responses with detailed scoring and feedback.",
		icon: BarChart3,
	},
	{
		title: "Natural Conversation",
		description:
			"Human-like interaction that puts candidates at ease during the interview process.",
		icon: MessageSquare,
	},
	{
		title: "Time Efficient",
		description:
			"Automated screening process that saves hours of manual interview time.",
		icon: Clock,
	},
]

export default function HireVisionInterviewerPage() {
	return (
		<div className="min-h-screen bg-red-50">
			<Header />

			<main className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Hero Section */}
					<div className="text-center space-y-6 mb-16">
						<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto">
							<Users className="h-8 w-8" />
						</div>
						<h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
							HireVision-Interviewer
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Revolutionary AI interviewer that conducts comprehensive candidate
							assessments with intelligent questioning and real-time evaluation,
							transforming your recruitment process.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							{/* <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Watch Demo
              </Button> */}
						</div>
					</div>

					{/* Features Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{features.map((feature, index) => {
							const IconComponent = feature.icon
							return (
								<Card
									key={index}
									className="bg-white border-0 shadow-lg"
								>
									<CardHeader>
										<div className="flex items-center space-x-4">
											<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
												<IconComponent className="h-5 w-5" />
											</div>
											<CardTitle className="text-xl font-bold text-gray-900">
												{feature.title}
											</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">
											{feature.description}
										</p>
									</CardContent>
								</Card>
							)
						})}
					</div>

					{/* How it Works */}
					<div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
						<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
							How HireVision-Interviewer Works
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center space-y-4">
								<div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
									1
								</div>
								<h3 className="text-xl font-semibold text-gray-900">
									Setup Interview
								</h3>
								<p className="text-gray-600">
									Configure job requirements, skills assessment criteria,
									and interview parameters.
								</p>
							</div>
							<div className="text-center space-y-4">
								<div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
									2
								</div>
								<h3 className="text-xl font-semibold text-gray-900">
									AI Conducts Interview
								</h3>
								<p className="text-gray-600">
									Our AI interviewer engages with candidates using natural
									conversation and adaptive questioning.
								</p>
							</div>
							<div className="text-center space-y-4">
								<div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
									3
								</div>
								<h3 className="text-xl font-semibold text-gray-900">
									Get Results
								</h3>
								<p className="text-gray-600">
									Receive detailed candidate assessments, scores, and
									recommendations for hiring decisions.
								</p>
							</div>
						</div>
					</div>

					{/* Benefits */}
					<div className="text-center space-y-8">
						<h2 className="text-3xl font-bold text-gray-900">
							Why Choose HireVision-Interviewer?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								"Reduce interview time by 70%",
								"Eliminate interviewer bias",
								"Consistent evaluation criteria",
								"Scale interviews globally",
								"24/7 availability",
								"Detailed analytics and insights",
							].map((benefit, index) => (
								<div
									key={index}
									className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow"
								>
									<CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
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
