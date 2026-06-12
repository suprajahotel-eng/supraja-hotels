import Link from "next/link";
import { MapPin, Star, Wifi, Car, ShieldCheck, BedDouble } from "lucide-react";
import { hotels } from "@/data/hotels";

const benefits = [
  { title: "Prime Locations", icon: MapPin },
  { title: "Clean Rooms", icon: BedDouble },
  { title: "Free WiFi", icon: Wifi },
  { title: "Parking Support", icon: Car },
  { title: "Trusted Hospitality", icon: ShieldCheck },
  { title: "Guest Friendly", icon: Star },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 px-4 py-24 text-white">
        <div className="container-custom grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950">
              Supraja Hotels Hyderabad
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Comfortable Stays Across Hyderabad
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Experience clean rooms, prime locations, affordable pricing and
              warm hospitality at Supraja Hotels.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/hotels"
                className="rounded-full bg-amber-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-amber-600"
              >
                Explore Hotels
              </Link>

              <a
                href="tel:+919550776161"
                className="rounded-full border border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-blue-900"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-8 text-slate-900">
              <h2 className="text-2xl font-bold text-blue-900">
                Direct Booking Available
              </h2>
              <p className="mt-3 text-slate-600">
                Book directly with Supraja Hotels for Cyber View, Residency and
                Lodge.
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="font-bold text-blue-900">Call or WhatsApp</p>
                <p className="mt-2 text-2xl font-extrabold text-amber-600">
                  9550776161
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="font-bold text-amber-600">Our Hotels</p>
            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-5xl">
              Choose Your Perfect Stay
            </h2>
            <p className="mt-4 text-slate-600">
              Explore Supraja Hotels across Hyderabad, designed for business,
              family and budget-friendly stays.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hotels.map((hotel) => (
              <Link
                key={hotel.slug}
                href={`/hotels/${hotel.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-blue-50">
                  <BedDouble size={56} className="text-blue-800" />
                </div>

                <h3 className="text-xl font-extrabold text-blue-950 group-hover:text-blue-700">
                  {hotel.name}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} />
                  {hotel.location}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Comfortable rooms, convenient location and direct booking
                  support.
                </p>

                <span className="mt-5 inline-block font-bold text-amber-600">
                  View Hotel →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center">
            <p className="font-bold text-amber-600">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-5xl">
              Trusted Hospitality for Every Guest
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 px-4 py-16 text-white">
        <div className="container-custom flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Book Direct & Save More</h2>
            <p className="mt-3 text-blue-100">
              Speak with our team for room availability and best direct booking
              support.
            </p>
          </div>

          <a
            href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 px-8 py-3 font-bold text-slate-950 transition hover:bg-amber-600"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}