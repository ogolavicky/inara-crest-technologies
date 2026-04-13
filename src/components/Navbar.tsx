"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { 
  User, 
  ChevronDown, 
  Sun, 
  Moon, 
  Menu, 
  X 
} from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Dark Mode Sync ---
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (initialDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // --- Close dropdown when clicking outside ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const solutionsLinks = [
    { name: "Software and digital solutions", href: "/solutions/software-and-digital-solutions" },
    { name: "Cloud and internet solutions", href: "/solutions/cloud-and-internet" },
    { name: "It infrastructure solutions", href: "/solutions/it-infrastructure-solutions" },
    { name: "Security and surveillance systems", href: "/solutions/security-and-surveillance-systems" },
    { name: "Power and smart facility solutions", href: "/solutions/power-and-smart-facility-solutions" },
    { name: "Managed services", href: "/solutions/managed-services" },
    { name: "Research, data and analytical services", href: "/solutions/research-data-and-analytical-services" },
    { name: "Office home and technology supply", href: "/solutions/office-home-and-technology-supply" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md border-gray-100 transition-colors">
      <div className="container mx-auto px-6 h-28 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Inara Crest Technologies" 
            width={400} 
            height={120} 
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        {/* NAVIGATION: Using Neutral Gray (#949494) and Ocean Blue (#0C6898) hover */}
        <nav className="hidden lg:flex items-center space-x-12">
          <NavLink href="/">Home</NavLink>

          {/* Solutions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              /* Text: Neutral Gray, Hover: Ocean Blue */
              className="flex items-center gap-1 text-[18px] font-semibold text-[#949494] hover:text-[#0C6898] transition-colors focus:outline-none"
            >
              Solutions
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-4 w-80 bg-white border border-gray-100 shadow-2xl z-50 rounded-xl overflow-hidden">
                <div className="p-3">
                  {solutionsLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      /* Hover: Cyan background tint, Ocean Blue text */
                      className="block px-4 py-3 text-[15px] font-medium text-[#949494] hover:bg-[#00D2FF]/10 hover:text-[#0C6898] transition-all rounded-lg"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink href="/why-us">Why us</NavLink>
          <NavLink href="/support">Support</NavLink>
        </nav>

        {/* RIGHT SIDE: Icons using Logo Gray */}
        <div className="flex items-center gap-4">
          
          <div className="hidden sm:flex items-center gap-2">
            <IconButton href="/login" icon={<User className="w-6 h-6" />} label="Login" />
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full text-[#949494] hover:text-[#0C6898] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#949494]"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* CTA BUTTON: Background Ocean Blue (#0C6898), Hover Deep Navy (#0B4C72) */}
          <Link href="/support" className="hidden md:block px-8 py-3.5 bg-[#0C6898] text-white text-[15px] font-bold rounded-full hover:bg-[#0B4C72] transition-all shadow-lg shadow-[#0C6898]/20">
            Get a quote
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-8 flex flex-col space-y-6 shadow-2xl">
          <Link href="/" className="text-xl font-medium text-[#0C6898]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <div className="space-y-4">
            <p className="text-[12px] font-bold text-[#949494] uppercase tracking-widest">Solutions</p>
            <div className="grid gap-4 pl-3">
              {solutionsLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-lg text-[#949494]" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/why-us" className="text-xl font-medium text-[#0C6898]" onClick={() => setIsMobileMenuOpen(false)}>Why us</Link>
          <Link href="/support" className="text-xl font-medium text-[#0C6898]" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
          <hr className="border-gray-100" />
          <div className="flex justify-center items-center">
            <Link href="/login" className="text-[#949494]" onClick={() => setIsMobileMenuOpen(false)}><User className="w-8 h-8" /></Link>
          </div>
        </div>
      )}
    </header>
  );
}

// --- HELPER COMPONENTS ---

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    /* Text: Neutral Gray, Hover: Ocean Blue */
    <Link href={href} className="text-[18px] font-semibold text-[#949494] hover:text-[#0C6898] transition-colors">
      {children}
    </Link>
  );
}

function IconButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="p-2.5 rounded-full text-[#949494] hover:text-[#0C6898] transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}