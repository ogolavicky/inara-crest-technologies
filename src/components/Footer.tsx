"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Headphones, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900">
      <div className="container mx-auto px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company info */}
          <div className="space-y-6">
            {/* Logo Text: Using Vibrant Cyan (#00D2FF) for 'Crest' */}
            <div className="text-white text-xl font-bold tracking-tight">
              Inara <span className="text-[#00D2FF]">Crest</span>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              A 100% East African-owned technology and infrastructure solutions company delivering reliable, scalable, and integrated systems.
            </p>
            <div className="space-y-3 text-xs font-medium">
              <div className="flex items-start gap-3">
                {/* Icon: Medium Ocean Blue (#0C6898) */}
                <MapPin className="w-4 h-4 text-[#0C6898] shrink-0" />
                <p>Darosa Plaza, First Floor, Karen Road<br />P.O. Box 103876 – 00101, Nairobi, East Africa</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Quick links</h3>
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/solutions/cloud-and-internet" className="hover:text-white transition-colors">Our solutions</Link>
              <Link href="/solutions/cloud-and-internet" className="hover:text-white transition-colors">Web hosting</Link>
              <Link href="/why-us" className="hover:text-white transition-colors">Why Inara Crest</Link>
              <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>

          {/* Our services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Our services</h3>
            <ul className="flex flex-col space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2">Software development</li>
              <li className="flex items-center gap-2">It infrastructure and networking</li>
              <li className="flex items-center gap-2">Security and surveillance</li>
              <li className="flex items-center gap-2">Power backup and energy</li>
              <li className="flex items-center gap-2">Hvac and smart buildings</li>
              <li className="flex items-center gap-2">Managed it services</li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Get in touch</h3>
            <div className="space-y-6 text-sm font-medium">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* Icon: Medium Ocean Blue (#0C6898) */}
                  <Phone className="w-4 h-4 text-[#0C6898]" />
                  <div className="flex flex-col">
                    <a href="tel:+254798856450" className="hover:text-white">+254 798 856 450</a>
                    <a href="tel:+25472096680" className="hover:text-white">+254 720 966 680</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {/* Icon: Medium Ocean Blue (#0C6898) */}
                  <Mail className="w-4 h-4 text-[#0C6898]" />
                  <a href="mailto:info@inaracresttechnologies.com" className="hover:text-white break-all">
                    info@inaracresttechnologies.com
                  </a>
                </div>
              </div>

              {/* Trust signals - Using Vibrant Cyan (#00D2FF) */}
              <div className="pt-6 border-t border-gray-900 space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                  <span>99.9% Uptime guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Headphones className="w-4 h-4 text-[#00D2FF]" />
                  <span>24/7 Expert support</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Globe className="w-4 h-4 text-[#00D2FF]" />
                  <span>East African owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium">
            © {currentYear} Inara Crest Technologies Limited. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-xs font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of service</Link>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            {/* Status dot: Vibrant Cyan (#00D2FF) */}
            <span className="w-2 h-2 bg-[#00D2FF] rounded-full animate-pulse"></span>
            Systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}