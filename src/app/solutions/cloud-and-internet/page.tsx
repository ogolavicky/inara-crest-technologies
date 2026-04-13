"use client";

import Link from "next/link";
import { 
  ShieldCheck, Zap, Globe, Server, Wifi, Check, 
  ArrowRight, Lock, Database, Headphones, Circle 
} from "lucide-react";

export default function CloudInternetPage() {
  const hostingPlans = [
    { name: "Starter", monthly: "350", yearly: "3,500", storage: "10 GB SSD", websites: "1 Website", emails: "5–10", backups: "Weekly", popular: false, note: "Ideal for personal sites" },
    { name: "Business", monthly: "750", yearly: "7,500", storage: "30–50 GB SSD", websites: "3–5 Websites", emails: "25–50", backups: "Daily", popular: true, note: "Recommended for small businesses" },
    { name: "Pro", monthly: "1,400", yearly: "14,000", storage: "100 GB SSD", websites: "Unlimited", emails: "Unlimited", backups: "Daily", popular: false, note: "Professional and developers" },
    { name: "Enterprise", monthly: "2,500", yearly: "25,000", storage: "200+ GB SSD", websites: "Unlimited", emails: "Unlimited", backups: "Daily and on-demand", popular: false, note: "Corporate high-performance" },
  ];

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      {/* --- Hero Section --- */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 z-0">
          <img src="/cloud-solutions.jpg" className="w-full h-full object-cover opacity-100" alt="Cloud infrastructure" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent dark:from-black/95 dark:via-black/40 dark:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-8">
          {/* Label: Ocean Blue (#0C6898) */}
          <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Connectivity and cloud</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Internet connection</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            High-speed Internet connection and reliable digital infrastructure powering businesses across East Africa.
          </p>
        </div>
      </section>

      {/* --- Web Hosting Plans --- */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Web hosting plans</h2>
            {/* Description: Neutral Gray (#949494) */}
            <p className="text-[#949494] text-lg font-medium">Choose the right infrastructure for your digital assets.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingPlans.map((plan) => (
              <Link 
                key={plan.name}
                href={{ 
                  pathname: '/support', 
                  query: { 
                    plan: `${plan.name} Web Hosting`,
                    details: `${plan.storage}, ${plan.websites}, ${plan.emails} Emails, ${plan.backups} Backups at KSh ${plan.monthly}/mo`
                  } 
                }} 
                /* Border/Background for Popular: Ocean Blue and Cyan tint */
                className={`group p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between ${
                  plan.popular ? 'border-[#0C6898] bg-[#00D2FF]/5 dark:bg-[#00D2FF]/10 shadow-lg' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] hover:border-[#00D2FF]'
                }`}
              >
                <div>
                  {plan.popular && <span className="text-[10px] font-bold text-[#0C6898] tracking-widest uppercase block mb-4">Most popular</span>}
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    {/* Hover icon color: Vibrant Cyan (#00D2FF) */}
                    <Circle className="w-5 h-5 text-gray-300 group-hover:text-[#00D2FF] transition-colors" />
                  </div>
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
                {/* Button: Ocean Blue (#0C6898) or group-hover to Ocean Blue */}
                <div className={`w-full text-center py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.popular ? 'bg-[#0C6898] text-white' : 'bg-black text-white dark:bg-white dark:text-black group-hover:bg-[#0C6898] group-hover:text-white'
                }`}>
                  Select {plan.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- Home Internet --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden rounded-2xl">
              <img src="/fiber-internet.jpg" className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-110" alt="Internet connection" />
            </div>
            <div>
              <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-6 uppercase">Internet connectivity</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Home connectivity</h3>
              <div className="space-y-4">
                <InternetRow name="Home basic" speed="20 Mbps" price="3,500" users="1–3" />
                <InternetRow name="Home standard" speed="80 Mbps" price="5,500" users="3–6" isPopular />
                <InternetRow name="Home premium" speed="200 Mbps" price="8,500" users="6–10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Business Fiber --- */}
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
              <h4 className="text-xl font-bold mb-4">Hotspot access</h4>
              <p className="text-[#949494] font-medium leading-relaxed">Pay-as-you-go Wi-Fi for cafes, malls, and events across East Africa. High-speed access via mobile login.</p>
            </div>
            <div className="flex gap-4">
              {/* Hotspot buttons hover: Vibrant Cyan border (#00D2FF) */}
              <Link href={{ pathname: '/support', query: { plan: 'Hotspot 1 Hour' } }} className="p-5 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-center rounded-2xl w-28 shadow-sm hover:border-[#00D2FF] transition-all">
                <p className="text-[10px] text-[#0C6898] font-bold uppercase mb-1">1 Hour</p>
                <p className="font-bold text-lg">KSh 10</p>
              </Link>
              <Link href={{ pathname: '/support', query: { plan: 'Hotspot 24 Hours' } }} className="p-5 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-center rounded-2xl w-28 shadow-sm hover:border-[#00D2FF] transition-all">
                <p className="text-[10px] text-[#0C6898] font-bold uppercase mb-1">24 Hours</p>
                <p className="font-bold text-lg">KSh 20</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SSL Section --- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Upgrade security</h2>
            <p className="text-[#949494] font-medium">Industry-standard SSL certificates for your business trust.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SSLCard type="Standard SSL (DV)" price="1,500" desc="Basic security for personal and small websites." />
            <SSLCard type="Business SSL (OV)" price="4,500" desc="Validated business identity for improved trust." />
            <SSLCard type="Premium SSL (EV)" price="9,000" desc="Highest level of trust for eCommerce stores." />
          </div>
        </div>
      </section>
    </main>
  );
}

// --- Helper Components ---

function FeatureItem({ text }: { text: string }) {
  return (
    /* Check icon: Vibrant Cyan (#00D2FF) */
    <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
      <Check className="w-4 h-4 text-[#00D2FF] shrink-0" /> {text}
    </li>
  );
}

function InternetRow({ name, speed, price, users, isPopular = false }: any) {
  return (
    <Link 
      href={{ 
        pathname: '/support', 
        query: { plan: name, details: `${speed} for ${users} users at KSh ${price}/mo` } 
      }}
      /* Popular state: Ocean Blue (#0C6898) and Cyan tint */
      className={`group p-6 border rounded-2xl flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:translate-x-2 ${
        isPopular ? 'border-[#0C6898] bg-[#00D2FF]/5 dark:bg-[#00D2FF]/10' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-black hover:border-[#0C6898]'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isPopular ? 'bg-[#0C6898] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-[#0C6898] group-hover:text-white'}`}>
          <Wifi className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-[10px] text-[#949494] font-bold uppercase tracking-widest">{speed} • Up to {users} users</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-bold text-[#0C6898]">KSh {price}</p>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Select Plan →</p>
      </div>
    </Link>
  );
}

function BusinessInternet({ pkg, speed, price, desc }: any) {
  return (
    <Link 
      href={{ pathname: '/support', query: { plan: pkg, details: `${speed}, ${desc} at KSh ${price}/mo` } }}
      /* Hover: Ocean Blue (#0C6898) border */
      className="group p-8 border border-gray-100 dark:border-gray-800 rounded-3xl bg-white dark:bg-[#0A0A0A] hover:border-[#0C6898] hover:shadow-xl transition-all flex flex-col justify-between"
    >
      <div>
        <h4 className="font-bold text-lg mb-2 group-hover:text-[#0C6898] transition-colors">{pkg}</h4>
        {/* Speed label: Vibrant Cyan (#00D2FF) */}
        <p className="text-[10px] font-bold text-[#00D2FF] uppercase tracking-widest mb-6">{speed}</p>
        <p className="text-sm text-[#949494] font-medium mb-10 leading-relaxed">{desc}</p>
      </div>
      <div>
        <div className="text-2xl font-bold mb-1">KSh {price}</div>
        {/* Select link: Ocean Blue (#0C6898) */}
        <div className="flex items-center text-xs font-bold text-[#0C6898] mt-4">Select <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" /></div>
      </div>
    </Link>
  );
}

function SSLCard({ type, price, desc }: any) {
  return (
    <Link 
      href={{ pathname: '/support', query: { plan: type, details: `${desc} at KSh ${price}/yr` } }}
      className="group p-10 border border-gray-100 dark:border-gray-800 rounded-3xl bg-white dark:bg-[#0A0A0A] hover:border-[#0C6898] hover:shadow-xl transition-all text-center flex flex-col items-center"
    >
      {/* Icon bg: Vibrant Cyan tint (#00D2FF) */}
      <div className="w-16 h-16 bg-[#00D2FF]/10 dark:bg-[#00D2FF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Lock className="w-8 h-8 text-[#0C6898]" />
      </div>
      <h4 className="font-bold mb-2">{type}</h4>
      <p className="text-xs text-[#949494] font-medium mb-6 leading-relaxed">{desc}</p>
      <div className="mt-auto">
        <div className="text-xl font-bold text-[#0C6898] mb-1">KSh {price}</div>
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
      </div>
    </Link>
  );
}