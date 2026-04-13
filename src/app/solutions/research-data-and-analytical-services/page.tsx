"use client";

import Link from "next/link";
import { BarChart3, PieChart, Search, Presentation, ArrowRight, Layers, Database, CheckCircle2 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Clear Image) --- */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/data-analytics.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Data and analytics node" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Intelligence node</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Research, data and analytical services</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Delivering data-driven insights for smarter business decisions and strategic growth across East Africa.
          </p>
        </div>
      </section>

      {/* --- Core Data Services (Document Detail) --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header: Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Insights engine</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Turning raw information into strategic assets.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We deliver integrated analytical solutions that help organizations understand their performance and market landscape. Our experts combine technical excellence with practical strategy to provide actionable insights.
                </p>
                {/* Border: Ocean Blue (#0C6898) */}
                <div className="p-8 bg-gray-50 dark:bg-[#0A0A0A] rounded-2xl border-l-4 border-[#0C6898]">
                  <p className="text-gray-700 dark:text-gray-200">
                    Our goal is to design and implement innovative solutions that empower organizations to operate efficiently and sustainably through data.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnalyticsCard icon={<Search />} title="Data collection" desc="Comprehensive surveys and data gathering protocols." />
              <AnalyticsCard icon={<BarChart3 />} title="Statistical insights" desc="Deep analysis of trends and performance metrics." />
              <AnalyticsCard icon={<PieChart />} title="Visualization" desc="Intuitive charts and graphs for complex data sets." />
              <AnalyticsCard icon={<Presentation />} title="Strategic reporting" desc="High-level presentations and business intelligence." />
            </div>
          </div>
        </div>
      </section>

      {/* --- Service Detail Grid --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-4 uppercase">Analytical items</h2>
            <p className="text-3xl font-bold">Comprehensive data lifecycle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DetailItem title="Collection and surveys" desc="Professional data collection and customized survey design for regional market research." />
            <DetailItem title="Statistical analysis" desc="Applying advanced statistical methods to extract meaning from large organizational datasets." />
            <DetailItem title="Bi dashboards" desc="Development of live business intelligence dashboards for real-time decision support." />
            <DetailItem title="Data visualization" desc="Transforming complex metrics into clear, visual stories that stakeholders can understand." />
            <DetailItem title="Strategic reporting" desc="Detailed reporting and professional presentations to guide long-term infrastructure growth." />
            <DetailItem title="Infrastructure audits" desc="Using data to audit and optimize physical and logical system performance." />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Ready to unlock your business data?</h2>
        {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Speak to a consultant <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}

// --- Internal Components ---

function AnalyticsCard({ icon, title, desc }: any) {
  return (
    /* Hover Border: Vibrant Cyan (#00D2FF) */
    <div className="p-8 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-900 rounded-2xl shadow-sm hover:border-[#00D2FF] transition-all">
      {/* Icon: Ocean Blue (#0C6898) */}
      <div className="text-[#0C6898] mb-4">{icon}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-xs text-[#949494] font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function DetailItem({ title, desc }: any) {
  return (
    <div className="p-8 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl">
      {/* Check Icon: Vibrant Cyan (#00D2FF) */}
      <CheckCircle2 className="w-5 h-5 text-[#00D2FF] mb-4" />
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-[#949494] dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}