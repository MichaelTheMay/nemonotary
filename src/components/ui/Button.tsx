import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'md' | 'lg'
  children: ReactNode
  href?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-primary-800 text-white hover:bg-primary-700 active:bg-primary-900',
    secondary:
      'bg-accent-500 text-primary-900 hover:bg-accent-400 active:bg-accent-600',
    outline:
      'border-2 border-primary-800 text-primary-800 hover:bg-primary-50 active:bg-primary-100',
  }

  const sizes = {
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
