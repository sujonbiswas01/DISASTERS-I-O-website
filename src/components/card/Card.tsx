
import { twMerge } from "tailwind-merge"
import {type CardProps  } from "../button/Button"
import clsx from "clsx"
export const Card1 = ({children,className}:CardProps) => {
  return <section className={twMerge(clsx('w-[306px] h-[337px]',className))}>
    {children}

  </section>
  
}

