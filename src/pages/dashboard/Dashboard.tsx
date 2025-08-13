import { useState } from "react";
import { Button } from "../../components/button/Button";
import { Card1 } from "../../components/card/Card";
import { CardContainer } from "../../components/container/CardContainer";
import { Card, Skeleton } from "@heroui/react";
import DahbordChat from "./DashboardChat";
export const dashboardData = [
  {
    img: "/card-1.svg",
    headding: "Whitechapel Rd.",
    para: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "/card-2.svg",
    headding: "Whitechapel Rd.",
    para: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "/card-3.svg",
    headding: "Whitechapel Rd.",
    para: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "/card-4.svg",
    headding: "Whitechapel Rd.",
    para: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "/card-5.svg",
    headding: "Whitechapel Rd.",
    para: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "/card-6.png",
    headding: "Whitechapel Rd.",
    para: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
];

const Dashboard = () => {
  const [chatopen, setchatopen] = useState(false);

  const toggleChat = () => {
    setchatopen(!chatopen);
  };
  return (
    <div className="">
      <CardContainer className="mx-auto pt-8 pb-[23px]">
        <div className="max-w-[1268px] mx-auto flex flex-col md:flex-row justify-between">
          <div>
            <h3>Welcome back</h3>
            <h2 className="font-bold text-[26px]">Dashboard</h2>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row gap-3.5">
            <Button className="bg-[#f2f2f3] px-[10px] py-[12px] w-[190px]  border-[1.5px] border-secondary/40 text-secondary font-onest flex  justify-center items-center gap-[5px] shadow-sm">
              {" "}
              <img
                src="/search.png"
                className="w-[18px] h-[18px]"
                alt=""
              />{" "}
              Search incident
            </Button>
            <Button className="bg-[#f2f2f3] px-[10px] py-[12px]  border-[1.5px] border-secondary/40 text-secondary font-onest flex justify-center items-center gap-[5px] shadow-sm">
              Sort By: Date modified
            </Button>
            <Button className="">Cypher AI</Button>
          </div>
        </div>
      </CardContainer>

      <CardContainer className="max-w-[1300px] mx-auto bg-white overflow-y-hidden relative">
        <Card className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-[20px] md:pt-[40px] space-x-[25px] space-y-[35px] py-5">
            {dashboardData.map((items: any,i:any) => (
              <Card1 key={i}>
                <Skeleton isLoaded={true} disableAnimation={true}>
                  <img src={items.img} className="px-2" alt="" />
                  <div className="pt-[20px] space-y-[6px] py-2 px-5">
                    <h2 className="text-black font-bold font-onest text-[16px]">
                      {items.headding}
                    </h2>
                    <p className="text-secondary text-sm font-onest ">
                      {items.para}
                    </p>
                    <h2 className="text-black font-bold font-onest text-[16px]">
                      {items.price}
                    </h2>
                  </div>
                </Skeleton>
              </Card1>
            ))}
          </div>
        </Card>

        <div className="flex justify-center items-center relative">
          <button onClick={toggleChat} className="absolute font-bold bg-amber-400 w-[40px] h-[40px] rounded-full right-4 bottom-4 cursor-pointer">
           {chatopen?"C":"O"}
          </button>

        </div>
        <div className="absolute bottom-24 right-4">
           {chatopen?<DahbordChat chatopen={chatopen} />:""}
        </div>
        
      </CardContainer>
    </div>
  );
};

export default Dashboard;
