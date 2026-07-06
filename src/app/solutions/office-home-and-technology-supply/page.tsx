"use client";

import Link from "next/link";
import { ShoppingCart, Laptop, Package, Key, ArrowRight, Weight, ShieldCheck, Cpu, HardDrive, Monitor, Zap, Wind } from "lucide-react";

export default function TechnologySupplyPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Clear Image) --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Technology supply and industrial systems" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Medium Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Technology supply</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Office, home and technology supply</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Supplying certified technology equipment and specialized industrial measurement systems across East Africa.
          </p>
        </div>
      </section>

      {/* --- Industrial Systems Section (Document Detail) --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header Label: Medium Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Industrial solutions</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Measurement, monitoring and automation.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We offer specialized industrial measurement and automation solutions designed for precision. Our expertise covers the full lifecycle of industrial monitoring systems.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    {/* Icon container: Vibrant Cyan (#00D2FF) tint */}
                    <div className="w-10 h-10 bg-[#00D2FF]/10 dark:bg-[#00D2FF]/20 flex items-center justify-center text-[#0C6898] rounded-lg">
                      <Weight className="w-5 h-5" />
                    </div>
                    <span className="font-bold">Weighbridge installation and calibration</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#00D2FF]/10 dark:bg-[#00D2FF]/20 flex items-center justify-center text-[#0C6898] rounded-lg">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="font-bold">Industrial system integration and certification</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-[#0A0A0A] p-10 rounded-2xl border border-gray-100 dark:border-gray-900 shadow-sm shadow-[#0C6898]/5">
               <h3 className="text-xl font-bold mb-8">Technology retail inventory</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InventoryItem icon={<Laptop />} title="Computing" desc="Desktop and laptop computers, servers and storage." />
                  <InventoryItem icon={<HardDrive />} title="Networking" desc="Certified switches, routers and cabling equipment." />
                  <InventoryItem icon={<ShieldCheck />} title="Security hardware" desc="CCTV, access control and electric fencing materials." />
                  <InventoryItem icon={<Key />} title="Software licensing" desc="Official enterprise software and system licenses." />
                  <InventoryItem icon={<Zap />} title="Power systems" desc="Ups systems, batteries and backup power hardware." />
                  <InventoryItem icon={<Wind />} title="Facility units" desc="Air conditioning units and smart building components." />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Value Proposition Grid --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-4 uppercase">Direct supply</h2>
            <p className="text-3xl font-bold">Certified equipment for every environment.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureBlock title="Corporate supply" desc="Complete workstation deployment and server room hardware for large organizations." />
            <FeatureBlock title="Home technology" desc="Smart home devices, reliable routers and personal computing solutions for home offices." />
            <FeatureBlock title="Industrial tools" desc="Measurement sensors, digital monitoring systems and industrial-grade automation hardware." />
            <FeatureBlock title="License management" desc="Systematic management of your enterprise software renewals and transfers." />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Need a specialized technology quote?</h2>
        {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Request a quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}

// --- Internal Helper Components ---

function InventoryItem({ icon, title, desc }: any) {
  return (
    <div className="group">
      {/* Icon: Medium Ocean Blue (#0C6898) */}
      <div className="text-[#0C6898] mb-3 group-hover:text-[#00D2FF] transition-colors">{icon}</div>
      <h4 className="font-bold text-sm mb-1">{title}</h4>
      <p className="text-xs text-[#949494] dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureBlock({ title, desc }: any) {
  return (
    /* Hover border: Vibrant Cyan (#00D2FF) */
    <div className="p-8 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:border-[#00D2FF] transition-all duration-300">
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      <p className="text-sm text-[#949494] dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}