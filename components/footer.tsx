import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container-custom grid gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-amber-400">Supraja Hotels</h2>
          <p className="mt-4 text-sm leading-6 text-blue-100">
            Comfortable stays, prime locations and trusted hospitality across
            Hyderabad.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 space-y-2 text-sm text-blue-100">
            <Link href="/about" className="block hover:text-amber-400">About</Link>
            <Link href="/hotels" className="block hover:text-amber-400">Hotels</Link>
            <Link href="/gallery" className="block hover:text-amber-400">Gallery</Link>
            <Link href="/offers" className="block hover:text-amber-400">Offers</Link>
            <Link href="/contact" className="block hover:text-amber-400">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Our Hotels</h3>
          <div className="mt-4 space-y-2 text-sm text-blue-100">
            <Link href="/hotels/supraja-cyber-view" className="block hover:text-amber-400">
              Hotel Supraja Cyber View
            </Link>
            <Link href="/hotels/supraja-residency" className="block hover:text-amber-400">
              Hotel Supraja Residency
            </Link>
            <Link href="/hotels/supraja-lodge" className="block hover:text-amber-400">
              Hotel Supraja Lodge
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Direct Booking</h3>
          <p className="mt-4 text-sm text-blue-100">Phone: 9550776161</p>
          <p className="mt-2 text-sm text-blue-100">Hyderabad, Telangana</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-blue-100">
        © 2026 Supraja Hotels. All rights reserved.
      </div>
    </footer>
  );
}