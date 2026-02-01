import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret S.',
    location: 'North Metro',
    rating: 5,
    text: "The notary came to my mother's assisted living facility and was so patient with her. She took time to explain everything clearly and made the whole process stress-free. Highly recommend!",
  },
  {
    name: 'Robert & Linda K.',
    location: 'Downtown',
    rating: 5,
    text: 'We needed to update our estate documents and the convenience of having someone come to our home was wonderful. Professional, thorough, and genuinely kind. This is how notary service should be.',
  },
  {
    name: 'James T.',
    location: 'South Suburbs',
    rating: 5,
    text: "After my father's stroke, getting documents notarized seemed impossible. NemoNotary came to the hospital and handled everything with care and compassion. They made a difficult time much easier.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We're proud to serve our community with professionalism and care.
            Here's what families have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-text-secondary leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-primary-800">
                  {testimonial.name}
                </p>
                <p className="text-text-muted text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
