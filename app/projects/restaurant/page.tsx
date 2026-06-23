import Image from 'next/image';
import Link from 'next/link';

export default function RestaurantWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back Link */}
      <div className="px-8 py-6">
        <Link href="/" className="text-blue-500 hover:text-blue-400">← Back to Portfolio</Link>
      </div>

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Modern Restaurant Website</h1>
        <p className="text-2xl text-slate-400 mb-8">Fine Dining | Reservations | Online Menu</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg">
          Reserve a Table
        </button>
      </section>

      {/* Menu Preview */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-xl overflow-hidden h-96">
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              alt="Restaurant"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Elegant Dining Experience</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✓ Full Menu Display</li>
              <li>✓ Online Reservations</li>
              <li>✓ Hours & Location</li>
              <li>✓ Chef Profiles</li>
              <li>✓ Gallery Showcase</li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { title: 'Menu', desc: 'Appetizers, Mains, Desserts' },
            { title: 'Reservations', desc: 'Book tables online' },
            { title: 'Reviews', desc: '★★★★★ Rated 4.8' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Want a Website Like This?</h2>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold">
          Contact Me
        </Link>
      </section>
    </div>
  );
}