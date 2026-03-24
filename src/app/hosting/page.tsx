import Link from "next/link";

export default function HostingPage() {
  const hostingPlans = [
    {
      name: "Starter",
      monthly: "350",
      yearly: "3,500",
      websites: "1 Website",
      storage: "10 GB SSD",
      emails: "5–10 Email Accounts",
      domain: "No",
      backups: "Weekly",
      popular: false,
      description: "Ideal for personal websites and small projects",
    },
    {
      name: "Business",
      monthly: "750",
      yearly: "7,500",
      websites: "3–5 Websites",
      storage: "30–50 GB SSD",
      emails: "25–50 Email Accounts",
      domain: "Free .co.ke (1st year)",
      backups: "Daily",
      popular: true,
      description: "Most Popular — Best for small and growing businesses",
    },
    {
      name: "Pro",
      monthly: "1,400",
      yearly: "14,000",
      websites: "Unlimited Websites",
      storage: "100 GB SSD",
      emails: "Unlimited Email Accounts",
      domain: "Free Domain (1st year)",
      backups: "Daily",
      popular: false,
      description: "Designed for professionals and developers",
    },
    {
      name: "Enterprise",
      monthly: "2,500",
      yearly: "25,000",
      websites: "Unlimited Websites",
      storage: "200+ GB SSD",
      emails: "Unlimited Email Accounts",
      domain: "Free Domain (1st year)",
      backups: "Daily + On-demand",
      popular: false,
      description: "For high-performance and corporate needs",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-16">
      {/* Hero */}
      <section className="bg-[#003087] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Web Hosting &amp; Cloud Solutions</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Fast, secure, and reliable hosting with 99.9% uptime. Perfect for personal sites, businesses, and enterprises.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#plans"
              className="bg-white text-[#003087] px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition"
            >
              View Hosting Plans
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-white dark:bg-gray-900 border-b py-6">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-gray-600 dark:text-gray-400">
          <div>✅ 99.9% Uptime Guarantee</div>
          <div>✅ Free SSL Certificate</div>
          <div>✅ Daily Backups</div>
          <div>✅ 24/7 Expert Support</div>
          <div>✅ 30-Day Money-Back Guarantee</div>
        </div>
      </div>

      {/* Hosting Plans */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose the Right Hosting Plan</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              All plans include Free SSL, Website Builder, and DirectAdmin Control Panel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {hostingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white dark:bg-gray-900 rounded-3xl p-8 border transition-all hover:shadow-2xl ${
                  plan.popular 
                    ? "border-brand-accent ring-2 ring-brand-accent/30 scale-[1.03]" 
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-brand-accent text-white text-xs font-bold tracking-widest px-4 py-1 rounded-full mb-6">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-3xl font-bold text-center mb-2">{plan.name}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">{plan.description}</p>

                <div className="text-center mb-10">
                  <span className="text-6xl font-bold">KSh {plan.monthly}</span>
                  <span className="text-gray-500">/month</span>
                  <div className="text-sm mt-2 text-gray-500">
                    or KSh {plan.yearly} yearly (Save 17%)
                  </div>
                </div>

                <ul className="space-y-4 mb-10 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span> {plan.websites}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span> {plan.storage}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span> {plan.emails}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span> {plan.domain} Domain
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span> {plan.backups} Backups
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span> Free SSL Certificate
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-4 rounded-2xl font-semibold transition-all ${
                    plan.popular 
                      ? "bg-brand-accent hover:bg-blue-600 text-white" 
                      : "bg-gray-900 hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  }`}
                >
                  Choose {plan.name} Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSL Add-ons */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">SSL Certificates Add-ons</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { type: "Standard SSL (DV)", desc: "Basic security for personal websites", price: "1,500" },
              { type: "Business SSL (OV)", desc: "Verified business identity", price: "4,500" },
              { type: "Premium SSL (EV)", desc: "Maximum trust for eCommerce", price: "9,000" },
            ].map((ssl) => (
              <div key={ssl.type} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl text-center">
                <h3 className="font-semibold text-lg mb-3">{ssl.type}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{ssl.desc}</p>
                <div className="text-3xl font-bold text-brand-accent">KSh {ssl.price}</div>
                <p className="text-xs text-gray-500">per year</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#003087] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch or Upgrade Your Website?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
            Get started today with reliable hosting backed by local expert support.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#003087] hover:bg-gray-100 px-12 py-5 rounded-2xl font-semibold text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}