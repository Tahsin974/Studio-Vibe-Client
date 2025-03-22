import BGimg from "../../../assets/info.jpg";
const ArtistCard = ({ artist }) => {
  const { name, profession, nationality, image } = artist;
  return (
    <div className="relative items-center flex justify-center">
      <div className="card bg-transparent shadow-sm">
        <figure>
          <img
            src={image}
            className="rounded-xl lg:max-w-[330px] md:max-w-[330px] sm:max-w-[300px] max-w-[290px]"
          />
        </figure>
      </div>
      <div
        className=" absolute bottom-0 lg:w-[250px] md:w-[250px] sm:w-[250px] w-[240px] bg-cover   rounded-lg    items-start text-left -mb-14 mx-auto  "
        style={{
          backgroundImage: `url(${BGimg})`,
        }}
      >
        <div className="w-[100%] bg-black/40 px-10 py-1 space-y-1.5 rounded-lg">
          <h2 className="card-title text-xl">{name}</h2>
          <p className="text-xs">
            <span className="font-semibold">Nationality :</span> {nationality}
          </p>
          <p className="font-semibold  text-sm">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
