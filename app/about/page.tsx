import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supraja Hotels | Trusted Hospitality in Hyderabad",
  description:
    "Supraja Hotels offers comfortable stays, prime locations, direct hotel booking and trusted hospitality across Hyderabad.",
  keywords: [
    "Supraja Hotels",
    "Hyderabad hotels",
    "trusted hotel group",
    "comfortable accommodation in Hyderabad",
    "direct hotel booking",
    "hospitality brand in Hyderabad",
    "Hotel Supraja Cyber View",
    "Hotel Supraja Residency",
    "Hotel Supraja Lodge",
    "hotels in Hyderabad",
  ],
  openGraph: {
    title: "Supraja Hotels | Comfortable Stays in Hyderabad",
    description:
      "Discover Supraja Hotels, a trusted hospitality brand offering clean rooms, prime locations and direct booking support in Hyderabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supraja Hotels trusted hospitality in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supraja Hotels | Trusted Hospitality in Hyderabad",
    description:
      "Comfortable stays, clean rooms and direct booking support across Supraja Hotels in Hyderabad.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 px-4 py-20 text-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[55%_45%] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              About Us
            </p>

            <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
              About Supraja Hotels
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Supraja Hotels is a trusted hospitality brand in Hyderabad,
              offering comfortable rooms, prime locations, direct hotel booking
              support and reliable guest service for business travelers,
              families and visitors.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/hotels"
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Explore our hotels
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                Contact booking team
              </Link>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-3xl">
            <Image
              src="/images/homepage/hero.webp"
              alt="Supraja Hotels trusted hospitality in Hyderabad"
              fill
              priority
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
              Supraja Hotels was built with a clear purpose: to provide clean,
              comfortable and value-focused accommodation in convenient
              Hyderabad locations. Our properties are designed for guests who
              want practical amenities, easy access and friendly support without
              unnecessary complications.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As Hyderabad hotels continue to serve business, family and travel
              guests, Supraja Hotels focuses on dependable hospitality. From
              Madhapur to Chandanagar, our hotels support guests who need
              comfort, connectivity and direct booking assistance.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Guests choose us for comfortable accommodation in Hyderabad, quick
              room availability support, clean rooms and trusted service. Whether
              the visit is for work, family events, medical needs or short city
              travel, our team aims to make every stay simple and pleasant.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our mission is to deliver reliable hospitality with clean rooms,
              responsive service and fair value. Supraja Hotels works to combine
              affordability, comfort and convenience for every guest.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>✓ Clean and well-maintained rooms</li>
              <li>✓ Prime hotel locations in Hyderabad</li>
              <li>✓ Direct hotel booking through phone and WhatsApp</li>
              <li>✓ Guest support for families and business travelers</li>
              <li>✓ Practical amenities for comfortable stays</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Supraja Hotels Guest Promise
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We focus on honest service, comfortable rooms and practical
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
            Supraja Hotels is preferred by guests looking for a trusted hotel
            group, easy connectivity, direct booking support and a dependable
            hospitality brand in Hyderabad.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Prime Locations",
                text: "Convenient access to Madhapur, Hitech City, Chandanagar and nearby business areas.",
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
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
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
            Our Supraja Hotels Properties
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="relative h-56">
                <Image
                  src="/images/cyber-view/hero.webp"
                  alt="Hotel Supraja Cyber View by Supraja Hotels in Madhapur"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Hotel Supraja Cyber View
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Located near Hitech City and Madhapur, this property is ideal
                  for corporate guests, city travelers and visitors who need
                  convenient access to Hyderabad business areas.
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
                  alt="Hotel Supraja Residency by Supraja Hotels in Chandanagar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Hotel Supraja Residency
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A comfortable stay option in Chandanagar for families,
                  professionals and visitors looking for clean rooms and easy
                  access to nearby areas.
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
                  alt="Hotel Supraja Lodge by Supraja Hotels in Chandanagar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Hotel Supraja Lodge
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Affordable accommodation in Chandanagar with practical
                  amenities, direct booking support and convenient access to
                  local business and residential areas.
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

      <section className="bg-slate-900 px-4 py-16 text-center text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold">
            Experience Comfortable Hospitality with Supraja Hotels
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
            For guests searching for clean rooms, convenient locations and
            direct hotel booking in Hyderabad, Supraja Hotels offers a trusted
            stay experience supported by reliable service and guest-focused
            hospitality.
          </p>
        </div>
      </section>
    </>
  );
}