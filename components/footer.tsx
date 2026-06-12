import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-custom px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">
              Supraja Hotels
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Comfortable stays, prime locations and trusted hospitality
              across Hyderabad. Experience clean rooms, convenient access
              and direct booking support at our hotels.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <Link href="/" className="block hover:text-amber-400">
                Home
              </Link>

              <Link href="/about" className="block hover:text-amber-400">
                About Us
              </Link>

              <Link href="/hotels" className="block hover:text-amber-400">
                Hotels
              </Link>

              <Link href="/gallery" className="block hover:text-amber-400">
                Gallery
              </Link>

              <Link href="/offers" className="block hover:text-amber-400">
                Offers
              </Link>

              <Link href="/contact" className="block hover:text-amber-400">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Our Hotels
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div>
                <Link
                  href="/hotels/supraja-cyber-view"
                  className="block font-medium hover:text-amber-400"
                >
                  Hotel Supraja Cyber View
                </Link>

                <p className="mt-1 text-xs text-slate-400">
                  9550776161
                </p>

                <p className="text-xs text-slate-400 break-all">
                  suprajacyberviewhotel@gmail.com
                </p>
              </div>

              <div>
                <Link
                  href="/hotels/supraja-residency"
                  className="block font-medium hover:text-amber-400"
                >
                  Hotel Supraja Residency
                </Link>

                <p className="mt-1 text-xs text-slate-400">
                  9346316161
                </p>

                <p className="text-xs text-slate-400 break-all">
                  residency.suprajahotels@gmail.com
                </p>
              </div>

              <div>
                <Link
                  href="/hotels/supraja-lodge"
                  className="block font-medium hover:text-amber-400"
                >
                  Hotel Supraja Lodge
                </Link>

                <p className="mt-1 text-xs text-slate-400">
                  9348446161
                </p>

                <p className="text-xs text-slate-400 break-all">
                  lodge.suprajahotels@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Direct Booking
            </h3>

            <p className="mt-5 text-sm text-slate-300">
              Contact us directly for room availability, best rates and
              booking assistance.
            </p>

            <a
              href="https://wa.me/919550776161?text=Hi%20I%20would%20like%20to%20book%20a%20room"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Book on WhatsApp
            </a>

            <p className="mt-5 text-sm text-slate-400">
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">
              © {year} Supraja Hotels. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <Link
                href="/privacy-policy"
                className="hover:text-amber-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-amber-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/refund-policy"
                className="hover:text-amber-400"
              >
                Refund Policy
              </Link>

              <Link
                href="/contact"
                className="hover:text-amber-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}