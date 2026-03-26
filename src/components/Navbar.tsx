"use client";

import Link from "next/link";
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md dark:bg-black/90 border-gray-100 dark:border-gray-900 transition-colors">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo - Title Case, Bold */}
        <Link href="/" className="text-lg font-bold tracking-tight text-blue-600 dark:text-blue-500 flex items-center gap-1">
          Inara <span className="text-black dark:text-white">Crest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>

          {/* Solutions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-[13px] font-medium text-gray-500 hover:text-blue-600 dark:hover:text-white transition-colors focus:outline-none"
            >
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-4 w-72 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-gray-900 shadow-xl z-50 rounded-xl overflow-hidden">
                <div className="p-2">
                  {solutionsLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-[12px] font-medium text-gray-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all rounded-lg"
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

        {/* Right Side - Icons & Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Icons - Search and Cart removed */}
          <div className="hidden sm:flex items-center gap-1">
            <IconButton href="/login" icon={<User className="w-4 h-4" />} label="Login" />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-500"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* CTA Button */}
          <Link href="/support" className="hidden md:block px-5 py-2 bg-blue-600 text-white text-[12px] font-semibold rounded-full hover:bg-blue-700 transition-all shadow-sm">
            Get a quote
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900 p-6 flex flex-col space-y-5 shadow-2xl">
          <Link href="/" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <div className="space-y-3">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Solutions</p>
            <div className="grid gap-3 pl-2">
              {solutionsLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/why-us" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Why us</Link>
          <Link href="/support" className="text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
          <hr className="dark:border-gray-800" />
          <div className="flex justify-center items-center px-2">
            <Link href="/login" className="text-gray-500" onClick={() => setIsMobileMenuOpen(false)}><User className="w-5 h-5" /></Link>
          </div>
        </div>
      )}
    </header>
  );
}

// --- Helper Components ---

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[13px] font-medium text-gray-500 hover:text-blue-600 dark:hover:text-white transition-colors">
      {children}
    </Link>
  );
}

function IconButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="p-2 rounded-full text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}