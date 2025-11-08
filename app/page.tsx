import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import FAQ from '@/components/Faq'

export default function Home() {
  const services = [
    {
      title: 'Software Development',
      description: 'Master programming languages, web development, and software engineering principles.',
      icon: '💻'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Learn machine learning, neural networks, and cutting-edge AI technologies.',
      icon: '🤖'
    },
    {
      title: 'Mathematics',
      description: 'From algebra to calculus, build strong mathematical foundations.',
      icon: '📐'
    },
    {
      title: 'Spanish',
      description: 'Helping you perfect and improve your spanish at any level.',
      icon: '🗣'
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-black font-bold text-center mb-4">Tutoring Services</h2>
          <p className="text-center font-semibold text-gray-700 text-[18px] mb-20 max-w-4xl mx-auto">
            Personalized one-on-one tutoring to help you achieve your academic and professional goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-center text-black mb-12">
            Have questions? Find answers to common questions about tutoring services
          </p>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Schedule your first session today in West Palm Beach
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}