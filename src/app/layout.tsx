import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hello Subconscious",
    template: "%s | Hello Subconscious",
  },
  description:
    "There's a part of you that already knows the way through.",
  authors: [{ name: "Damian Miller" }],
  openGraph: {
    title: "Hello Subconscious",
    description:
      "There's a part of you that already knows the way through.",
    type: "website",
    url: "https://hellosubconscious.com",
    images: [
      {
        url: "https://subconscious-whispers-flow.lovable.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hello Subconscious",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Subconscious",
    description:
      "There's a part of you that already knows the way through.",
    images: [
      "https://subconscious-whispers-flow.lovable.app/og-image.png",
    ],
  },
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Hello Subconscious
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/program"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Program
          </Link>
          <Link
            href="/program"
            className="rounded-full border border-[#c9a96e]/40 bg-[#c9a96e]/10 px-5 py-2 text-sm font-medium text-[#c9a96e] transition-all hover:bg-[#c9a96e]/20 hover:border-[#c9a96e]/60"
          >
            Start Here
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b1120]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <p
            className="text-2xl tracking-wide text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Hello Subconscious
          </p>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            There&apos;s a part of you that already knows the way through.
          </p>
          <a
            href="mailto:damian@hellosubconscious.com"
            className="text-sm text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
          >
            damian@hellosubconscious.com
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-400">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#c9a96e]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#c9a96e]"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="transition-colors hover:text-[#c9a96e]"
            >
              Disclaimer
            </Link>
            <Link
              href="/text-updates"
              className="transition-colors hover:text-[#c9a96e]"
            >
              Text Updates
            </Link>
          </nav>
          <p className="mt-2 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} A New Hope Hypnosis, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f172a] text-slate-100">
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
