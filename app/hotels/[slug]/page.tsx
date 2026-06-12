import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { amenities } from "@/data/amenities";
import { hotels } from "@/data/hotels";
import HotelGallery from "@/components/HotelGallery";
import HotelMap from "@/components/HotelMap";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const hotel = hotels.find((item) => item.slug === slug);

  if (!hotel) {
    return {
      title: "Hotel Not Found",
    };
  }

  return {
    title: hotel.seo.metaTitle,
    description: hotel.seo.metaDescription,

    keywords: hotel.seo.tags,

    openGraph: {
      title: hotel.seo.ogTitle,
      description: hotel.seo.ogDescription,
      images: [hotel.seo.ogImage],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: hotel.seo.ogTitle,
      description: hotel.seo.ogDescription,
      images: [hotel.seo.ogImage],
    },
  };
}

export default async function HotelPage({ params }: Props) {
  const { slug } = await params;

  const hotel = hotels.find((item) => item.slug === slug);

  if (!hotel) {
    notFound();
  }

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: hotel.description,
    telephone: hotel.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: hotel.location,
      addressCountry: "India",
    },
    image: hotel.images.hero,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelSchema),
        }}
      />

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
              {hotel.amenities.map((amenity) => {
                const amenityData = amenities.find(
                  (item) => item.title === amenity
                );

                return (
                  <div
                    key={amenity}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 text-slate-800"
                  >
                    {amenityData?.icon ? (
                      <Image
                        src={amenityData.icon}
                        alt={amenity}
                        width={34}
                        height={34}
                      />
                    ) : (
                      <div className="h-[34px] w-[34px] rounded-full bg-blue-100" />
                    )}

                    <span>{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
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
              href={`https://wa.me/91${hotel.whatsapp}?text=Hi%20I%20would%20like%20to%20book%20a%20room%20at%20${encodeURIComponent(
                hotel.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Book on WhatsApp
            </a>
          </aside>
        </div>
      </section>

      {hotel.mapEmbed ? (
        <HotelMap title={hotel.name} embedUrl={hotel.mapEmbed} />
      ) : null}
    </>
  );
}