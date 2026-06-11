import ContactForm from "@/components/contact-form";
import MobileMenu from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import {
  BookOpen,
  Church,
  GraduationCap,
  Heart,
  HeartHandshake,
  Mail,
  Microscope,
} from "lucide-react";

type Donor = {
  blurb: string;
  name: string;
  role: string;
  image: string;
  url?: string;
};

const donees: Donor[] = [
  {
    blurb:
      "Making homes safer and lives easier for physically and financially challenged homeowners by providing essential, no-cost home modifications—such as wheelchair ramps, grab bars, and widened doorways—that help individuals with mobility issues remain independent.",
    name: "ReFit Portland",
    role: "Home Modification Organization",
    image: "/refit-logo.png",
    url: "https://refitportland.org/",
  },
  {
    blurb:
      "Leading the way in vision research, education and patient care, providing comprehensive eye care services and advancing treatments for vision disorders.",
    name: "Casey Eye Institute",
    role: "Medical Institution",
    image: "/ohsu-logo.svg",
    url: "https://www.ohsu.edu/casey-eye-institute",
  },
  {
    blurb:
      "Dedicated to preventing blindness and hearing loss through early detection, education, and providing assistance to those in need across Oregon.",
    name: "Oregon Lions Sight & Hearing Foundation",
    role: "Healthcare Foundation",
    image: "/olshf-logo.png",
    url: "https://olshf.org/",
  },
  {
    blurb:
      "Working to end child trafficking through prevention, intervention, and restoration programs that protect vulnerable children and support survivors.",
    name: "In Our Backyard",
    role: "Child Protection Organization",
    image: "/inourbackyard-logo.png",
    url: "https://inourbackyard.org/",
  },
  {
    blurb:
      "Empowering young adults with developmental disabilities through meaningful vocational training, independent life skills, and community integration by involving them in every step of baking and selling all-natural dog biscuits.",
    name: "W.A.G. – SNAX",
    role: "Vocational Training Organization",
    image: "/wag-snax-logo.png",
    url: "https://wag-snax.com/",
  },
];

function SkipNavigation() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-white/60">
      <div className="@container">
        <div className="px-4 @sm:mx-auto @sm:max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="CWF Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-base font-bold tracking-tight text-gray-800 sm:text-xl">
                Campbell-Wallace Foundation
              </span>
            </div>
            <nav className="hidden md:flex" aria-label="Main navigation">
              <Button asChild variant="link" className="text-gray-800">
                <Link href="#about">About</Link>
              </Button>
              <Button asChild variant="link" className="text-gray-800">
                <Link href="#impact">Impact</Link>
              </Button>
              <Button asChild variant="link" className="text-gray-800">
                <Link href="#beneficiary">Beneficiary Information</Link>
              </Button>
              <Button asChild variant="link" className="text-gray-800">
                <Link href="#contact">Contact</Link>
              </Button>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Hands exchanging a heart"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-black/60"
          aria-hidden="true"
        />
      </div>
      <div className="@container">
        <div className="px-4 @sm:mx-auto @sm:max-w-7xl">
          <div className="relative z-10 flex flex-col items-center justify-center py-36 text-center text-white sm:py-56">
            <h1
              id="hero-heading"
              className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              Making a Difference Through Philanthropy
            </h1>
            <p
              className="mt-6 max-w-2xl text-base sm:text-lg"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
            >
              The Campbell Wallace Foundation is a 501(c)(3) non-profit
              organization dedicated to improving lives through education,
              community support, and charitable initiatives.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#about">Learn About Us</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="border border-white/70 bg-white/10 text-white backdrop-blur-xs hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                <Link href="#beneficiary">Beneficiary Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-20"
      aria-labelledby="about-heading"
    >
      <div className="@container">
        <div className="px-4 @sm:mx-auto @sm:max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2
                id="about-heading"
                className="text-3xl font-bold tracking-tight"
              >
                Our Mission
              </h2>
              <div
                className="bg-primary mt-4 mb-6 h-1 w-12 rounded-full"
                aria-hidden="true"
              />
              <p className="mb-8 text-base text-gray-600 sm:text-lg">
                The Campbell-Wallace Foundation was founded in 1997 to support
                religious, charitable, scientific, literary or educational
                purposes, and for the prevention of cruelty to children and
                animals.
              </p>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { icon: Church, label: "Religion" },
                  { icon: Heart, label: "Charity" },
                  { icon: Microscope, label: "Science" },
                  { icon: BookOpen, label: "Literary" },
                  { icon: GraduationCap, label: "Education" },
                  { icon: HeartHandshake, label: "Child & Animal Welfare" },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 rounded-md bg-gray-50 px-3 py-2 transition-colors hover:bg-gray-100"
                  >
                    <Icon
                      className="text-primary h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/nasa.jpg"
                alt="NASA image of earth from space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section
      id="impact"
      className="bg-primary-foreground py-20"
      aria-labelledby="impact-heading"
    >
      <div className="@container">
        <div className="px-4 @sm:mx-auto @sm:max-w-7xl">
          <div className="mb-16 text-center">
            <h2
              id="impact-heading"
              className="text-primary text-3xl font-bold tracking-tight"
            >
              Our Impact
            </h2>
            <div
              className="bg-primary mx-auto mt-4 mb-6 h-1 w-12 rounded-full"
              aria-hidden="true"
            />
            <p className="text-primary mx-auto max-w-2xl text-base sm:text-lg">
              See how our programs have made a difference in communities and
              individuals&apos; lives.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {donees.map((donee, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="mb-6 flex-1 text-gray-600">{donee.blurb}</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white p-2">
                    <Image
                      src={donee.image}
                      alt={`${donee.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    {donee.url ? (
                      <Link
                        href={donee.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary rounded font-medium hover:underline focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                        aria-label={`Visit ${donee.name} website (opens in a new tab)`}
                      >
                        {donee.name}
                      </Link>
                    ) : (
                      <p className="font-medium">{donee.name}</p>
                    )}
                    <p className="text-sm text-gray-500">{donee.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeneficiarySection() {
  return (
    <section
      id="beneficiary"
      className="bg-red-700 py-20 text-white"
      aria-labelledby="beneficiary-heading"
    >
      <div className="@container text-center">
        <div className="px-4 @sm:mx-auto @sm:max-w-7xl">
          <h2
            id="beneficiary-heading"
            className="text-3xl font-bold tracking-tight"
          >
            Support Our Mission
          </h2>
          <div
            className="mx-auto mt-4 mb-6 h-1 w-12 rounded-full bg-white/80"
            aria-hidden="true"
          />
          <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg">
            If you wish to apply to TheCWF.org to donate to your foundation
            please review, complete and submit CWF Beneficiary Application to
            The Campbell Wallace Foundation, 27411 SW Campbell Lane, West Linn,
            OR. 97068.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="border border-white/70 bg-white/10 text-white backdrop-blur-xs hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <Link
              href="/CWFApplication.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CWF Beneficiary Application PDF (opens in a new tab)"
            >
              CWF Beneficiary Application
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="@container">
        <div className="px-4 @sm:mx-auto @sm:max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2
                id="contact-heading"
                className="text-3xl font-bold tracking-tight"
              >
                Get In Touch
              </h2>
              <div
                className="bg-primary mt-4 mb-6 h-1 w-12 rounded-full"
                aria-hidden="true"
              />
              <p className="mb-8 text-base text-gray-600 sm:text-lg">
                Have questions about our programs or how you can get involved?
                We&apos;d love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail
                    className="text-primary h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:hello@thecwf.org"
                    className="hover:text-primary rounded hover:underline focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                  >
                    hello@thecwf.org
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="@container">
        <div className="px-4 @sm:mx-auto @sm:max-w-7xl">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="CWF Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white"
                />
                <span className="text-lg font-bold tracking-tight text-white">
                  Campbell-Wallace Foundation
                </span>
              </div>
              <p className="text-sm">
                The Campbell-Wallace Foundation was founded in 1997 to support
                religious, charitable, scientific, literary or educational
                purposes, and for the prevention of cruelty to children and
                animals.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="mb-4 text-lg font-bold text-white">
                Public Notice
              </h3>
              <p className="text-sm">
                Notice is hereby given that the annual report and tax return on
                behalf of The Campbell-Wallace Foundation is available to the
                public. The registered office in Oregon for venue, and official
                publications purposes, shall be deemed to be in Clackamas
                County. Inquiries can be made c/o Campbell-Wallace Foundation,
                27411 SW Campbell Lane, West Linn, OR 97068.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
              <nav
                className="flex flex-col gap-2"
                aria-label="Footer navigation"
              >
                <Link
                  href="#about"
                  className="rounded text-sm hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-hidden"
                >
                  About Us
                </Link>
                <Link
                  href="#impact"
                  className="rounded text-sm hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-hidden"
                >
                  Our Impact
                </Link>
                <Link
                  href="#beneficiary"
                  className="rounded text-sm hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-hidden"
                >
                  Beneficiary Information
                </Link>
                <Link
                  href="#contact"
                  className="rounded text-sm hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-hidden"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} The Campbell Wallace Foundation. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipNavigation />
      <Header />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        {/*<TeamSection />*/}
        <BeneficiarySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
