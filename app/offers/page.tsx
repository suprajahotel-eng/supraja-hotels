import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import {
  BadgePercent,
  CalendarCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import { hotels } from "@/data/hotels";

export const metadata = {
  title: "Hotel Offers in Hyderabad | Supraja Hotels",
  description:
    "Explore direct booking offers, corporate stay deals, group stay benefits and long stay options at Supraja Hotels in Hyderabad.",
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
    points: ["Business guest friendly", "Monthly stay support", "Team coordination"],
  },
  {
    icon: Users,
    title: "Group Booking Support",
    imageIndex: 2,
    description:
      "Convenient assistance for family groups, staff stays, event guests and multiple room bookings.",
    points: ["Multiple room help", "Family and staff stays", "Direct coordination"],
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

export default function OffersPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <div className="container-custom grid gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <BadgePercent className="mr-2 h-4 w-4" />
              Stay Offers at Supraja Hotels
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Hotel Offers in Hyderabad for Direct, Corporate and Group Stays
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Get practical stay benefits across Supraja Hotels with direct
              booking support, corporate stay assistance, group booking help and
              long stay options in Hyderabad.
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
                alt="Supraja Hotels offers in Hyderabad"
                width={900}
                height={700}
                priority
                className="h-[420px] w-full object-cover"
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
            Current Stay Offers
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Choose the right stay option for direct bookings, corporate guests,
            group stays and longer visits.
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
                    alt={`${offer.title} at Supraja Hotels`}
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
          <div className="grid gap-8 md:grid-cols-3">
            {hotels.map((hotel) => (
              <Link
                key={hotel.slug}
                href={`/hotels/${hotel.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <SmartImage
  src={hotel.images.hero}
  alt={hotel.name}
  width={700}
  height={500}
  className="h-full w-full object-cover"
/>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950">
                    {hotel.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {hotel.location}
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
        <div className="rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Rooms for Today or Upcoming Dates?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Speak with Supraja Hotels directly for room availability, current
            offers, corporate stays and group booking support.
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
  );
}