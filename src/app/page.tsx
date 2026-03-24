import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* HERO SECTION - Starlink Style */}
      <section className="relative bg-[#003087] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:4px_4px]"></div>
        
        <div className="relative container mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Powering Kenya&apos;s Future with<br />
              Reliable Technology Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              From software and hosting to internet, security, power backup and industrial systems — 
              we deliver integrated solutions that help businesses grow securely and efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hosting"
                className="bg-white text-[#003087] hover:bg-gray-100 font-semibold px-10 py-4 rounded-xl text-lg transition-all"
              >
                Get Hosting Now
              </Link>
              <Link
                href="/internet"
                className="border-2 border-white hover:bg-white/10 font-semibold px-10 py-4 rounded-xl text-lg transition-all"
              >
                Explore Internet Plans
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-blue-200">
              <div>✅ 100% Kenyan Owned</div>
              <div>✅ 99.9% Uptime Guarantee</div>
              <div>✅ 24/7 Expert Support</div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-black/30 py-4">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">●</span> Nairobi • Kisumu
            </div>
            <div>Serving Businesses Across Kenya</div>
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Integrated Solutions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From digital transformation to physical infrastructure — we provide complete technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Software Development & Digital Transformation", desc: "Custom ERP, websites, mobile apps, hospital & hotel systems" },
              { title: "Domains, Hosting & Cloud Solutions", desc: "Reliable hosting, business email, VPS and .co.ke domains" },
              { title: "High-Speed Internet Solutions", desc: "Home, Business & Hotspot internet powered by Wave" },
              { title: "IT Infrastructure & Networking", desc: "Structured cabling, servers, Wi-Fi and data centers" },
              { title: "Security & Surveillance", desc: "CCTV, access control, alarms and electric fences" },
              { title: "Power Backup & HVAC", desc: "UPS, inverters, air conditioning and smart building solutions" },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-brand-accent hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              View All 10 Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* HOSTING TEASER */}
      <section className="py-20 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Web Hosting Plans</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Fast, secure and affordable hosting with free SSL and daily backups
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "KSh 350", period: "/month", popular: false },
              { name: "Business", price: "KSh 750", period: "/month", popular: true },
              { name: "Pro", price: "KSh 1,400", period: "/month", popular: false },
              { name: "Enterprise", price: "KSh 2,500", period: "/month", popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`bg-white dark:bg-gray-900 rounded-3xl p-8 border ${plan.popular ? 'border-brand-accent ring-2 ring-brand-accent/30 scale-105' : 'border-gray-200 dark:border-gray-700'}`}>
                {plan.popular && <div className="text-center text-xs font-semibold tracking-widest text-brand-accent mb-4">MOST POPULAR</div>}
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <Link
                  href="/hosting"
                  className="block text-center py-4 rounded-2xl bg-brand-accent hover:bg-blue-600 text-white font-semibold transition"
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#003087] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
            Let&apos;s build reliable technology infrastructure that grows with you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#003087] hover:bg-gray-100 font-semibold px-12 py-5 rounded-2xl text-lg transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}