import { NavLink, Outlet } from "react-router";
import { CardContainer } from "../components/container/CardContainer";
import Logo from '/logo.png';
import {navItem} from '../Resources/Index.js';

const Navbar = ({item}:navItem) => {
  return (
    <CardContainer className='pt-[30px] mx-auto pb-[15px] border-b-2 border-secondary/40'>
      <nav className="max-w-[1269px] mx-auto flex gap-[150px] ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-[35px] flex-nowrap text-[14px] font-onest">
          {navItem.map((item:any,i:any)=>(
            <NavLink to={`${item.item=="Dashboard"?'/':item.item}`}  className={`${item.item=="Dashboard"?'text-black ':"text-secondary"}`} key={i}>{item.item}</NavLink>
          ))}
        </div>

        <div className="flex gap-[2px]">
          <img src="/bal.png" alt="" />
          <img src="/navpeaple.png" alt="" />
          <div >
            <h2 className="text-[#A1A1AA] text-[16px] font-semibold font-onest">Usman Zafar</h2>
            <h3 className="text-[#A1A1AA] text-[14px] font-semibold font-onest">usmanzafar@gmail.com</h3>
          </div>

        </div>
     
      </nav>
   <Outlet />
    </CardContainer>

  )
}

export default Navbar