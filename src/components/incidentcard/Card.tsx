import clsx from "clsx"
import { twMerge } from "tailwind-merge"
interface CardProps{
  children:React.ReactNode;
  className:string
}
export const Card = ({children,className}:CardProps) => {
  return (<div className={twMerge(clsx('px-[20px] py-[25px] space-y-[60px] bg-[#E4E4E7] rounded-[8px] w-[235px] h-[269px] border-[1.5px] border-secondary/30',className))}>
    {children}
    </div>)
  
}

