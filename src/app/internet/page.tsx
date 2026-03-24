import Link from "next/link";

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-16">
      <section className="bg-gradient-to-br from-[#003087] to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Wave Internet Services</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Fast, reliable, and affordable internet for homes, businesses, and public hotspots across Kenya.
          </p>
        </div>
      </section>

      {/* Home Internet Packages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Home Internet Packages</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Perfect for families and remote work</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Home Basic", speed: "10–20 Mbps", users: "1–3", monthly: "3,500", yearly: "35,000" },
              { name: "Home Standard", speed: "30–80 Mbps", users: "3–6", monthly: "5,500", yearly: "55,000" },
              { name: "Home Premium", speed: "100–200 Mbps", users: "6–10", monthly: "8,500", yearly: "85,000" },
            ].map((pkg) => (
              <div key={pkg.name} className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold mb-6">KSh {pkg.monthly}<span className="text-base font-normal">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li>Speed: {pkg.speed}</li>
                  <li>Users: {pkg.users}</li>
                </ul>
                <Link href="/contact" className="block text-center py-4 bg-brand-accent text-white rounded-2xl font-semibold hover:bg-blue-600">
                  Get This Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Internet Packages - similar structure, you can expand later */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Business Internet Packages</h2>
          {/* Add business packages here similarly */}
          <div className="text-center">
            <Link href="/contact" className="text-brand-accent font-semibold text-lg">
              Contact us for custom business plans →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}