"use client"

const PainPointsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-500 to-red-700 text-white text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to unlock the power of <br /> real-time AI insights?</h2>
        <div className="mb-10">
          <p className="text-2xl md:text-2xl font-semibold">
            Reimagine work with AI-21 — let’s get started.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="/contact">
            <button className="bg-transparent border border-white text-white font-semibold text-xl px-10 py-4 rounded-xl hover:bg-white hover:text-red-700 transition-all">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PainPointsSection
