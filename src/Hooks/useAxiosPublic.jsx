import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({});
  return axiosPublic;
};

export default useAxiosPublic;
