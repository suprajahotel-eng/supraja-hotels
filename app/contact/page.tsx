import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { hotels } from "@/data/hotels";

export const metadata: Metadata = {
  title: "Contact Supraja Hotels | Direct Hotel Booking Hyderabad",
  description:
    "Contact Supraja Hotels for direct hotel booking in Hyderabad, room availability, phone support, WhatsApp booking and guest assistance.",
  keywords: [
    "Contact Supraja Hotels",
    "Direct Hotel Booking Hyderabad",
    "Hotel booking Hyderabad phone number",
    "Supraja Hotels contact number",
    "Hotel Supraja Cyber View contact",
    "Hotel Supraja Residency contact",
    "Hotel Supraja Lodge contact",
    "Hotels in Hyderabad contact",
    "Hotel room availability Hyderabad",
    "WhatsApp hotel booking Hyderabad",
  ],
  openGraph: {
    title: "Contact Supraja Hotels | Direct Booking Support",
    description:
      "Call or WhatsApp Supraja Hotels for room availability and direct booking support across Hyderabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Supraja Hotels for direct hotel booking in Hyderabad",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="container-custom">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Contact Supraja Hotels for Direct Hotel Booking Hyderabad
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Contact Supraja Hotels for <strong>Direct Hotel Booking Hyderabad</strong>,
            room availability, WhatsApp booking, phone support and guest
            assistance across Madhapur, Hitech City, Chandanagar, Gangaram,
            BHEL, Serilingampally, Nallagandla and Miyapur.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+919550776161"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              <Phone size={18} />
              Call Main Booking
            </a>

            <a
              href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20know%20room%20availability%20at%20Supraja%20Hotels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={18} />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Supraja Hotels Contact Numbers and Email Details
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Use the contact details below to reach the right Supraja hotel
              directly. Guests can call, email or use WhatsApp for direct
              booking support, room availability and location guidance.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {hotels.map((hotel) => (
              <div
                key={hotel.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {hotel.name}
                </h3>

                <p className="mt-4 flex items-start gap-2 text-slate-600">
                  <MapPin size={18} className="mt-1 text-blue-700" />
                  <span>{hotel.location}</span>
                </p>

                <p className="mt-4 flex items-center gap-2 text-slate-600">
                  <Phone size={18} className="text-blue-700" />
                  <a
                    href={`tel:+91${hotel.phone}`}
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    {hotel.phone}
                  </a>
                </p>

                <p className="mt-4 flex items-start gap-2 text-slate-600">
                  <Mail size={18} className="mt-1 text-blue-700" />
                  <a
                    href={`mailto:${hotel.email}`}
                    className="break-all font-semibold text-blue-700 hover:underline"
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
                  WhatsApp {hotel.name}
                </a>

                <Link
                  href={`/hotels/${hotel.slug}`}
                  className="mt-3 inline-flex w-full justify-center rounded-full border border-blue-700 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
                >
                  View Hotel Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Direct Hotel Booking Hyderabad Support
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Supraja Hotels provides <strong>direct hotel booking Hyderabad</strong>
              support for guests who want to confirm room availability before
              arrival. Direct booking helps guests choose the right property
              based on location, travel purpose and room requirement.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>✓ Call or WhatsApp for room availability</li>
              <li>✓ Contact hotel teams directly</li>
              <li>✓ Choose hotels near Hitech City, Madhapur and Gachibowli</li>
              <li>✓ Choose hotels in Chandanagar, Gangaram, BHEL and Miyapur</li>
              <li>✓ Get guidance for family, business and budget stays</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Locations We Serve
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Guests can contact Supraja Hotels for stays around Hitech City,
              Madhapur, Kondapur, Gachibowli, Chandanagar, Gangaram, BHEL,
              Serilingampally, Nallagandla, Miyapur and nearby Hyderabad
              locations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Hitech City",
                "Madhapur",
                "Kondapur",
                "Gachibowli",
                "Chandanagar",
                "Gangaram",
                "BHEL",
                "Serilingampally",
                "Nallagandla",
                "Miyapur",
              ].map((location) => (
                <span
                  key={location}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800"
                >
                  <strong>{location}</strong>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">
                How can I contact Supraja Hotels for booking?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Guests can call or WhatsApp the hotel directly using the contact
                numbers listed above for room availability and direct booking
                support.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">
                Which Supraja hotel is near Hitech City?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hotel Supraja Cyber View is suitable for guests looking for
                accommodation near Hitech City, Madhapur, Kondapur and
                Gachibowli.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">
                Which Supraja hotels are in Chandanagar?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hotel Supraja Residency and Hotel Supraja Lodge are suitable for
                guests looking for accommodation in Chandanagar, Gangaram, BHEL,
                Serilingampally, Nallagandla and Miyapur.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">
                Can I book rooms through WhatsApp?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. Each hotel has WhatsApp booking support for direct room
                availability and booking assistance.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Helpful Links
            </h3>

            <div className="mt-4 flex flex-wrap gap-5 text-sm">
              <Link href="/hotels" className="text-blue-700 hover:underline">
                Browse all Supraja Hotels
              </Link>

              <Link href="/about" className="text-blue-700 hover:underline">
                Learn about Supraja Hotels
              </Link>

              <a
                href="https://www.telanganatourism.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Telangana Tourism
              </a>

              <a
                href="https://tourism.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                India tourism guide
              </a>
            </div>
          </div>

          <p className="mt-10 leading-8 text-slate-600">
            For guests searching for <strong>Contact Supraja Hotels</strong> or
            <strong> Direct Hotel Booking Hyderabad</strong>, this page provides
            the official phone numbers, email details, WhatsApp booking links
            and location guidance for all Supraja Hotels in Hyderabad.
          </p>
        </div>
      </section>
    </>
  );
}