import React from 'react'

const PrivacyPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Name and contact information</li>
                <li>Delivery address</li>
                <li>Payment information</li>
                <li>Order history</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process and deliver your orders</li>
                <li>Send order confirmations and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Delivery partners to fulfill your orders</li>
                <li>Payment processors to handle transactions</li>
                <li>Service providers who assist our operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve your browsing experience</li>
                <li>Provide personalized content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="text-gray-600">
                <p>Email: privacy@cakecrazy.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Bakery Street, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage