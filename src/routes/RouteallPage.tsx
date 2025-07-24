import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Navbar from "../layouts/Navbar";
import Incidents from "../pages/incidents/Incidents";
import Locations from "../pages/Locations/Locations";
import Dashboard from "../pages/dashboard/Dashboard";

const RouteallPage = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/incidents" element={<Incidents/>}></Route>
            <Route path="/locations" element={<Locations/>}></Route>
         

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteallPage