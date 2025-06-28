"use client"

import Image from "next/image"

const PainPointsSection = () => {
  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/business-plan-schedule.jpg" // Updated image source
              alt="High Operational Costs"
              width={160}
              height={160}
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              High Operational Costs
            </h3>
            <p className="text-gray-700">
              About <span className="text-purple-600 font-medium">14%</span> of service appointments* result in a second
              visit because of scheduling and dispatch errors.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/macbook-ipad.jpg" // Updated image source
              alt="Improving NPS"
              width={160}
              height={160}
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Improving NPS
            </h3>
            <p className="text-gray-700">
              A Microsoft survey indicates that{" "}
              <span className="text-purple-600 font-medium">61%</span> of consumers now have higher customer service
              standards than they did just one year ago, and field services is not exempt from these expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPointsSection