import { BlogCard } from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

export function BlogPage() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Expert advice, helpful guides, and insights about notary services,
            legal documents, and planning for the future.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-primary-100 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4">
            Need Notary Services?
          </h2>
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            We provide mobile notary services throughout the North DFW area.
            Contact us today to schedule your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
