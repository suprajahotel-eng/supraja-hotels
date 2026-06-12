import Link from "next/link";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

const hotelLinks = [
  { label: "Hotel Supraja Cyber View", href: "/hotels/supraja-cyber-view" },
  { label: "Hotel Supraja Residency", href: "/hotels/supraja-residency" },
  { label: "Hotel Supraja Lodge", href: "/hotels/supraja-lodge" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-blue-800">
          Supraja Hotels
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-amber-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-slate-700 transition hover:text-amber-500"
          >
            About
          </Link>

          <div className="group relative">
            <Link
              href="/hotels"
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-amber-500"
            >
              Hotels <ChevronDown size={15} />
            </Link>

            <div className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {hotelLinks.map((hotel) => (
                <Link
                  key={hotel.href}
                  href={hotel.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  {hotel.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-amber-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919550776161"
            className="hidden items-center gap-2 rounded-full border border-blue-800 px-4 py-2 text-sm font-bold text-blue-800 transition hover:bg-blue-800 hover:text-white md:flex"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-amber-600"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}