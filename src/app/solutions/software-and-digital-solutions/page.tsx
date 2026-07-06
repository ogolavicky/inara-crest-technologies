"use client";

import Link from "next/link";
import { Code2, Laptop, Database, Smartphone, ShieldCheck, Cog, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export default function SoftwareSolutionsPage() {
  const specializedSystems = [
    { title: "Hospital management systems", desc: "Full-scale integrated systems for medical facility operations and patient data management." },
    { title: "Hotel and property management", desc: "Automated booking, inventory, and guest management systems for the hospitality industry." },
    { title: "Custom erp and enterprise software", desc: "Enterprise resource planning software to automate and grow internal business operations." },
  ];

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Clear Image) --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/software-dev.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Software engineering and development" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Medium Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Systems engineering</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Software development and digital transformation</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Designing and maintaining scalable, secure, and customized software solutions tailored to modern business needs across East Africa.
          </p>
        </div>
      </section>

      {/* --- Our Approach Section (Document Detail) --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header Label: Medium Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Our approach</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Automating the future of East African industries.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We design, develop, and maintain scalable, secure, and customized software solutions tailored to modern business needs. Our solutions help automate and grow your operations through technical excellence and practical strategy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  {/* Interactive Approach Items */}
                  <Link 
                    href={{ pathname: '/support', query: { plan: "Application development", details: "Mobile, web, and cloud-based applications built for scale." } }}
                    className="group space-y-2 hover:translate-y-[-2px] transition-transform"
                  >
                    {/* Icon container: Vibrant Cyan (#00D2FF) tint */}
                    <div className="w-10 h-10 bg-[#00D2FF]/10 dark:bg-[#00D2FF]/20 flex items-center justify-center text-[#0C6898] rounded-lg group-hover:bg-[#0C6898] group-hover:text-white transition-colors">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-[#0C6898] transition-colors">Application development</h4>
                    <p className="text-xs text-[#949494]">Mobile, web, and cloud-based applications built for scale.</p>
                  </Link>
                  <Link 
                    href={{ pathname: '/support', query: { plan: "System lifecycle", details: "Ongoing technical support, software upgrades, and maintenance." } }}
                    className="group space-y-2 hover:translate-y-[-2px] transition-transform"
                  >
                    <div className="w-10 h-10 bg-[#00D2FF]/10 dark:bg-[#00D2FF]/20 flex items-center justify-center text-[#0C6898] rounded-lg group-hover:bg-[#0C6898] group-hover:text-white transition-colors">
                      <Cog className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-[#0C6898] transition-colors">System lifecycle</h4>
                    <p className="text-xs text-[#949494]">Ongoing technical support, software upgrades, and maintenance.</p>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#0A0A0A] p-10 rounded-2xl border border-gray-100 dark:border-gray-900 shadow-sm shadow-[#0C6898]/5">
               <h3 className="text-xl font-bold mb-8">Specialized vertical solutions</h3>
               <div className="space-y-8">
                  {specializedSystems.map((item) => (
                    <Link 
                      key={item.title} 
                      href={{ pathname: '/support', query: { plan: item.title, details: item.desc } }}
                      /* Hover border: Vibrant Cyan (#00D2FF) */
                      className="block group border-l-2 border-gray-200 dark:border-gray-800 pl-6 hover:border-[#00D2FF] transition-all"
                    >
                      <h4 className="text-[#0C6898] font-bold text-sm mb-1 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                      <p className="text-[#949494] dark:text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </Link>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Detail Grid --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-4 uppercase">Development items</h2>
            <p className="text-3xl font-bold">Comprehensive digital solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureBlock 
              icon={<Layers />} 
              title="Corporate and e-commerce" 
              desc="Professional websites and e-commerce platforms designed to automate and grow your digital footprint." 
            />
            <FeatureBlock 
              icon={<Code2 />} 
              title="System integration" 
              desc="Connecting digital innovation with physical infrastructure through seamless system integration and automation." 
            />
            <FeatureBlock 
              icon={<Database />} 
              title="Enterprise software" 
              desc="Custom enterprise applications designed to optimize internal workflows and data management protocols." 
            />
            <FeatureBlock 
              icon={<ShieldCheck />} 
              title="Secure cloud apps" 
              desc="Scalable cloud-based applications with built-in security and high-performance data handling." 
            />
            <FeatureBlock 
              icon={<Laptop />} 
              title="Technical support" 
              desc="Ongoing maintenance contracts covering software upgrades, security patches, and logical optimizations." 
            />
            <FeatureBlock 
              icon={<CheckCircle2 />} 
              title="Digital transformation" 
              desc="Consultative approach to moving physical business processes into modern, efficient digital environments." 
            />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Ready to automate your business operations?</h2>
        {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Consult with an engineer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}

// --- Internal Helper Components ---

function FeatureBlock({ icon, title, desc }: any) {
  return (
    <Link 
      href={{ pathname: '/support', query: { plan: title, details: desc } }}
      /* Hover border: Vibrant Cyan (#00D2FF) */
      className="block p-8 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:border-[#00D2FF] hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    >
      <div className="text-[#0C6898] mb-6">{icon}</div>
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      <p className="text-sm text-[#949494] dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </Link>
  );
}