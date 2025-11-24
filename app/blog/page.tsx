import Link from 'next/link'

export default function BlogPage() {
  // This would come from a CMS or database
  const posts = [
    {
      slug: 'getting-started-with-react',
      title: 'Getting Started with React',
      excerpt: 'Learn the fundamentals of React and start building modern web applications.',
      date: '2024-03-15'
    },
    {
      slug: 'intro-to-machine-learning',
      title: 'Introduction to Machine Learning',
      excerpt: 'Explore the basics of ML and how to apply it to real-world problems.',
      date: '2024-03-10'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto pt-30 pb-10 lg:pt-40 lg:pb-10 px-5">
      <h1 className="text-5xl font-bold mb-8 text-black">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="p-6 rounded-lg border border-gray-200 shadow transition-all duration-200 hover:shadow-2xl">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl text-black font-bold mb-2 hover:text-blue-600">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}