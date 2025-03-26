import { useNavigate } from "react-router";
import useAuthContext from "../../../Context/useAuthContext";
import { FcGoogle } from "react-icons/fc";
import "./LoginForm.css";

const LoginForm = () => {
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
    <form className="fieldset  space-y-5">
      <div className="space-y-2">
        <label className="fieldset-label text-gray-400">Email</label>
        <input
          type="email"
          className="input login-input  w-full"
          placeholder="Enter Email"
        />
      </div>

      <div className="space-y-2">
        <label className="fieldset-label text-gray-400">Password</label>
        <input
          type="password"
          className="input login-input   w-full"
          placeholder="Enter Password"
        />
      </div>

      <button className="btn btn-neutral mt-4 shadow-xs shadow-white">
        Login
      </button>
      <div className="divider before:bg-white after:bg-white ">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-white text-black border-[#e5e5e5]"
      >
        <FcGoogle size={15} />
        Login with Google
      </button>
    </form>
  );
};

export default LoginForm;
