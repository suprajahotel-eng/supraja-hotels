import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotels in Hyderabad | About Supraja Hotels and Hospitality",
  description:
    "Hotels in Hyderabad by Supraja Hotels offering comfortable rooms, direct booking support and convenient locations in Madhapur, Hitech City and Chandanagar.",
  keywords: [
    "Hotels in Hyderabad",
    "Hotel in Madhapur Hyderabad",
    "Hotel in Chandanagar Hyderabad",
    "Hotels near Hitech City",
    "Direct hotel booking Hyderabad",
    "Budget hotel in Chandanagar",
    "Family hotel in Hyderabad",
    "Business hotel in Hyderabad",
    "Supraja Hotels",
    "Hyderabad accommodation",
  ],
  openGraph: {
    title: "Hotels in Hyderabad | About Supraja Hotels",
    description:
      "Discover Supraja Hotels, a trusted hospitality brand offering clean rooms, direct booking support and convenient locations across Hyderabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotels in Hyderabad by Supraja Hotels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotels in Hyderabad | Supraja Hotels",
    description:
      "Comfortable rooms, trusted hospitality and direct booking support across Hyderabad.",
    images: ["/og-image.jpg"],
  },
};

const locations = [
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

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Supraja Hotels",
  url: "https://suprajahotels.com/about",
  description:
    "Supraja Hotels offers hotels in Hyderabad with comfortable rooms, direct booking support and convenient locations in Madhapur, Hitech City and Chandanagar.",
  areaServed: locations,
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <section className="bg-slate-950 px-4 py-20 text-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[55%_45%] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              About Us
            </p>

            <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
              Hotels in Hyderabad by Supraja Hotels
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              <strong>Hotels in Hyderabad</strong> by Supraja Hotels are built
              around clean rooms, convenient locations, direct hotel booking and
              trusted hospitality. Our properties serve guests near{" "}
              <strong>Hitech City</strong>, <strong>Madhapur</strong>,{" "}
              <strong>Chandanagar</strong>, <strong>BHEL</strong> and{" "}
              <strong>Miyapur</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/hotels"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Explore our hotels
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Contact booking team
              </Link>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-3xl">
            <SmartImage
  src="/images/homepage/hero.webp"
  alt="Hotels in Hyderabad by Supraja Hotels"
  fill
  isHero
  className="object-cover"
/>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Supraja Hotels for Comfortable Stays in Hyderabad
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Supraja Hotels was built with a clear purpose: to provide{" "}
              <strong>comfortable accommodation in Hyderabad</strong> with
              practical amenities, helpful service and easy access to important
              locations. Guests choose us when they need dependable stays for
              work, family visits, medical needs, short trips and city travel.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our properties support different travel needs. Hotel Supraja Cyber
              View is suitable for guests looking for a{" "}
              <strong>Hotel in Madhapur Hyderabad</strong>,{" "}
              <strong>Hotels near Hitech City</strong>, or accommodation around{" "}
              <strong>Kondapur</strong> and <strong>Gachibowli</strong>. Hotel
              Supraja Residency and Hotel Supraja Lodge are ideal for guests
              searching for a <strong>Hotel in Chandanagar Hyderabad</strong>,{" "}
              <strong>Budget hotel in Chandanagar</strong>, and stays near{" "}
              <strong>Gangaram</strong>, <strong>BHEL</strong>,{" "}
              <strong>Serilingampally</strong>, <strong>Nallagandla</strong> and{" "}
              <strong>Miyapur</strong>.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As a local hospitality brand, Supraja Hotels focuses on what
              guests need most: clean rooms, direct booking support, location
              convenience, practical amenities and responsive assistance before
              and during the stay.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our mission is to deliver reliable hospitality for guests
              searching for <strong>Direct hotel booking Hyderabad</strong>,{" "}
              <strong>Family hotel in Hyderabad</strong> and{" "}
              <strong>Business hotel in Hyderabad</strong>. We aim to keep the
              booking journey simple and the stay experience comfortable.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>✓ Clean and well-maintained rooms</li>
              <li>✓ Direct hotel booking through phone and WhatsApp</li>
              <li>✓ Hotels near Hitech City, Madhapur, Kondapur and Gachibowli</li>
              <li>✓ Hotels in Chandanagar, Gangaram, BHEL and Miyapur</li>
              <li>✓ Practical amenities for business and family guests</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Supraja Hotels Guest Promise
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We focus on honest service, clean rooms and practical
                hospitality. Our goal is to make every guest feel supported from
                enquiry to checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="container-custom">
          <h2 className="text-center text-3xl font-semibold text-slate-900">
            Why Guests Choose Supraja Hotels
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center leading-8 text-slate-600">
            Supraja Hotels is preferred by guests looking for{" "}
            <strong>Hotels in Hyderabad</strong>, easy connectivity, direct
            booking support and a dependable local hospitality brand.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Prime Locations",
                text: "Convenient access to Hitech City, Madhapur, Chandanagar, BHEL, Miyapur and nearby Hyderabad areas.",
              },
              {
                title: "Comfortable Rooms",
                text: "Clean and practical rooms designed for restful short and long stays.",
              },
              {
                title: "Direct Booking",
                text: "Quick assistance through phone and WhatsApp for room availability.",
              },
              {
                title: "Trusted Hospitality",
                text: "Guest-focused service across all Supraja hotel properties.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-slate-900">
            Locations We Serve in Hyderabad
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            Supraja Hotels serves guests looking for accommodation around major
            Hyderabad business and residential areas. These location signals help
            guests quickly choose the right property based on their travel plan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800"
              >
                <strong>{location}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-slate-900">
            Our Supraja Hotels Properties
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="relative h-56">
                <SmartImage
  src="/images/cyber-view/hero.webp"
  alt="Hotel in Madhapur Hyderabad by Supraja Hotels"
  fill
  className="object-cover"
/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Hotel Supraja Cyber View
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A preferred option for guests looking for{" "}
                  <strong>Hotels near Hitech City</strong>,{" "}
                  <strong>Hotel in Madhapur Hyderabad</strong>, and stays near{" "}
                  <strong>Kondapur</strong> or <strong>Gachibowli</strong>.
                </p>
                <Link
                  href="/hotels/supraja-cyber-view"
                  className="mt-4 inline-block text-blue-700 hover:underline"
                >
                  View Cyber View hotel
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="relative h-56">
                <Image
                  src="/images/residency/hero.webp"
                  alt="Hotel in Chandanagar Hyderabad by Supraja Hotels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Hotel Supraja Residency
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A comfortable stay option for guests searching for{" "}
                  <strong>Hotel in Chandanagar Hyderabad</strong>,{" "}
                  <strong>Family hotel in Hyderabad</strong>, and rooms near{" "}
                  <strong>Gangaram</strong>, <strong>BHEL</strong> and{" "}
                  <strong>Miyapur</strong>.
                </p>
                <Link
                  href="/hotels/supraja-residency"
                  className="mt-4 inline-block text-blue-700 hover:underline"
                >
                  View Residency hotel
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="relative h-56">
                <Image
                  src="/images/lodge/hero.webp"
                  alt="Budget hotel in Chandanagar by Supraja Hotels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Hotel Supraja Lodge
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A practical choice for guests looking for{" "}
                  <strong>Budget hotel in Chandanagar</strong>, affordable
                  rooms, and direct booking support near <strong>BHEL</strong>,{" "}
                  <strong>Serilingampally</strong> and <strong>Nallagandla</strong>.
                </p>
                <Link
                  href="/hotels/supraja-lodge"
                  className="mt-4 inline-block text-blue-700 hover:underline"
                >
                  View Lodge hotel
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Helpful Travel Resources
            </h3>

            <div className="mt-4 flex flex-wrap gap-5 text-sm">
              <Link href="/hotels" className="text-blue-700 hover:underline">
                Browse all hotel options
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
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                What hotels does Supraja Hotels operate?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Supraja Hotels operates Hotel Supraja Cyber View, Hotel Supraja
                Residency and Hotel Supraja Lodge in Hyderabad.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Which Supraja hotel is near Hitech City?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hotel Supraja Cyber View is suitable for guests looking for
                hotels near Hitech City, Madhapur, Kondapur and Gachibowli.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Which Supraja hotels are in Chandanagar?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hotel Supraja Residency and Hotel Supraja Lodge are suitable for
                guests looking for hotels in Chandanagar, Gangaram, BHEL,
                Serilingampally, Nallagandla and Miyapur.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Can I directly book rooms at Supraja Hotels?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. Guests can directly call or WhatsApp Supraja Hotels for
                room availability and booking assistance.
              </p>
            </div>
          </div>

          <p className="mt-10 leading-8 text-slate-600">
            For guests searching for reliable <strong>Hotels in Hyderabad</strong>,
            Supraja Hotels offers comfortable rooms, convenient locations and
            direct booking support across Madhapur, Hitech City, Chandanagar,
            BHEL and Miyapur.
          </p>
        </div>
      </section>
    </>
  );
}