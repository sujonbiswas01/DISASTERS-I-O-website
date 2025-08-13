import { twMerge } from "tailwind-merge"
import clsx from "clsx"
import React from "react"
type typeProps={
    className:string,
    children:React.ReactNode;
}
const LocationCard = ({className,children}:typeProps) => {
  return (
    <div className={twMerge(clsx('bg-[#F4F4F5] px-4 py-2 rounded-2xl',className))}>
        {children}
    </div>
  )
}

export default LocationCard