import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { Header } from '../'

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Header />

      <main>{children}</main>
    </ThemeProvider>
  )
}
