import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { Camera, Building2, MessageCircle, Phone } from "lucide-react";

import { hotels } from "@/data/hotels";

export const metadata = {
  title: "Gallery | Supraja Hotels",
  description:
    "View photos of Supraja Hotels, including Hotel Supraja Cyber View, Hotel Supraja Residency and Hotel Supraja Lodge.",
};

export default function GalleryPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />

        <div className="container-custom px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              <Camera className="mr-2 h-4 w-4" />
              Supraja Hotels Gallery
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Gallery of Supraja Hotels in Hyderabad
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore photos of rooms, hotel exteriors and stay spaces across
              Supraja Hotels in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {hotels.map((hotel, hotelIndex) => {
        const allImages = [hotel.images.hero, ...hotel.images.gallery];

        return (
          <section
            key={hotel.slug}
            className={hotelIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
          >
            <div className="container-custom px-4 py-16 lg:py-24">
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                    <Building2 className="mr-2 h-4 w-4" />
                    {hotel.location}
                  </span>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {hotel.name}
                  </h2>
                </div>

                <Link
                  href={`/hotels/${hotel.slug}`}
                  className="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  View Hotel
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {allImages.map((image, index) => (
                  <div
                    key={`${hotel.slug}-${image}-${index}`}
                    className={`group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ${
                      index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                    }`}
                  >
                    <SmartImage
                      src={image}
                      alt={`${hotel.name} gallery image ${index + 1}`}
                      width={900}
                      height={700}
                      className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                        index === 0 ? "min-h-[380px]" : "min-h-[260px]"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 backdrop-blur">
                        {hotel.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="container-custom px-4 py-16 lg:py-24">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Like What You See?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Contact Supraja Hotels directly for room availability, current
            offers, corporate stays and group booking support.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="tel:+919550776161"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 9550776161
            </Link>

            <Link
              href="https://wa.me/919550776161?text=Hi%20Supraja%20Hotels%2C%20I%20viewed%20the%20gallery%20and%20would%20like%20to%20book%20a%20room"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Booking
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}