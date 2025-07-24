import { Button } from "../../components/button/Button"
import { CardContainer } from "../../components/container/CardContainer"
import Incidents from "../incidents/Incidents"
import Locations from "../Locations/Locations"


const Dashboard = () => {
  return (
    <div>
      <CardContainer className="mx-auto pt-8 pb-[23px]" >
        <div className="max-w-[1268px] mx-auto flex justify-between">
          <div>
            <h3>Welcome back</h3>
          <h2 className="font-bold text-[26px]">Dashboard</h2>
          </div>
          <div className="flex gap-3.5">
            <Button className="bg-[#f2f2f3] px-[10px] py-[12px] w-[190px] border-[1.5px] border-secondary/40 text-secondary font-onest flex justify-center items-center gap-[5px] shadow-sm"> <img src="/search.png" className="w-[18px] h-[18px]" alt=""  /> Search incident</Button>
            <Button className="bg-[#f2f2f3] px-[10px] py-[12px]  border-[1.5px] border-secondary/40 text-secondary font-onest flex justify-center items-center gap-[5px] shadow-sm">Sort By: Date modified</Button>
            <Button className="">Cypher AI</Button>
          </div>
          


        </div>
       
    </CardContainer>
        <Incidents/>
        <Locations/>
    </div>
    
  )
}

export default Dashboard