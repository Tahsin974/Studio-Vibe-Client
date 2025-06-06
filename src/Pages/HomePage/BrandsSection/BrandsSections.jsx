import Marquee from "react-fast-marquee";
import img1 from "../../../assets/Brands/TikTok.png";
import img2 from "../../../assets/Brands/gaana.png";
import img3 from "../../../assets/Brands/Vevo.png";
import img4 from "../../../assets/Brands/youTube.png";
import img5 from "../../../assets/Brands/amazon-music.png";
import img6 from "../../../assets/Brands/Hungama.png";
const BrandsSection = () => {
  return (
    <div className="bg-[#000000] py-24 ">
      <Marquee pauseOnHover={true} className="max-w-7xl text-amber-50 mx-auto ">
        <div className="flex  gap-[30px]">
          <figure className="bg-white p-4 items-center flex justify-center">
            <img width={"150px"} src={img1} alt="" />
          </figure>
          <figure className="bg-white p-4 items-center flex justify-center">
            <img width={"150px"} src={img2} alt="" />
          </figure>
          <figure className="bg-white p-4 items-center flex justify-center">
            <img width={"150px"} src={img3} alt="" />
          </figure>
          <figure className="bg-white p-4 items-center flex justify-center">
            <img width={"150px"} src={img4} alt="" />
          </figure>
          <figure className="bg-white p-4 items-center flex justify-center">
            <img width={"150px"} src={img5} alt="" />
          </figure>
          <figure className="bg-white p-4 items-center flex justify-center mr-[30px] ">
            <img width={"150px"} src={img6} alt="" />
          </figure>
        </div>
      </Marquee>
    </div>
  );
};

export default BrandsSection;
