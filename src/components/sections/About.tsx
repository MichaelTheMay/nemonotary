import { CheckCircle, Award, Users, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'We Come to You',
    description:
      'Home, hospital, care facility, or wherever you are most comfortable.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Evenings, weekends, and emergency appointments available.',
  },
  {
    icon: Award,
    title: 'Experienced Professional',
    description:
      'Certified, insured, and background-checked for your peace of mind.',
  },
]

const credentials = [
  'State Commissioned Notary Public',
  'Background Checked & Verified',
  'Errors & Omissions Insurance',
  'Specialized Senior Care Training',
  'HIPAA Compliant',
  'Member of National Notary Association',
]

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Why Choose NemoNotary?
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              We understand that document signing can be stressful, especially
              for seniors and those with mobility challenges. That's why we've
              built our service around patience, convenience, and compassion.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Our Credentials
            </h3>
            <ul className="space-y-4">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-text-secondary text-lg">
                    {credential}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mission Statement */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-primary-800 italic text-lg">
                "Our mission is to provide professional notary services with the
                patience and care that seniors deserve. Every client is treated
                like family."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
