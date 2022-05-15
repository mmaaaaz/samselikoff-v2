import { ReactNode } from 'react'
import { Header } from '../'
import { ThemeProvider } from 'next-themes'

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Header />

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Root
