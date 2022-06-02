import { ReactNode } from 'react'

interface IContainer {
  size: 'small' | 'some' | 'measure' | 'large'
  children: ReactNode
}

const styles = {
  small: 'max-w-sm mx-auto px-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl', // Home
  some: 'max-w-xl px-6 mx-auto lg:max-w-3xl lg:px-0', // Podcast, Blog index
  measure: 'max-w-measure mx-auto', // Blog post
  large: 'max-w-2xl px-6 mx-auto md:max-w-xl', // Projects
}

export const Container = ({ size, children }: IContainer) => {
  return <div className={styles[size]}>{children}</div>
}
