import type { ReactNode } from "react"
import clsx from "clsx"
import { twMerge } from 'tailwind-merge'

export type CardProps = {
    children:ReactNode,
    className?:string,
    
}
export const Button = ({children,className}:CardProps)=> {
  return <button className={twMerge(clsx('bg-[#F26922] text-white px-[25px] py-[14px] font-bold font-onest rounded-[8px]',className))}>
        {children}

    </button>
  
}
