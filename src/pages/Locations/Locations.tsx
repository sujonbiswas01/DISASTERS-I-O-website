import TreeIcon from "../../assets/svg/TreeIcon"
import { Button } from "../../components/button/Button"
import { CardContainer } from "../../components/container/CardContainer"

function Locations() {
  return (
    <CardContainer className="py-6  px-7 md:px-20">
      <div className="flex justify-between items-center">
       
        <div className="space-y-2">
          <p className="text-secondary font-normal text-sm">Incidents - DR-4699 March 2023 Severe Storms </p>
          <h2 className="text-black font-bold text-[26px] flex gap-2 items-center ">  <TreeIcon/><span>DR-4699 March 2023 Severe Storms</span> </h2>
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
  )
}

export default Locations
