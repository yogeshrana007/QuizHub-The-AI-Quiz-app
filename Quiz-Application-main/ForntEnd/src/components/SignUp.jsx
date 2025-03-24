import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:2797/user/SignUp", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup Successfully");
          navigate(from, { replace: ture });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error:" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center border-[2px] shadow-md p-5 rounded-md bg-black text-white ">
        <div className=" ">
          <div className=" h-[450px] w-[400px] bg-white text-black rounded-md p-5">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute text:black text-white right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-center text-2xl">Sign Up</h3>
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="name"
                  placeholder="Enter your full Name"
                  className="w-80 px-3 py-1 border text-green-500 rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    <br />
                    This field is required
                  </span>
                )}
              </div>

              {/* email */}
              <div className="mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border text-green-500 rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    <br />
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2 ">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border text-green-500 rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    <br />
                    This field is required
                  </span>
                )}
              </div>
              {/* Botton */}
              <div className="flex justify-around mt-4">
                <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                  Sign Up
                </button>
                <p>
                  Have account?{" "}
                  <Link
                    to="/Login"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </Link>
                  {/* <Login /> */}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
