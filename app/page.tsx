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
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#tutorials" className="hover:text-blue-500 transition">Tutorials</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
        </div>

        <Link href="mailto:robertlibradoortiz@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
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
            Professional websites for gyms, restaurants, dental offices, auto shops, and more.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
              View My Work
            </Link>
           <Link href="mailto:robertlibradoortiz@gmail.com" className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold transition">
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

      {/* AdSense Ad Unit #1 */}
      <div className="py-8 px-8">
        <AdUnit />
      </div>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Projects I've Built</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
  { title: 'Orion Designs', domain: 'oriondesigns.winslowwebdesign.com', img: '/projects/OrionDesigns.png' },
  { title: 'Cakes & Lobster', domain: 'cakesandlobster.winslowwebdesign.com', img: '/projects/Cakes_Lobster.png' },
  { title: 'Plumber Bros', domain: 'plumberbros.winslowwebdesign.com', img: '/projects/PlumerBros.png' },
  { title: 'Punch Out Fitness', domain: 'punchoutfitness.winslowwebdesign.com', img: '/projects/PunchOutFitness.png' },
  { title: 'Joker\'s Dental', domain: 'jokersdental.winslowwebdesign.com', img: '/projects/JokersDental.png' },
  { title: 'Flint\'s Auto', domain: 'flintsauto.winslowwebdesign.com', img: '/projects/FlintsAuto.png' },
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
            { title: 'Build a Landing Page', desc: 'Learn HTML, CSS and responsive design.' },
            { title: 'Build a Restaurant Website', desc: 'Create menus and reservation systems.' },
            { title: 'Build a Service Business Website', desc: 'Showcase services and get leads.' },
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
  href="mailto:robertlibradoortiz@gmail.com"
  className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
>
  Get In Touch
</Link>
      </section>

      {/* About Section */}
<section id="about" className="bg-white text-slate-950 px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
    
    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
      Hi, I'm Roberto Ortiz. I enjoy building digital products—from business websites to games and software. Winslow Web Design is where I help local businesses establish an online presence, but it's just one of the things I create.
    </p>

    <div className="bg-slate-100 p-8 rounded-xl mt-12">
      <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <a href="https://eternalpage.online" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 cursor-pointer">
          <Image src="/projects/eternalpage.jpeg" alt="EternalPage" width={200} height={200} className="w-full h-40 object-cover" />
          <div className="bg-slate-900 p-3 text-center">
            <p className="text-sm font-bold text-white">🌐 Eternal Page Online</p>
          </div>
        </a>
        
        <a href="https://pixelspriteshop.itch.io/" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 cursor-pointer">
          <Image src="/projects/itch.io.png" alt="Pixel Sprite Shop" width={200} height={200} className="w-full h-40 object-cover" />
          <div className="bg-slate-900 p-3 text-center">
            <p className="text-sm font-bold text-white">🎮 Pixel Sprite Shop</p>
          </div>
        </a>
        
        <a href="https://www.teepublic.com/user/snap-stick-and-style" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 cursor-pointer">
          <Image src="/projects/SnapStickStyle.jpeg" alt="Snap Stick and Style" width={200} height={200} className="w-full h-40 object-cover" />
          <div className="bg-slate-900 p-3 text-center">
            <p className="text-sm font-bold text-white">👕 Snap, Stick & Style</p>
          </div>
        </a>
        
        <a href="https://medium.com/@theillegalinkwell" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 cursor-pointer">
          <Image src="/projects/medium.png" alt="Medium" width={200} height={200} className="w-full h-40 object-cover" />
          <div className="bg-slate-900 p-3 text-center">
            <p className="text-sm font-bold text-white">✍️ the illegal inkwell</p>
          </div>
        </a>
        
        <a href="https://open.spotify.com/show/1Nd0cD96yYjyinKU7ZOM1A" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 cursor-pointer">
          <Image src="/projects/streetkid.jpeg" alt="Street Kid Podcast" width={200} height={200} className="w-full h-40 object-cover" />
          <div className="bg-slate-900 p-3 text-center">
            <p className="text-sm font-bold text-white">🎙️ I Am A Street Kid</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 py-6 text-center text-slate-500">
        © 2026 Winslow Web Design. All Rights Reserved.
      </footer>
    </div>
  );
}