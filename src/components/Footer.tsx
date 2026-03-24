import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="text-white text-2xl font-bold mb-4">Inara Crest</div>
            <p className="text-sm leading-relaxed">
              A 100% Kenyan-owned technology and infrastructure solutions company delivering reliable, scalable, and integrated systems.
            </p>
            <div className="mt-6 text-xs">
              <p>P.O. Box 103876 – 00101, Nairobi, Kenya</p>
              <p>Darosa Plaza, First Floor, Karen Road</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <Link href="/" className="block hover:text-white transition">Home</Link>
              <Link href="/solutions" className="block hover:text-white transition">Our Solutions</Link>
              <Link href="/hosting" className="block hover:text-white transition">Web Hosting</Link>
              <Link href="/internet" className="block hover:text-white transition">Internet Services</Link>
              <Link href="/why-us" className="block hover:text-white transition">Why Inara Crest</Link>
              <Link href="/support" className="block hover:text-white transition">Support</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Our Services</h3>
            <div className="space-y-3 text-sm">
              <p>Software Development</p>
              <p>IT Infrastructure &amp; Networking</p>
              <p>Security &amp; Surveillance</p>
              <p>Power Backup &amp; Energy</p>
              <p>HVAC &amp; Smart Buildings</p>
              <p>Managed IT Services</p>
            </div>
          </div>

          {/* Contact &amp; Legal */}
          <div>
            <h3 className="text-white font-semibold mb-5">Get In Touch</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Phone</p>
                <a href="tel:+254798856450" className="hover:text-white">+254 798 856 450</a><br />
                <a href="tel:+25472096680" className="hover:text-white">+254 720 966 680</a><br />
                <a href="tel:+254741177665" className="hover:text-white">+254 741 177 665</a>
              </div>

              <div>
                <p className="font-medium text-white">Email</p>
                <a href="mailto:info@inaracresttechnologies.com" className="hover:text-white">
                  info@inaracresttechnologies.com
                </a>
              </div>

              <div>
                <p className="font-medium text-white">Working Hours</p>
                <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">●</span>
                99.9% Uptime Guarantee
              </div>
              <div>24/7 Expert Support</div>
              <div>100% Kenyan Owned &amp; Operated</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Inara Crest Technologies Limited. All Rights Reserved.</p>
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>

          <div className="text-center md:text-right">
            Serving Kenya from Nairobi &amp; Kisumu
          </div>
        </div>
      </div>
    </footer>
  );
}