import Image, { type ImageProps } from "next/image";

type Props = ImageProps & {
  isHero?: boolean;
};

export default function ({
  isHero = false,
  sizes,
  ...props
}: Props) {
  return (
    <Image
      {...props}
      priority={isHero}
      loading={isHero ? undefined : "lazy"}
      sizes={
        sizes ??
        (isHero
          ? "100vw"
          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw")
      }
    />
  );
}