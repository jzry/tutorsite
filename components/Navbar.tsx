'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TutorWPB
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/login" className="hover:text-blue-600 transition-colors">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-blue-600">
              Home
            </Link>
            <Link href="/blog" className="block py-2 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/login" className="block py-2 hover:text-blue-600">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}