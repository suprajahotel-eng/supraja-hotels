import SmartImage from "@/components/SmartImage";
import Link from "next/link";
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
      description: "The requested hotel page could not be found.",
    };
  }

  return {
    title: hotel.seo.metaTitle,
    description: hotel.seo.metaDescription,
    keywords: hotel.seo.tags,
    openGraph: {
      title: hotel.seo.ogTitle,
      description: hotel.seo.ogDescription,
      images: [
        {
          url: hotel.seo.ogImage,
          width: 1200,
          height: 630,
          alt: hotel.seo.featuredImageAlt,
        },
      ],
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
    description: hotel.seo.metaDescription,
    telephone: `+91-${hotel.phone}`,
    email: hotel.email,
    image: `https://suprajahotels.com${hotel.images.hero}`,
    url: `https://suprajahotels.com/hotels/${hotel.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: hotel.location,
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: hotel.seo.targetLocations,
    amenityFeature: hotel.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hotel.seo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="bg-white px-4 py-12">
        <div className="container-custom">
          <p className="text-sm font-semibold text-slate-500">
            Supraja Hotels / {hotel.location}
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
            {hotel.name} | <strong>{hotel.seo.focusKeyword}</strong>
          </h1>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            <strong>{hotel.seo.focusKeyword}</strong> offering comfortable
            rooms, direct booking support and convenient access to{" "}
            <strong>{hotel.seo.targetLocations.slice(0, 4).join(", ")}</strong>{" "}
            and nearby Hyderabad locations. {hotel.description}
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
              <strong>{hotel.seo.focusKeyword}</strong> for Comfortable Stays
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              <strong>{hotel.seo.focusKeyword}</strong> is a practical choice
              for guests looking for clean rooms, easy access, helpful service
              and direct booking convenience. {hotel.name} is designed for
              business guests, families, visitors and travelers who want a
              dependable stay in Hyderabad.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Guests searching for{" "}
              <strong>{hotel.seo.synonyms[0]}</strong>,{" "}
              <strong>{hotel.seo.synonyms[1]}</strong> or{" "}
              <strong>{hotel.seo.synonyms[2]}</strong> can consider{" "}
              {hotel.name} for a stay that balances comfort, location and
              booking support. The property is also useful for guests visiting{" "}
              <strong>{hotel.seo.targetLocations.join(", ")}</strong>.
            </p>

            <h3 className="mt-10 text-2xl font-semibold text-slate-900">
              Why Choose <strong>{hotel.seo.focusKeyword}</strong>
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              <strong>{hotel.seo.synonyms[3]}</strong> and{" "}
              <strong>{hotel.seo.synonyms[4]}</strong> are common needs for
              Hyderabad guests. {hotel.name} supports these needs with practical
              amenities, clean rooms, responsive assistance and convenient
              access to nearby locations.
            </p>

            <ul className="mt-8 space-y-3 text-slate-700">
              <li>✓ Comfortable and well-maintained rooms</li>
              <li>✓ Direct booking support through phone and WhatsApp</li>
              <li>✓ Convenient location with easy connectivity</li>
              <li>✓ Family-friendly and business-friendly environment</li>
              <li>✓ Essential amenities for a comfortable stay</li>
            </ul>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Nearby Locations and Landmarks
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {hotel.name} is useful for guests looking for accommodation near
                these important Hyderabad locations:
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {hotel.seo.nearbyLandmarks.map((landmark) => (
                  <span
                    key={landmark}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800"
                  >
                    <strong>{landmark}</strong>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Useful Links for Guests
              </h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link href="/hotels" className="text-blue-700 hover:underline">
                  Explore all Supraja Hotels
                </Link>

                <Link
                  href="/contact"
                  className="text-blue-700 hover:underline"
                >
                  Contact our booking team
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
                  India Tourism
                </a>
              </div>
            </div>

            <p className="mt-8 leading-8 text-slate-600">
              For guests searching for a reliable{" "}
              <strong>{hotel.seo.focusKeyword}</strong>, {hotel.name} offers
              comfortable accommodation, helpful service, direct booking support
              and a convenient location for the next Hyderabad visit.
            </p>

            <h2 className="mt-10 text-3xl font-semibold text-slate-900">
              Amenities at {hotel.name}
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
                        alt={`${amenity} at ${hotel.name}`}
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

            <div className="mt-10 rounded-2xl bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-6">
                {hotel.seo.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
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

              <p className="mt-4 text-sm text-slate-500">Email</p>

              <p className="mt-1 break-all text-sm font-medium text-slate-900">
                {hotel.email}
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
              className="mt-3 block rounded-full bg-green-600 px-6 py-3 text-center text-sm font-semibold text-white"
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