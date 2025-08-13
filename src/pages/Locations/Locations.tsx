import LocationCard from "../../components/LocationCard/LocationCard";
import Location from "../../assets/svg/LocationImg";
import TreeIcon from "../../assets/svg/TreeIcon";
import { Button } from "../../components/button/Button";
import { CardContainer } from "../../components/container/CardContainer";
const LocationCardData = [
  {
    headding: "Whitechapel Rd.",
    des: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
    img: "/locationCard1.png",
  },
  {
    headding: "Whitechapel Rd.",
    des: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
    img: "/LocationCard2.png",
  },
  {
    headding: "Whitechapel Rd.",
    des: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
    img: "/locationCard1.png",
  },
  {
    headding: "Whitechapel Rd.",
    des: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
    img: "/locationCard1.png",
  },
];

const activityData = [
  {
    img: "/locationCard1.png",
    heading:"Activity name",
    des: "Location name . 16.12212, -122.1424",
    price: "$1,456,654.00",
  },
  {
    img: "/locationCard1.png",
    heading:"Activity name",
    des: "Location name . 16.12212, -122.1424",
    price: "$1,456,654.00",
  },
];

const documentData =[
  {
    img: "/locationCard1.png",
    heading:"Document name",
    des: "Location name . 16.12212, -122.1424",
    price: "$1,456,654.00",
  },
  {
    img: "/locationCard1.png",
    heading:"Document name",
    des: "Location name . 16.12212, -122.1424",
    price: "$1,456,654.00",
  },
]
function Locations() {
  return (
    <>
      <CardContainer className="py-6  px-7 md:px-20">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-secondary font-normal text-sm">
              Incidents - DR-4699 March 2023 Severe Storms{" "}
            </p>
            <h2 className="text-black font-bold text-[26px] flex gap-2 items-center ">
              {" "}
              <TreeIcon />
              <span>DR-4699 March 2023 Severe Storms</span>{" "}
            </h2>
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
            <Button className="">+ New Location</Button>
          </div>
        </div>
      </CardContainer>
      <div className="flex  flex-col md:flex-row  gap-[30px] md:gap-[94px] py-16 px-4 md:px-20">
        {/* left side */}
        <div className="md:w-[680px] w-full mx-auto">
          <div className="flex gap-5 items-center">
            <img src="/location1.png" alt="" />
            <div>
              <p className="text-secondary font-semibold text-sm">Location</p>
              <h3 className="text-black font-bold text-xl">
                Tulare County, Los Angles, CA 23415
              </h3>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-4 pb-4">
            <img src="/currency.png" alt="" />
            <div>
              <p className="text-secondary font-semibold text-sm">
                Approx. Cost:
              </p>
              <h3 className="text-black font-bold text-xl">$60,607,456.00</h3>
            </div>
          </div>

          <div className="border-1 border-secondary/40 mt-4 w-full"></div>

          <div className="py-14">
            <p className="text-black font-medium">Description</p>
            <p className="text-gray-600 leading-[22px] mt-3">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>

          <div className="border-1 border-secondary/40 mt-4 w-full"></div>

          <div className="py-12">
            <p className="text-gray-700 font-medium">Locations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {LocationCardData.map((items: any, i: any) => (
              <div key={i} className="flex flex-col justify-center ">
                <img src={items.img} alt="" />
                <div className="py-4 space-y-3">
                  <h3 className="text-[#09090B] font-bold text-sm">
                    {items.headding}
                  </h3>
                  <p className="text-secondary text-xs">{items.des}</p>
                  <p className="text-sm text-[#09090B]">{items.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="py-4 mt-14 flex justify-between px-4">
              <h2 className="text-black text-base">Activities</h2>
              <p className="text-black text-base">See all</p>
            </div>
            <div className="space-y-5">
              {activityData.map((item: any, i: any) => (
                <LocationCard key={i} className="py-4 space-y-4">
                  <div className="flex gap-4">
                    <img src={item.img} className="w-[78px] h-[78px] rounded-[10px]" alt="" />
                    <div>
                      <h2 className="text-black font-bold">{item.heading}</h2>
                      <p className="text-secondary font-medium">{item.des}</p>
                      <h2 className="text-black font-bold">{item.price}</h2>
                    </div>
                  </div>
                </LocationCard>
              ))}
            </div>
          </div>

          <div className="py-2">
            <div className="py-4 mt-14 flex justify-between px-4">
              <h2 className="text-black text-base">Activities</h2>
              <p className="text-black text-base">See all</p>
            </div>
            <div className="space-y-5">
              {documentData.map((item: any, i: any) => (
                <LocationCard key={i} className="py-4 space-y-4">
                  <div className="flex gap-4">
                    <img src={item.img} className="w-[78px] h-[78px] rounded-[10px]" alt="" />
                    <div>
                      <h2 className="text-black font-bold">{item.heading}</h2>
                      <p className="text-secondary font-medium">{item.des}</p>
                      <h2 className="text-black font-bold">{item.price}</h2>
                    </div>
                  </div>
                </LocationCard>
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full relative md:w-[526px] flex flex-col justify-center md:justify-start items-center md:items-start ">
          <Location className="px-20 md:px-0" />
        </div>
      </div>
    </>
  );
}

export default Locations;
