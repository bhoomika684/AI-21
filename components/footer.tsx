// /**
//  * Footer Component - Comprehensive footer with company information and links
//  *
//  * Features:
//  * - Company contact information
//  * - Organized link sections (Product, Company, Resources, Legal)
//  * - Social media links with hover animations
//  * - Newsletter subscription form
//  * - Responsive design for all screen sizes
//  * - Company logos section removed as requested
//  *
//  * @returns {JSX.Element} Complete footer component
//  */
// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

// const Footer = () => {
//   // Footer navigation links organized by category
//   const footerLinks = {
//     product: [
//       { name: "Hire Vision", href: "/recruitment/hirevision-interviewer" },
//       { name: "Talent Vision", href: "/recruitment/video--analysis" },
//       { name: "Banking Vision", href: "/recruitment/test" },
//       { name: "InterviewPro", href: "/recruitment/interview-pro" },
//       { name: "Video Analysis", href: "/recruitment/video--analysis" },
//     ],
//     company: [
//       { name: "About Us", href: "/about" },
//       { name: "Careers", href: "/careers" },
//       { name: "Press", href: "/press" },
//       { name: "Blog", href: "/blog" },
//       { name: "Contact", href: "/contact" },
//     ],
//     resources: [
//       { name: "Documentation", href: "/docs" },
//       { name: "Help Center", href: "/help" },
//       { name: "API Reference", href: "/api" },
//       { name: "Community", href: "/community" },
//       { name: "Status", href: "/status" },
//     ],
//     legal: [
//       { name: "Privacy Policy", href: "/privacy" },
//       { name: "Terms of Service", href: "/terms" },
//       { name: "Cookie Policy", href: "/cookies" },
//       { name: "GDPR", href: "/gdpr" },
//       { name: "Security", href: "/security" },
//     ],
//   }

//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Main Footer Content */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
//             {/* Company Info - Takes up 2 columns on large screens */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2 space-y-6"
//             >
//               <div>
//                 <h3 className="text-2xl font-bold mb-4">AI 21</h3>
//                 <p className="text-gray-400 mb-6">
//                   Revolutionizing recruitment with AI-powered solutions. We help companies find the perfect candidates
//                   through intelligent automation and data-driven insights.
//                 </p>
//               </div>

//               {/* Contact Information */}
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <Mail className="h-5 w-5 text-red-500" />
//                   <span className="text-gray-400">contact@AI 21.com</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="h-5 w-5 text-red-500" />
//                   <span className="text-gray-400">
// +91 9876543210</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MapPin className="h-5 w-5 text-red-500" />
//                   <span className="text-gray-400">Mumbai</span>
//                 </div>
//               </div>

//               {/* Social Media Links */}
//               <div className="flex space-x-4">
//                 {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
//                   <motion.a
//                     key={index}
//                     href="#"
//                     className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Product Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <h4 className="text-lg font-semibold">Domain</h4>
//               <ul className="space-y-2">
//                 {footerLinks.product.map((link, index) => (
//                   <li key={index}>
//                     <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Company Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <h4 className="text-lg font-semibold">Company</h4>
//               <ul className="space-y-2">
//                 {footerLinks.company.map((link, index) => (
//                   <li key={index}>
//                     <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Resources Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <h4 className="text-lg font-semibold">Resources</h4>
//               <ul className="space-y-2">
//                 {footerLinks.resources.map((link, index) => (
//                   <li key={index}>
//                     <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Newsletter Subscription */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <h4 className="text-lg font-semibold">Stay Updated</h4>
//               <p className="text-gray-400 text-sm">Get the latest updates on recruitment trends and AI 21 features.</p>
//               <div className="space-y-3">
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//                 />
//                 <Button className="w-full bg-red-600 hover:bg-red-700 text-white group">
//                   Subscribe
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-gray-400 text-sm">© 2024 AI 21. All rights reserved.</div>
//             <div className="flex space-x-6">
//               {footerLinks.legal.map((link, index) => (
//                 <Link key={index} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h4 className="text-2xl font-bold mb-4">AI 21</h4>
          <p className="text-gray-400">AI-powered recruitment solutions to transform your hiring process.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/services/hire-vision" className="hover:text-white">
                Hire-vision
              </a>
            </li>
            <li>
              <a href="/services/hire-vision/traning-vision" className="hover:text-white">
                Training-vision
              </a>
            </li>
            <li>
              <a href="/services/hire-vision/banking-vision" className="hover:text-white">
                Banking-vision
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">Email: contact@ai21.com</p>
          <p className="text-gray-400">Phone: +91 9876543210</p>
          <p className="text-gray-400">Address: Mumbai, India</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} AI 21. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
