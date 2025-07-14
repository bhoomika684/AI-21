"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface LearningVisionHeaderProps {
  currentPage?: string
  isMainLearningVisionPage?: boolean
}

export default function LearningVisionHeader({ currentPage, isMainLearningVisionPage = false }: LearningVisionHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const productLinks = [
    {
      name: "LearningVision-VideoBot",
      href: "/Domain/LearningVision/Learningvision-videoBot",
    },
  ]

  const isCurrentPage = (page: string) => currentPage === page
  
  const handleHomeClick = (e: React.MouseEvent) => {
    if (isMainLearningVisionPage) {
      e.preventDefault()
    }
  }

  const handleMobileHomeClick = () => {
    if (!isMainLearningVisionPage) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-black border-b border-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-red-400 transition-colors">
              AI 21
            </Link>
          </div>
          <nav className="hidden md:flex items-center justify-center w-full relative">
            <div className="flex space-x-8">
              <Link 
                href="/Domain/LearningVision"
                className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
                onClick={handleHomeClick}
              >
                Home
              </Link>
              <div className="relative group">
                <span className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium cursor-pointer transition-colors inline-block">
                  Products
                </span>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 bg-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-800">
                  <div className="py-2">
                    {productLinks.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-900 hover:text-red-400 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/*
              <Link 
                href="/Domain/LearningVision/pricing" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isCurrentPage('pricing') 
                    ? 'text-red-400 font-semibold' 
                    : 'text-white hover:text-red-400'
                }`}
              >
                Pricing
              </Link>
              */}
              <Link href="/about" className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </Link>
            </div>
            <div className="absolute right-0">
              <Link href="/contact">
                <Button size="sm" variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white bg-transparent">
                  Contact us
                </Button>
              </Link>
            </div>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-900">
              <Link 
                href="/Domain/LearningVision"
                className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors"
                onClick={handleMobileHomeClick}
              >
                Home
              </Link>
              <div>
                <span className="text-white block px-3 py-2 text-base font-medium cursor-pointer">
                  Products
                </span>
                <div className="pl-6 space-y-1">
                  {productLinks.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="text-white hover:text-red-400 block px-3 py-2 text-sm transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/*
              <Link 
                href="/Domain/LearningVision/pricing" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isCurrentPage('pricing') 
                    ? 'text-red-400 font-semibold' 
                    : 'text-white hover:text-red-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              */}
              <Link href="/about" className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
