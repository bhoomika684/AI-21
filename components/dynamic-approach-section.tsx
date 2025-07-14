"use client"

const PainPointsSection = () => {
  return (
    <section className="py-16 bg-red-50 text-red-600 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to unlock the power of <br /> real-time AI insights?</h2>
        <div className="mb-10">
          <p className="text-2xl md:text-2xl font-semibold">
            Reimagine work with AI-<span className='italic'>TwentyOne</span>  — let’s get started.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="/contact">
            <button className="bg-transparent border border-black text-Black font-semibold text-l px-10 py-2 rounded-md hover:bg-white hover:text-red-700 transition-all">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PainPointsSection
