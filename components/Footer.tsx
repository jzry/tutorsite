export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TutorWPB</h3>
            <p className="text-gray-400">
              Professional tutoring services in West Palm Beach, FL
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Software Development</li>
              <li>Artificial Intelligence</li>
              <li>Mathematics</li>
              <li>SAT Preparation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              West Palm Beach, FL
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TutorWPB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}