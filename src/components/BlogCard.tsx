import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogPosts'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <Link to={`/blog/${post.slug}`}>
        <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-primary-400 text-sm">Blog Image</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        {/* Category Tag */}
        <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 text-sm font-medium rounded-full mb-3">
          {post.category}
        </span>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-primary-900 mb-2 line-clamp-2 hover:text-primary-700 transition-colors">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-text-secondary mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-primary-700 font-medium hover:text-primary-800 transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
