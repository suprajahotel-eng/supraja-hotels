import type { Metadata } from "next";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { MapPin, Star, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { hotels } from "@/data/hotels";
import AmenitiesSection from "@/components/AmenitiesSection";

export const metadata: Metadata = {
  title: "Hotels in Hyderabad | Supraja Hotels Official Website",
  description:
    "Hotels in Hyderabad by Supraja Hotels offer comfortable rooms, direct booking support and convenient access to Hitech City, Madhapur, Chandanagar, BHEL and Miyapur.",
  keywords: [
    "Hotels in Hyderabad",
    "Hotel booking Hyderabad",
    "Direct hotel booking Hyderabad",
    "Hotels near Hitech City",
    "Hotels in Madhapur",
    "Hotels in Chandanagar",
    "Hotels near BHEL",
    "Hotels near Miyapur",
    "Budget hotels Hyderabad",
    "Supraja Hotels",
  ],
  openGraph: {
    title: "Hotels in Hyderabad | Supraja Hotels",
    description:
      "Book comfortable stays at Supraja Hotels across Hitech City, Madhapur, Chandanagar and nearby Hyderabad locations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotels in Hyderabad by Supraja Hotels",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotels in Hyderabad | Supraja Hotels",
    description:
      "Comfortable rooms, prime locations and direct booking support across Hyderabad.",
    images: ["/og-image.jpg"],
  },
};

const hotelDescriptions: Record<string, string> = {
  "supraja-cyber-view":
    "A comfortable hotel near Hitech City, Madhapur, Kondapur and Gachibowli for business and city travelers.",
  "supraja-residency":
    "A trusted hotel in Chandanagar near Gangaram, BHEL, Serilingampally, Nallagandla and Miyapur.",
  "supraja-lodge":
    "A budget-friendly hotel in Chandanagar with affordable rooms near Gangaram, BHEL, Miyapur and nearby locations.",
};

const features = [
  "Clean Rooms",
  "Prime Hyderabad Locations",
  "Direct Booking Support",
  "Free WiFi",
  "Parking Support",
  "Family and Business Friendly",
];

const locationTargets = [
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
];

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Supraja Hotels",
    url: "https://suprajahotels.com",
    description:
      "Hotels in Hyderabad with direct booking support across Hitech City, Madhapur, Chandanagar, BHEL and Miyapur.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />

      <section className="bg-white">
        <div className="grid md:grid-cols-[45%_55%]">
          <div className="flex min-h-[620px] items-center bg-slate-950 px-6 py-16 text-white md:px-16">
            <div>
              <p className="mb-5 text-sm font-semibold tracking-wide text-amber-300">
                Supraja Hotels Hyderabad
              </p>

              <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                Hotels in Hyderabad for Comfortable Stays
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                <strong>Hotels in Hyderabad</strong> by Supraja Hotels offer
                clean rooms, practical amenities and direct booking support near{" "}
                <strong>Hitech City</strong>, <strong>Madhapur</strong>,{" "}
                <strong>Chandanagar</strong>, <strong>BHEL</strong> and{" "}
                <strong>Miyapur</strong>.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hotels"
                  className="rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Explore Hotels
                </Link>

                <a
                  href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20know%20room%20availability%20at%20Supraja%20Hotels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={18} />
                  WhatsApp Booking
                </a>

                <a
                  href="tel:+919550776161"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden bg-slate-100 md:h-[620px]">
            <SmartImage
              src="/images/homepage/hero.webp"
              alt="Hotels in Hyderabad by Supraja Hotels"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-600">
              Our Hotels
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
              Choose Supraja Hotels in Hyderabad
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Supraja Hotels brings together three convenient properties for
              guests searching for <strong>hotel booking Hyderabad</strong>,{" "}
              <strong>hotels near Hitech City</strong>,{" "}
              <strong>hotels in Madhapur</strong>,{" "}
              <strong>hotels in Chandanagar</strong> and{" "}
              <strong>budget hotels Hyderabad</strong>. Each hotel offers
              practical comfort, direct booking support and easy access to key
              Hyderabad locations.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {hotels.map((hotel) => (
              <Link
                key={hotel.slug}
                href={`/hotels/${hotel.slug}`}
                className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[320px_1fr_220px]"
              >
                <div className="relative h-64 bg-slate-100 lg:h-full">
                  <SmartImage
  src={hotel.images.hero}
  alt={hotel.name}
  width={700}
  height={500}
  className="h-full w-full object-cover"
/>
                </div>

                <div className="p-7">
                  <p className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} />
                    {hotel.location}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    {hotel.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                      4.5
                    </span>

                    <div className="flex text-green-600">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Star key={item} size={14} fill="currentColor" />
                      ))}
                    </div>

                    <span className="text-sm text-slate-500">Guest rated</span>
                  </div>

                  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                    {hotelDescriptions[hotel.slug]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {hotel.seo.targetLocations.slice(0, 4).map((location) => (
                      <span
                        key={location}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center border-t border-slate-200 p-7 lg:border-l lg:border-t-0">
                  <div className="text-center">
                    <p className="text-xs text-slate-500">Call</p>
                    <p className="mt-1 font-semibold text-slate-950">
                      {hotel.phone}
                    </p>

                    <span className="mt-5 inline-block rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white">
                      View Hotel
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AmenitiesSection />

      <section className="bg-slate-50 px-4 py-20">
        <div className="container-custom grid gap-12 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
              Why Choose Hotels in Hyderabad by Supraja Hotels
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Guests choose Supraja Hotels because our properties are
              conveniently located, easy to contact and designed around
              practical comfort. Whether you need a{" "}
              <strong>hotel near Hitech City</strong>,{" "}
              <strong>hotel near Gachibowli</strong>,{" "}
              <strong>hotel near BHEL</strong> or{" "}
              <strong>hotel near Miyapur</strong>, our team helps you choose
              the right property.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                  <ShieldCheck size={24} />
                </div>

                <h3 className="text-lg font-semibold text-slate-950">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">
                Direct Hotel Booking Hyderabad with Location Guidance
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                <strong>Direct hotel booking Hyderabad</strong> helps guests
                speak with the hotel team before confirming a stay. This is
                useful when checking room availability, choosing the nearest
                property, understanding location suitability and getting
                guidance for business, family or budget stays.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>✓ Direct phone and WhatsApp booking assistance</li>
                <li>✓ Hotels near Hitech City, Madhapur, Kondapur and Gachibowli</li>
                <li>✓ Hotels in Chandanagar, Gangaram, BHEL and Miyapur</li>
                <li>✓ Comfortable rooms for business and family guests</li>
                <li>✓ Practical amenities including WiFi and parking support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-950">
                Hyderabad Locations We Serve
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Supraja Hotels serves guests looking for accommodation around
                the following Hyderabad locations:
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {locationTargets.map((location) => (
                  <span
                    key={location}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800"
                  >
                    <strong>{location}</strong>
                  </span>
                ))}
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Hotel Supraja Cyber View is suitable for guests visiting{" "}
                <strong>Hitech City</strong>, <strong>Madhapur</strong>,{" "}
                <strong>Kondapur</strong> and <strong>Gachibowli</strong>. Hotel
                Supraja Residency and Hotel Supraja Lodge are suitable for
                guests visiting <strong>Chandanagar</strong>,{" "}
                <strong>Gangaram</strong>, <strong>BHEL</strong>,{" "}
                <strong>Serilingampally</strong>, <strong>Nallagandla</strong>{" "}
                and <strong>Miyapur</strong>.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-7">
            <h3 className="text-xl font-semibold text-slate-950">
              Helpful Travel Resources
            </h3>

            <div className="mt-4 flex flex-wrap gap-5 text-sm">
              <Link href="/hotels" className="text-blue-700 hover:underline">
                Browse all Supraja Hotels
              </Link>

              <Link href="/contact" className="text-blue-700 hover:underline">
                Speak with reservations
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
            For guests searching for reliable{" "}
            <strong>Hotels in Hyderabad</strong>, Supraja Hotels offers
            comfortable rooms, practical amenities, convenient locations and
            direct booking support across Madhapur, Hitech City, Chandanagar,
            BHEL and Miyapur.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white">
        <div className="container-custom flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Book Your Stay Directly</h2>
            <p className="mt-3 text-slate-300">
              Call or WhatsApp Supraja Hotels for room availability and property
              guidance.
            </p>
          </div>

          <a
            href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}