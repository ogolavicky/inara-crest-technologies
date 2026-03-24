"use client";

import Link from "next/link";
import { Wifi, Zap, Users, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Wave Internet</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Fast, reliable, and unlimited fiber internet for your home and office.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 text-center">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Home Basic</h3>
              <div className="text-4xl font-black text-blue-600 mb-6">KSh 3,500<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="text-sm space-y-3 mb-8 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2 justify-center"><Zap className="w-4 h-4" /> 20 Mbps Speed</li>
                <li className="flex items-center gap-2 justify-center"><Users className="w-4 h-4" /> 1-3 Devices</li>
              </ul>
              <Link href="/contact" className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold">Order Now</Link>
            </div>
            {/* Add more plans here as needed */}
          </div>
        </div>
      </section>
    </main>
  );
}