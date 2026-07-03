import Image from 'next/image';
import Link from 'next/link';

export default function PunchOutFitness() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-slate-950 border-b-4 border-red-600 px-8 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black">
            PUNCH <span className="text-red-600">OUT</span> FITNESS
          </div>
          <div className="flex gap-8 items-center">
            <a href="#programs" className="hover:text-red-600 transition font-bold">Programs</a>
            <a href="#trainers" className="hover:text-red-600 transition font-bold">Trainers</a>
            <a href="#about" className="hover:text-red-600 transition font-bold">About</a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition">
              JOIN NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/PunchOutFitness.png"
            alt="Punch Out Fitness"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-red-500 font-bold mb-2 text-lg">TRAIN HARD. STAY FOCUSED.</p>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              PUNCH<br/>
              <span className="text-red-600">YOUR LIMITS.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">High intensity workouts. World class coaching. Real results.</p>
            
            <div className="flex gap-4 flex-wrap">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition text-lg">
                JOIN TODAY
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-3 rounded font-bold transition text-lg">
                FREE DAY PASS
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Placeholder */}
            <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center border-2 border-red-600">
              <p className="text-slate-500">High Intensity Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl mb-3 font-black text-red-600">💪</p>
            <h3 className="font-bold text-lg mb-2">Stronger</h3>
            <p className="text-slate-400">Build strength and power that lasts.</p>
          </div>
          <div>
            <p className="text-5xl mb-3 font-black text-red-600">❤️</p>
            <h3 className="font-bold text-lg mb-2">Healthier</h3>
            <p className="text-slate-400">Improve endurance, mobility and wellbeing.</p>
          </div>
          <div>
            <p className="text-5xl mb-3 font-black text-red-600">🥊</p>
            <h3 className="font-bold text-lg mb-2">Fighter Mindset</h3>
            <p className="text-slate-400">Discipline, confidence and mental toughness.</p>
          </div>
          <div>
            <p className="text-5xl mb-3 font-black text-red-600">🔥</p>
            <h3 className="font-bold text-lg mb-2">Real Results</h3>
            <p className="text-slate-400">Proven programs. Real transformation.</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">BUILT FOR EVERY GOAL</h2>
          <h3 className="text-2xl text-red-600 text-center mb-16 font-bold">OUR PROGRAMS</h3>
          
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition">
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <p className="text-6xl">💪</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-600">Strength Training</h3>
                <p className="text-slate-400">Build muscle. Increase power. Sculpt your physique.</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition">
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <p className="text-6xl">🥊</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-600">Boxing Fitness</h3>
                <p className="text-slate-400">Train like a fighter. Get in the best shape.</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition">
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <p className="text-6xl">⚡</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-600">Conditioning</h3>
                <p className="text-slate-400">Improve endurance. Burn fat. Boost energy.</p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition">
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <p className="text-6xl">👶</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-600">Youth Training</h3>
                <p className="text-slate-400">Build confidence. Shape the future.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-3 rounded font-bold transition text-lg">
              VIEW ALL PROGRAMS
            </button>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">World Class Coaching</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition">
              <div className="h-48 bg-gradient-to-br from-red-600 to-slate-800 flex items-center justify-center">
                <p className="text-7xl">👨‍🏫</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Coach Mike</h3>
                <p className="text-slate-400 text-sm mb-4">15+ years coaching. Former boxing champion. Specialized in strength & conditioning.</p>
                <p className="text-red-600 font-bold">Strength Training • Boxing</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition">
              <div className="h-48 bg-gradient-to-br from-red-600 to-slate-800 flex items-center justify-center">
                <p className="text-7xl">👩‍🏫</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Coach Sarah</h3>
                <p className="text-slate-400 text-sm mb-4">Certified personal trainer. Expert in HIIT & conditioning. Transforms bodies daily.</p>
                <p className="text-red-600 font-bold">Conditioning • Weight Loss</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/30 transition">
              <div className="h-48 bg-gradient-to-br from-red-600 to-slate-800 flex items-center justify-center">
                <p className="text-7xl">👨‍🏫</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Coach James</h3>
                <p className="text-slate-400 text-sm mb-4">Youth specialist. Motivational coach. Builds champion mindset.</p>
                <p className="text-red-600 font-bold">Youth Programs • Mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8">About Punch Out Fitness</h2>
          <p className="text-xl text-slate-300 text-center leading-relaxed mb-12">
            Founded in 2015, Punch Out Fitness has been transforming lives through high-intensity training and world-class coaching. We believe everyone has a fighter inside them. Our mission is to unlock your potential, build your strength, and shape your mindset. Whether you're here to get in shape, build muscle, or find your warrior spirit—we're here to help you punch above your weight.
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-lg text-center border-l-4 border-red-600">
              <p className="text-5xl font-black text-red-600 mb-2">9+</p>
              <p className="text-slate-300 text-lg">Years of Excellence</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg text-center border-l-4 border-red-600">
              <p className="text-5xl font-black text-red-600 mb-2">2,500+</p>
              <p className="text-slate-300 text-lg">Active Members</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg text-center border-l-4 border-red-600">
              <p className="text-5xl font-black text-red-600 mb-2">5★</p>
              <p className="text-slate-300 text-lg">Member Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24 px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Membership Plans</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg border-2 border-slate-700 hover:border-red-600 transition">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-black text-red-600 mb-2">$29</p>
              <p className="text-slate-400 mb-6">/month</p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li>✓ Gym access</li>
                <li>✓ Group classes</li>
                <li>✓ Basic equipment</li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 py-3 rounded font-bold transition">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border-4 border-red-600 shadow-lg shadow-red-600/30">
              <div className="bg-red-600 text-white px-4 py-2 rounded inline-block mb-4 font-bold">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-4">Fighter</h3>
              <p className="text-4xl font-black text-red-600 mb-2">$79</p>
              <p className="text-slate-400 mb-6">/month</p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li>✓ Unlimited gym access</li>
                <li>✓ All group classes</li>
                <li>✓ 1 personal training/week</li>
                <li>✓ Nutrition guidance</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-bold transition">
                JOIN NOW
              </button>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border-2 border-slate-700 hover:border-red-600 transition">
              <h3 className="text-2xl font-bold mb-4">Champion</h3>
              <p className="text-4xl font-black text-red-600 mb-2">$149</p>
              <p className="text-slate-400 mb-6">/month</p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li>✓ Everything in Fighter</li>
                <li>✓ 4 personal training/week</li>
                <li>✓ Priority booking</li>
                <li>✓ 1-on-1 coaching</li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 py-3 rounded font-bold transition">
                Go Champion
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Punch Your Limits?</h2>
          <p className="text-xl mb-8 text-red-100">Get your FREE day pass and experience Punch Out Fitness today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-red-600 hover:bg-red-50 px-10 py-4 rounded font-bold text-lg transition">
              GET FREE PASS
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 rounded font-bold text-lg transition">
              SCHEDULE TOUR
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Contact Us</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg text-center border-t-4 border-red-600">
              <p className="text-5xl mb-4">📍</p>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Location</h3>
              <p className="text-slate-300">234 Ring Road<br/>Portland, ME 04101</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg text-center border-t-4 border-red-600">
              <p className="text-5xl mb-4">📞</p>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Phone</h3>
              <p className="text-slate-300 text-lg font-bold">(555) 867-5309</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg text-center border-t-4 border-red-600">
              <p className="text-5xl mb-4">⏰</p>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Hours</h3>
              <p className="text-slate-300">Mon-Fri: 5am-10pm<br/>Sat-Sun: 7am-8pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 px-8 py-12 text-center text-slate-500">
        <p className="font-bold text-white text-lg mb-2">PUNCH OUT FITNESS</p>
        <p>© 2026 Punch Out Fitness. Train Hard. Stay Focused.</p>
      </footer>
    </div>
  );
}