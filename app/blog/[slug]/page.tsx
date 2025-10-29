import Link from 'next/link'
import { notFound } from 'next/navigation'

// Mock blog data - replace with your CMS or database
const blogPosts: Record<string, any> = {
  'getting-started-with-react': {
    title: 'Getting Started with React',
    date: '2024-03-15',
    content: `
      React is a powerful JavaScript library for building user interfaces. In this guide, we'll cover the fundamentals you need to know to start building modern web applications.

      ## What is React?

      React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.

      ## Key Concepts

      ### Components
      Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.

      ### JSX
      JSX is a syntax extension to JavaScript that lets you write HTML-like code in your JavaScript files.

      ### Props
      Props are arguments passed into React components, similar to function parameters.

      ### State
      State allows React components to create and manage their own data.

      ## Getting Started

      To create a new React app, you can use Create React App or modern tools like Vite or Next.js.
    `
  },
  'intro-to-machine-learning': {
    title: 'Introduction to Machine Learning',
    date: '2024-03-10',
    content: `
      Machine Learning is revolutionizing how we solve complex problems. Let's explore the basics and how you can get started.

      ## What is Machine Learning?

      Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

      ## Types of Machine Learning

      ### Supervised Learning
      The algorithm learns from labeled training data to make predictions.

      ### Unsupervised Learning
      The algorithm finds patterns in data without pre-existing labels.

      ### Reinforcement Learning
      The algorithm learns through trial and error using feedback from its own actions.

      ## Popular Applications

      - Image recognition
      - Natural language processing
      - Recommendation systems
      - Autonomous vehicles

      ## Getting Started

      Start with Python and libraries like scikit-learn, TensorFlow, or PyTorch.
    `
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto pt-35 lg:pt-35 py-16 px-4">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Blog
      </Link>
      
      <h1 className="text-black text-5xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph: string, index: number) => {
          if (paragraph.startsWith('## ')) {
            return <h2 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
          } else if (paragraph.startsWith('### ')) {
            return <h3 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
          } else if (paragraph.startsWith('- ')) {
            const items = paragraph.split('\n')
            return (
              <ul key={index} className="list-disc pl-6 mb-4">
                {items.map((item, i) => (
                  <li key={i}>{item.replace('- ', '')}</li>
                ))}
              </ul>
            )
          } else {
            return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
          }
        })}
      </div>
    </article>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}