import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, ShieldCheck } from "lucide-react";
import { hotels } from "@/data/hotels";
import AmenitiesSection from "@/components/AmenitiesSection";

const hotelDescriptions: Record<string, string> = {
  "supraja-cyber-view":
    "A comfortable stay near Madhapur and Hitech City for business and city travelers.",
  "supraja-residency":
    "A trusted hotel in Chandanagar for families, visitors and corporate guests.",
  "supraja-lodge":
    "Affordable rooms in Chandanagar with easy access and direct booking support.",
};

const features = [
  "Clean Rooms",
  "Prime Locations",
  "Direct Booking",
  "Free WiFi",
  "Parking Support",
  "Guest Friendly",
];

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="grid min-h-[430px] md:grid-cols-[38%_62%]">
          <div className="flex items-center bg-slate-900 px-6 py-16 text-white md:px-16">
            <div>
              <p className="mb-5 text-sm font-semibold tracking-wide text-amber-300">
                Supraja Hotels Hyderabad
              </p>

              <h1 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                Comfortable stays in prime Hyderabad locations
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
                Clean rooms, practical amenities and trusted hospitality across
                Supraja Cyber View, Supraja Residency and Supraja Lodge.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/hotels"
                  className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950"
                >
                  Explore Hotels
                </Link>

                <a
                  href="tel:+919550776161"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[430px] bg-slate-100">
            <Image
              src="/images/homepage/hero.webp"
              alt="Supraja Hotels Hyderabad"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 62vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-slate-900">
            Hotels in Hyderabad
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Choose from Supraja Hotels across Madhapur and Chandanagar, suitable
            for business, family and budget-friendly stays.
          </p>

          <div className="mt-8 space-y-5">
            {hotels.map((hotel) => (
              <Link
                key={hotel.slug}
                href={`/hotels/${hotel.slug}`}
                className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md md:grid-cols-[260px_1fr_190px]"
              >
                <div className="relative h-52 bg-slate-100">
                  <Image
                    src={hotel.images.hero}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-slate-500">{hotel.location}</p>

                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                    {hotel.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                      4.5
                    </span>
                    <div className="flex text-green-600">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">Guest rated</span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                    {hotelDescriptions[hotel.slug]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      Business friendly
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      Family stay
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      Direct booking
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center border-t border-slate-200 p-6 md:border-l md:border-t-0">
                  <div className="text-center">
                    <p className="text-xs text-slate-500">Call</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {hotel.phone}
                    </p>
                    <span className="mt-5 inline-block rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white">
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

      <section className="bg-slate-50 px-4 py-16">
        <div className="container-custom">
          <div className="grid gap-10 md:grid-cols-[35%_65%]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Why guests choose Supraja Hotels
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A practical and comfortable hotel experience with easy access,
                responsive support and direct booking convenience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <ShieldCheck size={22} className="text-blue-700" />
                  <h3 className="mt-4 font-semibold text-slate-900">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-14 text-white">
        <div className="container-custom flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Book your stay directly</h2>
            <p className="mt-3 text-slate-300">
              Call or WhatsApp our team for room availability and best suitable
              hotel.
            </p>
          </div>

          <a
            href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-950"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}