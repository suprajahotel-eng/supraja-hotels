import Link from "next/link";
import {
  BadgePercent,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Users,
  BriefcaseBusiness,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Hotel Offers in Hyderabad | Supraja Hotels",
  description:
    "Explore direct booking offers, corporate stay deals, group stay benefits and long stay options at Supraja Hotels in Hyderabad.",
};

const offers = [
  {
    icon: BadgePercent,
    title: "Direct Booking Benefits",
    description:
      "Book directly with Supraja Hotels and get better support, faster confirmation and personalized assistance for your stay.",
    points: [
      "Quick room confirmation",
      "Direct hotel support",
      "Best available guidance",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Stay Offers",
    description:
      "Special stay support for business travelers, company staff, vendors and corporate guests visiting Hyderabad.",
    points: [
      "Ideal for business guests",
      "Monthly and repeated stay support",
      "Easy coordination for teams",
    ],
  },
  {
    icon: Users,
    title: "Group Booking Support",
    description:
      "Planning stays for family, staff, event guests or teams? Our hotels offer convenient group booking assistance.",
    points: [
      "Multiple room assistance",
      "Suitable for family and staff stays",
      "Direct booking coordination",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Long Stay Options",
    description:
      "Comfortable and practical stay options for guests who need rooms for several days or extended business visits.",
    points: [
      "Suitable for extended stays",
      "Clean and comfortable rooms",
      "Prime location access",
    ],
  },
];

const hotels = [
  "Hotel Supraja Cyber View, Hitech City",
  "Hotel Supraja Residency, Chandanagar",
  "Hotel Supraja Lodge, Chandanagar",
];

export default function OffersPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />

        <div className="container-custom px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <BadgePercent className="mr-2 h-4 w-4" />
              Stay Offers at Supraja Hotels
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Hotel Offers in Hyderabad for Direct, Corporate and Group Stays
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Get practical stay benefits across Supraja Hotels with direct
              booking support, corporate stay assistance, group booking help and
              long stay options in Hyderabad.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
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
        </div>
      </section>

      <section className="container-custom px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Current Stay Offers
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Our offers are designed for guests who need clean rooms, prime
            locations, easy access and reliable direct booking support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offers.map((offer) => {
            const Icon = offer.icon;

            return (
              <article
                key={offer.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-950">
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
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-custom px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                Available Across Locations
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Offers Available at Supraja Hotels
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Supraja Hotels offers comfortable stay options across key
                Hyderabad locations. Whether you are visiting for work, family
                needs, medical appointments, events or short business trips, our
                team can help you choose the right property.
              </p>

              <div className="mt-8 grid gap-4">
                {hotels.map((hotel) => (
                  <div
                    key={hotel}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <Building2 className="h-6 w-6 flex-none text-amber-700" />
                    <span className="font-semibold text-slate-800">
                      {hotel}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-200 bg-white p-8 shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                <Clock className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                For Best Offer, Contact Directly
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Room availability and offers may change based on date, hotel,
                occupancy and stay duration. For the most suitable option,
                contact Supraja Hotels directly before booking.
              </p>

              <div className="mt-7 space-y-3">
                <Link
                  href="tel:+919550776161"
                  className="flex items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 9550776161
                </Link>

                <Link
                  href="https://wa.me/919550776161?text=Hi%20Supraja%20Hotels%2C%20please%20share%20today%27s%20best%20hotel%20offer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                  Chat on WhatsApp
                </Link>
              </div>
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