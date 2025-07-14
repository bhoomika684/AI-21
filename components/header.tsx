// // "use client"

// // import Link from "next/link"
// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Menu, X } from "lucide-react"

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)

// //   const navigationItems = [
// //     { name: "Home", href: "/" },
// //     { name: "Domain", href: "/recruitment", hasDropdown: true },
// //     { name: "Pricing", href: "/pricing" },
// //     { name: "Contact us", href: "/contact" },
// //   ]

// //   const recruitmentServices = [
// //   { name: "Recruitment", href: "/recruitment/interview-pro" },
// //   { name: "ResumeAnalysis", href: "<recruitment/video-analysis" },
// //   { name: "Test", href: "#" },
// //   { name: "Interview Pro", href: "#" },
// //   { name: "Video Analysis", href: "#" },
// // ]

// //   return (
// //     <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link href="/http://localhost:3000/" className="text-2xl font-bold text-gray-900 hover:text-red-700 transition-colors">
// //               AI 21
// //             </Link>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex items-center justify-center w-full relative">
// //             <div className="absolute left-0" />

// //             {/* Centered Nav Items */}
// //             <div className="flex space-x-8">
// //               {navigationItems
// //                 .filter((item) => item.name !== "Contact us")
// //                 .map((item) => (
// //                   <div key={item.name} className="relative group">
// //                     <Link
// //                       href={item.href}
// //                       className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
// //                     >
// //                       {item.name}
// //                     </Link>
// //                     {item.hasDropdown && (
// //                       <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
// //                         <div className="py-2">
// //                           {recruitmentServices.map((service) => (
// //                             <Link
// //                               key={service.name}
// //                               href={service.href}
// //                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
// //                             >
// //                               {service.name}
// //                             </Link>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))}
// //             </div>

// //             {/* Right-Aligned Contact Us Button */}
// //             <div className="absolute right-0">
// //               <Link href="/contact">
// //                 <Button
// //                   size="sm"
// //                   variant="outline"
// //                   className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
// //                 >
// //                   Contact us
// //                 </Button>
// //               </Link>
// //             </div>
// //           </nav>

// //           {/* Mobile Menu Toggle */}
// //           <div className="md:hidden">
// //             <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
// //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu Content */}
// //         {isMenuOpen && (
// //           <div className="md:hidden">
// //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
// //               {navigationItems.map((item) => (
// //                 <div key={item.name}>
// //                   <Link
// //                     href={item.href}
// //                     className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
// //                     onClick={() => setIsMenuOpen(false)}
// //                   >
// //                     {item.name}
// //                   </Link>
// //                   {item.hasDropdown && (
// //                     <div className="pl-6 space-y-1">
// //                       {recruitmentServices.map((service) => (
// //                         <Link
// //                           key={service.name}
// //                           href={service.href}
// //                           className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm transition-colors"
// //                           onClick={() => setIsMenuOpen(false)}
// //                         >
// //                           {service.name}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}

// //               {/* Mobile Auth Buttons */}
// //               <div className="pt-4 pb-3 border-t border-gray-200">
// //                 <div className="flex flex-col space-y-3">
// //                   <Link href="/login" onClick={() => setIsMenuOpen(false)}>
// //                     <Button variant="ghost" size="sm" className="w-full text-gray-700">
// //                       Log In
// //                     </Button>
// //                   </Link>
// //                   <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
// //                     <Button size="sm" className="w-full bg-green-700 hover:bg-green-800 text-white">
// //                       Get Started
// //                     </Button>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   )
// // }

// // export default Header
// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navigationItems = [
//     { name: "Home", href: "/" },
//     { name: "Domain", href: "#", hasDropdown: true, clickable: false },
//     { name: "Pricing", href: "/pricing" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact us", href: "/contact" },
//   ]

//   const recruitmentServices = [
//     { name: "Hire-vision", href: "/services/hire-vision" },
//     { name: "Training-vision", href: "/Talent-vision" },
//     { name: "Banking-vision", href: "hire-vision/banking-vision" },
//   ]

//   return (
//     <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo - Now clickable and redirects to home */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-red-700 transition-colors">
//               AI 21
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center justify-center w-full relative">
//             <div className="absolute left-0" />

//             {/* Centered Nav Items */}
//             <div className="flex space-x-8">
//               {navigationItems
//                 .filter((item) => item.name !== "Contact us")
//                 .map((item) => (
//                   <div key={item.name} className="relative group">
//                     {item.clickable !== false ? (
//                       <Link
//                         href={item.href}
//                         className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
//                       >
//                         {item.name}
//                       </Link>
//                     ) : (
//                       <span className="text-gray-700 px-3 py-2 text-sm font-medium cursor-default">{item.name}</span>
//                     )}
//                     {item.hasDropdown && (
//                       <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                         <div className="py-2">
//                           {recruitmentServices.map((service) => (
//                             <Link
//                               key={service.name}
//                               href={service.href}
//                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
//                             >
//                               {service.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//             </div>

//             {/* Right-Aligned Contact Us Button */}
//             <div className="absolute right-0">
//               <Link href="/contact">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white bg-transparent"
//                 >
//                   Contact us
//                 </Button>
//               </Link>
//             </div>
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu Content */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//               {navigationItems.map((item) => (
//                 <div key={item.name}>
//                   {item.clickable !== false ? (
//                     <Link
//                       href={item.href}
//                       className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   ) : (
//                     <span className="text-gray-700 block px-3 py-2 text-base font-medium cursor-default">
//                       {item.name}
//                     </span>
//                   )}
//                   {item.hasDropdown && (
//                     <div className="pl-6 space-y-1">
//                       {recruitmentServices.map((service) => (
//                         <Link
//                           key={service.name}
//                           href={service.href}
//                           className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm transition-colors"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {service.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Mobile Auth Buttons */}
//               <div className="pt-4 pb-3 border-t border-gray-200">
//                 <div className="flex flex-col space-y-3">
//                   <Link href="/login" onClick={() => setIsMenuOpen(false)}>
//                     <Button variant="ghost" size="sm" className="w-full text-gray-700">
//                       Log In
//                     </Button>
//                   </Link>
//                   <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
//                     <Button size="sm" className="w-full bg-green-700 hover:bg-green-800 text-white">
//                       Get Started
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header
"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on HireVision or LearningVision pages
  const isHireVisionPage = pathname?.includes('/HireVision')
  const isHireVisionSubPage = pathname?.includes('/HireVision/HireVision-')
  const isHireVisionMainPage = pathname === '/Product/HireVision'
  const isLearningVisionPage = pathname?.startsWith('/Product/LearningVision')
  const isLearningVisionMainPage = pathname === '/Product/LearningVision'

  // Remove "Pricing" from header only on the main page ("/")
  const isHomePage = pathname === "/"

  // Navigation items logic
  let navigationItems
  let recruitmentServices

  if (isLearningVisionPage) {
    navigationItems = [
      { name: "Home", href: "/" },
      { name: "Product", href: "#", hasDropdown: true, clickable: false },
      { name: "About Us", href: "/about" },
      { name: "Contact us", href: "/contact" },
    ]
    recruitmentServices = [
      { name: "Learningvision-videoBot", href: "/Product/LearningVision/Learningvision-videoBot" },
    ]
  } else if (isHireVisionPage) {
    navigationItems = [
      { name: "Home", href: isHireVisionSubPage ? "/Product/HireVision" : "/" },
      { name: "Product", href: "#", hasDropdown: true, clickable: false },
      { name: "About Us", href: "/about" },
      { name: "Contact us", href: "/contact" },
    ]
    recruitmentServices = [
      { name: "HireVision-Assessment", href: "/Product/HireVision/HireVision-Assessment" },
      { name: "HireVision-CVAnalysis", href: "/Product/HireVision/HireVision-CVAnalysis" },
      { name: "HireVision-Interviewer", href: "/Product/HireVision/HireVision-Interviewer" },
    ]
  } else {
    navigationItems = [
      { name: "Home", href: "/" },
      { name: "Product", href: "#", hasDropdown: true, clickable: false },
      { name: "About Us", href: "/about" },
      { name: "Contact us", href: "/contact" },
    ]
    recruitmentServices = [
      { name: "HireVision", href: "https://hirevisionai.com/", external: true },
      { name: "LearningVision", href: "/Product/LearningVision" },
    ]
  }

  return (
    <header className="bg-black border-b border-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clickable and redirects to home */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-red-400 transition-colors">
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
                    {item.clickable !== false ? (
                      <Link
                        href={item.href}
                        className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-white px-3 py-2 text-sm font-medium cursor-default">{item.name}</span>
                    )}
                    {item.hasDropdown && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-800">
                        <div className="py-2">
                      {recruitmentServices.map((service) => (
                        service.external ? (
                          <a
                            key={service.name}
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-900 hover:text-red-400 transition-colors hover:underline hover:decoration-2 hover:underline-offset-4"
                          >
                            {service.name}
                          </a>
                        ) : (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-900 hover:text-red-400 transition-colors hover:underline hover:decoration-2 hover:underline-offset-4"
                          >
                            {service.name}
                          </Link>
                        )
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
                  className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white bg-transparent"
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-900">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.clickable !== false ? (
                    <Link
                      href={item.href}
                      className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-white block px-3 py-2 text-base font-medium cursor-default">
                      {item.name}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <div className="pl-6 space-y-1">
                      {recruitmentServices.map((service) => (
                        service.external ? (
                          <a
                            key={service.name}
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-red-400 block px-3 py-2 text-sm transition-colors hover:underline hover:decoration-2 hover:underline-offset-4"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </a>
                        ) : (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="text-white hover:text-red-400 block px-3 py-2 text-sm transition-colors hover:underline hover:decoration-2 hover:underline-offset-4"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 pb-3 border-t border-gray-900">
                <div className="flex flex-col space-y-3">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    {/* <Button variant="ghost" size="sm" className="w-full text-white">
                      Log In
                    </Button> */}
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    {/* <Button size="sm" className="w-full bg-green-700 hover:bg-green-800 text-white">
                      Get Started
                    </Button> */}
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
