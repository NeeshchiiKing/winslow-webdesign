import Image from 'next/image';
import Link from 'next/link';

export default function ShopWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back Link */}
      <div className="px-8 py-6">
        <Link href="/" className="text-blue-500 hover:text-blue-400">← Back to Portfolio</Link>
      </div>

      {/* Hero */}
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">E-Commerce Store</h1>
        <p className="text-2xl text-slate-400 mb-8">Products | Shopping Cart | Secure Checkout</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg">
          Start Shopping
        </button>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Product 1', price: '$99.99' },
            { name: 'Product 2', price: '$149.99' },
            { name: 'Product 3', price: '$79.99' },
            { name: 'Product 4', price: '$199.99' },
          ].map((product, idx) => (
            <div key={idx} className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2">
              <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-3xl">🛍️</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-blue-400 font-bold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Shopping Cart', desc: 'Easy product selection' },
            { title: 'Secure Checkout', desc: 'SSL encrypted payments' },
            { title: 'Order Tracking', desc: 'Real-time shipping updates' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-lg text-center">
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Want a Store Like This?</h2>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold">
          Contact Me
        </Link>
      </section>
    </div>
  );
}