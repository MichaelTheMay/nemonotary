import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BlogCard } from '../BlogCard'
import { Button } from '../ui/Button'
import { blogPosts } from '../../data/blogPosts'

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3)

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
          <Link to="/blog">
            <Button variant="outline" size="lg">
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
