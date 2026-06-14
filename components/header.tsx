"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hotelsOpen, setHotelsOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setHotelsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-custom flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-800" onClick={closeMenu}>
          Supraja Hotels
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/" className="text-sm font-semibold text-slate-700 transition hover:text-amber-500">
            Home
          </Link>

          <Link href="/about" className="text-sm font-semibold text-slate-700 transition hover:text-amber-500">
            About
          </Link>

          <div className="group relative">
            <Link href="/hotels" className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-amber-500">
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
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-amber-500">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919550776161"
            className="flex items-center gap-2 rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-blue-800 md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 shadow-lg md:hidden">
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-800"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-800"
            >
              About
            </Link>

            <button
              type="button"
              onClick={() => setHotelsOpen(!hotelsOpen)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-800"
            >
              Hotels
              <ChevronDown
                size={16}
                className={`transition ${hotelsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {hotelsOpen && (
              <div className="ml-3 border-l border-slate-200 pl-3">
                <Link
                  href="/hotels"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-800"
                >
                  All Hotels
                </Link>

                {hotelLinks.map((hotel) => (
                  <Link
                    key={hotel.href}
                    href={hotel.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-800"
                  >
                    {hotel.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="tel:+919550776161"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-blue-800 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} />
              Call
            </a>

            <a
              href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}