import Image from 'next/image';
import Link from 'next/link';

export default function PlumberBros() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-red-600 px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black">
            PLUMBER <span className="text-red-600">BROS</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="hover:text-red-600 transition font-bold">Services</a>
            <a href="#about" className="hover:text-red-600 transition font-bold">About</a>
            <a href="#contact" className="hover:text-red-600 transition font-bold">Contact</a>
            <a href="tel:5558675309" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition">
              CALL NOW
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/PlumberBros.png"
            alt="Plumber Bros"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-red-200 font-bold mb-2 text-lg">FAST • RELIABLE • HONEST</p>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              Your Plumbing<br/>
              <span className="text-lime-300">Problem Solved.</span>
            </h1>
            <p className="text-xl text-red-100 mb-8">Same-day service. No hidden fees. We keep the mess, not your wallet.</p>
            
            <div className="flex gap-4 flex-wrap">
              <button className="bg-lime-400 text-red-900 hover:bg-lime-300 px-8 py-3 rounded font-bold transition text-lg">
                Schedule Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded font-bold transition">
                24/7 Emergency
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Placeholder */}
            <div className="bg-red-500/20 rounded-lg h-64 flex items-center justify-center border-4 border-lime-400">
              <p className="text-white/60 text-center">Licensed Plumbers Ready to Help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-lime-50 py-8 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl mb-2 font-bold text-red-600">✓</p>
            <p className="font-bold">Licensed & Insured</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl mb-2 font-bold text-red-600">⚡</p>
            <p className="font-bold">Same-Day Service</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl mb-2 font-bold text-red-600">💰</p>
            <p className="font-bold">Transparent Pricing</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl mb-2 font-bold text-red-600">📞</p>
            <p className="font-bold">24/7 Emergency</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">What We Fix</h2>
          <p className="text-center text-slate-600 mb-16 text-lg">From leaky faucets to burst pipes, we handle it all</p>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white border-4 border-red-600 p-8 rounded-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🚰</div>
              <h3 className="text-2xl font-bold mb-3 text-red-600">Faucets & Fixtures</h3>
              <p className="text-slate-600">Leaky faucets, dripping showers, and worn fixtures replaced fast.</p>
            </div>

            <div className="bg-white border-4 border-red-600 p-8 rounded-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🚽</div>
              <h3 className="text-2xl font-bold mb-3 text-red-600">Toilet Repair</h3>
              <p className="text-slate-600">Running toilets, clogs, and tank issues fixed same-day.</p>
            </div>

            <div className="bg-white border-4 border-red-600 p-8 rounded-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-3 text-red-600">Drain Cleaning</h3>
              <p className="text-slate-600">Clogged drains cleared with professional equipment.</p>
            </div>

            <div className="bg-white border-4 border-red-600 p-8 rounded-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3 text-red-600">Pipe Repair</h3>
              <p className="text-slate-600">Burst pipes, leaks, and corrosion fixed quickly.</p>
            </div>

            <div className="bg-white border-4 border-red-600 p-8 rounded-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🚿</div>
              <h3 className="text-2xl font-bold mb-3 text-red-600">Water Heaters</h3>
              <p className="text-slate-600">Installation, repair, and maintenance services.</p>
            </div>

            <div className="bg-white border-4 border-red-600 p-8 rounded-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3 text-red-600">New Installation</h3>
              <p className="text-slate-600">Bathroom and kitchen plumbing installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-red-900">Why Choose Plumber Bros?</h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-lime-500 text-3xl font-bold">✓</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-red-700">Fast Response Time</h3>
                    <p className="text-slate-700">We answer our phones and arrive within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-lime-500 text-3xl font-bold">✓</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-red-700">Honest Pricing</h3>
                    <p className="text-slate-700">Free estimates. No hidden fees. Transparent rates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-lime-500 text-3xl font-bold">✓</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-red-700">Licensed & Insured</h3>
                    <p className="text-slate-700">Fully licensed plumbers backed by insurance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-lime-500 text-3xl font-bold">✓</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-red-700">Warranty Guaranteed</h3>
                    <p className="text-slate-700">All work backed by our satisfaction guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <h3 className="text-3xl font-bold text-red-900 mb-8">By The Numbers</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-5xl font-black text-red-600 mb-2">20+</p>
                  <p className="text-slate-700 text-lg">Years of Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-red-600 mb-2">5,000+</p>
                  <p className="text-slate-700 text-lg">Happy Customers</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-red-600 mb-2">5★</p>
                  <p className="text-slate-700 text-lg">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-24 px-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">LIMITED TIME OFFER</h2>
          <p className="text-2xl mb-12">First Time Customers</p>
          <div className="bg-lime-400 text-red-900 inline-block px-12 py-8 rounded-lg mb-8">
            <p className="text-5xl font-black mb-2">15% OFF</p>
            <p className="text-xl font-bold">Any Service</p>
          </div>
          <p className="text-lg text-red-100 mb-8">No coupon needed. Mention this offer when you call.</p>
          <button className="bg-lime-400 text-red-900 hover:bg-lime-300 px-10 py-4 rounded-lg font-bold text-lg transition">
            Call Us Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Contact Plumber Bros</h2>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-lg text-center border-4 border-red-600">
              <p className="text-5xl mb-4">📍</p>
              <h3 className="text-2xl font-bold mb-4 text-red-700">Location</h3>
              <p className="text-slate-700 text-lg">789 Pipe Lane<br/>Portland, ME 04101</p>
            </div>

            <div className="bg-red-50 p-8 rounded-lg text-center border-4 border-red-600">
              <p className="text-5xl mb-4">📞</p>
              <h3 className="text-2xl font-bold mb-4 text-red-700">Phone</h3>
              <p className="text-slate-700 text-lg font-bold mb-2">(555) 867-5309</p>
              <p className="text-sm text-slate-600">24/7 Emergency Line</p>
            </div>

            <div className="bg-red-50 p-8 rounded-lg text-center border-4 border-red-600">
              <p className="text-5xl mb-4">⏰</p>
              <h3 className="text-2xl font-bold mb-4 text-red-700">Hours</h3>
              <p className="text-slate-700 text-lg">Mon-Fri: 7am-9pm<br/>Sat-Sun: 8am-8pm</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded font-bold transition text-lg">
                Schedule Now
              </button>
              <button className="border-4 border-red-600 text-red-600 hover:bg-red-50 px-10 py-4 rounded font-bold transition text-lg">
                24/7 Emergency
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white px-8 py-12 text-center">
        <p className="font-bold text-2xl mb-2">PLUMBER BROS</p>
        <p className="text-lg">© 2026 Plumber Bros. Fast • Reliable • Honest</p>
      </footer>
    </div>
  );
}