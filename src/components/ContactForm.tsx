import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from './ui/Button'

interface FormData {
  name: string
  phone: string
  email: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  location: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  serviceType?: string
  location?: string
}

const serviceTypes = [
  'Wills & Trusts',
  'Power of Attorney',
  'Healthcare Directives',
  'Real Estate Documents',
  'General Notary Services',
  'Other',
]

const timePreferences = [
  'Morning (8am - 12pm)',
  'Afternoon (12pm - 4pm)',
  'Evening (4pm - 7pm)',
  'Flexible',
]

// Replace with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\(?[\d]{3}\)?[-.\s]?[\d]{3}[-.\s]?[\d]{4}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please provide a location'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          preferredDate: '',
          preferredTime: '',
          location: '',
          message: '',
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try calling us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Request Received!
        </h3>
        <p className="text-green-700 text-lg">
          Thank you for contacting NemoNotary. We'll call you within 24 hours to
          confirm your appointment.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Submission Error</p>
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-primary-800 mb-2"
          >
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-primary-800 mb-2"
          >
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Email (Optional) */}
      <div>
        <label
          htmlFor="email"
          className="block text-lg font-medium text-primary-800 mb-2"
        >
          Email <span className="text-text-muted">(Optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="your@email.com"
        />
      </div>

      {/* Service Type */}
      <div>
        <label
          htmlFor="serviceType"
          className="block text-lg font-medium text-primary-800 mb-2"
        >
          Service Needed <span className="text-red-600">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.serviceType ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a service...</option>
          {serviceTypes.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-red-600">{errors.serviceType}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Preferred Date */}
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-lg font-medium text-primary-800 mb-2"
          >
            Preferred Date <span className="text-text-muted">(Optional)</span>
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Preferred Time */}
        <div>
          <label
            htmlFor="preferredTime"
            className="block text-lg font-medium text-primary-800 mb-2"
          >
            Preferred Time <span className="text-text-muted">(Optional)</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select a time...</option>
            {timePreferences.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="location"
          className="block text-lg font-medium text-primary-800 mb-2"
        >
          Location <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.location ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Home address, facility name, or hospital"
        />
        {errors.location && (
          <p className="mt-1 text-red-600">{errors.location}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-lg font-medium text-primary-800 mb-2"
        >
          Additional Details <span className="text-text-muted">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
          placeholder="Any special accommodations, mobility considerations, or questions..."
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Request Appointment
          </>
        )}
      </Button>

      <p className="text-center text-text-muted">
        We'll respond within 24 hours. For urgent requests, please call{' '}
        <a
          href="tel:+19723797050"
          className="text-primary-700 font-semibold hover:underline"
        >
          (972) 379-7050
        </a>
      </p>
    </form>
  )
}
