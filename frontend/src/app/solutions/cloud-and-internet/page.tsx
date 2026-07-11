"use client";

import React, { useState } from "react";
import { 
  Wifi, Check, Search, Circle, ArrowRight, Loader2, 
  ChevronDown, Send, Globe, ShoppingCart, Landmark, Lock
} from "lucide-react";

export default function CloudInternetPage() {
  const [step, setStep] = useState(1); 
  const [serviceType, setServiceType] = useState<"hosting" | "internet" | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [domainName, setDomainName] = useState("");
  const [tld, setTld] = useState(".com");
  const [selectedDomainPrice, setSelectedDomainPrice] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hostingPlans = [
    { name: "Starter", monthly: 350, yearly: 3500, storage: "20 GB SSD", websites: "2 Websites", emails: "5–10", backups: "Weekly", popular: false, note: "Ideal for personal sites" },
    { name: "Business", monthly: 750, yearly: 7500, storage: "30–50 GB SSD", websites: "3–5 Websites", emails: "25–50", backups: "Daily", popular: true, note: "Recommended for small businesses" },
    { name: "Pro", monthly: 1400, yearly: 14000, storage: "100 GB SSD", websites: "Unlimited", emails: "Unlimited", backups: "Daily", popular: false, note: "Professional and developers" },
    { name: "Enterprise", monthly: 2500, yearly: 25000, storage: "200+ GB SSD", websites: "Unlimited", emails: "Unlimited", backups: "Daily and on-demand", popular: false, note: "Corporate high-performance" },
  ];

  const handleSelectHosting = (plan: any) => {
    setServiceType("hosting");
    setSelectedPlan(plan);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectInternet = (plan: any) => {
    setServiceType("internet");
    setSelectedPlan(plan);
    setSelectedDomainPrice(0);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDomainSearch = () => {
    if (!domainName) return;
    setIsChecking(true);
    setTimeout(() => {
      setSearchResults([
        { domain: `${domainName}${tld}`, price: 2120, available: true, primary: true },
        { domain: `${domainName}.co.ke`, price: 1100, available: true, promo: "HOT" },
        { domain: `${domainName}.net`, price: 2500, available: true },
        { domain: `${domainName}.org`, price: 2000, available: true },
        { domain: `${domainName}.ac.ke`, price: 1500, available: true },
      ]);
      setIsChecking(false);
    }, 1000);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call to send email to info@inaracresttechnologies.com and support@inaracresttechnologies.com
    try {
      // In production, you would use: await fetch('/api/send-order', { method: 'POST', body: JSON.stringify(formData) })
      console.log("Notifying: info@inaracresttechnologies.com, support@inaracresttechnologies.com");
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsCompleted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  const calculateTotal = () => {
    const planPrice = billingCycle === "monthly" ? (selectedPlan?.monthly || 0) : (selectedPlan?.yearly || 0);
    return planPrice + selectedDomainPrice;
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-8 text-center">
        <div className="max-w-md">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank you for choosing Inara Crest Technologies!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            {serviceType === "internet" 
              ? "A confirmation email has been sent to you. We will contact you shortly to schedule your installation."
              : "An email has been sent with your order details. We are currently setting you up and getting your digital assets ready."}
          </p>
          <button onClick={() => window.location.reload()} className="text-[#0C6898] font-bold">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      
      {/* --- STEP 1: LANDING --- */}
      {step === 1 && (
        <>
          <section className="relative h-[70vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/cloud-solutions.jpg" className="w-full h-full object-cover" alt="Cloud" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent dark:from-black dark:via-black/40"></div>
            </div>
            <div className="relative z-10 max-w-4xl px-8">
              <h2 className="text-[#0C6898] font-bold tracking-widest text-sm mb-4 uppercase">Connectivity and cloud</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Internet connection</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium max-w-xl leading-relaxed">High-speed Internet connection and reliable digital infrastructure powering businesses across East Africa.</p>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Web hosting plans</h2>
                  <p className="text-[#949494]">Choose the right infrastructure for your digital assets.</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-900 p-1.5 rounded-2xl">
                  <button onClick={() => setBillingCycle("monthly")} className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${billingCycle === "monthly" ? 'bg-white dark:bg-black shadow-sm' : 'text-gray-500'}`}>Monthly</button>
                  <button onClick={() => setBillingCycle("yearly")} className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${billingCycle === "yearly" ? 'bg-white dark:bg-black shadow-sm' : 'text-gray-500'}`}>Yearly</button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hostingPlans.map((plan) => (
                  <div key={plan.name} className={`p-8 rounded-3xl border transition-all ${plan.popular ? 'border-[#0C6898] bg-[#00D2FF]/5' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0A0A0A]'}`}>
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-[10px] text-gray-400 font-bold mb-6 uppercase tracking-wider">{plan.note}</p>
                    <div className="mb-8">
                      <span className="text-sm font-bold">KSh</span>
                      <span className="text-4xl font-black">{billingCycle === "monthly" ? plan.monthly : plan.yearly}</span>
                      <span className="text-gray-400 text-xs ml-2">/{billingCycle === "monthly" ? 'mo' : 'yr'}</span>
                    </div>
                    <ul className="space-y-4 mb-10">
                      <FeatureItem text={plan.storage} />
                      <FeatureItem text={plan.websites} />
                      <FeatureItem text={`${plan.emails} Email accounts`} />
                      <FeatureItem text="Security (SSL/TLS)" />
                    </ul>
                    <button onClick={() => handleSelectHosting(plan)} className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold hover:bg-[#0C6898] transition-all">Select {plan.name}</button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-32 bg-gray-50 dark:bg-[#050505] border-y border-gray-100 dark:border-gray-900">
            <div className="container mx-auto px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                <div className="relative group overflow-hidden rounded-[2.5rem] min-h-[550px]">
                  <img src="/fiber-internet.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Internet" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-10 left-10"><p className="text-white/70 font-bold text-xs uppercase tracking-widest mb-3">Fiber Optics</p><h4 className="text-white text-4xl font-bold">Ultra-Reliable</h4></div>
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div className="mb-8"><h2 className="text-[#0C6898] font-bold text-xs uppercase mb-4 tracking-widest">Internet connectivity</h2><h3 className="text-4xl font-bold tracking-tight">Home connectivity</h3></div>
                  <div className="flex flex-col gap-4">
                    <InternetRow onClick={() => handleSelectInternet({name: "Home Starter", monthly: 1500, yearly: 15000})} name="Starter" speed="5 Mbps" price="1,500" />
                    <InternetRow onClick={() => handleSelectInternet({name: "Home Standard", monthly: 2000, yearly: 20000})} name="Standard" speed="8 Mbps" price="2,000" />
                    <InternetRow onClick={() => handleSelectInternet({name: "Home Plus", monthly: 2500, yearly: 25000})} name="Plus" speed="10 Mbps" price="2,500" isPopular />
                    <InternetRow onClick={() => handleSelectInternet({name: "Home Premium", monthly: 3500, yearly: 35000})} name="Premium" speed="15 Mbps" price="3,500" />
                    <InternetRow onClick={() => handleSelectInternet({name: "Home Pro", monthly: 5000, yearly: 50000})} name="Pro" speed="20 Mbps" price="5,000" isWide />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 bg-white dark:bg-black">
            <div className="container mx-auto px-8">
              <div className="p-12 bg-gray-50 dark:bg-[#0A0A0A] rounded-[3rem] border border-gray-100 dark:border-gray-900 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h4 className="text-[#0C6898] font-bold text-xs mb-4 uppercase">Hotspot Packages</h4>
                  <p className="text-3xl font-bold">Instant Access Wi-Fi</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {[{t: "1hr", p: 10}, {t: "3hrs", p: 20}, {t: "24hrs", p: 50}].map(h => (
                    <div key={h.t} className="p-6 bg-white dark:bg-black border-2 border-gray-100 rounded-[2rem] w-32 shadow-sm text-center">
                      <p className="text-[10px] text-[#0C6898] font-black uppercase mb-1">{h.t}</p><p className="font-bold text-xl">KSh {h.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* --- STEP 2: DOMAIN SEARCH --- */}
      {step === 2 && (
        <section className="py-20 container mx-auto px-8 max-w-5xl min-h-screen">
          <button onClick={() => setStep(1)} className="mb-8 font-bold text-[#0C6898] flex items-center gap-2">← Back to plans</button>
          <div className="bg-white dark:bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Search for your domain</h3>
            <div className="flex flex-col md:flex-row border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden focus-within:border-[#0C6898] transition-all">
              <div className="px-6 flex items-center bg-gray-50 dark:bg-[#111] text-gray-400 font-medium">www.</div>
              <input type="text" value={domainName} onChange={(e) => setDomainName(e.target.value)} className="flex-1 px-6 py-5 bg-transparent outline-none text-lg" placeholder="yourcompanyname" />
              <div className="relative border-l border-gray-200 dark:border-gray-700">
                <select value={tld} onChange={(e) => setTld(e.target.value)} className="h-full px-6 bg-transparent outline-none font-bold appearance-none pr-12 cursor-pointer">
                  <option value=".com">.com</option><option value=".co.ke">.co.ke</option><option value=".org">.org</option><option value=".ac.ke">.ac.ke</option><option value=".net">.net</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
              </div>
              <button onClick={handleDomainSearch} className="bg-[#0C6898] text-white px-10 py-5 font-bold">{isChecking ? <Loader2 className="animate-spin" /> : "Check"}</button>
            </div>
            
            <div className="mt-12 space-y-4">
              {searchResults.map((res, i) => (
                <div key={i} className={`p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between ${res.primary ? 'border-[#0C6898] bg-[#0C6898]/5' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-[#050505]'}`}>
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <Check className="w-5 h-5 text-green-500" />
                    <div><p className="text-lg font-bold">{res.domain}</p><p className="text-[10px] text-gray-400 uppercase font-bold">KSh {res.price}/yr</p></div>
                  </div>
                  <button onClick={() => { setSelectedDomainPrice(res.price); setStep(3); }} className="bg-[#0C6898] text-white p-3 rounded-xl hover:scale-105 transition-all"><ShoppingCart className="w-5 h-5" /></button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- STEP 3: BALANCED BILLING SECTION --- */}
      {step === 3 && (
        <section className="py-20 container mx-auto px-8 max-w-6xl min-h-screen">
          <button onClick={() => setStep(serviceType === "hosting" ? 2 : 1)} className="mb-8 font-bold text-[#0C6898]">← Previous step</button>
          
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Billing Form Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white dark:bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-8 tracking-tight">Billing Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="First Name" /> 
                  <Input label="Last Name" />
                  <Input label="Email Address" /> 
                  <Input label="Phone Number" />
                  <div className="md:col-span-2"><Input label="Physical Address / City" /></div>
                  
                  {/* Account Security */}
                  <div className="md:col-span-2 pt-8 mt-4 border-t border-gray-100 dark:border-gray-900">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                      <Lock className="w-4 h-4" /> Account Security
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input label="Create Password" type="password" />
                      <Input label="Confirm Password" type="password" />
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleFinalSubmit} 
                  disabled={isSubmitting}
                  className="w-full mt-10 py-5 rounded-2xl bg-[#0C6898] text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-[#0a567e]"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Complete Order"}
                </button>
              </div>
            </div>

            {/* Order & Payment Column (Sticky & Balanced) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-10">
              <div className="bg-gray-50 dark:bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-gray-400 text-[10px] tracking-[0.2em] uppercase">Order Summary</h4>
                  {serviceType === "hosting" && (
                    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
                      <button onClick={() => setBillingCycle("monthly")} className={`px-3 py-1 text-[9px] font-black rounded uppercase ${billingCycle === 'monthly' ? 'bg-white text-black' : 'text-gray-500'}`}>Monthly</button>
                      <button onClick={() => setBillingCycle("yearly")} className={`px-3 py-1 text-[9px] font-black rounded uppercase ${billingCycle === 'yearly' ? 'bg-white text-black' : 'text-gray-500'}`}>Yearly</button>
                    </div>
                  )}
                </div>
                <div className="space-y-6 pb-8 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{selectedPlan.name} Subscription</span>
                    <span className="font-bold text-black dark:text-white">KSh {billingCycle === 'monthly' ? selectedPlan.monthly : selectedPlan.yearly}</span>
                  </div>
                  {serviceType === "hosting" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Domain ({domainName}{tld})</span>
                      <span className="font-bold text-black dark:text-white">KSh {selectedDomainPrice}</span>
                    </div>
                  )}
                </div>
                <div className="pt-8 flex justify-between items-baseline">
                  <span className="font-bold text-sm tracking-widest">TOTAL DUE</span>
                  <span className="text-3xl font-black text-[#0C6898]">KSh {calculateTotal()}</span>
                </div>
              </div>

              {/* Payment Method Details */}
              <div className="bg-[#0C6898] p-10 rounded-[2.5rem] text-white shadow-xl">
                <h4 className="font-bold mb-8 flex items-center gap-3 uppercase tracking-widest text-xs border-b border-white/10 pb-4">
                  <Landmark className="w-5 h-5" /> Payment Methods
                </h4>
                <div className="space-y-8">
                  <div>
                    <p className="text-[9px] font-black opacity-60 uppercase mb-3 tracking-[0.2em]">Bank: NCBA BANK</p>
                    <p className="text-sm font-medium leading-relaxed">
                      Name: Inara Crest Technologies Ltd<br />
                      Account: 1009779772 (KES)
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[9px] font-black opacity-60 uppercase mb-3 tracking-[0.2em]">M-PESA PAYBILL</p>
                    <p className="text-sm font-medium">
                      Paybill Number: 880100<br />
                      Account Number: 150822
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

// --- HELPERS ---

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
      <Check className="w-4 h-4 text-[#00D2FF]" /> {text}
    </li>
  );
}

function InternetRow({ name, speed, price, onClick, isPopular, isWide }: any) {
  return (
    <button 
      onClick={onClick} 
      className={`w-full p-6 border rounded-2xl flex items-center justify-between transition-all ${isPopular ? 'border-[#0C6898] bg-[#0C6898]/5' : 'border-gray-200 dark:border-gray-800 hover:border-[#0C6898]'} ${isWide ? 'md:py-8' : ''}`}
    >
      <div className="flex items-center gap-5">
        <Wifi className="w-6 h-6 text-[#0C6898]" />
        <div className="text-left">
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{speed}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-black text-[#0C6898]">KSh {price}</p>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Select →</p>
      </div>
    </button>
  );
}

function Input({ label, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{label}</label>
      <input 
        type={type} 
        className="w-full p-4 rounded-xl border border-gray-100 dark:bg-black dark:border-gray-800 outline-none focus:border-[#0C6898] transition-all font-medium" 
      />
    </div>
  );
}