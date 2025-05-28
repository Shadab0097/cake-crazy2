import React from 'react'

const TermsPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Cake Crazy's website and services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Cake Crazy's website for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The materials cannot be modified or copied</li>
                <li>The materials cannot be used for commercial purposes</li>
                <li>The materials cannot be publicly distributed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Order and Delivery</h2>
              <p className="text-gray-600 mb-4">
                All orders are subject to product availability. Delivery time is estimated and may vary depending on your location and other factors.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Orders must be placed at least 4 hours before delivery time</li>
                <li>Delivery charges are non-refundable</li>
                <li>Customers must provide accurate delivery information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                We accept various payment methods including credit cards, debit cards, UPI, and cash on delivery. All payments must be made in full before delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Cancellation and Refunds</h2>
              <p className="text-gray-600 mb-4">
                Orders can be cancelled up to 4 hours before the scheduled delivery time. Refunds will be processed within 5-7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Product Information</h2>
              <p className="text-gray-600 mb-4">
                We strive to display accurate product information, including images and descriptions. However, actual products may vary slightly from images shown.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                The materials on Cake Crazy's website are provided on an 'as is' basis. Cake Crazy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Limitations</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Cake Crazy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cake Crazy's website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage