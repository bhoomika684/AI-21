"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Domain", href: "/recruitment", hasDropdown: true },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact us", href: "/contact" },
  ]

  const recruitmentServices = [
  { name: "Recruitment", href: "/recruitment/interview-pro" },
  { name: "ResumeAnalysis", href: "<recruitment/video-analysis" },
  { name: "Test", href: "#" },
  { name: "Interview Pro", href: "#" },
  { name: "Video Analysis", href: "#" },
]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/http://localhost:3000/" className="text-2xl font-bold text-gray-900 hover:text-red-700 transition-colors">
              AI 21
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-full relative">
            <div className="absolute left-0" />

            {/* Centered Nav Items */}
            <div className="flex space-x-8">
              {navigationItems
                .filter((item) => item.name !== "Contact us")
                .map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {recruitmentServices.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Right-Aligned Contact Us Button */}
            <div className="absolute right-0">
              <Link href="/contact">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-6 space-y-1">
                      {recruitmentServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full text-gray-700">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-green-700 hover:bg-green-800 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
