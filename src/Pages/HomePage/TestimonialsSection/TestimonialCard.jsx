const TestimonialCard = ({ testimonial }) => {
  const { author, profession, image, feedback, location } = testimonial;
  return (
    <div className="card card-md max-w-96 h-[590px]  bg-[#000000] mr-9 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{author}</h2>
        <h6 className="text-green-400 font-semibold">{profession}</h6>
        <p className="text-xs">{location}</p>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
