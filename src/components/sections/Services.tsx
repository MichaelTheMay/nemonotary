import {
  FileText,
  Scale,
  Heart,
  Home,
  FileSignature,
} from 'lucide-react'
import { Card, CardIcon, CardTitle, CardDescription } from '../ui/Card'

const services = [
  {
    icon: FileText,
    title: 'Wills & Trusts',
    description:
      'Ensure your estate planning documents are properly notarized. We handle wills, living trusts, and related estate documents with care and attention to detail.',
  },
  {
    icon: Scale,
    title: 'Power of Attorney',
    description:
      'Notarization for healthcare and financial power of attorney documents. We help families navigate these important decisions with patience and clarity.',
  },
  {
    icon: Heart,
    title: 'Healthcare Directives',
    description:
      'Living wills, advance directives, and healthcare proxy documents. We understand the sensitivity of these documents and handle them with compassion.',
  },
  {
    icon: Home,
    title: 'Real Estate Documents',
    description:
      'Deed transfers, reverse mortgages, and property-related documents. Convenient signing at your location for all real estate transactions.',
  },
  {
    icon: FileSignature,
    title: 'General Notary Services',
    description:
      'Affidavits, loan documents, acknowledgments, and other notarization needs. No document is too simple or complex for our professional service.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Specialized notary services tailored for seniors and their families.
            We bring professional, compassionate service directly to you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} hover>
              <CardIcon>
                <service.icon className="w-7 h-7" />
              </CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary text-lg">
            Not sure which service you need?{' '}
            <a
              href="#contact"
              className="text-primary-700 font-semibold hover:underline"
            >
              Contact us
            </a>{' '}
            and we'll help you determine the right solution.
          </p>
        </div>
      </div>
    </section>
  )
}
