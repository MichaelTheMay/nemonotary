import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import logoDark from '../../assets/nemo-notary/logo-dark.jpeg'

const nemoBusinesses = [
  { href: 'https://52nemos.com/senior-services', label: 'NeMo Senior Services' },
  { href: 'https://52nemos.com/neighbors', label: 'NeMo Neighbors' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src={logoDark}
              alt="Nemo Notary Etc."
              className="h-20 w-auto mb-4"
            />
            <p className="text-primary-200 leading-relaxed">
              Professional mobile notary services serving North DFW.
              We bring convenience and care to every appointment.
            </p>
            <p className="text-primary-300 text-sm mt-4">
              Part of the 52nemos family of services
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19723797050"
                  className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  (972) 379-7050
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@52nemos.com"
                  className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  office@52nemos.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Serving North DFW</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-3 text-primary-200">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-accent-400 font-medium">
              After hours appointments available
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#services"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#areas"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Service Areas
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* NeMo Family */}
            <h4 className="text-xl font-semibold mt-6 mb-3">NeMo Family</h4>
            <ul className="space-y-2">
              {nemoBusinesses.map((business) => (
                <li key={business.href}>
                  <a
                    href={business.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-200 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {business.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-300 text-center md:text-left">
              &copy; {currentYear} Nemo Notary Etc. All rights reserved.
            </p>
            <p className="text-primary-300 text-sm">
              Licensed & Insured | Background Checked | 52nemos.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
