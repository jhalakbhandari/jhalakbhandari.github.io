import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Layout>
      <div className=" flex bg-gray-bg1 justify-items-center">
        <div className="w-full max-w-md m-auto bg-white rounded-lg">
          <h1 className="text-2xl font-medium text-black my-4 mb-12 text-center">
            Log in to your account 🔐
          </h1>

          <form className="text-center" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={emailChangeHandler}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
                value={password}
                onChange={passwordChangeHandler}
                required
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className={`bg-green py-2 px-4 text-sm text-Black rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
