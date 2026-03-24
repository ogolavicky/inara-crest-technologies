"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Database, 
  Layers, 
  Server, 
  ShieldCheck, 
  Zap, 
  Users, 
  Activity, 
  Settings, 
  Wind, 
  Cpu, 
  BarChart3, 
  ShoppingCart 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      
      {/* --- Hero Section (High Clarity Image) --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Inara Crest infrastructure" 
          />
          {/* Transparent gradient to keep text readable while the photo stays sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Innovative technology solutions for <span className="text-blue-600">East Africa.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-10 font-medium leading-relaxed">
              Reliable, scalable and integrated systems that power modern organizations across the region and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solutions/cloud-and-internet" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all text-sm text-center">
                Get started
              </Link>
              <Link href="/support" className="px-8 py-3 border border-black dark:border-white text-black dark:text-white font-semibold rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all text-sm text-center">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Partners Section (Full Color Visibility) --- */}
      <section className="py-16 bg-gray-50 dark:bg-[#0A0A0A] border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8 text-center">
          <p className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-12">Trusted by leading organizations across East Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <PartnerLogo src="/partner-alliance.png" alt="Alliance Ginneries" />
            <PartnerLogo src="/partner-afvis.png" alt="AFVIS" />
            <PartnerLogo src="/partner-meru.png" alt="Meru" />
            <PartnerLogo src="/partner-blast.png" alt="Blast Entertainment" />
            <PartnerLogo src="/partner-consultants.png" alt="Inara Crest Consultants" />
          </div>
        </div>
      </section>

      {/* --- Who we are (Detailed Content) --- */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-blue-600 font-bold text-sm tracking-widest mb-4 uppercase">Who we are</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                The backbone of modern infrastructure.
              </p>
              <div className="space-y-6 text-gray-600 leading-relaxed text-md font-medium">
                <p>Inara Crest Technologies is a forward-thinking technology and infrastructure solutions company delivering reliable, scalable and integrated systems that power modern organizations.</p>
                <p>By combining technical excellence with practical strategy, we connect digital innovation with physical infrastructure in a way that is seamless and efficient. From system design to ongoing support, we ensure performance and security.</p>
              </div>
            </div>
            <div className="relative">
               <img src="/it-infrastructure.jpg" className="rounded-2xl shadow-2xl" alt="Infrastructure node" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Statistics Section (Counter) --- */}
      <section className="py-20 bg-blue-600 text-white shadow-inner">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem count="50+" label="Domain sites" />
            <StatItem count="120+" label="Completed projects" />
            <StatItem count="24/7" label="Support uptime" />
            <StatItem count="100%" label="East African owned" />
          </div>
        </div>
      </section>

      {/* --- Detailed Services Grid --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-blue-600 font-bold text-sm tracking-widest mb-4 uppercase">Our solutions</h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Integrated technology services.</p>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              We provide end-to-end technology services designed to automate, secure, and grow your digital and physical operations across East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceBlock icon={<Layers />} title="Software development" desc="Hospital management (HMS), Hotel systems, and custom ERP software." link="/solutions/software-and-digital-solutions" />
            <ServiceBlock icon={<Globe />} title="Cloud and internet" desc="Web hosting, domain registration, and secure business email services." link="/solutions/cloud-and-internet" />
            <ServiceBlock icon={<Server />} title="It infrastructure" desc="Structured cabling (CAT6/7), data centers, and server configuration." link="/solutions/it-infrastructure-solutions" />
            <ServiceBlock icon={<ShieldCheck />} title="Security systems" desc="IP CCTV, biometric access control, and electric fence installation." link="/solutions/security-and-surveillance-systems" />
            <ServiceBlock icon={<Zap />} title="Power solutions" desc="UPS systems, inverters, and battery backup maintenance contracts." link="/solutions/power-and-smart-facility-solutions" />
            <ServiceBlock icon={<Wind />} title="Smart HVAC" desc="Energy efficient climate control integrated with building technology." link="/solutions/power-and-smart-facility-solutions" />
            <ServiceBlock icon={<Cpu />} title="Industrial systems" desc="Weighbridge installation, calibration, and certification services." link="/solutions/office-home-and-technology-supply" />
            <ServiceBlock icon={<Settings />} title="Managed services" desc="Monthly and quarterly IT maintenance with emergency on-call support." link="/solutions/managed-services" />
            <ServiceBlock icon={<BarChart3 />} title="Data and analytics" desc="Business intelligence, data visualization, and statistical insights." link="/solutions/research-data-and-analytical-services" />
          </div>
        </div>
      </section>

      {/* --- Vision & Mission Section --- */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100">
               <h3 className="text-blue-600 font-bold text-sm tracking-widest mb-6 uppercase">Our vision</h3>
               <p className="text-2xl font-semibold leading-relaxed">To become a leading tech solutions provider that powers businesses and drives digital transformation across industries in East Africa.</p>
            </div>
            <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100">
               <h3 className="text-blue-600 font-bold text-sm tracking-widest mb-6 uppercase">Our mission</h3>
               <p className="text-2xl font-semibold leading-relaxed">To design, implement, and maintain innovative technology solutions that empower organizations to operate efficiently and sustainably.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- Internal Helper Components ---

function PartnerLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-16 w-40 relative flex items-center justify-center transition-all duration-300">
      {/* Grayscale and opacity removed so colors are original and clear */}
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
}

function StatItem({ count, label }: { count: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">{count}</div>
      <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-80">{label}</div>
    </div>
  );
}

function ServiceBlock({ icon, title, desc, link }: any) {
  return (
    <Link href={link} className="group p-8 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-600 transition-all duration-300 shadow-sm">
      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-6 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 font-medium text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center text-[11px] font-bold text-blue-600 uppercase tracking-widest group-hover:gap-2 transition-all">
        Explore solution <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </Link>
  );
}