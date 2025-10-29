import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-white text-black sm:pt-25 lg:pt-35 pb-15 px-4">
      <div className="pt-[100px] sm:pt-0 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl md:text-7xl font-semibold text-black mb-8">
            Expert tutoring
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-1xl mx-auto">
            Personalized tutoring services in West Palm Beach to help you excel in technology and academics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold bg-gradient-to-r from-blue-450 to-blue-500 hover:bg-gradient-to-bl from-blue-450 to-blue-500 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-center me-2 mb-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
