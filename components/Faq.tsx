'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "What are your rates?",
    answer: "Rates vary by subject and session length. Contact us for current pricing and package deals. We offer discounts for multiple sessions booked in advance."
  },
  {
    question: "What subjects do you tutor?",
    answer: "We specialize in Software Development (Python, JavaScript, web development), Artificial Intelligence (python machine learning, neural networks, open source libraries), Mathematics (algebra through calculus), and Spanish. However, we also tutor English, Writing, Science, Social Studies, History, Biology, and Physics. We can tailor sessions to your specific needs."
  },
  {
    question: "Where are tutoring sessions held?",
    answer: "Sessions are held in West Palm Beach, FL. We offer both in-person sessions at convenient locations and online sessions via video call for added flexibility."
  },
  {
    question: "How long are tutoring sessions?",
    answer: "Standard sessions are 60 minutes, but we also offer 90-minute and 2-hour intensive sessions depending on your needs and learning goals."
  },
  {
    question: "Is there a cancellation fee?",
    answer: "Yes, we charge $20 for any cancellations within 24 hours of our booked appointment."
  },
  {
    question: "What materials do I need?",
    answer: "For most sessions, just bring your textbook, homework, and any specific problems you want to work on. For programming sessions, bring your laptop. We'll provide additional resources as needed."
  },
  {
    question: "Do you offer a free consultation?",
    answer: "Yes! Contact us and we can discuss your goals, assess your current level, and create a personalized learning plan."
  },
  {
    question: "Who do you teach?",
    answer: "We are open to tutoring anyone."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className="mb-2 rounded-xl transition-colors duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <span className="text-lg font-semibold text-gray-800 pr-8">
                {faq.question}
              </span>
              <svg
                className={`transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? 'rotate-180' : ''
                } w-5 h-5 text-gray-500`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 mt-2' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 pt-2">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}