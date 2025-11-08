import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white to-white text-black sm:pt-25 lg:pt-35 pb-15 px-4 overflow-hidden">
      {/* Background Images - Mobile Only */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        <img 
          src="/images/faces-mobile.png" 
          alt="floating faces with different expressions" 
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[80%] max-w-md hero-float"
        />
      </div>
      
      {/* Background Images - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Left Side Faces */}
        <img 
          src="/images/faces-left.png" 
          alt="floating faces with different expressions" 
          className="absolute top-[10%] left-[5%] w-64 lg:w-80 hero-float"
        />
        
        {/* Right Side Faces */}
        <img 
          src="/images/faces-right.png" 
          alt="floating faces with different expressions" 
          className="absolute top-[25%] right-[5%] w-64 lg:w-80 hero-float-delay-2"
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 pt-[300px] pb-[10px] sm:pt-[150px] md:pb-[100px] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-semibold text-black mb-8">
            <span className="relative inline-block">
              Expert <img src="/images/squiggle.png" alt="highlight" width="250" height="12" loading="lazy" className="absolute left-0 -bottom-2" />
            </span> tutoring
          </h1>
          <p className="text-xl font-semibold text-gray-700 mb-8 max-w-1xl mx-auto">
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