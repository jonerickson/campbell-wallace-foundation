import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Microscope,
  Church,
  Heart,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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
            <span className="text-xl font-bold tracking-tight">
              Campbell-Wallace Foundation
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-red-700"
            >
              About
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium hover:text-red-700"
            >
              Impact
            </Link>
            <Link
              href="#beneficiary"
              className="text-sm font-medium hover:text-red-700"
            >
              Beneficiary Information
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-red-700"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.png"
              alt="Hands exchanging a heart"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-32 text-center text-white">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Making a Difference Through Philanthropy
            </h1>
            <p className="mt-6 max-w-2xl text-lg">
              The Campbell Wallace Foundation is a 501(c)(3) non-profit
              organization dedicated to improving lives through education,
              community support, and charitable initiatives.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="#about">About</Link>
              </Button>
              <Button
                variant="secondary"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white"
              >
                <Link href="#beneficiary">Beneficiary Information</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  The Campbell-Wallace Foundation was founded in 1997 to support
                  religious, charitable, scientific, literary or educational
                  purposes, and for the prevention of cruelty to children and
                  animals.
                </p>
                <div className="grid gap-4 md:grid-cols-5 grid-cols-3">
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
              <div className="relative h-[400px] rounded-lg overflow-hidden">
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

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-red-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Impact
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                See how our programs have made a difference in communities and
                individuals' lives.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600 mb-4">
                  "The education program has been life-changing for my daughter.
                  She's more confident, engaged in learning, and excited about
                  her future opportunities."
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Parent"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600 mb-4">
                  "The resources provided by the Campbell Wallace Foundation
                  have helped our community center thrive. We're now able to
                  offer more programs to those who need them most."
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Program participant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Michael Thompson</p>
                    <p className="text-sm text-gray-500">Program Participant</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600 mb-4">
                  "The support network I've found through the Foundation has
                  been invaluable. It's comforting to connect with others who
                  share the same vision for community improvement."
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Program participant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500">Program Participant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Current Foundation Officers
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Meet the dedicated individuals who make our mission possible.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Wiley Leigh Campbell Jr.</h3>
                <p className="text-gray-600">President</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Mary Erickson</h3>
                <p className="text-gray-600">Secretary</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Tracy (Campbell) Parks</h3>
                <p className="text-gray-600">Treasurer</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Ragan Borzick</h3>
                <p className="text-gray-600">1st Vice President</p>
              </div>
            </div>
            <div className="text-center mt-16">
              <div className="font-bold text-2xl">
                Family Foundation Members
              </div>
              <div className="mt-6">
                Wiley Leigh Campbell, Jr., Courtney Campbell, Mary Erickson,
                Tracy (Campbell) Parks, Ragan Borzcik, Cameron Wells, Tyler
                Wells, Dallas Troutman, Bailie Jo Ray, Ison Borzcik, Selka
                Borzcik, Lilas Borzcik, Ryleigh Grace Erickson, Sasha Wells
              </div>
            </div>
          </div>
        </section>

        {/* Donation CTA */}
        <section id="beneficiary" className="py-20 bg-red-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Support Our Mission
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              If you wish to apply to TheCWF.org to donate to your foundation
              please review, complete and submit CWF Beneficiary Application to
              The Campbell Wallace Foundation, 27411 SW Campbell Lane, West
              Linn, OR. 97068.
            </p>
            <Button
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white"
            >
              <Link href="/CWFApplication.pdf" target="_blank">
                CWF Beneficiary Application
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about our programs or how you can get involved?
                  We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-600" />
                    <span>info@thecwf.org</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <span>(541) 788-7001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span>27411 SW Campbell Lane, West Linn, OR 97068</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
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
              <h3 className="text-lg font-bold mb-4 text-white">
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
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#about" className="text-sm hover:text-white">
                  About Us
                </Link>
                <Link href="#impact" className="text-sm hover:text-white">
                  Our Impact
                </Link>
                <Link href="#beneficiary" className="text-sm hover:text-white">
                  Beneficiary Information
                </Link>
                <Link href="#contact" className="text-sm hover:text-white">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} The Campbell Wallace Foundation. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
