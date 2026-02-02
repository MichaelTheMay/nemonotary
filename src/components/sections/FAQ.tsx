import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What documents can you notarize?',
    answer: 'We can notarize a wide variety of documents including wills, trusts, powers of attorney, healthcare directives, real estate documents, affidavits, loan documents, and more. If you\'re unsure whether your document requires notarization, give us a call and we\'ll be happy to help.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing varies based on the type of document and your location. We offer competitive rates and are always upfront about costs before your appointment. Contact us for a free quote tailored to your specific needs.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling us at (972) 379-7050, emailing office@52nemos.com, or filling out the contact form on our website. We\'ll work with you to find a time and location that\'s convenient for you.',
  },
  {
    question: 'What do I need to bring to my appointment?',
    answer: 'Please bring a valid, government-issued photo ID (such as a driver\'s license, passport, or state ID) and the documents you need notarized. Make sure the documents are unsigned - you\'ll sign them in front of the notary.',
  },
  {
    question: 'Do you travel to hospitals and care facilities?',
    answer: 'Yes! We specialize in mobile notary services and regularly visit hospitals, assisted living facilities, nursing homes, rehabilitation centers, and private homes. We understand the unique needs of seniors and those with mobility challenges.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer: 'We understand that circumstances change. Please give us as much notice as possible if you need to cancel or reschedule. We\'ll do our best to accommodate your needs and find a new time that works for you.',
  },
  {
    question: 'Are you available on weekends or evenings?',
    answer: 'Yes! We offer flexible scheduling including Saturdays from 8:00 AM to 5:00 PM. After hours appointments are also available by request for urgent needs.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the North DFW area including Dallas, Garland, Murphy, Plano, Richardson, and Wylie. Additional travel fees may apply for locations outside our core service area. Contact us to confirm coverage for your location.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-primary-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-text-secondary leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Have questions about our mobile notary services? Find answers to common questions below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-10 text-center">
          <p className="text-text-secondary text-lg">
            Still have questions?{' '}
            <a
              href="tel:+19723797050"
              className="text-primary-700 font-semibold hover:underline"
            >
              Call us at (972) 379-7050
            </a>{' '}
            or{' '}
            <a
              href="mailto:office@52nemos.com"
              className="text-primary-700 font-semibold hover:underline"
            >
              email us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
