const Pagetitle = ({ BGimg, subHeading, children }) => {
  return (
    <div
      className="hero h-[80vh]  w-full bg-center bg-cover object-cover rounded-b-[45%]"
      style={{
        backgroundImage: `url(${BGimg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="  ">
          <h1 className="mb-5 lg:mt-32 md:mt-28 mt-20 lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-bold ">
            {children}
          </h1>
          <p className="text-xl font-semibold">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Pagetitle;
