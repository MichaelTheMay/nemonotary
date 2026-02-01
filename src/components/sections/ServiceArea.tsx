import { MapPin, Phone } from 'lucide-react'
import { Button } from '../ui/Button'

// Service areas from official brand flyer
const serviceAreas = [
  'Addison',
  'Carrollton',
  'Dallas',
  'Farmers Branch',
  'Frisco',
  'Garland',
  'Murphy',
  'Plano',
  'Richardson',
  'Wylie',
]

const locationTypes = [
  'Private Homes',
  'Offices & Businesses',
  'Assisted Living Facilities',
  'Nursing Homes',
  'Hospitals',
  'Rehabilitation Centers',
]

export function ServiceArea() {
  return (
    <section id="areas" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Serving North DFW
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We proudly serve North Dallas and surrounding communities.
            Mobile service means we come to wherever you need us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Areas Served */}
          <div className="bg-primary-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary-700" />
              <h3 className="text-2xl font-bold text-primary-900">
                Cities We Serve
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-text-secondary text-lg"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-primary-700 font-medium">
              Travel fees may apply for locations outside core service area.
            </p>
          </div>

          {/* Location Types */}
          <div className="bg-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              We'll Meet You At
            </h3>
            <ul className="space-y-3">
              {locationTypes.map((location) => (
                <li
                  key={location}
                  className="flex items-center gap-3 text-text-secondary text-lg"
                >
                  <span className="w-3 h-3 bg-primary-600 rounded-full flex-shrink-0" />
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-primary-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Not Sure If We Serve Your Area?
          </h3>
          <p className="text-lg text-text-secondary mb-6">
            Give us a call and we'll let you know! We're always happy to discuss
            your needs and find a solution throughout the North DFW metroplex.
          </p>
          <Button href="tel:+19723797050" size="lg">
            <Phone className="w-5 h-5 mr-2" />
            (972) 379-7050
          </Button>
        </div>
      </div>
    </section>
  )
}
