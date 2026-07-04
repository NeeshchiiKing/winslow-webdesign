"use client";

import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Smile,
  Stethoscope,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* ===================== */}
      {/* Top Bar */}
      {/* ===================== */}

      <div className="bg-[#3F235A] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between">

          <div className="flex gap-8">

            <div className="flex items-center gap-2">
              <Phone size={15} />
              <span>(928) 555-2026</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <MapPin size={15} />
              <span>123 Smile Avenue, Gotham AZ</span>
            </div>

          </div>

          <div className="hidden md:flex items-center gap-2">
            <Clock size={15} />
            <span>Mon–Fri 8:00 AM - 5:00 PM</span>
          </div>

        </div>
      </div>

      {/* ===================== */}
      {/* Navigation */}
      {/* ===================== */}

      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b z-50">

        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-black tracking-tight text-[#3F235A]">
              Joker's Dental
            </h1>

            <p className="text-sm text-[#7BC142] font-semibold">
              Let's Put A Smile On That Face
            </p>

          </div>

          <ul className="hidden lg:flex gap-10 font-medium">

            <li className="hover:text-[#7BC142] cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#7BC142] cursor-pointer">
              Services
            </li>

            <li className="hover:text-[#7BC142] cursor-pointer">
              About
            </li>

            <li className="hover:text-[#7BC142] cursor-pointer">
              Reviews
            </li>

            <li className="hover:text-[#7BC142] cursor-pointer">
              Contact
            </li>

          </ul>

          <button className="bg-[#7BC142] hover:bg-green-600 transition px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg">

            <Calendar size={18} />

            Schedule

          </button>

        </div>

      </nav>

      {/* ===================== */}
      {/* Hero */}
      {/* ===================== */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#3F235A] via-[#4B2969] to-[#3F235A]" />

        <div className="absolute inset-0 opacity-10">

          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -left-32 top-16"></div>

          <div className="absolute w-80 h-80 bg-[#7BC142] rounded-full blur-3xl right-0 bottom-0"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-5 py-2 text-white mb-8">

              <Sparkles size={16} />

              Premium Family Dentistry

            </div>

            <h2 className="text-white text-6xl lg:text-7xl font-black leading-tight">

              LET'S PUT
              <br />

              A
              <span className="text-[#7BC142]">
                {" "}SMILE{" "}
              </span>

              <br />

              ON THAT
              <br />

              FACE.

            </h2>

            <p className="text-white/80 text-xl mt-8 max-w-xl leading-relaxed">

              From cleanings to complete smile makeovers,
              Joker's Dental provides comfortable,
              compassionate care using the latest dental
              technology for patients of every age.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="bg-[#7BC142] hover:bg-green-600 transition px-8 py-4 rounded-full text-white font-bold flex items-center gap-2">

                Schedule Appointment

                <ArrowRight size={18} />

              </button>

              <button className="border-2 border-white text-white hover:bg-white hover:text-[#3F235A] transition px-8 py-4 rounded-full font-bold">

                Learn More

              </button>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">

              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
                alt="Dentist"
                className="w-full h-[650px] object-cover"
              />

            </div>

            <div className="absolute -bottom-10 -left-10 bg-white rounded-3xl shadow-xl p-8 w-72">

              <div className="flex items-center gap-3">

                <div className="bg-[#7BC142] rounded-full p-4 text-white">

                  <Smile size={28} />

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    5,000+
                  </h3>

                  <p className="text-gray-500">
                    Happy Smiles
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Curved Bottom */}

        <svg
          viewBox="0 0 1440 180"
          className="block w-full"
          fill="white"
        >
          <path d="M0,160 C280,20 1150,260 1440,90 L1440,181 L0,181Z" />
        </svg>

      </section>

      {/* ===================== */}
      {/* Services */}
      {/* ===================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#7BC142] font-bold uppercase tracking-widest">

              Our Services

            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-3">

              Dentistry Designed Around You

            </h2>

            <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">

              Whether you need preventive care or a complete smile makeover,
              our team is here to help you feel comfortable every step of the way.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: ShieldCheck,
                title: "Preventive Care",
                text: "Routine exams, cleanings and oral health education.",
              },
              {
                icon: Sparkles,
                title: "Cosmetic Dentistry",
                text: "Whitening, veneers and beautiful smile transformations.",
              },
              {
                icon: HeartPulse,
                title: "Emergency Care",
                text: "Same-day appointments when accidents happen.",
              },
              {
                icon: Smile,
                title: "Family Dentistry",
                text: "Dental care for children, adults and seniors.",
              },
              {
                icon: Stethoscope,
                title: "Dental Implants",
                text: "Permanent tooth replacement with natural results.",
              },
              {
                icon: Star,
                title: "Orthodontics",
                text: "Straighten your smile with modern treatments.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border p-10 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition duration-300"
              >
                <div className="bg-[#3F235A] text-white w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#7BC142] transition">
                  <service.icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* About Section */}
      {/* ===================== */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* Images */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
              alt="Dental Office"
              className="rounded-[40px] shadow-2xl w-full"
            />

            <div className="absolute -bottom-8 -right-8 bg-[#3F235A] text-white rounded-3xl p-8 shadow-xl">

              <h3 className="text-4xl font-black">
                20+
              </h3>

              <p className="mt-2">
                Years of Experience
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-widest font-bold text-[#7BC142]">
              About Joker's Dental
            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-4 leading-tight">

              Every Smile
              <br />
              Has A Story.

            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-8">

              At Joker's Dental, we believe going to the dentist
              shouldn't feel stressful. Our mission is to create
              healthy smiles in a warm, relaxing environment using
              advanced technology and gentle care.

            </p>

            <p className="text-gray-600 mt-6 text-lg leading-8">

              Whether you're visiting for a routine cleaning,
              cosmetic treatment, or emergency appointment,
              you'll always be treated like family.

            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Gentle Family Dentistry",
                "Digital X-Rays",
                "Flexible Financing",
                "Emergency Visits",
                "Modern Equipment",
                "Comfort First",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="w-3 h-3 rounded-full bg-[#7BC142]" />

                  <span className="font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <button className="mt-12 bg-[#3F235A] hover:bg-[#553072] transition text-white px-8 py-4 rounded-full font-bold">

              Meet Our Team

            </button>

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Why Choose Us */}
      {/* ===================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase font-bold tracking-widest text-[#7BC142]">
              Why Patients Choose Us
            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-4">

              Dentistry You'll Actually Enjoy

            </h2>

          </div>

          <div className="grid lg:grid-cols-4 gap-8 mt-20">

            {[
              {
                title: "Modern Technology",
                text: "State-of-the-art digital equipment for precise treatment.",
              },
              {
                title: "Comfort Focused",
                text: "Relaxing rooms designed to make every visit enjoyable.",
              },
              {
                title: "Experienced Team",
                text: "Friendly professionals who truly care about your smile.",
              },
              {
                title: "Affordable Care",
                text: "Flexible payment options for every budget.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="bg-white border rounded-3xl p-10 shadow hover:shadow-xl transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#7BC142] text-white flex items-center justify-center text-3xl mb-8">

                  🦷

                </div>

                <h3 className="font-bold text-2xl">

                  {item.title}

                </h3>

                <p className="text-gray-500 mt-4 leading-7">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Meet Our Team */}
      {/* ===================== */}

      <section className="py-24 bg-[#3F235A]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#7BC142] font-bold">

              Meet The Team

            </p>

            <h2 className="text-white text-5xl font-black mt-4">

              The Faces Behind The Smiles

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

            {[
              "Dr. Jack Napier",
              "Dr. Harley Quinn",
              "Dr. Edward Nygma",
              "Dr. Pamela Isley",
            ].map((doctor, i) => (

              <div
                key={doctor}
                className="bg-white rounded-[30px] overflow-hidden shadow-xl"
              >

                <img
                  src={`https://picsum.photos/500/600?random=${i + 10}`}
                  alt={doctor}
                  className="w-full h-80 object-cover"
                />

                <div className="p-8">

                  <h3 className="font-bold text-2xl">

                    {doctor}

                  </h3>

                  <p className="text-[#7BC142] font-semibold mt-2">

                    General Dentistry

                  </p>

                  <p className="text-gray-500 mt-5">

                    Dedicated to helping every patient leave
                    with a healthier, brighter smile.

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Smile Gallery */}
      {/* ===================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase font-bold tracking-widest text-[#7BC142]">

              Smile Gallery

            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-4">

              Beautiful Smiles Every Day

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[1,2,3,4,5,6].map((img) => (

              <div
                key={img}
                className="overflow-hidden rounded-[30px] shadow-xl group"
              >

                <img
                  src={`https://picsum.photos/700/700?random=${img + 30}`}
                  alt="Gallery"
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Testimonials */}
      {/* ===================== */}

      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-widest font-bold text-[#7BC142]">

              Patient Reviews

            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-4">

              Thousands Of Happy Smiles

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                name: "Bruce Wayne",
                review:
                  "The friendliest dental office I've ever visited. The staff made me feel completely at ease.",
              },
              {
                name: "Selina Kyle",
                review:
                  "Professional, modern, and surprisingly relaxing. I actually look forward to my appointments.",
              },
              {
                name: "Jim Gordon",
                review:
                  "Excellent care from start to finish. Highly recommended for the whole family.",
              },
            ].map((item) => (

              <div
                key={item.name}
                className="bg-white rounded-[30px] p-10 shadow-lg"
              >

                <div className="text-yellow-400 text-2xl mb-6">
                  ★★★★★
                </div>

                <p className="text-gray-600 leading-8 italic">

                  "{item.review}"

                </p>

                <div className="mt-8">

                  <h4 className="font-bold text-xl">

                    {item.name}

                  </h4>

                  <p className="text-gray-500">
                    Verified Patient
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Insurance */}
      {/* ===================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-widest font-bold text-[#7BC142]">
              Insurance Accepted
            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-4">
              We Work With Most Major Providers
            </h2>

            <p className="text-gray-500 mt-6 max-w-3xl mx-auto">
              We believe quality dental care should be affordable.
              Our office proudly accepts many insurance providers and
              offers flexible financing options.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">

            {[
              "Delta Dental",
              "MetLife",
              "Aetna",
              "Cigna",
              "Guardian",
              "Humana",
            ].map((company) => (

              <div
                key={company}
                className="h-32 rounded-3xl border bg-gray-50 flex items-center justify-center shadow-sm hover:shadow-lg transition"
              >

                <span className="font-bold text-xl text-gray-400">
                  {company}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* FAQ */}
      {/* ===================== */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-widest font-bold text-[#7BC142]">
              Frequently Asked Questions
            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-4">
              Questions We Hear Every Day
            </h2>

          </div>

          <div className="space-y-6 mt-20">

            {[
              {
                q: "Do you accept new patients?",
                a: "Absolutely! We welcome patients of all ages and families.",
              },
              {
                q: "Do you offer emergency appointments?",
                a: "Yes. Same-day emergency visits are available whenever possible.",
              },
              {
                q: "Do you accept insurance?",
                a: "We accept most major insurance plans and offer financing.",
              },
              {
                q: "Do you treat children?",
                a: "Yes! Family dentistry is one of our specialties.",
              },
            ].map((faq) => (

              <div
                key={faq.q}
                className="bg-white rounded-3xl shadow p-8"
              >

                <h3 className="font-bold text-2xl text-[#3F235A]">
                  {faq.q}
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Contact */}
      {/* ===================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-widest font-bold text-[#7BC142]">
              Contact Us
            </p>

            <h2 className="text-5xl font-black text-[#3F235A] mt-4">
              Let's Put A Smile On That Face.
            </h2>

            <p className="text-gray-600 mt-8 leading-8">
              Have questions? Need to schedule an appointment?
              Our friendly team is ready to help you every step
              of the way.
            </p>

            <div className="space-y-8 mt-12">

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#3F235A] text-white flex items-center justify-center">

                  <Phone size={28} />

                </div>

                <div>

                  <h3 className="font-bold">
                    Phone
                  </h3>

                  <p className="text-gray-500">
                    (928) 555-2026
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#3F235A] text-white flex items-center justify-center">

                  <MapPin size={28} />

                </div>

                <div>

                  <h3 className="font-bold">
                    Address
                  </h3>

                  <p className="text-gray-500">
                    123 Smile Avenue
                    <br />
                    Gotham, Arizona
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#3F235A] text-white flex items-center justify-center">

                  <Clock size={28} />

                </div>

                <div>

                  <h3 className="font-bold">
                    Office Hours
                  </h3>

                  <p className="text-gray-500">
                    Monday - Friday
                    <br />
                    8:00 AM - 5:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-[40px] shadow-2xl p-10 border">

            <h3 className="text-3xl font-black text-[#3F235A] mb-8">
              Request An Appointment
            </h3>

            <div className="space-y-5">

              <input
                className="w-full rounded-xl border p-4"
                placeholder="Full Name"
              />

              <input
                className="w-full rounded-xl border p-4"
                placeholder="Email Address"
              />

              <input
                className="w-full rounded-xl border p-4"
                placeholder="Phone Number"
              />

              <textarea
                rows={5}
                className="w-full rounded-xl border p-4"
                placeholder="How can we help?"
              />

              <button className="w-full bg-[#7BC142] hover:bg-green-600 transition text-white py-4 rounded-full font-bold">

                Schedule Consultation

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Map Section */}
      {/* ===================== */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] overflow-hidden shadow-2xl border">

            <div className="h-[500px] bg-gradient-to-br from-[#3F235A] via-[#5A367B] to-[#7BC142] flex flex-col items-center justify-center text-white">

              <MapPin size={80} />

              <h2 className="text-5xl font-black mt-8">
                Find Our Office
              </h2>

              <p className="mt-6 text-xl opacity-90">
                123 Smile Avenue • Gotham, Arizona
              </p>

              <button className="mt-10 bg-white text-[#3F235A] px-8 py-4 rounded-full font-bold hover:scale-105 transition">

                Get Directions

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Final CTA */}
      {/* ===================== */}

      <section className="py-24 bg-[#3F235A]">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-6xl font-black text-white leading-tight">

            Ready For
            <br />
            A Healthier Smile?

          </h2>

          <p className="text-white/80 text-xl mt-8 max-w-3xl mx-auto">

            Experience modern dentistry with a team that genuinely
            cares about your comfort and confidence.

          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <button className="bg-[#7BC142] hover:bg-green-600 transition text-white px-10 py-5 rounded-full font-bold">

              Schedule Appointment

            </button>

            <button className="border-2 border-white hover:bg-white hover:text-[#3F235A] transition text-white px-10 py-5 rounded-full font-bold">

              Call (928) 555-2026

            </button>

          </div>

        </div>

      </section>

      {/* ===================== */}
      {/* Footer */}
      {/* ===================== */}

      <footer className="bg-[#241433] text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* Brand */}

            <div>

              <h2 className="text-4xl font-black">
                Joker's Dental
              </h2>

              <p className="text-[#7BC142] font-semibold mt-2">
                Let's Put A Smile On That Face.
              </p>

              <p className="text-white/70 leading-8 mt-8">

                Modern dentistry designed around your comfort,
                confidence, and lifelong oral health.

              </p>

            </div>

            {/* Services */}

            <div>

              <h3 className="font-bold text-2xl mb-8">
                Services
              </h3>

              <ul className="space-y-4 text-white/70">

                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Teeth Whitening</li>
                <li>Dental Implants</li>
                <li>Emergency Care</li>

              </ul>

            </div>

            {/* Company */}

            <div>

              <h3 className="font-bold text-2xl mb-8">
                Company
              </h3>

              <ul className="space-y-4 text-white/70">

                <li>About Us</li>
                <li>Meet The Team</li>
                <li>Testimonials</li>
                <li>Insurance</li>
                <li>Contact</li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="font-bold text-2xl mb-8">
                Contact
              </h3>

              <div className="space-y-5 text-white/70">

                <p>(928) 555-2026</p>

                <p>
                  123 Smile Avenue
                  <br />
                  Gotham, Arizona
                </p>

                <p>
                  Mon–Fri
                  <br />
                  8:00 AM – 5:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="border-t border-white/10 mt-20 pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">

            <p className="text-white/50">

              © 2026 Joker's Dental.
              All Rights Reserved.

            </p>

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#7BC142] transition flex items-center justify-center cursor-pointer">

                f

              </div>

              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#7BC142] transition flex items-center justify-center cursor-pointer">

                X

              </div>

              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#7BC142] transition flex items-center justify-center cursor-pointer">

                📷

              </div>

              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#7BC142] transition flex items-center justify-center cursor-pointer">

                ▶

              </div>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}