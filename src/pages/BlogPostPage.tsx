import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft, Tag } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="py-16 lg:py-24 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Convert markdown-style content to HTML-friendly format
  const formattedContent = post.content
    .split('\n')
    .map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl lg:text-3xl font-bold text-primary-900 mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        )
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl lg:text-2xl font-semibold text-primary-800 mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        )
      }
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\* - (.+)/)
        if (match) {
          return (
            <li key={index} className="flex gap-2 mb-2">
              <span className="text-accent-600">•</span>
              <span>
                <strong className="text-primary-800">{match[1]}</strong> - {match[2]}
              </span>
            </li>
          )
        }
        const simpleMatch = line.match(/- \*\*(.+?)\*\*(.*)/)
        if (simpleMatch) {
          return (
            <li key={index} className="flex gap-2 mb-2">
              <span className="text-accent-600">•</span>
              <span>
                <strong className="text-primary-800">{simpleMatch[1]}</strong>{simpleMatch[2]}
              </span>
            </li>
          )
        }
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="flex gap-2 mb-2">
            <span className="text-accent-600">•</span>
            <span>{line.replace('- ', '')}</span>
          </li>
        )
      }
      if (line.match(/^\d+\./)) {
        const text = line.replace(/^\d+\.\s*/, '')
        const boldMatch = text.match(/\*\*(.+?)\*\*(.*)/)
        if (boldMatch) {
          return (
            <li key={index} className="flex gap-2 mb-2">
              <span className="text-primary-700 font-semibold">{line.match(/^\d+/)?.[0]}.</span>
              <span>
                <strong className="text-primary-800">{boldMatch[1]}</strong>{boldMatch[2]}
              </span>
            </li>
          )
        }
        return (
          <li key={index} className="flex gap-2 mb-2">
            <span className="text-primary-700 font-semibold">{line.match(/^\d+/)?.[0]}.</span>
            <span>{text}</span>
          </li>
        )
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="font-semibold text-primary-800 my-4">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      }
      if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/)
        return (
          <p key={index} className="text-text-secondary leading-relaxed mb-4">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-primary-800">{part.replace(/\*\*/g, '')}</strong>
              }
              return part
            })}
          </p>
        )
      }
      if (line.trim() === '') {
        return null
      }
      return (
        <p key={index} className="text-text-secondary leading-relaxed mb-4">
          {line}
        </p>
      )
    })
    .filter(Boolean)

  return (
    <div className="py-8 lg:py-16 min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent-100 text-accent-800 text-sm font-medium rounded-full">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
            <span className="flex items-center gap-2 text-text-muted text-sm">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-900 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {formattedContent}
        </div>

        {/* Author/CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Need Notary Services?
            </h3>
            <p className="text-text-secondary mb-6">
              Nemo Notary Etc. provides professional mobile notary services throughout
              the North DFW area. We come to you at your home, office, hospital,
              or care facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+19723797050"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                Call (972) 379-7050
              </a>
              <a
                href="mailto:office@52nemos.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold border-2 border-primary-700 hover:bg-primary-50 transition-colors"
              >
                Email office@52nemos.com
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">
            More Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm text-accent-700 font-medium">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-semibold text-primary-900 mt-2 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-text-muted text-sm mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  )
}
