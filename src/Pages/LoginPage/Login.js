import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { gsap } from "gsap";
function Login() {
  let tl = new gsap.timeline();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("something went wrong");
    }
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
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
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
