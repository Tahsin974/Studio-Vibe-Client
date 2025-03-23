import { useQuery } from "@tanstack/react-query";
import Pagetitle from "../../../Components/Pagetitle/Pagetitle";
import Title from "../../../Components/Title/Title";
import bgimg from "../../../assets/PageTitle/artist-directory.jpg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ArtistCard from "./ArtistCard";

const ArtistDirectory = () => {
  // const { data: artists = [] } = useQuery({
  //   queryKey: ["artists"],
  //   queryFn: async () => {
  //     const res = await axios.get("");
  //     return res.data;
  //   },
  // });
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    axios.get("artists.json").then((res) => setArtists(res.data));
  }, []);
  console.log(artists);
  return (
    <div className="min-h-screen ">
      <Title>Artist Directory</Title>
      <Pagetitle BGimg={bgimg}>Artist Directory </Pagetitle>
      <div className=" bg-[#000000] text-white  min-h-screen mb-32 pb-28 pt-10 max-w-[1200px] mx-auto">
        <div className=" text-center">
          <div className="mx-auto max-w-4xl ">
            <p className="py-6 lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
              Explore talented artists and their latest works. Discover
              profiles, listen to tracks, and connect with inspiring music.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-5 gap-y-24 p-2 justify-items-center my-4">
            {artists.map((artist, index) => (
              <ArtistCard artist={artist} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDirectory;
