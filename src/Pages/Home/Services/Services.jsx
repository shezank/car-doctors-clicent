// import { useEffect } from "react";
// import { useState } from "react";
import useServices from "../../../Hooks/useServices";
import Service from "./Service";


const Services = () => {
    const services = useServices();

    // const [services, setServices] = useState();

    // useEffect(()=>{
    //     fetch('http://localhost:4000/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[])
    return (
        <div className="my-20">
            <div className="text-center max-w-2xl mx-auto space-y-7">
                <p className="text-[#FF3811] font-bold">Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
               services?.map( service => <Service key={service._id} service={service}></Service>)
               }
            </div>
        </div>
    );
};

export default Services;