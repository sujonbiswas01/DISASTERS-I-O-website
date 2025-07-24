import clsx from "clsx"
import { twMerge } from "tailwind-merge"
import {type CardProps } from "../button/Button"
export const NewIncidentCard = ({children,className}:CardProps) => {
  return (
    <div className={twMerge(clsx('w-[180px] h-[69px] px-[20px] bg-[#E4E4E7] py-[22px] border-[1.5px] border-secondary/40 rounded-[6px]',className))}>
      {children}
        
    </div>
  )
}
  //  <NewIncidentCard>
  //     <div className="flex gap-[10px]">
  //           <img src="/newincident.png" alt="" />
  //           <h2 className='text-secondary font-onest font-normal text-sm'>Avalanche</h2>
  //       </div>
  //   </NewIncidentCard>