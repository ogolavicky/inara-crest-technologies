"use client";

import { Phone, Mail, MapPin, MessageSquare, Send, Clock, Globe } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* --- Hero Section (Sharp Image) --- */}
      <section className="relative h-[45vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/it-support.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Technical support team" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Support</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl font-medium leading-relaxed">
            Our expert engineers are available to assist with system design, maintenance and deployment across East Africa.
          </p>
        </div>
      </section>

      {/* --- Contacts and Chat --- */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-10">
              <ContactBlock icon={<Phone />} title="Phone support" lines={["+254 798 856 450", "+254 720 966 680", "+254 741 177 665"]} />
              <ContactBlock icon={<Mail />} title="Email inquiry" lines={["info@inaracresttechnologies.com"]} />
              <ContactBlock icon={<MapPin />} title="Regional locations" lines={["Darosa Plaza, First Floor, Karen Road, Nairobi", "Liaison Office: Kisumu"]} />
              <ContactBlock icon={<Clock />} title="Business hours" lines={["Monday – Friday: 8:00 am – 5:00 pm"]} />
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2 bg-gray-50 dark:bg-[#0A0A0A] rounded-3xl border border-gray-100 dark:border-gray-900 overflow-hidden flex flex-col h-[600px] shadow-xl">
              <div className="p-6 bg-blue-600 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-bold">Live assistance</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Agents online
                </div>
              </div>
              <div className="flex-grow p-10 bg-white dark:bg-black overflow-y-auto">
                <div className="bg-gray-100 dark:bg-blue-900/20 p-6 rounded-2xl rounded-tl-none max-w-[85%] text-sm font-medium leading-relaxed">
                  Welcome to Inara Crest. How can our technical team assist you today?
                </div>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-gray-900 flex gap-4">
                <input 
                  type="text" 
                  placeholder="Type your inquiry..."
                  className="flex-grow bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <button className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all shadow-md">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function ContactBlock({ icon, title, lines }: any) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 rounded-2xl shrink-0 border border-blue-100 dark:border-blue-900/30">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        {lines.map((line: string, i: number) => (
          <p key={i} className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{line}</p>
        ))}
      </div>
    </div>
  );
}