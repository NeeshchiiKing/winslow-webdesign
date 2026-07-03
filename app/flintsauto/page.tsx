import Image from 'next/image';
import Link from 'next/link';

export default function FlintsAuto() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-slate-950 border-b border-orange-600 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black">
            FLINT'S <span className="text-orange-600">AUTO</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="hover:text-orange-600 transition">Services</a>
            <a href="#about" className="hover:text-orange-600 transition">About</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded font-bold transition">
              (555) 867-5309
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/FlintsAuto.png"
            alt="Flint's Auto"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-8 grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-600 font-bold mb-2">LOCAL SERVICE. YOU CAN TRUST.</p>
            <h1 className="text-5xl font-black mb-6">
              Honest Repairs.<br/>
              <span className="text-orange-600">Fair Prices.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">From oil changes to engine diagnostics, we keep your vehicle running at its best.</p>
            
            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-bold transition">
                Schedule Appointment
              </button>
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600/10 px-6 py-3 rounded font-bold transition">
                Call Now
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Placeholder for car image */}
            <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-slate-500">Professional Auto Repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg border border-orange-600/30 hover:border-orange-600 transition">
              <div className="text-5xl mb-4">🛢️</div>
              <h3 className="text-2xl font-bold mb-3">Oil Changes</h3>
              <p className="text-slate-400">Fast & reliable oil changes to keep your engine running strong.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-orange-600/30 hover:border-orange-600 transition">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3">Brake Repair</h3>
              <p className="text-slate-400">From pads to rotors, we'll stop any problems before they start.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-orange-600/30 hover:border-orange-600 transition">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-3">Engine Repair</h3>
              <p className="text-slate-400">Diagnostics, tune-ups and complete engine repair services.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-orange-600/30 hover:border-orange-600 transition">
              <div className="text-5xl mb-4">🛞</div>
              <h3 className="text-2xl font-bold mb-3">Tires & Wheels</h3>
              <p className="text-slate-400">Top brands, great prices and expert installation.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-orange-600/30 hover:border-orange-600 transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Diagnostics</h3>
              <p className="text-slate-400">Advanced diagnostics to find the problem quick and accurate.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-orange-600/30 hover:border-orange-600 transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Transmission</h3>
              <p className="text-slate-400">Service, repair and replacement you can count on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Why Choose Flint's Auto?</h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-orange-600 text-2xl">✓</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ASE Certified Technicians</h3>
                    <p className="text-slate-400">Highly trained and certified professionals</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-orange-600 text-2xl">✓</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Honest Recommendations</h3>
                    <p className="text-slate-400">We tell you what needs fixing, not upselling</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-orange-600 text-2xl">✓</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Parts & Workmanship</h3>
                    <p className="text-slate-400">We use the best parts and stand behind our work</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-orange-600 text-2xl">✓</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                    <p className="text-slate-400">Fair prices without compromising quality</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-600/10 border-2 border-orange-600 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6">LIMITED TIME OFFER</h3>
              <p className="text-6xl font-black text-orange-600 mb-4">10% OFF</p>
              <p className="text-2xl font-bold mb-6">LABOR</p>
              <p className="text-slate-300 mb-8">For first time customers. Not valid with other offers. Expires 08/30/2024</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white w-full py-3 rounded font-bold transition">
                GET COUPON
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Your Vehicle Fixed?</h2>
          <p className="text-xl mb-12 text-orange-100">Local service you can trust. Honest repairs. Fair prices.</p>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <p className="font-bold mb-2">📍 Location</p>
              <p className="text-orange-50">456 Auto Drive<br/>Portland, ME 04101</p>
            </div>
            <div>
              <p className="font-bold mb-2">📞 Phone</p>
              <p className="text-orange-50">(555) 867-5309</p>
            </div>
            <div>
              <p className="font-bold mb-2">⏰ Hours</p>
              <p className="text-orange-50">Mon-Fri: 8am-6pm<br/>Sat: 9am-4pm</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition">
              Schedule Appointment
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-bold transition">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 px-8 py-12 text-center text-slate-500">
        <p className="font-bold text-white mb-2">FLINT'S AUTO</p>
        <p>© 2026 Flint's Auto. Local Service You Can Trust.</p>
      </footer>
    </div>
  );
}