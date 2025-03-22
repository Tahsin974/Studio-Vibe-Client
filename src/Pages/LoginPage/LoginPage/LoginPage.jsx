import logo from "../../../assets/Logo/Studio_Vibe_Logo2.png";

import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <div className="hero bg-[#0d0d0d] min-h-screen   text-white p-4">
        <div className="lg:flex lg:h-full space-y-5">
          <div className="text-center lg:p-36 md:p-36 sm:p-28 p-16 items-center rounded-2xl bg-black   ">
            <img src={logo} alt="" className="w-full" />
          </div>
          <div className="card bg-transparent   ">
            <div className="card-body space-y-2.5">
              <div className="max-w-md text-center mx-auto space-y-4 ">
                <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-semibold">
                  Welcome to <span className="font-bold">Studio Vibe</span>{" "}
                  backstage
                </h1>
                <p className=" text-lg">Distribute Your Music Worldwide</p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
