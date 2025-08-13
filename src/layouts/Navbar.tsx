import { NavLink, Outlet } from "react-router";
import { CardContainer } from "../components/container/CardContainer";
import Logo from "/logo.png";
import { navItem } from "../Resources/Index";
import MenuIcon from "../assets/svg/MenuIcon";
import { useState } from "react";
import CloseIcon from "../assets/svg/CloseBtn";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <CardContainer className="pt-[30px] mx-auto pb-[15px] border-b-2 border-secondary/40">
        <nav className="max-w-[1269px] mx-auto flex justify-between gap-10 md:gap-[150px] ">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className=" hidden md:flex  gap-[35px] flex-nowrap text-[14px] font-onest">
            {navItem.map((item: any, i: any) => (
              <NavLink
                to={`${item.item == "Dashboard" ? "/" : item.item}`}
                className={`${
                  item.item == "Dashboard" ? "text-black " : "text-secondary"
                }`}
                key={i}
              >
                {item.item}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex gap-[2px]">
            <img src="/bal.png" alt="" />
            <img src="/navpeaple.png" alt="" />
            <div>
              <h2 className="text-[#A1A1AA] text-[16px] font-semibold font-onest">
                Usman Zafar
              </h2>
              <h3 className="text-[#A1A1AA] text-[14px] font-semibold font-onest">
                usmanzafar@gmail.com
              </h3>
            </div>
          </div>

          <button
            onClick={() => setisOpen(!isOpen)}
            className="flex md:hidden mr-5"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
        <div className="overflow-hidden">
          {isOpen ? (
            <ResponsiveMenu isOpen={isOpen} setisOpen={setisOpen} />
          ) : (
            ""
          )}
        </div>
        
      </CardContainer>
      <Outlet/>
    </div>
  );
};

export default Navbar;
