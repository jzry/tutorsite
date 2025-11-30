import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import FAQ from '@/components/Faq'
import CTA from '@/components/Cta'

export default function Home() {
  const services = [
    { 
      title: 'Software Development', 
      description: 'Master programming languages, web development, and software engineering principles.', 
      icon: '/images/laptop.png'
    },
    { 
      title: 'Artificial Intelligence', 
      description: 'Learn machine learning, neural networks, and cutting-edge AI technologies.', 
      icon: '/images/robot.png'
    },
    { 
      title: 'Mathematics', 
      description: 'From algebra to calculus, build strong mathematical foundations.', 
      icon: '/images/pi.png'
    },
    { 
      title: 'Computer Science', 
      description: 'Learn the theoretical and practical fundamentals of algorithms, computation, and information.', 
      icon: '/images/code.png'
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-black font-bold text-center mb-4">Tutoring Services</h2>
          <p className="text-center font-semibold text-gray-700 text-[16px] lg:text-[18px] mb-20 max-w-4xl mx-auto">
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
          <p className="text-center text-[18px] font-semibold text-gray-700 mb-12 max-w-1xl mx-auto">
            Have questions? Find answers to common questions about our tutoring services
          </p>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}