import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:2797/user/Login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error:" + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center border-[2px] shadow-md p-5 rounded-md bg-black text-white ">
        <div className=" ">
          <div className=" h-[350px] w-[400px] bg-white text-black rounded-md p-5">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute text:black text-white right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-center text-3xl">Login</h3>

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
              <div className="flex justify-around mt-5">
                <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                  Login
                </button>
                <p>
                  Not Registered?{" "}
                  <Link
                    to="/SignUp"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
