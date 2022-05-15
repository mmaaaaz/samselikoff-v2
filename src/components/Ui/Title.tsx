import { ReactNode } from 'react'

interface ITitle {
  size?: 'md' | 'sm'
  children: ReactNode
}

const styles = {
  sm: 'text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl lg:leading-none lg:font-medium xl:text-7xl',
  md: 'text-5xl font-semibold leading-tight text-primary md:text-6xl md:leading-none lg:text-7xl lg:font-medium xl:text-8xl',
}

const Title = ({ size = 'md', children }: ITitle) => {
  return <div className={styles[size]}>{children}</div>
}

export default Title
