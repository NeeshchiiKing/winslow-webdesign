import Link from 'next/link';
import Image from 'next/image';
import AdUnit from './adunit';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-100 flex justify-between items-center px-8 py-6 bg-slate-950 backdrop-blur">
        <div className="text-2xl font-black">
          WINSLOW <span className="text-blue-500">WEBDESIGN</span>
        </div>

        <div className="hidden md:flex gap-10">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#portfolio" className="hover:text-blue-500 transition">Portfolio</a>
          <a href="#tutorials" className="hover:text-blue-500 transition">Tutorials</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
          Contact Me
        </Link>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center justify-between px-8 py-24 gap-12 min-h-[85vh]">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            I Build Modern Websites That <span className="text-blue-500">Grow Businesses</span>
          </h1>

          <p className="text-xl text-slate-400 mb-8">
            Professional websites for gyms, restaurants, roofing companies, digital memorials and more.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="#portfolio" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
              View My Work
            </Link>
            <Link href="#contact" className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold transition">
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[600px] h-[380px] bg-slate-900 rounded-2xl border-2 border-blue-500 shadow-lg shadow-blue-500/30 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Web design showcase"
            width={600}
            height={380}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white text-slate-950 px-8 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How I Can Help Your Business</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'Custom Design', desc: 'Modern websites tailored to your brand.' },
            { title: 'Mobile Friendly', desc: 'Looks great on phones and tablets.' },
            { title: 'SEO Ready', desc: 'Built to rank higher in Google.' },
            { title: 'Fast & Secure', desc: 'Optimized for speed and reliability.' },
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense Ad Unit #1 */}
      <div className="py-8 px-8">
        <AdUnit />
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-8 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { title: 'Gym Website', domain: 'gym.winslowwebdesign.com', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438' },
            { title: 'Restaurant Website', domain: 'restaurant.winslowwebdesign.com', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' },
            { title: 'Roofing Company', domain: 'roofing.winslowwebdesign.com', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa' },
            { title: 'EternalPage', domain: 'eternalpage.online', img: 'https://i.ibb.co/CshsnWy0/Screenshot-2-7-2026-95052-www-eternalpage-online.jpg' },
            { title: 'Tattoo Studio', domain: 'tattoo.winslowwebdesign.com', img: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1' },
            { title: 'Winslow Design', domain: 'winslow-design.com', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5' },
          ].map((project, idx) => (
            <div key={idx} className="bg-slate-900 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 cursor-pointer">
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={180}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense Ad Unit #2 */}
      <div className="py-8 px-8">
        <AdUnit />
      </div>
      
      {/* Tutorials Section */}
      <section id="tutorials" className="bg-white text-slate-950 px-8 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">YouTube Tutorials</h2>

        <div className="max-w-3xl mx-auto space-y-5">
          {[
            { title: 'Build a Gym Website', desc: 'Learn HTML, CSS and responsive design.' },
            { title: 'Build a Restaurant Website', desc: 'Create menus and reservation systems.' },
            { title: 'Build a Roofing Company Website', desc: 'Showcase services and get leads.' },
          ].map((tut, idx) => (
            <div key={idx} className="bg-slate-100 p-6 rounded-xl hover:bg-slate-200 transition cursor-pointer">
              <h3 className="font-bold text-lg mb-2">{tut.title}</h3>
              <p className="text-slate-600">{tut.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense Ad Unit #3 */}
      <div className="py-8 px-8">
        <AdUnit />
      </div>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready To Build Your Website?</h2>
        <p className="text-xl text-slate-400 mb-8">Let's create something amazing for your business.</p>
        <Link
          href="mailto:your@email.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
        >
          Get In Touch
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 py-6 text-center text-slate-500">
        © 2026 Winslow Web Design. All Rights Reserved.
      </footer>
    </div>
  );
}