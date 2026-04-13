"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Code2, Laptop, Database, Smartphone, ShieldCheck, 
  Cog, ArrowRight, CheckCircle2, Layers, Users, Briefcase, Award,
  Wifi, Globe
} from "lucide-react";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/software-dev.jpg",
      label: "Systems engineering",
      title: "Software development and digital transformation",
      desc: "Designing and maintaining scalable, secure, and customized software solutions tailored to modern business needs."
    },
    {
      image: "/cloud-solutions.jpg",
      label: "Connectivity",
      title: "Cloud infrastructure and High-speed Internet connection",
      desc: "Reliable digital infrastructure and seamless connectivity powering businesses across East Africa."
    },
    {
      image: "/it-support.jpg",
      label: "Managed Services",
      title: "Expert technical support and IT maintenance",
      desc: "Our expert engineers are available to assist with system design, maintenance and deployment."
    }
  ];

  const specializedSystems = [
    { title: "Hospital management systems", desc: "Full-scale integrated systems for medical facility operations and patient data management." },
    { title: "Hotel and property management", desc: "Automated booking, inventory, and guest management systems for the hospitality industry." },
    { title: "Custom erp and enterprise software", desc: "Enterprise resource planning software to automate and grow internal business operations." },
  ];

  const partners = [
    { name: "AFVIS", logo: "/partner-afvis.png" },
    { name: "Alliance Ginneries", logo: "/partner-alliance.png" },
    { name: "Blast Entertainment", logo: "/partner-blast.png" },
    { name: "InaraCrest", logo: "/partner-consultants.png" }, 
    { name: "Meru", logo: "/partner-meru.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      
      {/* --- Hero Section --- */}
      <section className="relative h-[75vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-4xl px-8">
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">
            {slides[currentSlide].label}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 min-h-[120px] md:min-h-[160px]">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            {slides[currentSlide].desc}
          </p>
          
          <div className="mt-10 flex gap-3">
             {slides.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrentSlide(i)}
                 className={`h-1 rounded-full transition-all ${i === currentSlide ? "w-12 bg-[#00D2FF]" : "w-4 bg-gray-300 dark:bg-gray-700"}`} 
               />
             ))}
          </div>
        </div>
      </section>

      {/* --- Partners Logo Section --- */}
      <section className="py-16 border-b border-gray-100 dark:border-gray-900 bg-gray-50/30 dark:bg-white/5">
        <div className="container mx-auto px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#949494] mb-10">
            Strategic Partners & Trusted Clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {partners.map((partner) => (
              <img 
                key={partner.name} 
                src={partner.logo} 
                alt={partner.partner} 
                className="h-10 md:h-14 max-w-[180px] w-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Our Approach Section --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-[#0C6898] font-bold text-sm tracking-widest mb-6 uppercase">Our approach</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
                Automating the future of East African industries.
              </p>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  We design, develop, and maintain scalable, secure, and customized software solutions tailored to modern business needs. Our solutions help automate and grow your operations through technical excellence and practical strategy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-[#00D2FF]/10 flex items-center justify-center text-[#0C6898] rounded-lg">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm">Application development</h4>
                    <p className="text-xs text-gray-500">Mobile, web, and cloud-based applications built for scale.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-[#00D2FF]/10 flex items-center justify-center text-[#0C6898] rounded-lg">
                      <Cog className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm">System lifecycle</h4>
                    <p className="text-xs text-gray-500">Ongoing technical support, software upgrades, and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-[#0A0A0A] p-10 rounded-2xl border border-gray-100 dark:border-gray-900">
               <h3 className="text-xl font-bold mb-8">Specialized vertical solutions</h3>
               <div className="space-y-8">
                  {specializedSystems.map((item) => (
                    <div key={item.title} className="group border-l-2 border-gray-200 dark:border-gray-800 pl-6 hover:border-[#00D2FF] transition-all">
                      <h4 className="text-[#0C6898] font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Connectivity & Hosting Spotlight (Juicing the landing page) --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Internet Card */}
            <div className="relative group overflow-hidden bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img src="/cloud-solutions.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Connectivity" />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-[#00D2FF]">
                  <Wifi className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Internet connectivity</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0C6898]">Fast & Reliable Internet</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  Stay connected with high-speed internet for homes and businesses, offering flexible plans from 15 Mbps up to 300 Mbps. Seamless performance starting from <strong>KSh 2,500/mo</strong>.
                </p>
                <Link href="/solutions/cloud-and-internet" className="text-sm font-bold flex items-center gap-2 text-[#0C6898] hover:text-[#00D2FF] transition-colors">
                  View Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hosting Card */}
            <div className="relative group overflow-hidden bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img src="/software-dev.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Web Hosting" />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-[#00D2FF]">
                  <Globe className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Online presence</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0C6898]">Domain & Web Hosting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  Build your online presence with our secure domain registration and reliable web hosting solutions, designed to keep your website fast, safe, and always accessible.
                </p>
                <Link href="/solutions/cloud-and-internet" className="text-sm font-bold flex items-center gap-2 text-[#0C6898] hover:text-[#00D2FF] transition-colors">
                  Explore Hosting <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-24 bg-[#0B4C72] text-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-4 text-[#00D2FF]"><Briefcase className="w-8 h-8" /></div>
              <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight">50+</h3>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-90">Completed Projects</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-4 text-[#00D2FF]"><Users className="w-8 h-8" /></div>
              <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight">100+</h3>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-90">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-4 text-[#00D2FF]"><Award className="w-8 h-8" /></div>
              <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight">25+</h3>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-90">Tech Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Ready to automate your business operations?</h2>
        <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-[#0C6898] text-white font-bold rounded-full hover:bg-[#0B4C72] transition-all text-sm group shadow-lg shadow-[#0C6898]/20">
          Consult with an engineer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
}