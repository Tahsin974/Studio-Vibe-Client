import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
  // const { data: services = [] } = useQuery({
  //   queryKey: ["services"],
  //   queryFn: async () => {
  //     const res = await axios.get("");
  //     return res.data;
  //   },
  // });
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("service.json").then((res) => setServices(res.data));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 py-6 ">
      {services.map((service, index) => (
        <div key={index} className={`${index % 2 === 0 ? "mt-0" : "mt-12"}`}>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};

export default Services;
