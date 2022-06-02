import { ReactNode } from 'react'

interface ILead {
  children: ReactNode
}
export const Lead = ({ children }: ILead) => {
  return (
    <p className="mt-6 text-lg text-lead md:text-xl lg:text-2xl">{children}</p>
  )
}
