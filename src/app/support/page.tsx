"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, Globe } from "lucide-react";

function SupportContent() {
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan");
  const planDetails = searchParams.get("details");

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "", 
    email: "",
    message: ""
  });

  // Automatically fill the message if a plan was selected from the Cloud page
  useEffect(() => {
    if (planName) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in the ${planName} package.\nDetails: ${planDetails || "N/A"}\n\nPlease provide more information regarding deployment and setup.`
      }));
    }
  }, [planName, planDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry: ${planName || "General Support"}`);
    const body = encodeURIComponent(
      `Selected Plan: ${planName || "None"}\n` +
      `Plan Details: ${planDetails || "N/A"}\n\n` +
      `Client Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@inaracresttechnologies.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* --- Hero Section --- */}
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

      {/* --- Contacts and Message Section --- */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-1 space-y-10">
              <ContactBlock icon={<Phone />} title="Phone support" lines={["+254 798 856 450", "+254 720 966 680", "+254 741 177 665"]} />
              <ContactBlock icon={<Mail />} title="Email inquiry" lines={["info@inaracresttechnologies.com"]} />
              <ContactBlock icon={<MapPin />} title="Regional locations" lines={["Darosa Plaza, First Floor, Karen Road, Nairobi", "Liaison Office: Kisumu"]} />
              <ContactBlock icon={<Clock />} title="Business hours" lines={["Monday – Friday: 8:00 am – 5:00 pm"]} />
            </div>

            {/* Email Message Interface */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-gray-50 dark:bg-[#0A0A0A] rounded-3xl border border-gray-100 dark:border-gray-900 overflow-hidden flex flex-col h-[700px] shadow-xl shadow-[#0C6898]/5">
              {/* Header: Medium Ocean Blue (#0C6898) */}
              <div className="p-6 bg-[#0C6898] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-bold">Send us a message</span>
                </div>
                {/* Live Session Button */}
                <a 
                  href="https://your-platform-link.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Live Session
                </a>
              </div>

              <div className="flex-grow p-10 bg-white dark:bg-black overflow-y-auto">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                      <input 
                        type="text" required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        /* Focus Ring: Vibrant Cyan (#00D2FF) */
                        className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-60">Phone Number</label>
                      <input 
                        type="tel" required
                        placeholder="+254 7..."
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                    <input 
                      type="email" required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">Your Inquiry</label>
                    <textarea 
                      required
                      placeholder="How can our technical team assist you today?"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#00D2FF] transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-gray-900 flex justify-end">
                <button 
                  type="submit"
                  /* Button: Medium Ocean Blue (#0C6898), Hover: Deep Navy (#0B4C72) */
                  className="flex items-center gap-3 px-8 h-12 bg-[#0C6898] text-white rounded-xl font-bold hover:bg-[#0B4C72] transition-all shadow-md shadow-[#0C6898]/20"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>
    </main>
  );
}

export default function SupportPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-black" />}>
      <SupportContent />
    </Suspense>
  );
}

function ContactBlock({ icon, title, lines }: any) {
  return (
    <div className="flex gap-6">
      {/* Icon Background: Cyan tint, Text: Ocean Blue */}
      <div className="w-12 h-12 bg-[#00D2FF]/10 flex items-center justify-center text-[#0C6898] rounded-2xl shrink-0 border border-[#00D2FF]/20 dark:border-[#0C6898]/30">
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