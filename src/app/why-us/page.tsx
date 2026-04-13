"use client";

import { 
  Eye, 
  Target, 
  ShieldCheck, 
  Heart, 
  Users, 
  Briefcase, 
  BookOpen, 
  MapPin, 
  Globe, 
  Award 
} from "lucide-react";
import Link from "next/link";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      
      {/* --- Hero Section (Sharp Image) --- */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/it-infrastructure.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Infrastructure excellence" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Why us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-medium leading-relaxed">
            A forward-thinking technology and infrastructure solutions company delivering reliable and integrated systems across East Africa.
          </p>
        </div>
      </section>

      {/* --- Who we are --- */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              {/* Header: Medium Ocean Blue (#0C6898) */}
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Who we are</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  Inara Crest Technologies is a forward-thinking technology and infrastructure solutions company delivering reliable, scalable and integrated systems that power modern organizations.
                </p>
                <p>
                  We bring together expertise in software engineering, network infrastructure, security systems, power solutions, HVAC, industrial systems and data analytics. By combining technical excellence with practical strategy, we connect digital innovation with physical infrastructure in a way that is seamless and efficient.
                </p>
                <p>
                  We are a fully registered East African company with 100 percent local shareholding. Headquartered in Nairobi with a liaison office in Kisumu, we proudly serve clients across East Africa and beyond.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-[#0A0A0A] p-10 rounded-2xl border border-gray-100 dark:border-gray-900 shadow-sm shadow-[#0C6898]/5">
              <h3 className="text-xl font-bold mb-4 text-[#0C6898]">Our approach</h3>
              <p className="text-gray-500 dark:text-gray-300 font-medium leading-relaxed mb-8">
                From system design and installation to maintenance and ongoing support, we provide complete solutions that ensure performance, security and long-term growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold">100%</span>
                  {/* Label: Neutral Gray (#949494) */}
                  <span className="text-[10px] font-bold text-[#949494] uppercase tracking-widest">East African owned</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold">24/7</span>
                  <span className="text-[10px] font-bold text-[#949494] uppercase tracking-widest">Expert support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Vision and Mission --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <Eye className="w-10 h-10 text-[#0C6898] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                To become a leading tech solutions provider that powers businesses and drives digital transformation across industries in East Africa.
              </p>
            </div>
            <div className="p-12 bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <Target className="w-10 h-10 text-[#0C6898] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                To design, implement, and maintain innovative, reliable, and scalable technology solutions that empower organizations to operate efficiently, securely, and sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Values --- */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-16 text-center uppercase">Our core values</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <ValueItem icon={<Users />} label="Client-centric" />
            <ValueItem icon={<Award />} label="Professionalism" />
            <ValueItem icon={<Globe />} label="Integrity" />
            <ValueItem icon={<Heart />} label="Humility" />
            <ValueItem icon={<Heart />} label="Compassion" />
          </div>
        </div>
      </section>

      {/* --- Why we are the best --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#050505] border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Why we are the best</h2>
            <div className="space-y-8">
              <BestPoint title="Tailored solutions" desc="We prioritize understanding and delivering tailored solutions for each client’s unique needs." />
              <BestPoint title="Precision and excellence" desc="We ensure high-quality solutions with precision, focusing on excellence and attention to detail." />
              <BestPoint title="Trust and transparency" desc="We build trust through honest communication and transparent practices." />
              <BestPoint title="Diverse perspectives" desc="We value diverse perspectives, continuously striving to improve and enhance our teamwork." />
              <BestPoint title="Positive impact" desc="We go beyond business, striving to positively impact the lives of others." />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueItem({ icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {/* Icon: Medium Ocean Blue (#0C6898) on Vibrant Cyan (#00D2FF) background tint */}
      <div className="w-16 h-16 bg-[#00D2FF]/10 rounded-2xl flex items-center justify-center text-[#0C6898]">
        {icon}
      </div>
      <span className="font-bold text-sm text-gray-700 dark:text-gray-300">{label}</span>
    </div>
  );
}

function BestPoint({ title, desc }: { title: string; desc: string }) {
  return (
    /* Border: Medium Ocean Blue (#0C6898) */
    <div className="border-l-2 border-[#0C6898] pl-8">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}