import Image from 'next/image';
import Link from 'next/link';

export default function RoofingWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back Link */}
      <div className="px-8 py-6">
        <Link href="/" className="text-blue-500 hover:text-blue-400">← Back to Portfolio</Link>
      </div>

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Professional Roofing Services</h1>
        <p className="text-2xl text-slate-400 mb-8">Quality Craftsmanship | Trusted Since 1995</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg">
          Get Free Quote
        </button>
      </section>

      {/* Before/After Gallery */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Residential Roof' },
            { title: 'Commercial Building' },
            { title: 'Renovation Project' },
            { title: 'Emergency Repair' },
          ].map((project, idx) => (
            <div key={idx} className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-full h-64 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                <span className="text-6xl">🏠</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Roof Repair', desc: 'Fast & reliable repairs' },
            { title: 'New Installation', desc: 'Quality materials & craftsmanship' },
            { title: 'Inspections', desc: 'Professional roof assessments' },
          ].map((service, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
        <div className="space-y-6">
          {[
            { name: 'John D.', text: '⭐⭐⭐⭐⭐ Best roofing company in town!' },
            { name: 'Sarah M.', text: '⭐⭐⭐⭐⭐ Professional and reliable service.' },
            { name: 'Mike T.', text: '⭐⭐⭐⭐⭐ Highly recommend to everyone!' },
          ].map((review, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-lg">
              <p className="text-slate-300 mb-2">{review.text}</p>
              <p className="font-bold text-blue-400">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Need Roofing Services?</h2>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold">
          Contact Me
        </Link>
      </section>
    </div>
  );
}