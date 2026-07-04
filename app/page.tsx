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
      <section id="home" className="flex flex-col lg:flex-row items-center justify-between px-8 py-12 gap-12 min-h-[85vh]">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Don't Rent Your Website.   <span className="text-blue-500">Own It.</span>
          </h1>

          <p className="text-xl text-slate-400 mb-8">
           No monthly website builders. No cookie-cutter templates. I create custom-coded websites that load fast, rank better, and help local businesses earn more customers—without looking like everyone else.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
              See Live Websites
            </Link>
           <Link href="mailto:robertlibradoortiz@gmail.com" className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold transition">
  Get A Free Quote
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
      <section id="projects" className="px-8 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Projects I've Built</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
{[
  { title: 'Orion Designs', domain: 'oriondesigns.winslowwebdesign.com', img: '/projects/OrionDesigns.png', url: 'https://oriondesigns.winslowwebdesign.com' },
  { title: 'Standing On The Corner Cafe', domain: 'standingcafe.winslowwebdesign.com', img: '/projects/Cafe.png', url: 'https://standingcafe.winslowwebdesign.com' },
  { title: 'High Desert Plumbing', domain: 'highdesert.winslowwebdesign.com', img: '/projects/highdesert.png', url: 'https://highdesert.winslowwebdesign.com' },
  { title: 'Winslow Fitness', domain: 'winslowfitness.winslowwebdesign.com', img: '/projects/winslowfitness.png', url: 'https://winslowfitness.winslowwebdesign.com' },
  { title: 'Cornerstone Family Dental', domain: 'cornerstonedental.winslowwebdesign.com', img: '/projects/cornerstone.png', url: 'https://cornerstonedental.winslowwebdesign.com' },
  { title: 'Route 66 Auto Repair', domain: 'route66auto.winslowwebdesign.com', img: '/projects/route66.png', url: 'https://route66auto.winslowwebdesign.com' },
].map((project, idx) => (
  <a key={idx} href={project.url} target="_blank" rel="noopener noreferrer" className="block bg-slate-900 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 cursor-pointer">
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
  </a>
))}
        </div>
      </section>

      {/* AdSense Ad Unit #2 */}
      <div className="py-8 px-8">
        <AdUnit />
      </div>
      
      {/* Tutorials Section */}
      <section id="tutorials" className="bg-white text-slate-950 px-8 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">YouTube Tutorials</h2>

        <div className="max-w-3xl mx-auto space-y-5">
          {[
  { title: 'Build a Website in 30 Minutes', desc: 'From scratch with no monthly fees. No Wix or Squarespace.', url: 'https://youtu.be/axqBf-1l-BU' },
  { title: 'Convert Design to Code', desc: 'Turn a website picture into actual page.tsx code.' , url: 'https://youtu.be/iPHKqpuzj1Y' },
].map((tut, idx) => (
  <a key={idx} href={tut.url} target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-6 rounded-xl hover:bg-slate-200 transition cursor-pointer block">
    <h3 className="font-bold text-lg mb-2">{tut.title}</h3>
    <p className="text-slate-600">{tut.desc}</p>
  </a>
))}
        </div>
      </section>

      {/* AdSense Ad Unit #3 */}
      <div className="py-8 px-8">
        <AdUnit />
      </div>

      {/* Contact Section */}
<section id="contact" className="px-8 py-12 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready To Build Your Website?</h2>
    <p className="text-xl text-slate-400 mb-8">Let's create something amazing for your business.</p>
    <Link
      href="mailto:robertlibradoortiz@gmail.com"
      className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
    >
      Get In Touch
    </Link>
  </div>
</section>

      {/* About Section */}
<section id="about" className="bg-white text-slate-950 px-8 py-12">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
    
    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
      Hi, I'm Roberto Ortiz. I'm a web designer based right here in Winslow, Arizona. I help local businesses establish a strong online presence with custom websites that are modern, easy to use, and built to convert visitors into customers.

When you work with me, you're not just getting a website—you're getting a partner who cares about your success. 
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
      <footer className="border-t border-slate-800 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-3">Winslow Web Design</h3>
              <p className="text-slate-400">Custom-built websites. No monthly fees. No templates.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-3">Quick Links</h3>
              <div className="space-y-2 text-slate-400">
                <a href="#portfolio" className="block hover:text-blue-500">Portfolio</a>
                <a href="#tutorials" className="block hover:text-blue-500">Tutorials</a>
                <a href="#contact" className="block hover:text-blue-500">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-3">Contact Info</h3>
              <div className="space-y-2 text-slate-400">
                 <a href="tel:+1234567890" className="block hover:text-blue-500">
                  📍Winslow, Arizona 
                  </a>
                <a href="mailto:your-email@gmail.com" className="block hover:text-blue-500">
                  📧 robertlibradoortiz@gmail.com
                </a>
                <a href="tel:+1234567890" className="block hover:text-blue-500">
                  📱 (928) 386-2417
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            © 2026 Winslow Web Design. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}