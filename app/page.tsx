import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar, ArrowRight, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="CWF Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold tracking-tight">CWF</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#programs" className="text-sm font-medium hover:text-primary">
              Programs
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:text-primary">
              Impact
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Our Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="bg-teal-600 hover:bg-teal-700">Donate Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="People enjoying outdoor activities"
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
              The Campbell Wallace Foundation is a 501(c)(3) non-profit organization dedicated to improving lives
              through education, community support, and charitable initiatives.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Our Programs</Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  The Campbell Wallace Foundation is a 501(c)(3) non-profit organization committed to making a positive
                  impact in our communities through strategic philanthropy and support programs.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that by providing opportunities for education, community engagement, and targeted support,
                  we can help individuals lead fuller, more enriched lives.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-teal-600" />
                    <span className="font-medium">Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    <span className="font-medium">Community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <span className="font-medium">Activities</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Foundation activities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Programs</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                We offer a variety of programs designed to enhance lives through education, community support, and
                charitable initiatives.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Recreation Program */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Recreation activities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Education Initiatives</h3>
                  <p className="text-gray-600 mb-4">
                    Our education programs provide resources and opportunities to help individuals reach their full
                    potential through learning and skill development.
                  </p>
                  <Link href="#" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Education Program */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Education workshops"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Community Support</h3>
                  <p className="text-gray-600 mb-4">
                    We provide community resources and support to help strengthen neighborhoods and create positive
                    environments for families and individuals.
                  </p>
                  <Link href="#" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Support Program */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Support groups"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Charitable Grants</h3>
                  <p className="text-gray-600 mb-4">
                    Our grant program connects resources with needs, supporting other non-profits and initiatives that
                    align with our mission and values.
                  </p>
                  <Link href="#" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-teal-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Impact</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                See how our programs have made a difference in communities and individuals' lives.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600 mb-4">
                  "The education program has been life-changing for my daughter. She's more confident, engaged in
                  learning, and excited about her future opportunities."
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Parent" fill className="object-cover" />
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
                  "The resources provided by the Campbell Wallace Foundation have helped our community center thrive.
                  We're now able to offer more programs to those who need them most."
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
                  "The support network I've found through the Foundation has been invaluable. It's comforting to connect
                  with others who share the same vision for community improvement."
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Meet the dedicated individuals who make our mission possible.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=256&width=256" alt="Team member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Lisa Campbell</h3>
                <p className="text-gray-600">Executive Director</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=256&width=256" alt="Team member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-gray-600">Program Director</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=256&width=256" alt="Team member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Maria Garcia</h3>
                <p className="text-gray-600">Education Coordinator</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=256&width=256" alt="Team member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">David Johnson</h3>
                <p className="text-gray-600">Outreach Specialist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation CTA */}
        <section className="py-20 bg-teal-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Support Our Mission</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Your donation helps us continue providing valuable programs and resources to communities in need.
            </p>
            <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">Donate Now</Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about our programs or how you can get involved? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-teal-600" />
                    <span>info@thecwf.org</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-teal-600" />
                    <span>(888) 871-2062</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span>P.O. Box 1052, Burlington, MA 01803</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <Link
                    href="https://www.facebook.com/TheCysticFibrosisWellnessFoundation/"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 hover:bg-teal-200"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 hover:bg-teal-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 hover:bg-teal-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
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
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="CWF Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white"
                />
                <span className="text-xl font-bold tracking-tight text-white">CWF</span>
              </div>
              <p className="text-sm">
                The Campbell Wallace Foundation is a 501(c)(3) non-profit organization dedicated to improving lives
                through education, community support, and charitable initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#about" className="text-sm hover:text-white">
                  About Us
                </Link>
                <Link href="#programs" className="text-sm hover:text-white">
                  Our Programs
                </Link>
                <Link href="#impact" className="text-sm hover:text-white">
                  Our Impact
                </Link>
                <Link href="#team" className="text-sm hover:text-white">
                  Our Team
                </Link>
                <Link href="#contact" className="text-sm hover:text-white">
                  Contact Us
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter to stay updated on our programs and events.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                  placeholder="Your email"
                />
                <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} The Campbell Wallace Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

