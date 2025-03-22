import axios from "axios";
import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Features = () => {
  // const { data: features = [] } = useQuery({
  //   queryKey: ["features"],
  //   queryFn: async () => {
  //     const res = await axios.get("");
  //     return res.data;
  //   },
  // });
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    axios.get("features.json").then((res) => setFeatures(res.data));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 py-6 ">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"} ${
            index % 3 === 1 ? "md:mt-20" : "md:mt-0"
          } ${index % 2 === 0 ? "sm:mt-0" : "sm:mt-12"}`}
        >
          <FeatureCard feature={feature} />
        </div>
      ))}
    </div>
  );
};

export default Features;
