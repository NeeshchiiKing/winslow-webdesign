import Image from 'next/image';
import Link from 'next/link';

export default function OrionDesigns() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black">
            ORION <span className="text-blue-500">DESIGNS</span>
          </div>
          <Link href="https://winslowwebdesign.com" className="text-slate-400 hover:text-white transition">
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Orion <span className="text-blue-500">Designs</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Modern, custom websites built from scratch. No templates. No monthly fees. Built to grow your business with speed, security, and scalability.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <Link 
                href="mailto:robertlibradoortiz@gmail.com?subject=Orion%20Designs%20Inquiry"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
              >
                Get a Quote
              </Link>
              <Link 
                href="https://winslowwebdesign.com"
                className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold transition"
              >
                View More Work
              </Link>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">✓</span>
                <div>
                  <h3 className="font-bold text-lg">Custom Websites</h3>
                  <p className="text-slate-400">Every site is custom coded for speed, security, and scalability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">✓</span>
                <div>
                  <h3 className="font-bold text-lg">Fast Performance</h3>
                  <p className="text-slate-400">Optimized for speed and built to convert visitors into customers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl">✓</span>
                <div>
                  <h3 className="font-bold text-lg">Mobile Friendly</h3>
                  <p className="text-slate-400">Responsive design that looks perfect on all devices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="rounded-2xl overflow-hidden border-2 border-blue-500 shadow-2xl shadow-blue-500/30">
            <Image
              src="/projects/OrionDesigns.png"
              alt="Orion Designs"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Website?</h2>
          <p className="text-xl mb-8 text-blue-100">Custom built. Fast. Secure. Built to grow your business.</p>
          <Link
            href="mailto:robertlibradoortiz@gmail.com?subject=Orion%20Designs%20Inquiry"
            className="inline-block bg-white text-blue-600 hover:bg-slate-100 px-10 py-4 rounded-lg font-bold transition"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 px-8 py-8 text-center text-slate-500">
        <p>© 2026 Orion Designs by Winslow Web Design</p>
      </footer>
    </div>
  );
}