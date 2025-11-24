'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (connect to your API route)
    console.log('Form submitted:', formData)
    alert('Thank you! We will get back to you soon.')
  }

  return (
    <div className="bg-white pt-35 lg:pt-35 max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-5xl text-black font-bold mb-4">Contact Us</h1>

        <p className="text-gray-600 mb-8">
          Interested in tutoring services? Send a message or call{" "}
          <img
              src="/images/whitenumber.png"
              className="inline-block h-4 align-text-bottom"
            />{" "}
          and we'll get back to you within 24 hours.
        </p>

      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-black block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            required
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="text-black block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            required
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        <div>
          <label className="text-black block text-sm font-medium mb-2">Subject</label>
          <select
            required
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          >
            <option value="">Select a subject</option>
            <option value="software">Software Development</option>
            <option value="ai">Artificial Intelligence</option>
            <option value="math">Mathematics</option>
            <option value="spanish">Spanish</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="text-black block text-sm font-medium mb-2">Message</label>
          <textarea
            required
            rows={6}
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}