import Image from 'next/image';
import Link from 'next/link';

export default function CakesAndLobster() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-amber-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            CAKES <span className="text-amber-700">&</span> LOBSTER
          </div>
          <div className="flex gap-8">
            <a href="#menu" className="hover:text-amber-700 transition">Menu</a>
            <a href="#about" className="hover:text-amber-700 transition">About</a>
            <a href="#contact" className="hover:text-amber-700 transition">Contact</a>
            <button className="bg-amber-900 text-white px-6 py-2 rounded hover:bg-amber-800 transition">
              Reserve Table
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-900 to-amber-800 text-white flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/projects/Cakes_Lobster.png"
            alt="Cakes & Lobster"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative text-center max-w-2xl px-8">
          <p className="text-amber-200 mb-2">WHERE INDULGENCE MEETS FLAVOR</p>
          <h1 className="text-6xl font-bold mb-6">Savor Every Moment</h1>
          <p className="text-xl text-amber-100 mb-8">From fresh Maine lobster to handcrafted desserts, every dish is made to delight. Fine dining with a touch of comfort.</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold transition mr-4">
            View Menu
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-bold transition">
            Reserve Now
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-amber-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">🦞</div>
            <h3 className="font-bold mb-2">Fresh Seafood</h3>
            <p className="text-amber-100 text-sm">Sourced daily. Always premium.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🍰</div>
            <h3 className="font-bold mb-2">Handmade Desserts</h3>
            <p className="text-amber-100 text-sm">Made in-house. Made with love.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🍽️</div>
            <h3 className="font-bold mb-2">Fine Dining</h3>
            <p className="text-amber-100 text-sm">Elevated experience. Warm atmosphere.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🍷</div>
            <h3 className="font-bold mb-2">Perfect Pairings</h3>
            <p className="text-amber-100 text-sm">Wines selected to complement every bite.</p>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Chef's Favorites</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Exceptional Dishes Made with Passion</p>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-amber-900">Maine Lobster Tail</h3>
              <p className="text-slate-600 mb-4">Fresh butter-poached lobster tail with seasonal vegetables</p>
              <p className="text-amber-700 font-bold">$42</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-amber-900">Pan-Seared Scallops</h3>
              <p className="text-slate-600 mb-4">Diver scallops with citrus beurre blanc and microgreens</p>
              <p className="text-amber-700 font-bold">$38</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-amber-900">Chocolate Decadence</h3>
              <p className="text-slate-600 mb-4">Our signature 72% dark chocolate cake with raspberry coulis</p>
              <p className="text-amber-700 font-bold">$16</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-800 transition">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            Established in 2015, Cakes & Lobster has been a beacon of fine dining in our community. Our chef brings years of culinary expertise, sourcing the finest ingredients to create unforgettable dining experiences. From our fresh Maine lobster to our handcrafted desserts, every detail matters.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-amber-700 mb-2">10+</p>
              <p className="text-slate-600">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-700 mb-2">5★</p>
              <p className="text-slate-600">Customer Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-700 mb-2">500+</p>
              <p className="text-slate-600">Happy Guests Monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Reserve Your Table</h2>
          <p className="text-xl mb-12 text-amber-100">Experience fine dining at its finest</p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="font-bold mb-2">📍 Location</p>
              <p className="text-amber-100">123 Harbor Street<br/>Portland, ME 04101</p>
            </div>
            <div>
              <p className="font-bold mb-2">📞 Contact</p>
              <p className="text-amber-100">(555) 867-5309<br/>hello@cakesandlobster.com</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-100 transition">
              Reserve Online
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-bold transition">
              Call to Book
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 px-8 py-12 text-center">
        <p>© 2026 Cakes & Lobster Restaurant. All Rights Reserved.</p>
        <p className="mt-2">Where Indulgence Meets Flavor</p>
      </footer>
    </div>
  );
}