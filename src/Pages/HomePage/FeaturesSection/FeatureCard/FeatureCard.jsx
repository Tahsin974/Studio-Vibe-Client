const FeatureCard = ({ feature }) => {
  const { title, description, icon } = feature;
  return (
    <div>
      <div className="card bg-[#000000] shadow-2xl shadow-blue-800 hover:shadow-pink-800 h-64">
        <div>
          <h1 className="text-5xl">{icon}</h1>
        </div>
        <div className="card-body items-center justify-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
