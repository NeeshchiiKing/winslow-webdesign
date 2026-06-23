import Image from 'next/image';
import Link from 'next/link';

export default function LandingPageWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back Link */}
      <div className="px-8 py-6">
        <Link href="/" className="text-blue-500 hover:text-blue-400">← Back to Portfolio</Link>
      </div>

      {/* Hero */}
      <section className="px-8 py-32 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">High-Converting Landing Pages</h1>
        <p className="text-2xl text-slate-400 mb-8">Designed to Convert Visitors Into Customers</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg">
          Get Started Free
        </button>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Fast Loading', desc: 'Optimized for speed & performance' },
            { title: 'Mobile Ready', desc: 'Perfect on all devices' },
            { title: 'Built for Sales', desc: 'Conversion-focused design' },
          ].map((prop, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">
                {idx === 0 ? '⚡' : idx === 1 ? '📱' : '🎯'}
              </div>
              <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
              <p className="text-slate-400">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-900 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              '✓ Custom Email Capture Forms',
              '✓ Animated CTAs',
              '✓ Social Proof Sections',
              '✓ Hero Image/Video Support',
              '✓ Mobile Optimized',
              '✓ Analytics Ready',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 text-lg">
                <span className="text-blue-500 text-2xl">{feature.split(' ')[0]}</span>
                <span>{feature.substring(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Sarah M.', text: 'Increased conversions by 150%' },
            { name: 'Mike T.', text: '10x growth in email subscribers' },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-lg">
              <p className="text-slate-300 mb-4">"{testimonial.text}"</p>
              <p className="font-bold text-blue-400">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Launch Your Landing Page Today</h2>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold">
          Contact Me
        </Link>
      </section>
    </div>
  );
}