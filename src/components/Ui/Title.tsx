import clsx from 'clsx'
import { ReactNode } from 'react'

interface ITitle {
  size?: 'md' | 'sm'
  children: ReactNode
}

const styles = {
  sm: 'text-4xl md:text-5xl lg:text-6xl lg:leading-none xl:text-7xl',
  md: 'text-5xl md:text-6xl md:leading-none lg:text-7xl xl:text-8xl',
}

export const Title = ({ size = 'md', children }: ITitle) => {
  return (
    <div
      className={clsx(
        'font-semibold leading-tight text-primary lg:font-medium',
        styles[size]
      )}
    >
      {children}
    </div>
  )
}
