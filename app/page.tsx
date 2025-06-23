/**
 * Homepage Component - Main landing page for AI 21 recruitment platform
 *
 * This component orchestrates the main sections of the homepage:
 * - Hero section with main value proposition
 * - Interactive recruitment services showcase
 * - Powerful features grid
 * - Digital solutions with analytics
 * - Dynamic approach section
 * - Footer with company information
 *
 * @returns {JSX.Element} Complete homepage layout
 */
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import RecruitmentServicesSection from "@/components/recruitment-services-section"
import FeaturesSection from "@/components/features-section"
import DigitalSolutionsSection from "@/components/digital-solutions-section"
import DynamicApproachSection from "@/components/dynamic-approach-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <RecruitmentServicesSection />
      <FeaturesSection />
      <DigitalSolutionsSection />
      <DynamicApproachSection />
      <Footer />
    </div>
  )
}
