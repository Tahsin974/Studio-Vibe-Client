import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

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
    axios.get("services.json").then((res) => setServices(res.data));
  }, []);
  return (
    <div className=" bg-transparent text-white min-h-screen py-10 mt-10 mb-28">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 py-6 justify-items-center p-5">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${index % 3 !== 1 ? "lg:mt-20" : "lg:mt-0"} ${
              index % 2 === 0 ? "md:mt-0" : "md:mt-12"
            } ${index % 2 === 0 ? "sm:mt-0" : "sm:mt-12"}`}
          >
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
