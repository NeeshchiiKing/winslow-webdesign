import Image from 'next/image';
import Link from 'next/link';

export default function TattooWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back Link */}
      <div className="px-8 py-6">
        <Link href="/" className="text-blue-500 hover:text-blue-400">← Back to Portfolio</Link>
      </div>

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Elite Tattoo Studio</h1>
        <p className="text-2xl text-slate-400 mb-8">Custom Designs | Award-Winning Artists</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg">
          Book Consultation
        </button>
      </section>

      {/* Portfolio Gallery */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Sleeve Design' },
            { name: 'Portrait Work' },
            { name: 'Custom Piece' },
            { name: 'Geometric Art' },
            { name: 'Japanese Style' },
            { name: 'Fine Line' },
          ].map((design, idx) => (
            <div key={idx} className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2">
              <div className="w-full h-64 bg-gradient-to-br from-red-900 to-purple-900 flex items-center justify-center">
                <span className="text-5xl">🎨</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{design.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artists */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Alex', specialty: 'Realism & Portraits' },
            { name: 'Jordan', specialty: 'Traditional & Japanese' },
            { name: 'Casey', specialty: 'Geometric & Custom' },
          ].map((artist, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">{artist.name}</h3>
              <p className="text-slate-400">{artist.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Ready for Your Tattoo?</h2>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold">
          Contact Me
        </Link>
      </section>
    </div>
  );
}