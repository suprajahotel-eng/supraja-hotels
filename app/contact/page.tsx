import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { hotels } from "@/data/hotels";

export const metadata: Metadata = {
  title: "Contact Supraja Hotels | Hotel Booking in Hyderabad",
  description:
    "Contact Supraja Hotels for room booking, direct stay enquiries, corporate stays, group bookings and hotel support in Hyderabad.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />

        <div className="container-custom px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <Phone className="mr-2 h-4 w-4" />
              Contact Supraja Hotels
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Contact Supraja Hotels for Direct Booking
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Speak with Supraja Hotels directly for room availability, current
              offers, corporate stays, group bookings and hotel enquiries in
              Hyderabad.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="tel:+919550776161"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 9550776161
              </Link>

              <Link
                href="https://wa.me/919550776161?text=Hi%20Supraja%20Hotels%2C%20I%20would%20like%20to%20book%20a%20room"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-50"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                WhatsApp Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Contact Our Hotels
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Choose your preferred Supraja Hotel and contact us directly for
            room booking support.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {hotels.map((hotel) => (
            <div
              key={hotel.slug}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56">
                <Image
                  src={hotel.images.hero}
                  alt={`${hotel.name} contact and booking`}
                  width={700}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {hotel.name}
                </h3>

                <p className="mt-4 flex items-start gap-2 text-slate-600">
                  <MapPin size={18} className="mt-1 text-amber-700" />
                  <span>{hotel.location}</span>
                </p>

                <p className="mt-4 flex items-center gap-2 text-slate-600">
                  <Phone size={18} className="text-amber-700" />
                  <a
                    href={`tel:+91${hotel.phone}`}
                    className="font-semibold text-amber-700 hover:underline"
                  >
                    {hotel.phone}
                  </a>
                </p>

                <p className="mt-4 flex items-start gap-2 text-slate-600">
                  <Mail size={18} className="mt-1 text-amber-700" />
                  <a
                    href={`mailto:${hotel.email}`}
                    className="break-all font-semibold text-amber-700 hover:underline"
                  >
                    {hotel.email}
                  </a>
                </p>

                <a
                  href={`https://wa.me/91${hotel.whatsapp}?text=Hi%20I%20would%20like%20to%20book%20a%20room%20at%20${encodeURIComponent(
                    hotel.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={18} />
                  WhatsApp Booking
                </a>

                <Link
                  href={`/hotels/${hotel.slug}`}
                  className="mt-3 inline-flex w-full justify-center rounded-full border border-amber-700 px-5 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-700 hover:text-white"
                >
                  View Hotel Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-custom px-4 py-16 lg:py-24">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Help Choosing the Right Hotel?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Contact Supraja Hotels directly and our team will guide you based
              on your location preference, stay duration and room requirement.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="tel:+919550776161"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>

              <Link
                href="https://wa.me/919550776161?text=Hi%20Supraja%20Hotels%2C%20please%20help%20me%20choose%20the%20right%20hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}