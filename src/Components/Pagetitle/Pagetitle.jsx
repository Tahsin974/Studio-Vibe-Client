const Pagetitle = ({ BGimg, subHeading, children }) => {
  return (
    <div>
      <div
        className=" hero lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-[70vh]  w-full bg-center bg-cover object-cover rounded-b-[50%] "
        style={{
          backgroundImage: `url(${BGimg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div>
            <h1 className="mb-5 lg:mt-32 md:mt-28 mt-20 lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-bold ">
              {children}
            </h1>
            <p className="lg:text-xl md:text-xl sm:text-lg text-base font-semibold">
              {subHeading}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagetitle;
