import Image from 'next/image';
import Link from 'next/link';

export default function GymWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back Link */}
      <div className="px-8 py-6">
        <Link href="/" className="text-blue-500 hover:text-blue-400">← Back to Portfolio</Link>
      </div>

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Premium Gym Website</h1>
        <p className="text-2xl text-slate-400 mb-8">Fitness | Membership | Classes</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg">
          Join Now
        </button>
      </section>

      {/* Showcase */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-xl overflow-hidden h-96">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
              alt="Gym"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Modern Gym Experience</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✓ Responsive Design</li>
              <li>✓ Class Schedule Integration</li>
              <li>✓ Membership Plans</li>
              <li>✓ Trainer Profiles</li>
              <li>✓ Contact Forms</li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { title: 'Classes', desc: 'Yoga, CrossFit, Boxing, Cardio' },
            { title: 'Trainers', desc: 'Certified professionals' },
            { title: 'Community', desc: 'Join 500+ members' },
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
