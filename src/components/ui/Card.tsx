import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-white rounded-xl p-6 shadow-md border border-gray-100'
  const hoverStyles = hover
    ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1'
    : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

interface CardIconProps {
  children: ReactNode
  className?: string
}

export function CardIcon({ children, className = '' }: CardIconProps) {
  return (
    <div
      className={`w-14 h-14 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center mb-4 ${className}`}
    >
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3
      className={`text-xl font-semibold text-primary-800 mb-2 ${className}`}
    >
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({
  children,
  className = '',
}: CardDescriptionProps) {
  return <p className={`text-text-secondary leading-relaxed ${className}`}>{children}</p>
}
