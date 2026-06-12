import { notFound } from "next/navigation";
import { hotels } from "@/data/hotels";
import HotelGallery from "@/components/HotelGallery";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function HotelPage({ params }: Props) {
  const { slug } = await params;

  const hotel = hotels.find((item) => item.slug === slug);

  if (!hotel) {
    notFound();
  }

  return (
    <>
      <section className="bg-white px-4 py-12">
        <div className="container-custom">
          <p className="text-sm font-semibold text-slate-500">
            Supraja Hotels / {hotel.location}
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            {hotel.name}
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            {hotel.description}
          </p>

          <div className="mt-8">
            <HotelGallery
              hotelName={hotel.name}
              hero={hotel.images.hero}
              gallery={hotel.images.gallery}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <div className="container-custom grid gap-10 lg:grid-cols-[65%_35%]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              About {hotel.name}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {hotel.description}
            </p>

            <h2 className="mt-10 text-3xl font-semibold text-slate-900">
              Amenities
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {hotel.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-slate-800"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Direct Booking
            </h3>

            <p className="mt-3 text-slate-600">
              Call or WhatsApp us for room availability.
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Phone</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">
                {hotel.phone}
              </p>
            </div>

            <a
              href={`tel:+91${hotel.phone}`}
              className="mt-6 block rounded-full bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Call Now
            </a>

            <a
              href={`https://wa.me/91${hotel.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Book on WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}