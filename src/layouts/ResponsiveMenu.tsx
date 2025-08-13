import { NavLink } from "react-router";
import CloseIcon from "../assets/svg/CloseBtn";
import { navItem } from "../Resources/Index";
const ResponsiveMenu = ({ setisOpen, isOpen }: any) => {
  return (
    <div className="">
      {isOpen && (
        <div className="bg-black overflow-hidden z-50 w-full px-6 py-10 h-full fixed top-0">
          <button
            className="text-white text-3xl"
            onClick={() => setisOpen(!isOpen)}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col h-[40vh]  justify-center items-center space-y-2">
              {navItem.map((item: any, i: any) => (
                <NavLink
                  onClick={()=>setisOpen(!isOpen)}
                  to={`${item.item == "Dashboard" ? "/" : item.item}`}
                  className={`${
                    item.item == "Dashboard" ? "text-green-700 " : "text-white/80"
                  }`}
                  key={i}
                >
                  {item.item}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
