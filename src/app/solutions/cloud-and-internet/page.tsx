"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Server, 
  Wifi, 
  Check, 
  ArrowRight, 
  Lock, 
  Database, 
  Headphones
} from "lucide-react";

export default function CloudInternetPage() {
  const hostingPlans = [
    { name: "Starter", monthly: "350", yearly: "3,500", storage: "10 GB SSD", websites: "1 Website", emails: "5–10", backups: "Weekly", popular: false, note: "Ideal for personal sites" },
    { name: "Business", monthly: "750", yearly: "7,500", storage: "30–50 GB SSD", websites: "3–5 Websites", emails: "25–50", backups: "Daily", popular: true, note: "Recommended for small businesses" },
    { name: "Pro", monthly: "1,400", yearly: "14,000", storage: "100 GB SSD", websites: "Unlimited", emails: "Unlimited", backups: "Daily", popular: false, note: "Professional and developers" },
    { name: "Enterprise", monthly: "2,500", yearly: "25,000", storage: "200+ GB SSD", websites: "Unlimited", emails: "Unlimited", backups: "Daily and on-demand", popular: false, note: "Corporate high-performance" },
  ];

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      
      {/* --- Hero Section (Clear Image) --- */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/cloud-solutions.jpg" 
            className="w-full h-full object-cover opacity-100" 
            alt="Cloud infrastructure" 
          />
          {/* Transparent gradient to keep image sharp while making text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-4 uppercase">Connectivity and cloud</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Wave connection</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            High-speed fiber connectivity and reliable digital infrastructure powering businesses across East Africa.
          </p>
        </div>
      </section>

      {/* --- Web Hosting Plans --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Web hosting plans</h2>
            <p className="text-gray-500 text-lg font-medium">Choose the right infrastructure for your digital assets.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingPlans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl border transition-all ${plan.popular ? 'border-blue-600 bg-blue-50/30 dark:bg-blue-900/10 shadow-lg' : 'border-gray-100 dark:border-gray-800'}`}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {plan.popular && <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase block mb-4">Most popular</span>}
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-xs text-gray-400 font-bold mb-8">{plan.note}</p>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-sm font-bold">KSh</span>
                        <span className="text-4xl font-bold tracking-tight">{plan.monthly}</span>
                        <span className="text-gray-400 text-xs font-bold ml-2">/mo</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 font-medium">Or KSh {plan.yearly} / year</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                      <FeatureItem text={plan.storage} />
                      <FeatureItem text={plan.websites} />
                      <FeatureItem text={`${plan.emails} Email accounts`} />
                      <FeatureItem text={`${plan.backups} Backups`} />
                      <FeatureItem text="Free SSL certificate" />
                      <FeatureItem text="Website builder" />
                    </ul>
                  </div>
                  <Link href="/support" className={`block text-center py-3 rounded-full font-bold text-sm transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-black text-white dark:bg-white dark:text-black hover:opacity-80'}`}>
                    Choose plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-100 dark:border-gray-900">
             <AddOn icon={<Globe className="w-4 h-4" />} text="Free .co.ke Domain" />
             <AddOn icon={<Database className="w-4 h-4" />} text="DirectAdmin panel" />
             <AddOn icon={<ShieldCheck className="w-4 h-4" />} text="Malware protection" />
             <AddOn icon={<Headphones className="w-4 h-4" />} text="24/7 Expert support" />
          </div>
        </div>
      </section>

      {/* --- Internet Services (Home Fiber) --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="/fiber-internet.jpg" className="rounded-2xl shadow-2xl opacity-100" alt="Fiber optic" />
            </div>
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-6 uppercase">Wave internet</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Home connectivity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed mb-10">
                Blazing speeds for families and remote work. All home plans include a free router and professional installation.
              </p>
              
              <div className="space-y-4">
                <InternetRow name="Home basic" speed="20 Mbps" price="3,500" users="1–3" />
                <InternetRow name="Home standard" speed="80 Mbps" price="5,500" users="3–6" isPopular />
                <InternetRow name="Home premium" speed="200 Mbps" price="8,500" users="6–10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Business and Enterprise Internet --- */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight mb-20">Business grade fiber</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BusinessInternet pkg="Business starter" speed="30–50 Mbps" price="7,500" desc="Ideal for small offices" />
            <BusinessInternet pkg="Business standard" speed="50–150 Mbps" price="12,000" desc="Most recommended" />
            <BusinessInternet pkg="Business premium" speed="150–300 Mbps" price="20,000" desc="High-speed connection" />
            <BusinessInternet pkg="Enterprise" speed="Dedicated" price="25,000+" desc="Custom SLA guaranteed" />
          </div>

          <div className="mt-20 p-12 bg-gray-50 dark:bg-[#0A0A0A] rounded-3xl border border-gray-100 dark:border-gray-900 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-xl font-bold mb-4">Wave hotspot access</h4>
              <p className="text-gray-500 font-medium leading-relaxed">Pay-as-you-go Wi-Fi for cafes, malls, and events across East Africa. High-speed access via mobile login.</p>
            </div>
            <div className="flex gap-4">
              <div className="p-5 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-center rounded-2xl w-28 shadow-sm">
                <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">1 Hour</p>
                <p className="font-bold text-lg">KSh 10</p>
              </div>
              <div className="p-5 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-center rounded-2xl w-28 shadow-sm">
                <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">24 Hours</p>
                <p className="font-bold text-lg">KSh 20</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SSL and Security --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Upgrade security</h2>
            <p className="text-gray-500 font-medium">Industry-standard SSL certificates for your business trust.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SSLCard type="Standard SSL (DV)" price="1,500" desc="Basic security for personal and small websites." />
            <SSLCard type="Business SSL (OV)" price="4,500" desc="Validated business identity for improved trust." />
            <SSLCard type="Premium SSL (EV)" price="9,000" desc="Highest level of trust for eCommerce stores." />
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-white dark:bg-black text-center px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Why choose wave connectivity?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <div className="flex flex-col items-center gap-3"><Zap className="text-blue-600 w-6 h-6" /> 99.9% Uptime</div>
            <div className="flex flex-col items-center gap-3"><Lock className="text-blue-600 w-6 h-6" /> Secure centers</div>
            <div className="flex flex-col items-center gap-3"><Headphones className="text-blue-600 w-6 h-6" /> 24/7 Support</div>
          </div>
          <Link href="/support" className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all text-sm group">
            Get started now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}

// --- Helper Components ---

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
      <Check className="w-4 h-4 text-emerald-500 shrink-0" /> {text}
    </li>
  );
}

function AddOn({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-blue-600">{icon}</div>
      <span className="text-[11px] font-bold text-gray-500">{text}</span>
    </div>
  );
}

function InternetRow({ name, speed, price, users, isPopular = false }: any) {
  return (
    <div className={`p-6 border rounded-2xl flex items-center justify-between transition-all ${isPopular ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/10' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-black'}`}>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{speed} • Up to {users} users</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-bold text-blue-600">KSh {price}</p>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Per month</p>
      </div>
    </div>
  );
}

function BusinessInternet({ pkg, speed, price, desc }: any) {
  return (
    <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-3xl bg-white dark:bg-[#0A0A0A] hover:border-blue-600 transition-all flex flex-col justify-between">
      <div>
        <h4 className="font-bold text-lg mb-2">{pkg}</h4>
        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6">{speed}</p>
        <p className="text-sm text-gray-500 font-medium mb-10 leading-relaxed">{desc}</p>
      </div>
      <div>
        <div className="text-2xl font-bold mb-1">KSh {price}</div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">Per month</p>
        <Link href="/support" className="flex items-center text-xs font-bold text-blue-600 group">
          Contact <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

function SSLCard({ type, price, desc }: any) {
  return (
    <div className="p-10 border border-gray-100 dark:border-gray-800 rounded-3xl bg-white dark:bg-[#0A0A0A] hover:border-blue-600 transition-all text-center">
      <Lock className="w-8 h-8 text-blue-600 mx-auto mb-6" />
      <h4 className="font-bold mb-2">{type}</h4>
      <p className="text-xs text-gray-400 font-medium mb-6 leading-relaxed">{desc}</p>
      <div className="text-xl font-bold mb-1">KSh {price}</div>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Per year</p>
    </div>
  );
}