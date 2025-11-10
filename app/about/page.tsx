import CTA from '@/components/Cta'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-[150px] pb-10 px-4 bg-gradient-to-b from-blue-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-7">About Us</h1>
          <div className="space-y-7">
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            Hi, I'm the lead tutor at West Palm Beach Tutor. I’ve worked as a tutor supporting students from middle school through college, helping them strengthen their skills in reading, writing, math, computer science, and software development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            I grew up and lived in West Palm Beach for most of my life. I graduated with a Bachelor's degree in Computer Science from the University of Central Florida and worked at various tutoring centers in the West Palm Beach area before deciding to start up my own tutoring and instructional service.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            I'm passionate about helping people achieve their educational goals. Through hands-on experience, I’ve learned that each student learns differently, so every session is customized to their individual needs, goals, and learning style.
          </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-black mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-10">
            At West Palm Beach Tutoring, our mission is to provide high quality, personalized tutoring that builds confidence,
            strengthens skills, and helps individuals build powerful technical and academic skills.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We specialize in teaching software development, artificial intelligence, mathematics, and Spanish, 
            offering one-on-one or small group sessions tailored to each student's unique learning style and goals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our approach combines structured lessons with encouragement and real-world practice, so students not only improve their academic performance but also build up abilities to succeed beyond the course. We strive to make every session positive, productive, and motivating—helping students see learning as something they can truly enjoy.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto pb-10">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Our Approach</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Assessment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start by understanding your current skill level, learning goals, and any 
                  challenges you're facing.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Customized Plan</h3>
                <p className="text-gray-700 leading-relaxed">
                  We create a personalized learning plan designed specifically for your needs 
                  and objectives.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Engage & Learn</h3>
                <p className="text-gray-700 leading-relaxed">
                  Through interactive sessions, we work together to build understanding and 
                  master new concepts.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Track Progress</h3>
                <p className="text-gray-700 leading-relaxed">
                  We continuously monitor your progress and adjust our approach to ensure 
                  you're always moving forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-5 px-4 pb-30">
        <div className="max-w-4xl mx-auto space-y-5 text-center">
          <h2 className="text-4xl font-bold text-black mb-6 text-center">Our Tutoring Formats</h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-10">
            We offer one-on-one private tutoring sessions lasting 60, 90, or 120 minutes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Small group sessions are also available for 2–5 students and are offered at a discount.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            All sessions are offered in person or online, depending on your preference.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTA></CTA>
    </div>
  )
}