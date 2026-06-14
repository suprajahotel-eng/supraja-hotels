import Image, { ImageProps } from "next/image";

type SmartImageProps = ImageProps & {
  isHero?: boolean;
};

export default function SmartImage({
  isHero = false,
  sizes,
  ...props
}: SmartImageProps) {
  return (
    <Image
      {...props}
      priority={isHero}
      loading={isHero ? undefined : "lazy"}
      sizes={
        sizes ||
        (isHero
          ? "100vw"
          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw")
      }
    />
  );
}