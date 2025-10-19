import Link from 'next/link'

export default function NotesPage() {
  const subjects = [
    { name: 'Software Development', slug: 'software', count: 12 },
    { name: 'Artificial Intelligence', slug: 'ai', count: 8 },
    { name: 'Mathematics', slug: 'math', count: 15 },
    { name: 'SAT Preparation', slug: 'sat', count: 10 }
  ]

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-8">My Notes</h1>
      <p className="text-gray-600 mb-8">
        Access your tutoring session notes and study materials
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <Link 
            key={subject.slug}
            href={`/notes/${subject.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
            <p className="text-gray-600">{subject.count} notes available</p>
          </Link>
        ))}
      </div>
    </div>
  )
}