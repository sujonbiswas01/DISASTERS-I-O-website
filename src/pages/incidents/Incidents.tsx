import { Button } from "../../components/button/Button";
import { CardContainer } from "../../components/container/CardContainer";
import { Card } from "../../components/incidentcard/Card";
import { NewIncidentCard } from "../../components/New-incident/NewIncidentCard";
import IncidentTitle from "../../shared/modules/IncidentTitle";
const newIncidentCardData = [
  {
    name:"Avalanche"
  },
  {
    name:"Biological"
  },
  {
    name:"Blizzard"
  },
  {
    name:"Cold/Freezing"
  },
  {
    name:"Drought"
  },
  {
    name:"Earthquake"
  },
  {
    name:"Flooding"
  },
  {
    name:"Heat Wave"
  },
  {
    name:"Hail"
  },
  {
    name:"Lightning"
  },
  {
    name:"Man Made"
  },
  {
    name:"Mudslide"
  },
  {
    name:"Severe Storm"
  },
  {
    name:"Strong Wind"
  },
  {
    name:"Tornado"
  },
  {
    name:"Tsunami"
  },
  {
    name:"Volcanic Eruption"
  },
  {
    name:"Wildfire"
  },
]
const Incidents = () => {
  return (
    <>
    <CardContainer className="px-10 py-12 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center">
      <div className="flex gap-8">
        <button className="bg-white flex items-center justify-center w-8 h-8 rounded-full shadow-sm">x</button>
        <div>
          <h3>Home - Incidents - New Incident</h3>
            <h2 className="text-2xl text-[#030712] font-bold text-[26px]">New Incident</h2>
        </div>
      </div>

      <div className="line">
        <div></div>

      </div>
      <div className="flex gap-7">
        <Button className="bg-white shadow-sm px-10 text-black">Back</Button>
        <Button >Next step</Button>
      </div>
    </CardContainer>
    {/* new incidents */}
    <div className="pt-16">
      <h2 className="text-center font-bold text-2xl ">Which of these best describes the incident?</h2>

      <div className="grid grid-cols-2 px-11 sm:px-0 sm:grid-cols-3 md:grid-cols-4 max-w-[753px] mx-auto space-y-3 py-10 ">
       {newIncidentCardData.map((items:any,i:any)=>(
        <NewIncidentCard key={i}>
          {items.name}
        </NewIncidentCard>
       ))}
      </div>
    </div>
      <div className="w-full mx-auto py-14 md:py-[85px]  ">
        <h1 className="text-center font-bold text-[#09090B] text-[32px]">
          Let’s get started
        </h1>
        <p className="text-center text-secondary max-w-[468px] mx-auto py-4">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
          general sac mascho werhoLorem ipsum dolar sit gene
        </p>

        <div className="w-[609px] my-4 mx-auto hidden md:flex justify-between items-center border-2 border-[#E4E4E7] relative">
          <div>
            <div className="w-6 h-6 bg-[#E4E4E7] rounded-full absolute -mt-2.5"></div>
          </div>
          <div>
            <div className="w-6 h-6 bg-[#E4E4E7] rounded-full absolute -mt-2.5"></div>
          </div>
          <div>
            <div className="w-6 h-6 bg-[#E4E4E7] rounded-full absolute -mt-2.5"></div>
          </div>
        </div>

        <div className="md:w-[815px] mx-auto flex flex-col md:flex-row justify-between my-10 items-center space-y-4 md:space-y-0  md:border-none border-l-2 ">
          <Card className="">
            <img src="/type.png" alt="" />
            <div>
              <h3 className="font-bold text-[20px]">What type of incident?</h3>
              <p className="leading-[22px] text-secondary">
                Choose the category that best describes the incident.
              </p>
            </div>
          </Card>
          <Card className="">
            <img src="/about.png" alt="" />
            <div>
              <h3 className="font-bold text-[20px]">
                Tell us about the incident?
              </h3>
              <p className="leading-[22px] text-secondary">
                Let’s connect the dots and see where to start.
              </p>
            </div>
          </Card>
          <Card className="">
            <img src="/location.png" alt="" />
            <div>
              <h3 className="font-bold text-[20px]">
                Where did the incident occur?
              </h3>
              <p className="leading-[22px] text-secondary">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
          </Card>
        </div>
        <div className="py-20 flex justify-center">
          <Button className="bg-[#F26922] cursor-pointer">Get started</Button>
        </div>
        <div className="mt-10 w-[752px] mx-auto">
             <IncidentTitle/>
        </div>
      </div>
    </>
  );
};

export default Incidents;
