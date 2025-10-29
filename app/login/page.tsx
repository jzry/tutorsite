'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication (connect to your API route)
    // For now, simple demo
    if (credentials.email && credentials.password) {
      router.push('/notes')
    }
  }

  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-black text-3xl font-bold mb-6 text-center">Student Login</h1>
        <p className="text-gray-600 text-center mb-8">
          Access your tutoring notes and materials
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-black block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="text-black block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              required
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}