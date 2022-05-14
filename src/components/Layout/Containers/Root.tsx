import { ReactNode } from 'react'
import { Header } from '../'

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  )
}

export default Root
