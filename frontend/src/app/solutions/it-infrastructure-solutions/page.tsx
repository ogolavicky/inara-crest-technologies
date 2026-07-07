"use client";

import Link from "next/link";
import { Server, Network, Shield, Cpu, ArrowRight, CheckCircle2, Globe, Layers, HardDrive } from "lucide-react";

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Sharp Image) --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/it-infrastructure.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Infrastructure architecture" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Infrastructure nodes</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">It infrastructure and network solutions</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Building the physical and logical foundation of modern ICT environments across East Africa.
          </p>
        </div>
      </section>

      {/* --- Core Capability (Detailed Section) --- */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header: Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Network foundation</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Structured cabling and backbone connectivity.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We provide professional installation of structured cabling systems, including Cat6, Cat7, and fiber optic backbones. Our solutions ensure a zero-bottleneck environment for enterprise data traffic.
                </p>
                <p>
                  From rack installation and professional cable management to the design of complete server rooms and data centers, we build infrastructure that scales with your growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TechnicalCard icon={<Network />} title="Lan and wan setup" desc="Enterprise wifi and wired connectivity for multi-floor buildings." />
              <TechnicalCard icon={<Server />} title="Server rooms" desc="Data center design, cooling integration, and security setup." />
              <TechnicalCard icon={<Shield />} title="Network security" desc="Configuration of firewalls, vpns, and monitoring solutions." />
              <TechnicalCard icon={<HardDrive />} title="Hardware supply" desc="Supply, deployment and installation of certified servers and pcs." />
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Detail Grid --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-16">
            {/* Header: Ocean Blue (#0C6898) */}
            <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-4 uppercase">Deployment items</h2>
            <p className="text-3xl font-bold">Complete infrastructure lifecycle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem title="Structured cabling" desc="Expert installation of Cat6, Cat7, and high-speed fiber optic networks." />
            <FeatureItem title="Enterprise wifi" desc="Seamless lan and wan setup for high-density office and industrial environments." />
            <FeatureItem title="Server configuration" desc="Professional server installation and logic configuration for business applications." />
            <FeatureItem title="Rack management" desc="Professional rack installation and systematic cable organization for server rooms." />
            <FeatureItem title="Data centers" desc="Specialized server room design focusing on airflow, power, and physical security." />
            <FeatureItem title="Network audits" desc="Systematic monitoring and network security audits to identify vulnerabilities." />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Ready to secure your network?</h2>
        {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Speak to an engineer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}

// --- Internal Components ---

function TechnicalCard({ icon, title, desc }: any) {
  return (
    /* Hover border: Vibrant Cyan (#00D2FF) */
    <div className="p-8 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-900 rounded-2xl shadow-sm hover:border-[#00D2FF] transition-all">
      {/* Icon: Ocean Blue (#0C6898) */}
      <div className="text-[#0C6898] mb-4">{icon}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-xs text-[#949494] font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureItem({ title, desc }: any) {
  return (
    <div className="p-8 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl">
      {/* Check icon: Vibrant Cyan (#00D2FF) */}
      <CheckCircle2 className="w-5 h-5 text-[#00D2FF] mb-4" />
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-[#949494] dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}