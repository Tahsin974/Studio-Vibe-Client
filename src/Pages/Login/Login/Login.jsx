import { FcGoogle } from "react-icons/fc";
import logo from "../../../assets/Logo/Studio_Vibe_Logo2.png";
import useAuthContext from "../../../Context/useAuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { GoogleSignIn, setUser } = useAuthContext();
  const navigate = useNavigate();
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    GoogleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
      navigate("/");
    });
  };

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
              <form className="fieldset  space-y-5">
                <div className="space-y-2">
                  <label className="fieldset-label text-gray-400">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="fieldset-label text-gray-400">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input  w-full"
                    placeholder="Enter Password"
                  />
                </div>

                <button className="btn btn-neutral mt-4">Login</button>
                <div className="divider before:bg-white after:bg-white ">
                  OR
                </div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <FcGoogle size={15} />
                  Login with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
