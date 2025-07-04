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
          <h4 className="text-lg font-semibold mb-4">Domain</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/Domain/HireVision" className="hover:text-white">
                HireVision
              </a>
            </li>
            <li>
              <a href="/Domain/LearningVision" className="hover:text-white">
                LearningVision
              </a>
            </li>
            {/* Removed Banking-vision as requested */}
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
