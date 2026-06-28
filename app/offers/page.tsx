import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgePercent,
  CalendarCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Users,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import SmartImage from "@/components/SmartImage";
import { hotels } from "@/data/hotels";

const siteUrl = "https://suprajahotels.com";

export const metadata: Metadata = {
  title: "Hotel Offers in Hyderabad | Supraja Hotels",
  description:
    "Explore hotel offers in Hyderabad from Supraja Hotels for direct bookings, corporate stays, group bookings and long stay options.",
  keywords: [
    "Hotel Offers in Hyderabad",
    "hotel booking offers Hyderabad",
    "direct hotel booking Hyderabad",
    "corporate stay offers Hyderabad",
    "group hotel booking Hyderabad",
    "long stay hotels Hyderabad",
    "hotels near Hitech City offers",
    "hotels in Chandanagar offers",
    "Supraja Hotels offers",
    "budget hotel offers Hyderabad",
  ],
  alternates: {
    canonical: `${siteUrl}/offers`,
  },
  openGraph: {
    title: "Hotel Offers in Hyderabad | Supraja Hotels",
    description:
      "Direct booking offers, corporate stay support, group booking assistance and long stay options at Supraja Hotels.",
    url: `${siteUrl}/offers`,
    siteName: "Supraja Hotels",
    images: [
      {
        url: `${siteUrl}/images/homepage/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Hotel Offers in Hyderabad by Supraja Hotels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Offers in Hyderabad | Supraja Hotels",
    description:
      "Explore hotel offers in Hyderabad for direct bookings, corporate stays, group bookings and long stays.",
    images: [`${siteUrl}/images/homepage/hero.webp`],
  },
};

const offers = [
  {
    icon: BadgePercent,
    title: "Direct Booking Benefits",
    imageIndex: 0,
    description:
      "Book directly with Supraja Hotels for quick confirmation, better support and smooth stay assistance.",
    points: ["Quick confirmation", "Direct hotel support", "Easy booking help"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Stay Offers",
    imageIndex: 1,
    description:
      "Special stay support for business travelers, company staff and corporate guests visiting Hyderabad.",
    points: [
      "Business guest friendly",
      "Monthly stay support",
      "Team coordination",
    ],
  },
  {
    icon: Users,
    title: "Group Booking Support",
    imageIndex: 2,
    description:
      "Convenient assistance for family groups, staff stays, event guests and multiple room bookings.",
    points: [
      "Multiple room help",
      "Family and staff stays",
      "Direct coordination",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Long Stay Options",
    imageIndex: 0,
    description:
      "Comfortable stay options for guests who need rooms for several days or extended visits.",
    points: ["Extended stay support", "Clean rooms", "Prime location access"],
  },
];

const offersSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/offers#collectionpage`,
  url: `${siteUrl}/offers`,
  name: "Hotel Offers in Hyderabad",
  description:
    "Supraja Hotels offers direct booking benefits, corporate stay support, group booking assistance and long stay options in Hyderabad.",
  isPartOf: {
    "@id": `${siteUrl}#website`,
  },
  about: {
    "@type": "Thing",
    name: "Hotel Offers in Hyderabad",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: offers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.title,
      description: offer.description,
    })),
  },
};

export default function OffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offersSchema),
        }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50">
          <div className="container-custom grid gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                <BadgePercent className="mr-2 h-4 w-4" />
                Stay Offers at Supraja Hotels
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Hotel Offers in Hyderabad for Direct, Corporate and Group Stays
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                <strong>Hotel Offers in Hyderabad</strong> from Supraja Hotels
                help guests book comfortable rooms with direct booking support,
                corporate stay assistance, group booking help and long stay
                options across <strong>Hitech City</strong>,{" "}
                <strong>Madhapur</strong> and <strong>Chandanagar</strong>.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="tel:+919550776161"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Offers
                </Link>

                <Link
                  href="https://wa.me/919550776161?text=Hi%20Supraja%20Hotels%2C%20I%20would%20like%20to%20know%20about%20current%20hotel%20offers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-50"
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                  WhatsApp Now
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <SmartImage
                  src={hotels[0].images.hero}
                  alt="Hotel Offers in Hyderabad at Supraja Hotels"
                  width={900}
                  height={700}
                  isHero
                  className="h-[420px] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
                <p className="text-sm font-semibold text-slate-500">
                  Direct Booking Support
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  Call 9550776161
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Current Hotel Offers in Hyderabad
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Choose the right stay option for direct bookings, corporate
              guests, group stays and longer visits at Supraja Hotels in
              Hyderabad.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {offers.map((offer) => {
              const Icon = offer.icon;
              const image =
                hotels[offer.imageIndex]?.images.hero || hotels[0].images.hero;

              return (
                <article
                  key={offer.title}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64">
                    <SmartImage
                      src={image}
                      alt={`${offer.title} at Supraja Hotels Hyderabad`}
                      width={900}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber-700 shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-slate-950">
                      {offer.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {offer.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {offer.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="container-custom px-4 py-16 lg:py-24">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Offers Available Across Supraja Hotels
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Supraja Hotels provides stay support across Madhapur, Hitech
                City and Chandanagar for guests looking for direct hotel booking
                offers in Hyderabad.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {hotels.map((hotel) => (
                <Link
                  key={hotel.slug}
                  href={`/hotels/${hotel.slug}`}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <SmartImage
                      src={hotel.images.hero}
                      alt={`${hotel.name} hotel offers in Hyderabad`}
                      width={700}
                      height={500}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin size={16} />
                      {hotel.location}
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-slate-950">
                      {hotel.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Direct booking support for comfortable stays near{" "}
                      {hotel.seo.targetLocations.slice(0, 3).join(", ")}.
                    </p>

                    <p className="mt-4 text-sm font-semibold text-amber-700">
                      View hotel offers
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container-custom px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Direct Hotel Booking Offers in Hyderabad
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Direct booking is useful when guests want quick clarification on
                room availability, stay duration, location suitability and group
                stay requirements. Supraja Hotels supports direct enquiries
                through phone and WhatsApp for guests looking for{" "}
                <strong>hotel booking offers Hyderabad</strong>,{" "}
                <strong>corporate stay offers Hyderabad</strong> and{" "}
                <strong>group hotel booking Hyderabad</strong>.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our hotels are suitable for business guests, family travelers,
                short stays, long stays and guests visiting key Hyderabad
                locations such as Hitech City, Madhapur, Kondapur, Gachibowli,
                Chandanagar, Gangaram, BHEL and Miyapur.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-2xl font-bold text-slate-950">
                Useful Links for Hotel Offers
              </h3>

              <div className="mt-5 grid gap-4 text-sm">
                <Link href="/hotels" className="text-blue-700 hover:underline">
                  Explore all Supraja Hotels
                </Link>

                <Link
                  href="/gallery"
                  className="text-blue-700 hover:underline"
                >
                  View hotel gallery
                </Link>

                <Link href="/about" className="text-blue-700 hover:underline">
                  Learn about Supraja Hotels
                </Link>

                <Link
                  href="/contact"
                  className="text-blue-700 hover:underline"
                >
                  Contact booking team
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
                  India Tourism
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom px-4 py-16 lg:py-24">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Rooms for Today or Upcoming Dates?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              For <strong>Hotel Offers in Hyderabad</strong>, speak with
              Supraja Hotels directly for room availability, current stay
              benefits, corporate stays and group booking support.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/hotels"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-100"
              >
                View Hotels
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}