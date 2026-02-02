import { Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '../ContactForm'

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Request an Appointment
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Fill out the form below and we'll contact you within 24 hours to
            schedule your appointment. Prefer to call? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-6 h-6 text-primary-700" />
                <h3 className="text-xl font-semibold text-primary-900">
                  Call Us
                </h3>
              </div>
              <a
                href="tel:+19723797050"
                className="text-2xl font-bold text-primary-800 hover:text-primary-600 transition-colors"
              >
                (972) 379-7050
              </a>
              <p className="text-text-secondary mt-2">
                Speak directly with a notary
              </p>
            </div>

            {/* Email */}
            <div className="bg-accent-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-accent-700" />
                <h3 className="text-xl font-semibold text-primary-900">
                  Email Us
                </h3>
              </div>
              <a
                href="mailto:office@52nemos.com"
                className="text-lg font-semibold text-primary-800 hover:text-primary-600 transition-colors break-all"
              >
                office@52nemos.com
              </a>
              <p className="text-text-secondary mt-2">
                We respond within 24 hours
              </p>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-primary-700" />
                <h3 className="text-xl font-semibold text-primary-900">Hours</h3>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 8:00 AM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
              <p className="text-accent-700 font-medium mt-3">
                After hours appointments available
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
