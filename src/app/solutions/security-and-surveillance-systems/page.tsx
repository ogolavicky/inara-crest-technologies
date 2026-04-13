"use client";

import Link from "next/link";
import { Shield, Eye, Lock, Fingerprint, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SecuritySolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Clear Image) --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/surveillance.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Security and surveillance systems" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Integrated safety</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Security and surveillance systems</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Intelligent security solutions integrated with it infrastructure to protect your business assets across East Africa.
          </p>
        </div>
      </section>

      {/* --- Core Protection Section (Document Detail) --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header: Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Enterprise protection</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Intelligent safety architecture for modern buildings.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We design intelligent security systems integrated with it infrastructure to protect your business. Our solutions ensure performance, security and long-term growth through seamless digital and physical integration.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-[#949494] uppercase tracking-widest">
                    {/* Icon: Vibrant Cyan (#00D2FF) */}
                    <CheckCircle2 className="text-[#00D2FF] w-5 h-5" /> 24/7 Remote viewing ready
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-[#949494] uppercase tracking-widest">
                    <CheckCircle2 className="text-[#00D2FF] w-5 h-5" /> Biometric and rfid logic
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/access-control.jpg" className="rounded-2xl shadow-2xl" alt="Biometric access control" />
              {/* Safety node overlay: Ocean Blue (#0C6898) */}
              <div className="absolute -bottom-6 -left-6 bg-[#0C6898] text-white p-8 rounded-2xl hidden md:block shadow-xl">
                 <p className="text-xs font-bold tracking-widest uppercase mb-1">Safety node</p>
                 <p className="text-xl font-bold">Secure entry management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Detail Grid --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-16">
            {/* Header: Ocean Blue (#0C6898) */}
            <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-4 uppercase">System items</h2>
            <p className="text-3xl font-bold">Comprehensive security solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureBlock 
              icon={<Eye />} 
              title="Ip and analog cctv" 
              desc="High-definition surveillance with dvr and nvr setup including remote viewing capabilities." 
            />
            <FeatureBlock 
              icon={<Fingerprint />} 
              title="Access control" 
              desc="Biometric, rfid, and card access systems for systematic entry and exit management." 
            />
            <FeatureBlock 
              icon={<Zap />} 
              title="Electric fencing" 
              desc="Professional installation of high-tension security fences with integrated alarm triggers." 
            />
            <FeatureBlock 
              icon={<Shield />} 
              title="Intrusion detection" 
              desc="Advanced sensors and alarm systems designed to detect and alert unauthorized facility access." 
            />
            <FeatureBlock 
              icon={<Lock />} 
              title="Integrated management" 
              desc="Unified security management solutions that connect hardware with existing network infrastructure." 
            />
            <FeatureBlock 
              icon={<CheckCircle2 />} 
              title="Maintenance contracts" 
              desc="Scheduled preventive maintenance to ensure your security hardware is always operational." 
            />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Ready to secure your business facility?</h2>
        {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Request a security audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}

// --- Internal Helper Components ---

function FeatureBlock({ icon, title, desc }: any) {
  return (
    /* Hover border: Vibrant Cyan (#00D2FF) */
    <div className="p-8 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:border-[#00D2FF] transition-all duration-300">
      {/* Icon: Ocean Blue (#0C6898) */}
      <div className="text-[#0C6898] mb-6">{icon}</div>
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      <p className="text-sm text-[#949494] dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}