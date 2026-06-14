import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import SmartImage from "@/components/SmartImage";
import { hotels } from "@/data/hotels";

const siteUrl = "https://suprajahotels.com";

export const metadata: Metadata = {
  title: "Hotel Booking in Hyderabad | Contact Supraja Hotels",
  description:
    "Hotel Booking in Hyderabad made easy with Supraja Hotels. Contact us for direct booking, room availability, corporate stays and group bookings.",
  keywords: [
    "Hotel Booking in Hyderabad",
    "Supraja Hotels contact",
    "direct hotel booking Hyderabad",
    "corporate hotel stays Hyderabad",
    "group hotel booking Hyderabad",
    "budget hotels in Hyderabad",
    "hotels in Hitech City Hyderabad",
    "hotels in Chandanagar Hyderabad",
    "hotel room availability Hyderabad",
    "book hotel directly Hyderabad",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Hotel Booking in Hyderabad | Contact Supraja Hotels",
    description:
      "Contact Supraja Hotels for Hotel Booking in Hyderabad, direct room availability, corporate stays and group bookings.",
    url: `${siteUrl}/contact`,
    siteName: "Supraja Hotels",
    images: [
      {
        url: `${siteUrl}/images/homepage/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Hotel Booking in Hyderabad with Supraja Hotels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Booking in Hyderabad | Contact Supraja Hotels",
    description:
      "Contact Supraja Hotels for direct hotel booking, room availability, corporate stays and group bookings in Hyderabad.",
    images: [`${siteUrl}/images/homepage/hero.webp`],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact#contactpage`,
  url: `${siteUrl}/contact`,
  name: "Hotel Booking in Hyderabad | Contact Supraja Hotels",
  description:
    "Contact Supraja Hotels for hotel booking in Hyderabad, direct room availability, corporate stays and group bookings.",
  isPartOf: {
    "@id": `${siteUrl}#website`,
  },
  about: {
    "@id": `${siteUrl}#organization`,
  },
  mainEntity: hotels.map((hotel) => ({
    "@type": "Hotel",
    name: hotel.name,
    telephone: `+91-${hotel.phone}`,
    email: hotel.email,
    url: `${siteUrl}/hotels/${hotel.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address,
      addressLocality: hotel.city,
      addressRegion: hotel.state,
      postalCode: hotel.postalCode,
      addressCountry: "IN",
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

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
                Hotel Booking in Hyderabad with Supraja Hotels
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                <strong>Hotel Booking in Hyderabad</strong> is simple with
                Supraja Hotels. Contact us directly for room availability,
                direct booking support, corporate hotel stays, group bookings
                and comfortable rooms in <strong>Hitech City</strong>,{" "}
                <strong>Madhapur</strong> and <strong>Chandanagar</strong>.
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

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
                <Link href="/hotels" className="text-blue-700 hover:underline">
                  View our hotels
                </Link>
                <Link href="/offers" className="text-blue-700 hover:underline">
                  Check current offers
                </Link>
                <Link href="/gallery" className="text-blue-700 hover:underline">
                  View hotel gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Contact for Hotel Booking in Hyderabad
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Choose your preferred Supraja Hotel and contact us directly for
              room booking, stay enquiries, business travel stays and group room
              requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {hotels.map((hotel) => (
              <div
                key={hotel.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56">
                  <SmartImage
                    src={hotel.images.hero}
                    alt={`Hotel Booking in Hyderabad at ${hotel.name}`}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {hotel.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Direct hotel booking support for clean rooms, convenient
                    access and comfortable stays near {hotel.location}.
                  </p>

                  <p className="mt-4 flex items-start gap-2 text-slate-600">
                    <MapPin size={18} className="mt-1 text-amber-700" />
                    <span>{hotel.address}</span>
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
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Direct Hotel Booking Support in Hyderabad
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Supraja Hotels helps guests looking for{" "}
                  <strong>direct hotel booking Hyderabad</strong>, corporate
                  accommodation, family stays, staff rooms and group bookings.
                  Our hotels are located in practical Hyderabad locations with
                  easy access to business areas, hospitals, transport points and
                  local facilities.
                </p>

                <h3 className="mt-8 text-2xl font-bold text-slate-950">
                  Hotel Booking in Hyderabad for Business and Family Stays
                </h3>

                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>Direct room booking assistance without confusion</li>
                  <li>Corporate hotel stay support for business guests</li>
                  <li>Group room booking support for families and teams</li>
                  <li>Hotels in Hitech City, Madhapur and Chandanagar</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-amber-200 bg-white p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-950">
                  Useful Booking Links
                </h3>

                <div className="mt-6 grid gap-4">
                  <Link
                    href="/hotels"
                    className="rounded-2xl border border-slate-200 p-5 font-semibold text-slate-800 hover:border-amber-300 hover:bg-amber-50"
                  >
                    Explore Supraja Hotels
                  </Link>

                  <Link
                    href="/offers"
                    className="rounded-2xl border border-slate-200 p-5 font-semibold text-slate-800 hover:border-amber-300 hover:bg-amber-50"
                  >
                    View Stay Offers
                  </Link>

                  <Link
                    href="/gallery"
                    className="rounded-2xl border border-slate-200 p-5 font-semibold text-slate-800 hover:border-amber-300 hover:bg-amber-50"
                  >
                    See Hotel Photos
                  </Link>

                  <a
                    href="https://www.telanganatourism.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-slate-200 p-5 font-semibold text-slate-800 hover:border-amber-300 hover:bg-amber-50"
                  >
                    Telangana Tourism
                  </a>

                  <a
                    href="https://tourism.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-slate-200 p-5 font-semibold text-slate-800 hover:border-amber-300 hover:bg-amber-50"
                  >
                    India Tourism
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom px-4 py-16 lg:py-24">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Help Choosing the Right Hotel?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              For <strong>Hotel Booking in Hyderabad</strong>, contact Supraja
              Hotels directly and our team will guide you based on your location
              preference, stay duration and room requirement.
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
        </section>
      </main>
    </>
  );
}