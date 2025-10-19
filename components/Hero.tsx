import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Expert Tutoring in Software, AI, Math & SAT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Personalized tutoring services in West Palm Beach to help you excel in technology and academics
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Get Started
            </Link>
            <Link 
              href="/blog"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}