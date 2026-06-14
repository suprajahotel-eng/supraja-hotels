import SmartImage from "@/components/SmartImage";

type HotelGalleryProps = {
  hotelName: string;
  hero: string;
  gallery: string[];
};

export default function HotelGallery({
  hotelName,
  hero,
  gallery,
}: HotelGalleryProps) {
  const previewImages = gallery.slice(0, 4);

  return (
    <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
      <div className="relative h-[420px] overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={hero}
          alt={`${hotelName} main image`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {previewImages.map((image, index) => (
          <div
            key={image}
            className="relative h-[202px] overflow-hidden rounded-2xl bg-slate-100"
          >
            <Image
              src={image}
              alt={`${hotelName} gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}