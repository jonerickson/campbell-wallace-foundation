import ContactForm from "@/components/contact-form";
import MobileMenu from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import {
  Church,
  GraduationCap,
  Heart,
  Mail,
  Microscope,
  Users,
} from "lucide-react";

type Donor = {
  blurb: string;
  name: string;
  role: string;
  image: string;
  url?: string;
};

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  gradientColors: string;
};

const donees: Donor[] = [
  {
    blurb:
      "Creating healthy, self-sustaining communities by giving kids, parents and volunteers the tools they need to improve physical fitness, health and wellness.",
    name: "ReFit Portland",
    role: "Health & Wellness Organization",
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
      "Providing healthy, affordable meals and nutrition education to strengthen communities and improve access to quality food for all.",
    name: "W.A.G. – SNAX",
    role: "Nutrition & Community Organization",
    image: "/wag-snax-logo.png",
    url: "https://wag-snax.com/",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Wiley Leigh Campbell Jr.",
    role: "President",
    initials: "WC",
    gradientColors: "from-yellow-200 to-yellow-400",
  },
  {
    name: "Mary Erickson",
    role: "Secretary",
    initials: "ME",
    gradientColors: "from-yellow-100 to-yellow-300",
  },
  {
    name: "Tracy (Campbell) Parks",
    role: "Treasurer",
    initials: "TP",
    gradientColors: "from-yellow-50 to-yellow-200",
  },
  {
    name: "Ragan Borzick",
    role: "1st Vice President",
    initials: "RB",
    gradientColors: "from-yellow-300 to-yellow-500",
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CWF Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-base font-bold tracking-tight sm:text-xl">
            Campbell-Wallace Foundation
          </span>
        </div>
        <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
          <Link
            href="#about"
            className="rounded text-sm font-medium hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            About
          </Link>
          <Link
            href="#impact"
            className="rounded text-sm font-medium hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Impact
          </Link>
          <Link
            href="#beneficiary"
            className="rounded text-sm font-medium hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Beneficiary Information
          </Link>
          <Link
            href="#contact"
            className="rounded text-sm font-medium hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Contact
          </Link>
        </nav>
        <MobileMenu />
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
          className="object-cover brightness-[0.75]"
          priority
        />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center py-56 text-center text-white">
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-bold leading-8 tracking-tight sm:text-5xl md:text-7xl"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
        >
          Making a Difference Through Philanthropy
        </h1>
        <p
          className="mt-6 max-w-2xl text-lg"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
        >
          The Campbell Wallace Foundation is a 501(c)(3) non-profit organization
          dedicated to improving lives through education, community support, and
          charitable initiatives.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button className="bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-white focus:ring-offset-2">
            <Link href="#about">About</Link>
          </Button>
          <Button
            variant="secondary"
            className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            <Link href="#beneficiary">Beneficiary Information</Link>
          </Button>
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
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2
              id="about-heading"
              className="mb-6 text-3xl font-bold tracking-tight"
            >
              Our Mission
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              The Campbell-Wallace Foundation was founded in 1997 to support
              religious, charitable, scientific, literary or educational
              purposes, and for the prevention of cruelty to children and
              animals.
            </p>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
              <div className="flex items-center gap-2">
                <Church className="h-5 w-5 text-red-600" />
                <span className="font-medium">Religion</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                <span className="font-medium">Charity</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-red-600" />
                <span className="font-medium">Science</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-red-600" />
                <span className="font-medium">Education</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                <span className="font-medium">People</span>
              </div>
            </div>
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
    </section>
  );
}

function ImpactSection() {
  return (
    <section
      id="impact"
      className="bg-red-50 py-20"
      aria-labelledby="impact-heading"
    >
      <div className="container">
        <div className="mb-16 text-center">
          <h2
            id="impact-heading"
            className="mb-4 text-3xl font-bold tracking-tight"
          >
            Our Impact
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            See how our programs have made a difference in communities and
            individuals' lives.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {donees.map((donee, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="mb-4 text-gray-600">{donee.blurb}</p>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white p-2">
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
                      className="rounded font-medium hover:text-red-700 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      aria-label={`Visit ${donee.name} website`}
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
    </section>
  );
}

function TeamSection() {
  return (
    <section
      id="team"
      className="bg-white py-20"
      aria-labelledby="team-heading"
    >
      <div className="container">
        <div className="mb-16 text-center">
          <h2
            id="team-heading"
            className="mb-4 text-3xl font-bold tracking-tight"
          >
            Current Foundation Officers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            The CWF is a six-member board driven organization. Meet the
            dedicated individuals who make our mission possible.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div
                className={`mx-auto mb-4 h-64 w-64 rounded-full bg-gradient-to-br ${member.gradientColors} flex items-center justify-center shadow-lg`}
              >
                <span className="text-6xl font-bold text-gray-800">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="text-2xl font-bold">Family Foundation Members</div>
          <div className="mt-6">
            Wiley Leigh Campbell, Jr., Courtney Campbell, Mary Erickson, Tracy
            (Campbell) Parks, Ragan Borzcik, Cameron Wells, Tyler Wells, Dallas
            Troutman, Bailie Jo Ray, Ison Borzcik, Selka Borzcik, Lilas Borzcik,
            Ryleigh Grace Erickson, Sasha Wells
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
      <div className="container text-center">
        <h2
          id="beneficiary-heading"
          className="mb-4 text-3xl font-bold tracking-tight"
        >
          Support Our Mission
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          If you wish to apply to TheCWF.org to donate to your foundation please
          review, complete and submit CWF Beneficiary Application to The
          Campbell Wallace Foundation, 27411 SW Campbell Lane, West Linn, OR.
          97068.
        </p>
        <Button
          variant="secondary"
          className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          <Link
            href="/CWFApplication.pdf"
            target="_blank"
            aria-label="Download CWF Beneficiary Application PDF"
          >
            CWF Beneficiary Application
          </Link>
        </Button>
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
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2
              id="contact-heading"
              className="mb-6 text-3xl font-bold tracking-tight"
            >
              Get In Touch
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Have questions about our programs or how you can get involved?
              We'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span>hello@thecwf.org</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container">
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
            <h3 className="mb-4 text-lg font-bold text-white">Public Notice</h3>
            <p className="text-sm">
              Notice is hereby given that the annual report and tax return on
              behalf of The Campbell-Wallace Foundation is available to the
              public. The registered office in Oregon for venue, and official
              publications purposes, shall be deemed to be in Clackamas County.
              Inquiries can be made c/o Campbell-Wallace Foundation, 27411 SW
              Campbell Lane, West Linn, OR 97068.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                href="#about"
                className="rounded text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                About Us
              </Link>
              <Link
                href="#impact"
                className="rounded text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Our Impact
              </Link>
              <Link
                href="#beneficiary"
                className="rounded text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Beneficiary Information
              </Link>
              <Link
                href="#contact"
                className="rounded text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
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
