import type { Metadata } from "next";

export const metadata = {
  title: "About Supraja Hotels | Trusted Hospitality in Hyderabad",
  description:
    "Learn about Supraja Hotels, offering comfortable stays, prime locations and trusted hospitality across Hyderabad.",
  keywords: [
    "Supraja Hotels",
    "Hotels in Hyderabad",
    "Hospitality Hyderabad",
    "Hotel Group Hyderabad",
    "Accommodation Hyderabad",
  ],
  openGraph: {
    title: "About Supraja Hotels",
    description:
      "Comfortable stays and trusted hospitality across Hyderabad.",
    images: ["/images/homepage/hero.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 px-4 py-20 text-white">
        <div className="container-custom">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            About Supraja Hotels
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Supraja Hotels is committed to providing comfortable,
            affordable and reliable accommodation experiences across
            Hyderabad. With strategically located properties and a focus on
            guest satisfaction, we strive to deliver a pleasant stay for
            business travelers, families and visitors.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Our Story
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Supraja Hotels was established with a simple vision:
              providing clean, comfortable and value-driven accommodation
              options in convenient locations across Hyderabad.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Over the years, our properties have welcomed guests from
              different parts of India and abroad, offering a dependable
              stay experience supported by friendly service and practical
              amenities.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Whether traveling for business, family visits, medical
              requirements or leisure, guests choose Supraja Hotels for
              convenience, comfort and hospitality.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our mission is to provide a welcoming and comfortable stay
              experience that combines affordability, cleanliness and
              excellent guest support.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We continuously focus on maintaining our facilities,
              improving guest services and ensuring every visitor enjoys a
              hassle-free stay.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="container-custom">
          <h2 className="text-center text-3xl font-semibold text-slate-900">
            Why Guests Choose Supraja Hotels
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Prime Locations
              </h3>
              <p className="mt-3 text-slate-600">
                Conveniently located properties with easy access to key
                destinations in Hyderabad.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Comfortable Rooms
              </h3>
              <p className="mt-3 text-slate-600">
                Clean and well-maintained rooms designed for restful stays.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Direct Booking
              </h3>
              <p className="mt-3 text-slate-600">
                Quick assistance and support for direct reservations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Trusted Hospitality
              </h3>
              <p className="mt-3 text-slate-600">
                Dedicated service and guest-focused hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-slate-900">
            Our Properties
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Hotel Supraja Cyber View
              </h3>

              <p className="mt-2 text-slate-600">
                Located near Hitech City and Madhapur, ideal for business
                travelers and corporate guests.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Hotel Supraja Residency
              </h3>

              <p className="mt-2 text-slate-600">
                A comfortable stay option in Chandanagar suitable for
                families, professionals and visitors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Hotel Supraja Lodge
              </h3>

              <p className="mt-2 text-slate-600">
                Affordable accommodation with convenient access to local
                business and residential areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16 text-center text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold">
            Experience Comfortable Hospitality
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-300">
            Discover clean rooms, convenient locations and trusted
            hospitality across Supraja Hotels in Hyderabad.
          </p>
        </div>
      </section>
    </>
  );
}