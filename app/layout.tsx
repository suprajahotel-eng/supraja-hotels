import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/FloatingCTA";
import OrganizationSchema from "@/components/schema/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suprajahotels.com"),

  title: {
    default: "Supraja Hotels Hyderabad",
    template: "%s | Supraja Hotels",
  },

  description:
    "Supraja Hotels offers comfortable stays in Hyderabad with Hotel Supraja Cyber View, Hotel Supraja Residency and Hotel Supraja Lodge. Direct booking available.",

  keywords: [
    "Supraja Hotels",
    "Hotels in Hyderabad",
    "Hotel Supraja Cyber View",
    "Hotel Supraja Residency",
    "Hotel Supraja Lodge",
    "Hotels near Hitech City",
    "Hotels in Madhapur",
    "Hotels in Chandanagar",
    "Budget Hotels Hyderabad",
    "Direct Hotel Booking Hyderabad",
  ],

  authors: [{ name: "Supraja Hotels" }],
  creator: "Supraja Hotels",
  publisher: "Supraja Hotels",
  category: "Hotel",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://suprajahotels.com",
    siteName: "Supraja Hotels",
    title: "Supraja Hotels Hyderabad",
    description:
      "Comfortable stays in Hyderabad with Hotel Supraja Cyber View, Hotel Supraja Residency and Hotel Supraja Lodge.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supraja Hotels Hyderabad comfortable hotel rooms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Supraja Hotels Hyderabad",
    description:
      "Comfortable stays in Hyderabad with direct booking support.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Supraja Hotels",
  url: "https://suprajahotels.com",
  logo: "https://suprajahotels.com/favicon.ico",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9550776161",
      email: "suprajacyberviewhotel@gmail.com",
      contactType: "reservations",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9346316161",
      email: "residency.suprajahotels@gmail.com",
      contactType: "reservations",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9348446161",
      email: "lodge.suprajahotels@gmail.com",
      contactType: "reservations",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
  ],
  department: [
    {
      "@type": "Hotel",
      name: "Hotel Supraja Cyber View",
      telephone: "+91-9550776161",
      email: "suprajacyberviewhotel@gmail.com",
      image: "https://suprajahotels.com/images/cyber-view/hero.webp",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madhapur",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Hotel",
      name: "Hotel Supraja Residency",
      telephone: "+91-9346316161",
      email: "residency.suprajahotels@gmail.com",
      image: "https://suprajahotels.com/images/residency/hero.webp",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandanagar",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Hotel",
      name: "Hotel Supraja Lodge",
      telephone: "+91-9348446161",
      email: "lodge.suprajahotels@gmail.com",
      image: "https://suprajahotels.com/images/lodge/hero.webp",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandanagar",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${geistSans.variable} min-h-screen antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />

        <main>{children}</main>

        <Footer />

        <FloatingCTA />
        <OrganizationSchema />
      </body>
    </html>
  );
}