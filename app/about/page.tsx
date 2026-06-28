import type { Metadata } from "next";
import Link from "next/link";

import SmartImage from "@/components/SmartImage";

const siteUrl = "https://suprajahotels.com";

export const metadata: Metadata = {
  title: "About Supraja Hotels | Hotels in Hyderabad",
  description:
    "Supraja Hotels offers clean rooms, prime locations and direct booking support across Hitech City, Madhapur and Chandanagar.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

const promises = [
  "Clean Rooms",
  "Prime Locations",
  "Direct Booking",
  "Guest-Friendly Support",
];

const hotels = [
  {
    name: "Hotel Supraja Cyber View",
    location: "Hitech City, Madhapur",
    href: "/hotels/supraja-cyber-view",
  },
  {
    name: "Hotel Supraja Residency",
    location: "Chandanagar",
    href: "/hotels/supraja-residency",
  },
  {
    name: "Hotel Supraja Lodge",
    location: "Chandanagar",
    href: "/hotels/supraja-lodge",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.2),transparent_34%)]" />

        <div className="container-custom relative grid gap-10 lg:grid-cols-[55%_45%] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-amber-400 px-5 py-2 text-sm font-bold text-slate-950">
              About Supraja Hotels
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Trusted Hotels in Hyderabad
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Clean rooms, prime locations and direct booking support across
              Hitech City, Madhapur and Chandanagar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/hotels"
                className="rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Explore Hotels
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Book Direct
              </Link>
            </div>
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl lg:h-[480px]">
            <SmartImage
              src="/images/homepage/hero.webp"
              alt="About Supraja Hotels in Hyderabad"
              fill
              isHero
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-amber-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl">
              Built for Comfortable City Stays
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Supraja Hotels offers practical, well-maintained stays for
              business guests, families and short-stay travelers across
              Hyderabad.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our focus is simple: clean rooms, convenient access, responsive
              support and easy direct booking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.22em] text-amber-600">
              Why Supraja Hotels
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl">
              Simple. Clean. Convenient.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {promises.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.22em] text-amber-600">
              Our Hotels
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl">
              Stay Where Hyderabad Moves
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hotels.map((hotel) => (
              <Link
                key={hotel.href}
                href={hotel.href}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {hotel.name}
                </h3>

                <p className="mt-3 text-slate-600">{hotel.location}</p>

                <p className="mt-5 text-sm font-semibold text-blue-700">
                  View Hotel
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Book Direct. Stay Better.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Call or WhatsApp Supraja Hotels for room availability and quick
            booking support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919550776161"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room%20at%20Supraja%20Hotels"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}