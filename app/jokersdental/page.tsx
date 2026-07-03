import Image from 'next/image';
import Link from 'next/link';

export default function JokersDental() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-purple-200 px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">
            JOKER'S <span className="text-purple-600">DENTAL</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="hover:text-purple-600 transition font-medium">Services</a>
            <a href="#about" className="hover:text-purple-600 transition font-medium">About Us</a>
            <a href="#contact" className="hover:text-purple-600 transition font-medium">Contact</a>
            <a href="tel:5558675309" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-bold transition">
              (555) 867-5309
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/JokersDental.png"
            alt="Joker's Dental"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-purple-200 font-bold mb-2 text-lg">QUALITY DENTAL CARE</p>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              Let's Put A<br/>
              <span className="text-purple-200">SMILE</span><br/>
              On That Face.
            </h1>
            <p className="text-xl text-purple-100 mb-8">Quality dental care in a comfortable, friendly environment.</p>
            
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded font-bold transition">
                Schedule Appointment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded font-bold transition">
                Call Us Today
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Placeholder */}
            <div className="bg-purple-500/20 rounded-lg h-64 flex items-center justify-center border-2 border-white/30">
              <p className="text-white/50">Professional Dental Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-100 py-8 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-2">✓</p>
            <p className="font-bold text-slate-900">Licensed & Insured</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-2">⏱️</p>
            <p className="font-bold text-slate-900">On-Time Guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-2">👍</p>
            <p className="font-bold text-slate-900">Satisfaction Guaranteed</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-2">📞</p>
            <p className="font-bold text-slate-900">24/7 Emergency Care</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
          
          <div className="grid grid-cols-5 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-lg font-bold mb-2 text-purple-900">Preventive Care</h3>
              <p className="text-sm text-slate-600">Regular cleanings and exams to keep your smile healthy.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-bold mb-2 text-purple-900">Cosmetic Dentistry</h3>
              <p className="text-sm text-slate-600">Whitening, veneers, and more to enhance your smile.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🦁</div>
              <h3 className="text-lg font-bold mb-2 text-purple-900">Restorative Care</h3>
              <p className="text-sm text-slate-600">Fillings, crowns, implants, and lasting solutions.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-lg font-bold mb-2 text-purple-900">Family Dentistry</h3>
              <p className="text-sm text-slate-600">Gentle care for patients of all ages. Same-day appointments.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-lg font-bold mb-2 text-purple-900">Emergency Care</h3>
              <p className="text-sm text-slate-600">We're here when you need us. Quick and compassionate care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Welcome to Joker's Dental</h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-purple-900 mb-6">Your Smile. Our Priority.</h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                At Joker's Dental, we believe that a healthy smile can change everything. Our team is dedicated to providing top-quality dental care with a gentle touch. We take the time to listen, educate, and create personalized treatment plans that fit your needs.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded font-bold transition">
                Learn More About Us
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-purple-600 mb-2">15+</p>
                  <p className="text-slate-600">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-purple-600 mb-2">5★</p>
                  <p className="text-slate-600">Average Rating</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-purple-600 mb-2">3,000+</p>
                  <p className="text-slate-600">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-24 px-8 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">New Patient Special</h2>
          <p className="text-2xl mb-12">Complete Exam & Cleaning</p>
          <div className="bg-white text-purple-600 inline-block px-12 py-8 rounded-lg mb-8">
            <p className="text-5xl font-black mb-2">$99</p>
            <p className="text-lg">Regular Value: $250</p>
          </div>
          <p className="text-lg text-purple-100 mb-8">For new patients only. Cannot be combined with other offers.</p>
          <button className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-lg font-bold text-lg transition">
            Claim Your Special Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Contact Us</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <p className="text-5xl mb-4">📍</p>
              <h3 className="text-xl font-bold mb-4 text-purple-900">Location</h3>
              <p className="text-slate-700">123 Joker Way<br/>Gotham City, GC 12345</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <p className="text-5xl mb-4">📞</p>
              <h3 className="text-xl font-bold mb-4 text-purple-900">Phone</h3>
              <p className="text-slate-700 mb-4">(555) 867-5309</p>
              <p className="text-sm text-slate-600">Available 24/7 for emergencies</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <p className="text-5xl mb-4">📧</p>
              <h3 className="text-xl font-bold mb-4 text-purple-900">Email</h3>
              <p className="text-slate-700">smile@jokersdental.com</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded font-bold transition">
                Schedule Appointment
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded font-bold transition">
                Call Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-8 py-12 text-center">
        <p className="font-bold text-lg mb-2">JOKER'S DENTAL</p>
        <p>© 2026 Joker's Dental. Your Smile, Our Priority.</p>
      </footer>
    </div>
  );
}