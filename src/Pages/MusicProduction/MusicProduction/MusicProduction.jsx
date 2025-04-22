import bgImg from "../../../assets/PageTitle/pageTitle.jpg";
import audio from "../../../assets/Audio.mp3";
import Title from "../../../Components/Title/Title";
import Pagetitle from "../../../Components/Pagetitle/Pagetitle";

const MusicProduction = () => {
  const playList = {
    name: "One More Light",
    writer: "linkin park",
    img: "../../../assets/Artists/Giulia_Esposito.jpg",
    src: audio,
    id: 1,
  };
  return (
    <div>
      <div>
        <Title>Music Production</Title>
        <Pagetitle BGimg={bgImg}>Music Production</Pagetitle>
      </div>

      <div className="hero bg-blue-400 text-white min-h-screen py-10 mt-10 mb-28 max-w-[1200px] mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="card bg-base-100 text-black w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-center items-center">
                <h2 className="card-title">{playList.name}</h2>
                <p>{playList.writer}</p>
                <audio src={audio} controls></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicProduction;
