"use client";

import Link from "next/link";
import { Wifi, Zap, Users, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      {/* Hero Section: Updated with Logo Blues Gradient */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-[#0B4C72] to-[#0C6898] text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Wave Internet</h1>
          <p className="text-xl text-cyan-50/90 max-w-2xl mx-auto">Fast, reliable, and unlimited fiber internet for your home and office.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Card: Added hover border in Vibrant Cyan (#00D2FF) */}
            <div className="p-8 bg-gray-50 dark:bg-[#0A0A0A] rounded-3xl border border-gray-100 dark:border-gray-800 text-center hover:border-[#00D2FF] transition-all">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Home Basic</h3>
              {/* Price: Using Medium Ocean Blue (#0C6898) */}
              <div className="text-4xl font-black text-[#0C6898] mb-6">KSh 3,500<span className="text-sm font-normal text-[#949494]">/mo</span></div>
              <ul className="text-sm space-y-3 mb-8 text-gray-600 dark:text-gray-400 font-medium">
                {/* Icons: Using Vibrant Cyan (#00D2FF) */}
                <li className="flex items-center gap-2 justify-center"><Zap className="w-4 h-4 text-[#00D2FF]" /> 20 Mbps Speed</li>
                <li className="flex items-center gap-2 justify-center"><Users className="w-4 h-4 text-[#00D2FF]" /> 1-3 Devices</li>
              </ul>
              {/* Button: Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */}
              <Link href="/contact" className="block w-full py-4 bg-[#0C6898] text-white rounded-xl font-bold hover:bg-[#0B4C72] transition-all shadow-md">Order Now</Link>
            </div>
            {/* Add more plans here as needed */}
          </div>
        </div>
      </section>
    </main>
  );
}