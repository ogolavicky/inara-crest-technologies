"use client";

import Link from "next/link";
import { Clock, ShieldCheck, Activity, Cog, ArrowRight, CheckCircle2, Headphones } from "lucide-react";

export default function ManagedServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Sharp Image) --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/it-support.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Managed IT support" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Operational continuity</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Managed services</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Structured IT maintenance and support programs designed for enterprise-grade performance across East Africa.
          </p>
        </div>
      </section>

      {/* --- Maintenance Framework Section --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header: Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Maintenance framework</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Structured IT support and maintenance contracts.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We provide structured IT maintenance and support programs including monthly, quarterly, or annual service agreements, with emergency on-call support.
                </p>
                <p>
                  Our goal is to design, implement, and maintain innovative, reliable, and scalable technology solutions that empower organizations to operate efficiently and securely.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-12">
                 <div className="p-6 bg-gray-50 dark:bg-[#0A0A0A] rounded-2xl border border-gray-100 dark:border-gray-900">
                    <p className="text-xs font-bold text-[#949494] uppercase tracking-widest mb-2">Service model</p>
                    <p className="text-lg font-bold">24/7 Support</p>
                 </div>
                 <div className="p-6 bg-gray-50 dark:bg-[#0A0A0A] rounded-2xl border border-gray-100 dark:border-gray-900">
                    <p className="text-xs font-bold text-[#949494] uppercase tracking-widest mb-2">Scope</p>
                    <p className="text-lg font-bold">East Africa</p>
                 </div>
              </div>
            </div>
            <div className="space-y-6">
               <ServiceItem title="Hardware and software support" desc="Comprehensive computer hardware and software support for modern workspaces." />
               <ServiceItem title="Regular maintenance" desc="Scheduled monthly or quarterly IT maintenance to ensure peak performance." />
               <ServiceItem title="System optimization" desc="Continuous software updates and systematic system optimization protocols." />
               <ServiceItem title="Network monitoring" desc="Real-time network monitoring and audits to prevent operational downtime." />
               <ServiceItem title="Data security" desc="Data backup management and rigorous cybersecurity checks." />
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Detail Grid --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ManagedTile icon={<Activity />} title="Optimization" desc="Maximizing system lifecycle through expert tuning." />
              <ManagedTile icon={<ShieldCheck />} title="Cybersecurity" desc="Protecting assets through regular security audits." />
              <ManagedTile icon={<Cog />} title="Maintenance" desc="Systematic hardware and software health checks." />
              <ManagedTile icon={<Headphones />} title="On-call support" desc="Emergency technical assistance when you need it." />
           </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Ready for structured IT support?</h2>
        {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Contact our technical desk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}

// --- Internal Helper Components ---

function ServiceItem({ title, desc }: any) {
  return (
    /* Hover border: Vibrant Cyan (#00D2FF) */
    <div className="flex gap-6 items-start p-6 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:border-[#00D2FF] transition-all">
      {/* Icon: Vibrant Cyan (#00D2FF) */}
      <CheckCircle2 className="text-[#00D2FF] shrink-0 w-6 h-6" />
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-[#949494] dark:text-gray-400 font-medium text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ManagedTile({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl">
      {/* Icon: Ocean Blue (#0C6898) */}
      <div className="text-[#0C6898] mb-6">{icon}</div>
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      <p className="text-[#949494] dark:text-gray-400 font-medium text-sm leading-relaxed">{desc}</p>
    </div>
  );
}