import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      {/* main-div */}
      <div className="flex justify-center h-screen items-center background-color2 ">
        {/* signup-div */}
        <div className="flex ">
          {/* leftBox-div */}
          <div className="h-[430px] w-[345px] rounded-l-2xl leftBox-bgColor shadow-2xl">
            <div className="flex flex-col justify-center h-full w-[300px] pl-4">
              <h1 className="text-white text-3xl pb-4 leading-8 font-semibold">
                Welcome to Task Manager{" "}
              </h1>

              <h4 className="text-white text-sm">
                Organize your tasks and stay on top of your productivity.
              </h4>
            </div>
          </div>
          {/* right-box */}
          <div className="h-[430px] w-[345px] rounded-r-2xl righttBox-bgColor shadow-2xl px-6 font-semibold text-2xl  py-5">
            <h2 className="font-semibold mb-4 text-color">Sign Up</h2>
            {/* inputs */}
            <div>
              {/* usernsme-input */}
              <h3 className="text-sm text-color pb-2">Username</h3>
              <div>
                <input
                  className="shadow-md  rounded-2xl w-full  px-3 py-2 outline-none placeholder-text-lg text-sm mb-5"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              {/* email-input */}
              <h3 className="text-sm text-color pb-2">Email</h3>
              <div>
                <input
                  className="shadow-md  rounded-2xl w-full  px-3 py-2 outline-none placeholder-text-lg text-sm mb-5"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              {/* password-input */}
              <h3 className="text-sm text-color pb-2">Password</h3>
              <div>
                <input
                  className="shadow-md  rounded-2xl w-full  px-3 py-2 outline-none  text-sm"
                  type="password"
                />
              </div>
              {/* checkbox */}
              <div>
                <input type="checkbox" />
                <span className="text-sm pl-2 text-color">
                  Remember Password
                </span>
              </div>
              {/* signup-button */}
              <Link to='/welcomepage'>
              <button className="w-full text-sm font-bold leftBox-bgColor btn-color rounded-2xl px-3 py-2 mt-3 hover:bg-slate-500 duration-700">
                Sign Up
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="pb-6">
        Already have an account{" "}
        <Link to="/SignIn" className="underline text-color">
          Login
        </Link>
      </p>
    </div>
  );
}
