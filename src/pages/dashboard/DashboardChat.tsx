import Camera from "../../assets/svg/Camera";
import ImgIcon from "../../assets/svg/Img";
import PeparClip from "../../assets/svg/PerperClip";

const DahbordChat = ({ chatopen, setchatopen }: any) => {
  return (
    <div className="">
      {chatopen && (
        <div className="h-[475px] w-[331px] bg-white rounded-xl shadow-sm relative space-y-5">
          <div className="bg-[#F26922] py-5 px-3.5 w-full rounded-tl-xl rounded-tr-xl font-bold text-white">
            Chat with Cypher
          </div>
          <div className="py-1 px-2 bg-black w-[223px] text-white absolute right-2 rounded-xl">
           <h2> Lorem ipsum dolar sit general sac mascho werho</h2>
          </div>

          <div className="py-1 px-2 mt-16 bg-white w-[223px] text-black shadow-sm absolute left-2 rounded-xl">
           <h2> Lorem ipsum dolar sit general sac mascho werho</h2>
          </div>

          <div className="py-1 px-2 mt-36 bg-white w-[223px] text-black shadow-sm absolute left-2 rounded-xl">
           <h2>Lorem ipsum dolar sit general sac mascho werho</h2>
          </div>

          <div className="py-1 px-2 mt-54 bg-black w-[223px] text-white absolute right-2 rounded-xl">
           <h2> Lorem ipsum dolar sit general sac mascho werho</h2>
          </div>
          <div className="mt-72 absolute px-4 w-full ">
            <input type="text" className="w-full border-1 border-gray-400 outline-none py-1.5 rounded-xl px-2" name="" id="" placeholder="Enter your question..." />
          </div>
          <div className="mt-90 flex justify-between px-4">
            <div className="flex gap-3">
              <Camera className="cursor-pointer" type="file"></Camera>
              <ImgIcon className="cursor-pointer"/>
              <PeparClip className="cursor-pointer"/>
            </div>
            <div className="bg-amber-400 px-4 py-1 rounded-2xl font-bold text-white cursor-pointer">
              send
            </div>
          </div>
        </div>)}
    </div>
  );
};

export default DahbordChat;
