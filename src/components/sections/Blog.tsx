import { ArrowRight } from 'lucide-react'
import { BlogCard, type BlogPost } from '../BlogCard'
import { Button } from '../ui/Button'

const recentPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What Documents Require Notarization in Texas?',
    excerpt: 'Learn about the most common documents that require notarization in Texas, including real estate transactions, powers of attorney, and more.',
    date: 'January 28, 2026',
    category: 'Notary Tips',
    slug: 'documents-requiring-notarization-texas',
  },
  {
    id: '2',
    title: 'Planning Ahead: Essential Legal Documents for Seniors',
    excerpt: 'Discover the important legal documents every senior should have in place, from healthcare directives to wills and trusts.',
    date: 'January 15, 2026',
    category: 'Senior Services',
    slug: 'essential-legal-documents-seniors',
  },
  {
    id: '3',
    title: 'The Benefits of Mobile Notary Services',
    excerpt: 'Why more North DFW residents are choosing mobile notary services for convenience, accessibility, and personalized care.',
    date: 'January 5, 2026',
    category: 'Mobile Notary',
    slug: 'benefits-mobile-notary-services',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Helpful tips, guides, and insights about notary services,
            legal documents, and planning for the future.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button href="/blog" variant="outline" size="lg">
            View All Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
