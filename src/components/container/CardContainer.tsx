import type { ReactNode } from "react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"
type cardContainer={
    children:ReactNode,
    className:string|null
}
export const CardContainer = ({children,className}:cardContainer) => {
  return <section className={twMerge(clsx('max-w-[1440px] bg-[#E4E4E7] mx-auto py-3 overflow-x-hidden',className))}>
    {children}
    </section>
  
}
