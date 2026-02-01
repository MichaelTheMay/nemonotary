import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '../ui/Button'
import logoLight from '../../assets/nemo-notary/logo-light.jpeg'

const navLinks = [
  { href: '/#services', label: 'Services', isHash: true },
  { href: '/#about', label: 'About', isHash: true },
  { href: '/#areas', label: 'Service Areas', isHash: true },
  { href: '/blog', label: 'Blog', isHash: false },
  { href: '/#contact', label: 'Contact', isHash: true },
]

const nemoBusinesses = [
  { href: 'https://52nemos.com/senior-services', label: 'NeMo Senior Services', description: 'Care coordination & support' },
  { href: 'https://52nemos.com/neighbors', label: 'NeMo Neighbors', description: 'Community assistance' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [nemoDropdownOpen, setNemoDropdownOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (href: string, isHash: boolean) => {
    if (isHash && location.pathname === '/') {
      // On home page, just scroll to the hash
      const element = document.querySelector(href.replace('/', ''))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoLight}
              alt="Nemo Notary Etc. - Mobile Notary Services in North DFW"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.isHash ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault()
                      handleNavClick(link.href, true)
                    }
                  }}
                  className="text-lg text-text-secondary hover:text-primary-700 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-lg text-text-secondary hover:text-primary-700 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* NeMo Businesses Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-lg text-text-secondary hover:text-primary-700 transition-colors font-medium"
                onClick={() => setNemoDropdownOpen(!nemoDropdownOpen)}
                onBlur={() => setTimeout(() => setNemoDropdownOpen(false), 150)}
              >
                NeMo Family
                <ChevronDown className={`w-4 h-4 transition-transform ${nemoDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {nemoDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {nemoBusinesses.map((business) => (
                    <a
                      key={business.href}
                      href={business.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 px-4 py-3 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-primary-800">{business.label}</div>
                        <div className="text-sm text-text-muted">{business.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-text-muted mt-1" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+19723797050"
              className="flex items-center gap-2 text-lg font-semibold text-primary-800"
            >
              <Phone className="w-5 h-5" />
              (972) 379-7050
            </a>
            <Button href="#contact" size="md" variant="primary">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isHash ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg text-text-secondary hover:text-primary-700 transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-lg text-text-secondary hover:text-primary-700 transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* NeMo Businesses in Mobile */}
              <div className="border-t border-gray-200 pt-4 mt-2">
                <p className="text-sm font-semibold text-primary-700 mb-2">NeMo Family</p>
                {nemoBusinesses.map((business) => (
                  <a
                    key={business.href}
                    href={business.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 text-text-secondary hover:text-primary-700"
                  >
                    {business.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <hr className="border-gray-200" />
              <a
                href="tel:+19723797050"
                className="flex items-center gap-2 text-lg font-semibold text-primary-800 py-2"
              >
                <Phone className="w-5 h-5" />
                (972) 379-7050
              </a>
              <Button href="/#contact" size="lg" className="w-full">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
