import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface IA {
  children?: ReactNode
  font?: 'medium' | string
  underline?: boolean
  className?: string
  href: string
}

const A = ({
  children,
  font = 'medium',
  underline = true,
  className = '',
  href,
  ...props
}: IA) => {
  return (
    <Link
      href={href}
      className={clsx(
        'text-blue-500',
        underline ? 'border-b border-blue-300 hover:border-blue-400' : '',
        `font-${font}`
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default A
