import { Phone, Shield, Clock, Heart, Calendar, MapPin } from 'lucide-react'
import { Button } from '../ui/Button'

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: 'Flexible Scheduling' },
  { icon: MapPin, text: 'Serving North DFW' },
]

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 leading-tight mb-6">
              Mobile Notary Services
              <span className="block text-accent-600">in North DFW</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Professional, convenient notary services that come to you.
              Whether you're at home, in the office, or at a care facility, we make
              document signing easy and stress-free across the DFW metroplex.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href="tel:+19723797050" size="lg" variant="primary">
                <Phone className="w-5 h-5 mr-2" />
                (972) 379-7050
              </Button>
              <Button href="#contact" size="lg" variant="secondary">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-accent-600" />
                  <span className="text-text-secondary font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder - Ready for brand image */}
          <div className="relative">
            <div className="bg-primary-100 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-primary-600" />
                </div>
                <p className="text-primary-700 text-lg font-medium">
                  Professional, Caring Service
                </p>
                <p className="text-primary-500 mt-2 text-sm">
                  Serving Addison, Carrollton, Garland, Murphy, Dallas, Plano
                </p>
              </div>
            </div>
            {/* Decorative elements with brand colors */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-200 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
