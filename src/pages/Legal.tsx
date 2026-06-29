export default function Legal() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-navy-deep mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: June 2025</p>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-navy-deep mb-3">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">We collect information you provide directly to us, including school information, administrator details, student records (managed on behalf of schools), and usage data.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy-deep mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">We use the collected information to provide, maintain, and improve our services, send important service communications, and comply with legal obligations. We do not sell personal data to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy-deep mb-3">3. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">We implement industry-standard security measures including 256-bit encryption, SOC 2 compliant infrastructure, regular security audits, and strict access controls to protect your data.</p>
          </section>
          <section id="terms">
            <h2 className="text-2xl font-bold text-navy-deep mb-3 mt-12">Terms of Service</h2>
            <h3 className="text-lg font-semibold text-navy mb-2">1. Acceptance of Terms</h3>
            <p className="text-gray-600 leading-relaxed">By accessing or using Eldermin, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-navy mb-2">2. Subscription Terms</h3>
            <p className="text-gray-600 leading-relaxed">Subscriptions are billed on a termly or annual basis. Cancellation requests must be submitted at least 30 days before the next billing date.</p>
          </section>
        </div>
        <div className="mt-10 p-6 bg-blue-pale rounded-xl">
          <p className="text-sm text-gray-600">For privacy or legal inquiries, contact: <a href="mailto:legal@eldermin.com" className="text-navy font-semibold">legal@eldermin.com</a></p>
        </div>
      </div>
    </div>
  )
}