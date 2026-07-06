"use client";

import Link from "next/link";
import { Zap, Battery, Wind, Settings, ArrowRight, Thermometer, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PowerSmartSolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Clear Image) --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hvac-solutions.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Power and facility systems" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Mission critical</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Power and smart facility solutions</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Uninterrupted power systems and smart climate control for high-performance organizations across East Africa.
          </p>
        </div>
      </section>

      {/* --- Energy Resilience Section (Document Detail) --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header Label: Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Energy resilience</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Zero downtime power architecture.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We ensure uninterrupted operations with reliable power solutions. Our engineering team designs and implements backup systems that protect mission-critical infrastructure from power conditioning issues and surges.
                </p>
                <p>
                  By combining technical excellence with practical strategy, we connect power innovation with physical infrastructure in a way that is seamless and efficient.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
               <FacilityCard 
                 icon={<Zap />} 
                 title="Backup power systems" 
                 desc="Design and installation of online and offline Ups systems, inverters, and high-capacity battery bank solutions." 
               />
               <FacilityCard 
                 icon={<Wind />} 
                 title="Smart Hvac solutions" 
                 desc="Energy-efficient climate control including Vrf and Vrv systems integrated with smart building technologies." 
               />
            </div>
          </div>
        </div>
      </section>

      {/* --- Service detail grid --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-4 uppercase">Facility items</h2>
            <p className="text-3xl font-bold">Integrated facility management.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DetailItem title="Ups deployment" desc="Professional setup of online and offline Ups units for server rooms and workstations." />
            <DetailItem title="Battery banks" desc="Installation and systematic maintenance of battery backup and bank solutions." />
            <DetailItem title="Hvac diagnostics" desc="Comprehensive preventive maintenance and diagnostics for specialized Vrf and Vrv systems." />
            <DetailItem title="Smart integration" desc="Centralized Ac control and conditioning integrated with smart facility dashboards." />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Need an infrastructure energy audit?</h2>
        {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Speak to an engineer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}

// --- Internal components ---

function FacilityCard({ icon, title, desc }: any) {
  return (
    /* Hover border: Vibrant Cyan (#00D2FF) */
    <div className="p-8 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-900 rounded-2xl shadow-sm hover:border-[#00D2FF] transition-all">
      {/* Icon: Ocean Blue (#0C6898) */}
      <div className="text-[#0C6898] mb-4">{icon}</div>
      <h4 className="font-bold text-xl mb-3">{title}</h4>
      <p className="text-sm text-[#949494] dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function DetailItem({ title, desc }: any) {
  return (
    <div className="p-8 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl">
      {/* Check icon: Vibrant Cyan (#00D2FF) */}
      <CheckCircle2 className="w-5 h-5 text-[#00D2FF] mb-4" />
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-[#949494] dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}