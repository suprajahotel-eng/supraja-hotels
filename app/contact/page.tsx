import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Supraja Hotels | Direct Hotel Booking Hyderabad",
  description:
    "Contact Supraja Hotels for direct room bookings, availability enquiries and guest support across Hyderabad.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-900 px-4 py-20 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Contact Supraja Hotels
          </h1>

          <p className="mt-6 max-w-3xl text-slate-300">
            Contact our team for room availability, direct bookings and guest
            assistance.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">
              Hotel Supraja Cyber View
            </h2>
            <p className="mt-3 text-slate-600">
              Madhapur, Hyderabad
            </p>
            <p className="mt-2 text-slate-600">
              Phone: 9550776161
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">
              Hotel Supraja Residency
            </h2>
            <p className="mt-3 text-slate-600">
              Chandanagar, Hyderabad
            </p>
            <p className="mt-2 text-slate-600">
              Phone: 9346316161
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">
              Hotel Supraja Lodge
            </h2>
            <p className="mt-3 text-slate-600">
              Chandanagar, Hyderabad
            </p>
            <p className="mt-2 text-slate-600">
              Phone: 9346316161
            </p>
          </div>
        </div>
      </section>
    </>
  );
}